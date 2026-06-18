# ResumeForge AI

AI-powered ATS Resume Builder that helps users create professional, ATS-optimized resumes in minutes.

## Features

- AI Resume Generation
- ATS Score Analysis
- Resume Management Dashboard
- User Authentication (JWT)
- Multiple Resume Templates
- PDF Export
- Responsive UI
- Secure API Integration

## Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend
- Node.js
- Express.js
- JWT Authentication
- OpenAI API

### Database
- Prisma ORM
- PostgreSQL

## Screenshots

### Landing Page
![Landing Page](./screenshots/landing.png)

### Dashboard
![Dashboard](./screenshots/dashboard.png)

## Installation

### Clone Repository

```bash
git clone <repo-url>
```

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm run dev
```

## Environment Variables

Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Backend (.env)

```env
DATABASE_URL=
JWT_SECRET=
OPENAI_API_KEY=
```

## Project Structure

```
client/
server/
```

## Future Improvements

- Resume Templates Marketplace
- Cover Letter Generator
- AI Interview Preparation
- Resume Versioning
- LinkedIn Profile Import

## Author

Anant Raj 

B.Tech CSE | Full Stack Developer