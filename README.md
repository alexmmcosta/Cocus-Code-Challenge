# Cocus-Code-Challenge
 
This project uses Playwright to automate end-to-end testing for the Jacamo website.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/) (version 14 or later).
- You have installed [npm](https://www.npmjs.com/) (usually comes with Node.js).

## Getting Started

Follow these steps to set up and run the project:

### 1. Clone the Repository

git clone https://github.com/alexmmcosta/Cocus-Code-Challenge.git

### 2. Install Dependencies

npm install

### 3. Install Playwright Browsers

npx playwright install

### 4. Run Tests

npx playwright test

### 5. View Test Report

npx playwright show-report

## Selected Features & Justifications

### 1. Authentication ✅
Why?

Essential for user engagement and personalization.
A high-priority feature for any e-commerce site.
Covers positive and negative test cases (valid, invalid inputs).
Test Scenarios:

Login with valid credentials.
Login with incorrect credentials (expect error message).

### 2. Log Out ✅
Why?

Ensures account security.
Verifies proper session handling.
Test Scenarios:

Log out successfully.

