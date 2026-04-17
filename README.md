# 🚀 Job Portal Backend

A scalable and production-ready backend for a Job Portal application built using **Node.js, Express, and MongoDB**. This project handles user authentication, job postings, and secure API management.

---

## 🔥 Features

* 🔐 JWT-based Authentication (Login/Register)
* 👤 User & Admin Role Management
* 💼 Job Posting & Management
* 📡 RESTful API Design
* ⚠️ Centralized Error Handling
* 🌱 Environment-based Configuration

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT (JSON Web Token)
* **Tools:** Postman, Nodemon

---

## 📂 Project Structure

```
src/
 ├── controllers/     # Business logic
 ├── models/          # Mongoose schemas
 ├── routes/          # API routes
 ├── middleware/      # Auth & error handling
 ├── config/          # DB & environment setup
 └── utils/           # Helper functions
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/juhidwivedi19/Job_Portal.git
cd Job_Portal
```

### 2. Install dependencies

```
npm install
```

### 3. Setup environment variables

Create a `.env` file from `.env.example`

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

### 4. Run the server

```
npm run dev
```

---

## 🌐 API Endpoints

### 🔑 Auth Routes

* `POST /api/v1/auth/register` → Register user
* `POST /api/v1/auth/login` → Login user

### 💼 Job Routes

* `GET /api/v1/jobs` → Get all jobs
* `POST /api/v1/jobs` → Create job (Admin)
* `GET /api/v1/jobs/:id` → Get single job

---

## 📊 Sample Request

### Login API

```
POST /api/v1/auth/login
```

**Request Body:**

```json
{
  "email": "user@gmail.com",
  "password": "123456"
}
```

**Response:**

```json
{
  "success": true,
  "token": "your_jwt_token"
}
```

---

## 🔐 Environment Variables

Make sure to create `.env` file and never push it to GitHub.
Use `.env.example` as a reference.

---

## 🚀 Future Improvements

* 📄 Resume Upload Feature
* 🔔 Real-time Notifications
* 💬 Chat between recruiter & user
* 💳 Payment Integration
* 🔍 Advanced Job Search Filters

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a PR.

---

## 📌 Author

**Juhi Dwivedi**
GitHub: https://github.com/juhidwivedi19

---

## ⭐ Show your support

If you like this project, give it a ⭐ on GitHub!
