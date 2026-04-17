# 🚀 Job Portal Backend

A scalable backend system for a Job Portal application built using Node.js, Express, and MongoDB.

## 🔥 Features

* User Authentication (JWT-based)
* Job Posting & Management
* Role-based Access (Admin / User)
* Secure APIs
* Error Handling Middleware

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

## 📂 Project Structure

```
src/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── middleware/
 └── utils/
```

## ⚙️ Setup Instructions

1. Clone the repo
2. Create `.env` file from `.env.example`
3. Add your credentials
4. Run:

```
npm install
npm start
```

## 🌐 API Endpoints

* POST /api/auth/register
* POST /api/auth/login
* GET /api/jobs
* POST /api/jobs

## 📌 Future Improvements

* Payment Integration
* Real-time notifications
* Resume upload system
