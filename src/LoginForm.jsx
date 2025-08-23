import React, { useState } from "react";
import "./index.css";
import Select from "react-select";
import { useNavigate } from "react-router";
import API from './axios';
import { useAuth } from "./context/AuthContext";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const LoginForm = () => {
      const [formData, setFormData] = useState({ username: "", password: ""});
      const [error, setError] = useState("");
        const [showPassword, setShowPassword] = useState(false); //sp
    const navigate = useNavigate();
    const {login} = useAuth();
   
const handleLogin = async () => {
  //   if (!formData.role) {
  //   return setError("Please select a role");
  // }
    try {
      const res = await API.post("/auth/login", formData);
     
      if (res.data.success) {
      
        login(res.data.user); // set user context
        navigate('/'); // redirect
  }
   else {
      setError(res.data.message || "Login failed");
    }
    } catch (err) {
     setError(err.response?.data?.message || "Login failed");
    }
  };

   const customStyles = {
  control: (base) => ({
    ...base,
    borderRadius: "12px",
    padding: "2px 4px",
    borderColor: "#ccc",
    boxShadow: "none",
    fontWeight: "bold",
  }),
};
  return (
    <div className="app">
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input type="text" placeholder="username " value={formData.username}  onChange={(e) => setFormData({ ...formData, username: e.target.value })} required/>
        {/* <input type="password" placeholder="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} /> */}
        
     <div  style={{ position: 'relative', width: '100%' }}>
        <input  type={showPassword ? "text" : "password"} placeholder="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}  style={{
          width: '100%',
          paddingRight: '40px', // space for icon
          paddingLeft: '10px',
          height: '36px',
        }}/>
        <button  onClick={() => setShowPassword(prev => !prev)} style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          color: '#555',
        }}>
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
     </div>
     
    
        {/* <Select
            styles={customStyles}
            options={[{value:"Admin",label:"Admin"},{value:"Member",label:"Member"}]}
            placeholder={'Select Role'}
            onChange={(opt) => setFormData({ ...formData, role: opt.value })}
        /> */}
         {error && <p style={{color:'red'}}>{error}</p>}
        <button className="sign-in-button" 
        onClick={handleLogin}
        >LOGIN</button>
        <a target="_blank" href="https://script.google.com/macros/s/AKfycbxBMbADxZkKLG5GFw5wVwxYHakSVRQEQ8cqip497msn_79bZTYdk-Iy67FZhImOdzJ_/exec" className="signup-text">Sign Up</a> 
      </div>
    </div>
    </div>
  );
};

export default LoginForm;