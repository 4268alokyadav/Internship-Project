# Utkarsh Annual Scholarship Program

Full-stack Scholarship Management Portal for Asian Development Educational & Research Foundation (ADERF).

## Stack

- Frontend: React, Vite, React Router, Axios, React Hook Form, Tailwind CSS
- Backend: Node.js, Express.js, JWT authentication, role based access control
- Database: PostgreSQL with Prisma ORM
- Uploads: Local disk storage under `server/uploads`, structured for S3 migration
- Email: Nodemailer OTP verification

## Features

- Public scholarship website with About, Eligibility, How to Apply, Results, FAQ, and Contact sections
- Student registration, login, forgot password, and email OTP verification
- Student dashboard with application status, documents, PDFs, test/result access, notifications
- Scholarship application draft/save/submit flow
- Required document uploads: passport photo, school ID, marksheet, Aadhaar
- Admin dashboard with applicant statistics
- Application search/filter/review, approve/reject/shortlist/selected statuses
- Document verification and invalid document flagging
- Scholarship test creation, assignment, and result management APIs
- Result publishing by academic session with maximum 11 selected students
- Certificate records and PDF document generation
- FAQ, contact, and settings management
- Docker setup for app and PostgreSQL

## Local Setup

1. Install dependencies:

```powershell
npm install
```

2. Create environment file:

```powershell
Copy-Item .env.example .env
```

3. Start PostgreSQL locally or with Docker:

```powershell
docker compose up -d postgres
```

4. Run Prisma migration and seed:

```powershell
npm run prisma:migrate
npm run prisma:seed
```

5. Start frontend and backend:

```powershell
npm run dev:full
```

Frontend: `http://127.0.0.1:5173`

API: `http://127.0.0.1:5000/api`

## Demo Accounts

Seed password for all demo users: `Password@123`

- Super Admin: `superadmin@aderf.co.in`
- Admin: `admin@aderf.co.in`
- Student: `student@example.com`

When SMTP is not configured, OTP codes are printed in the backend console.

## Business Rules

- Only Class X students can apply.
- Email verification is required before application submission.
- One application is allowed per student account.
- Submitted applications cannot be edited.
- Registration numbers are generated automatically.
- Scholarship session year is stored on the application.
- Scholarship amount is Rs. 5,000.
- Maximum selected students per session: 11.
- Results are published by academic session.

## API Documentation

See [docs/API.md](docs/API.md).

## Docker

Build and run the full production-style environment with PostgreSQL, Prisma migrations, seed data, backend API, uploaded-file volume, and the built frontend served by Express:

```powershell
docker compose up --build
```

Open:

- App: `http://127.0.0.1:5000`
- API health: `http://127.0.0.1:5000/api/health`

The app container automatically runs:

```powershell
npx prisma migrate deploy
npm run prisma:seed
node server/index.js
```

Stop containers:

```powershell
docker compose down
```

Reset database and uploads completely:

```powershell
docker compose down -v
docker compose up --build
```

For real email OTP delivery, set `MAIL_USER` and `MAIL_PASS` in `docker-compose.yml` or an external Docker environment file. Without SMTP credentials, OTP codes are printed in the app logs.
