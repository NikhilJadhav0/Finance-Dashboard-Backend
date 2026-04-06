# Finance Dashboard Backend

## 📌 Project Overview

Finance Dashboard Backend is a Node.js-based backend system designed to manage financial records with role-based access control and dashboard analytics. This project provides APIs for managing users, financial records, and generating financial summaries.

---

## 🚀 Features

* User Management
* Role-Based Access Control
* Financial Records CRUD Operations
* Dashboard Analytics
* Validation & Error Handling
* MongoDB Database Integration

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* cors

---

## 📁 Project Structure

```
finance-dashboard
│
├── controllers
├── models
├── routes
├── middleware
├── config
├── server.js
├── .env
└── package.json
```

---

## 🔐 User Roles

### Admin

* Full Access
* Create, Update, Delete Records
* Manage Users

### Analyst

* View Records
* View Dashboard

### Viewer

* View Only

---

## 📌 API Endpoints

### User APIs

| Method | Endpoint       | Description |
| ------ | -------------- | ----------- |
| POST   | /api/users     | Create User |
| GET    | /api/users     | Get Users   |
| PUT    | /api/users/:id | Update User |
| DELETE | /api/users/:id | Delete User |

---

### Record APIs

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| POST   | /api/records     | Create Record |
| GET    | /api/records     | Get Records   |
| PUT    | /api/records/:id | Update Record |
| DELETE | /api/records/:id | Delete Record |

---

### Dashboard APIs

| Method | Endpoint                | Description      |
| ------ | ----------------------- | ---------------- |
| GET    | /api/dashboard/summary  | Summary          |
| GET    | /api/dashboard/category | Category Summary |
| GET    | /api/dashboard/monthly  | Monthly Summary  |

---

## ⚙️ Installation

### Clone Repository

```
git clone https://github.com/NikhilJadhav0/Finance-Dashboard-Backend.git
```

### Install Dependencies

```
npm install
```

### Create .env File

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### Run Server

```
npm run dev
```

---

## 🧪 Testing

Use Postman to test APIs

Example:

POST /api/users

```
{
  "name": "John",
  "email": "john@gmail.com",
  "password": "123456",
  "role": "admin"
}
```

---

## 📊 Dashboard Features

* Total Income
* Total Expense
* Net Balance
* Category Summary
* Monthly Summary

---

## 📌 Future Improvements

* JWT Authentication
* Pagination
* Search
* Swagger Documentation
* Soft Delete

---

## 👨‍💻 Author

Nikhil Vivekanand Jadhav

---

## ⭐ Project Status

Completed and Ready for Submission
