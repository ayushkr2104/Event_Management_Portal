# Event Management System

A full-stack web application for managing events, built with **Spring Boot** (backend) and **React** (frontend). Users can register, log in, create events, and view their events. The backend uses JWT for authentication and PostgreSQL for data storage, while the frontend features a responsive UI styled with Styled Components.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Database Setup](#database-setup)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- User registration and login with plain text password authentication (for demo purposes).
- JWT-based stateless authentication.
- Create, view, and manage events associated with authenticated users.
- Responsive frontend UI with Styled Components.
- PostgreSQL database for persistent storage.
- CORS support for frontend-backend communication.

## Tech Stack
- **Backend**:
  - Spring Boot 3.1.5
  - Spring Security with JWT (jsonwebtoken 0.9.1)
  - Spring Data JPA
  - PostgreSQL
  - Maven
- **Frontend**:
  - React 18
  - Axios for API calls
  - Styled Components for styling
  - React Router for navigation
  - npm
- **Database**: PostgreSQL
- **Language**: Java 17 (backend), JavaScript (frontend)

## Prerequisites
- Java 17
- Maven 3.8+
- Node.js 16+ and npm 8+
- PostgreSQL 13+
- Git
- IDE (e.g., IntelliJ IDEA, VS Code)

## Installation

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/event-management-system.git
   cd event-management-system
