# BackEnd-project
## 📋 Project Overview

This is a backend service built using **Node.js**, **Express.js**, and **MySQL**. It allows users to:

- Submit form data via a `POST /api/form` endpoint
- Retrieve all submitted entries via a `GET /api/form` endpoint

Form data includes:
- `fullName` (string)
- `email` (string, must be valid)
- `message` (text area)

CORS is enabled so the backend can be accessed from any frontend.

---

## 📂 Folder Structure
Backend/
├── config/
│ └── db.js # Sequelize DB connection
├── controllers/
│ └── formController.js # Handles logic for form endpoints
├── models/
│ ├── formEntry.js # Sequelize model for form data
│ └── index.js # Initializes and syncs models
├── routes/
│ └── formRoutes.js # API route definitions
├── .env # Environment variables (not committed)
├── .gitignore
├── package.json
├── package-lock.json
├── server.js # Express app entry point
└── README.md


---

## 🛠 Tools Used

- Node.js
- Express.js
- Sequelize (ORM)
- MySQL (local)
- dotenv
- cors
- nodemon (for development)

---

## 📦 How to Run the Project Locally

## Install Dependencies
- npm install
- create .env file
  DB_HOST=localhost
  DB_USER=root
  DB_PASSWORD=your_mysql_password
  DB_NAME=formdb
  DB_PORT=3306
  PORT=5000
- Create the MySQL Database
- run the server
   npm run dev
- API Endpoints
  POST /api/form
  GET /api/form





