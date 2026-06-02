# AI Resume Builder + ATS Analyzer

An AI-powered Resume Builder that generates professional resumes, analyzes ATS compatibility, provides ATS improvement suggestions, supports multiple resume templates, and exports resumes as PDFs.

## Features

- User Authentication (JWT)
- Register & Login
- Protected Routes
- AI Resume Generation
- ATS Score Analysis
- AI ATS Suggestions
- Resume CRUD Operations
- PDF Download
- Multiple Resume Templates
  - Classic
  - Modern
  - ATS Friendly
- Loading States
- Responsive UI

## Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend
- Node.js
- Express.js
- Prisma ORM

### Database
- PostgreSQL

### AI
- OpenAI API

### Authentication
- JWT

## Installation

### Clone Repository

```bash
git clone <your-repository-url>
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

### Environment Variables

Create a `.env` file:

```env
DATABASE_URL=your_database_url
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET=your_secret_key
```

## Future Improvements

- Resume Sharing
- Cover Letter Generator
- Resume Version History
- Job Description Matching
- Advanced ATS Analytics

## Author

Anant Raj Srivastav