import axios from "axios";

// Automatically switch URL based on environment
// Vite uses 'import.meta.env.MODE' to detect if you are in "development" or "production"
const BASE_URL = import.meta.env.MODE === "development"
  ? "http://localhost:5000"                // Uses this when you run 'npm run dev'
  : "https://rifah-backend.onrender.com/"; // Uses this when deployed on Vercel

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true // Important: keeps cookies working for both Local and Production
});

export default API;