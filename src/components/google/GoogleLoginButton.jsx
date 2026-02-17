import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../../context/AuthContext'; // Import your existing context
import API from '../../axios'; // Your axios instance
import { useNavigate } from 'react-router-dom';

const GoogleLoginButton = () => {
  const { login } = useAuth(); // Use the manual login function we fixed earlier
  const navigate = useNavigate();

  const handleSuccess = async (credentialResponse) => {
    try {
      // 1. Send the Google token to YOUR backend
      const res = await API.post('/auth/google', {
        token: credentialResponse.credential
      });

      // 2. Your backend should return your user data (just like normal login)
      login(res.data.user); // Update context
      navigate('/dashboard'); 
      
    } catch (err) {
      console.error("Google Login failed on backend:", err);
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
};

export default GoogleLoginButton;