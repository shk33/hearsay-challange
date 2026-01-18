# 1. Walk me through how you'd add error handling if this went to production

I will split this answer into two parts, one for the backend and one for the frontend:

### Backend
I would add a middleware that will wrap the API route handlers,
this middleware will catch any unhandled exception, and return an standardized error response.

Also Input validation is important, a library like zod can be used  to validate
request body and query params, and prevent invalid data from reaching the endpoints. Also it is important to add specific HTTP status codes, like 
400 for bad requests, 
401 for unauthorized, 
404 for not found, 500 for internal server errors.

### Frontend

Adding user friendly error notifications instead of crashing
the app when an error occurs, if the backend returns a specific error code and message, I will
display the error message to the user, and if the error is not specific, I will display a generic error message.

Also something to make the app more resilient is to add react error boundaries to
prevent an error in a single component from crashing the entire app, you wrap
critical components with error boundaries, and if an error occurs during rendering, 
the error boundary will display a fallback UI.

I also added a `Robustness` Section in answer of Question 2 that highly relates to this question. Take a look [here](#Robustness)

# 2. Handling Actual File Uploads

The approach that I will use is using a storage solution, like AWS S3 or GCloud Storage, 
 
I would add these modifications:

### Backend

1. Adding to `File` Model to a `url`and a `status` columns.
2. We will split the API in two parts: `/api/upload/start` and `/api/upload/completed`. The start upload file API (`/api/upload/start`) will receive the file's metadata, it will also make a request to the Storage Service (eg AWS S3) to get a pre-signed URL, this URL grants temporary permission to a client to upload a file directly to a storage bucket.

This endpoint creates a `File` record (Prisma Model) in the database, with file metadata, also will store `status = PENDING`, I don't store the pre-signed url in the database. The S3 Object Key (or equivalent) can be uniquely generated following a pattern like `uploads/{userId}/{file-id}-{filename}`

3. The pre-signed url and fileId (the database record id) are returned to the client (React App).

### Frontend

1. The `FileUploader` component will make a request to the `/api/upload/start`, to get the a pre-signed URL and fileId
2. The React Component will make a request (likely a `PUT`request) to the pre-signed URL, in the body of the request it will send the contents of the uploaded file. 
3. When the file upload finishes (by getting `200. OK` from the Storage Service), the client will make a POST request to `/api/upload/completed`, in the body we will pass the fileId.
4. `/api/upload/completed` finds the file by ID, changes the status to `UPLOADED`, and also constructs and save the permanent url to the database (eg. `https://{my-bucket}.s3.amazonaws.com/uploads/{userId}/{fileId}-{fileName}`)


#### Robustness
What I mentioned so far has been mainly for happy path, but we can also add the following to add robustness to the app with these:

* Add retry-mechanism in the File Uploader Component: A network disconnection could happen during the upload, the component can automatically retries uploading the file every X seconds.
* Create a PUT `/api/upload/failed` API: To notify the backend an upload could not be completed, eg. A 403 Forbidden error from the Storage Service. This endpoint will find the file record by ID and marked as `status = FAILED`.
* Stale file records (in the database) can occur when the client never notifies a status change on a file record for a while. A cron job can find records that have been in `status=PENDING` and `createdAt` is older than a given time. We could either marked them as `FAILED` and then have another job that deletes those records or have the same job delete stale and failed records. (Deletion can be either hard or soft)

# 3. Potential Features with More Time

### For File Management

* Retry Mechanism for Uploading Files (as mentioned before)
* Real time upload progress, using a library like axios, we could track upload progress with its callback `onUploadProgress`.
* File Upload with Drag n Drop capabilities.
* Give the user ability to delete/archive file records.

### For User Dashboard

* Pagination on the list of files.
* Preview uploaded files
* Download uploaded files
* Filter and Sorting on the list.

### Technical

* Unit tests for both backend logic and react components. A library like `Jest`can achieve this.
* Integration tests that can verify interaction between parts of our application.
* E2E tests to verify whole workflows, like User Loggin In, Uploading a File and being able to see it in dashboard; Tools like Cypress or Playwright can achieve this.
* CI/CD Pipelines 
