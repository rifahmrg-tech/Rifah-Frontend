import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router";
import API from './axios'; 
import { useAuth } from "./context/AuthContext";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import GoogleLoginButton from './components/google/GoogleLoginButton'; // Ensure this path is correct

const LoginForm = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async () => {
        setError(""); 
        try {
            // 1. Send Login Request
            const res = await API.post("/auth/login", formData, {
                withCredentials: true 
            });

            // 2. Handle Success
            if (res.status === 200) {
                console.log("Login Success:", res.data);
                
                localStorage.setItem("username", res.data.user.username);
                
                // Update Context
                login(res.data.user);
                
                // Redirect
                navigate('/');
            }
        } catch (err) {
            console.error("Login Error:", err);
            setError(err.response?.data?.message || "Login failed. Please check your credentials.");
        }
    };

    return (
        <div className="app">
            <div className="login-container">
                <div className="login-box">
                    <h2>Login</h2>
                    
                    {/* Username Input */}
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={formData.username} 
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })} 
                        required
                    />

                    {/* Password Input with Toggle */}
                    <div style={{ position: 'relative', width: '100%', marginBottom: '15px' }}>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="Password" 
                            value={formData.password} 
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
                            style={{
                                width: '100%',
                                paddingRight: '40px', // space for icon
                                paddingLeft: '10px',
                                height: '40px',
                                borderRadius: '5px',
                                border: '1px solid #ccc'
                            }}
                        />
                        <button 
                            type="button"
                            onClick={() => setShowPassword(prev => !prev)} 
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: '#555',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                        </button>
                    </div>

                    {/* Error Message */}
                    {error && <p style={{ color: 'red', fontSize: '0.9rem', marginBottom: '10px' }}>{error}</p>}

                    {/* Actions */}
                    <button className="sign-in-button" onClick={handleLogin}>
                        LOGIN
                    </button>

                    {/* --- NEW GOOGLE BUTTON SECTION --- */}
                    <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <GoogleLoginButton />
                    </div>
                    {/* --------------------------------- */}
                    
                    <a 
                        target="_blank" 
                        rel="noreferrer"
                        href="https://script.google.com/macros/s/AKfycbxBMbADxZkKLG5GFw5wVwxYHakSVRQEQ8cqip497msn_79bZTYdk-Iy67FZhImOdzJ_/exec" 
                        className="signup-text"
                        style={{ display: 'block', marginTop: '15px', textAlign: 'center' }} 
                    >
                        Sign Up
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;