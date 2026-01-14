# Hearsay Extraction Assistant

This project is a file uploader application built with the Next.js framework. It allows users to upload file metadata to a database and view the uploaded files on a dashboard.

## Technologies Used

*   **Framework:** Next.js (App Router)
*   **Styling:** Tailwind CSS
*   **Database:** PostgreSQL
*   **ORM:** Prisma
*   **Authentication:** NextAuth.js

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
DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<database>"
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

### 4. Basic Usage

*   **Login:** Use one of the seeded user accounts to log in (e.g., `admin@example.com` / `password123`).
*   **Upload Files:** Navigate through the extraction flow to upload file metadata.
*   **Dashboard:** View the list of uploaded files on the dashboard.
