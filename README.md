# Hearsay Extraction Assistant

This project is a file uploader application built with the Next.js framework. It allows users to upload file metadata to a database and view the uploaded files on a dashboard.

Project URL: [https://hearsay-challange.vercel.app/](https://hearsay-challange.vercel.app/)
In Step 4 there is a list of users you can use to log in.

## Technologies Used

*   Framework: Next.js (App Router)
*   Styling: Tailwind CSS
*   Database: PostgreSQL
*   ORM: Prisma
*   Authentication: NextAuth.js

## Getting Started

### 1. Set Up Environment

First, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd hearsay-challange
npm install
```

Next, create a `.env` file in the root of the project and add the following environment variable:

```
DATABASE_URL="postgresql://<user>:<password>@<host:<port>/<database>"
NEXTAUTH_SECRET=YOUR_SECRET_KEY
```

### 2. Database Setup

Run the following commands to apply database migrations and seed the database with initial data:

```bash
npx prisma migrate dev
npx prisma db seed
```

### 3. Run the Application

To run the application in development mode, use the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 4. Users

To log into the application, use any of the following credentials:

*   **Admin User:** `admin@example.com` / `password123`
*   **Test User 1:** `test1@example.com` / `password1`
*   **Test User 2:** `test2@example.com` / `password2`

*   **Upload Files:** Navigate through the extraction flow to upload file metadata. (Note: The upload progress bar is a simulated UI for design demonstration purposes.)
*   **Dashboard:** View the list of uploaded files on the dashboard.
