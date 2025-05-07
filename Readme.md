## CTIS



# Clinical Trial Ingestion System

## Overview
The Clinical Trial Ingestion System provides a platform to manage clinical trial data. The system utilizes JSON Web Tokens (JWT) for authentication and features three main pages: **Login**, **Trials**, and **Participants**.

## Steps to Use the System

### 1. **Login Page**
- **Objective**: The user must authenticate to access the system.
- **Process**:
  - Enter your credentials (username and password).
  - Upon successful authentication, a **JWT token** is generated.
  - The token is used to authenticate subsequent requests to the system.

### 2. **Trials Page**
- **Objective**: View the list of clinical trials after login.
- **Process**:
  - Once logged in, you will be redirected to the **Trials Page**.
  - This page displays a table of clinical trials fetched from the backend.
  - The table contains columns such as **Trial ID**, **Name**, **Start Date**, **End Date**, and **Status**.
  - **Trial Selection**:
    - Click on any trial in the table to view details of the trial and its participants.

### 3. **Participant Page**
- **Objective**: View and manage participants for a specific trial.
- **Process**:
  - After clicking on a trial in the **Trials Page**, the system redirects you to the **Participant Page**.
  - This page displays a list of participants associated with the selected trial.
  - The table includes participant details such as **Participant ID**, **Name**, **Age**, **Gender**, and **Status**.
  - You can perform operations like adding, editing, or deleting participant data depending on the permissions available.

### 4. **JWT Token Authentication**
- **Objective**: Ensure secure communication between client and server.
- **Process**:
  - On login, a JWT token is issued and saved in local storage or cookies.
  - For every subsequent request to access the **Trials Page** or **Participant Page**, the token is sent in the `Authorization` header.
  - The backend validates the JWT to authenticate and authorize the user.

## Conclusion
This system provides secure access to clinical trial data and participant management through JWT authentication. The login page, trials table, and participant management are key components of the platform.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.


## Screen Shot

### Login page

<img width="1710" alt="Screenshot 2025-05-06 at 9 29 07 PM" src="https://github.com/user-attachments/assets/ec53667f-31ac-4710-a4df-31faeacb596a" />

### Trials page

<img width="1710" alt="Screenshot 2025-05-06 at 9 30 43 PM" src="https://github.com/user-attachments/assets/d697b0b9-f365-4e43-a583-a63c00ebf93d" />

### Participant page

<img width="1710" alt="Screenshot 2025-05-06 at 9 31 24 PM" src="https://github.com/user-attachments/assets/f8c97dfc-c96b-475f-8520-c40efb7c7ba5" />

