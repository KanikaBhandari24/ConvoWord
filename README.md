# The ConvoWord App

**The ConvoWord App** is a web application designed to seamlessly convert Word files (`.doc` or `.docx`) into PDF files. The application is built using the **MERN stack** for a robust and user-friendly experience.

---

## Features

- **Effortless Conversion**: Upload a Word document and get a PDF version instantly.
- **User-Friendly Interface**: A simple and intuitive frontend for easy navigation.
- **Scalable Backend**: Built using Express.js and Node.js for efficient processing.

---

## Tech Stack

### Frontend
- **React.js**: Dynamic and interactive user interfaces.

### Backend
- **Node.js**: JavaScript runtime for scalable applications.
- **Express.js**: Lightweight and flexible server framework.

---

## Installation and Setup

Follow these steps to run the project locally:

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone the Repository
```bash
git clone https://github.com/your-username/ConvoWord.git
cd ConvoWord
```

### Install Dependencies 
Backend
```bash
cd backend
npm install
```

Frontend
```bash
cd backend
npm install
```

### Start the Application

Backend
```bash
cd backend
npm start
```

Frontend
```bash
cd backend
npm start
```

## Usage

Follow these steps to use **The ConvoWord App**:

---

### Steps to Convert Word Files to PDFs

1. **Upload File**  
   - Open the application in your browser. By default, it runs on `http://localhost:3000` if hosted locally.
   - Use the **Upload** section on the homepage to select a Word file (`.doc` or `.docx`).

2. **Convert File**  
   - After uploading, click the **Convert** button to start the conversion process.
   - The backend processes your file and generates a PDF version.

3. **Download File**  
   - Once the conversion is complete, a **Download** link/button will appear.
   - Click on it to save your newly generated PDF file.

---

### Notes

- Ensure the uploaded file is in `.doc` or `.docx` format.
- Large files might take additional time to process, depending on your system and server configuration.

---

## API Reference

The backend provides the following API endpoint for file conversion:

| Method | Endpoint   | Description               |
|--------|------------|---------------------------|
| POST   | `/convert` | Accepts a Word file upload and returns a PDF file |

---

Enjoy using **The ConvoWord App** for all your Word-to-PDF conversion needs! 🎉
