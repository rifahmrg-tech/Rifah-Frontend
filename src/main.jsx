import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

// REPLACE THIS WITH YOUR ACTUAL CLIENT ID FROM GOOGLE CLOUD CONSOLE
const GOOGLE_CLIENT_ID = "937170185895-et09ene0ttlp0qnisuc5lr28rh8dh4k9.apps.googleusercontent.com";

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <AuthProvider>
       <App />
    </AuthProvider>
  </GoogleOAuthProvider>
)