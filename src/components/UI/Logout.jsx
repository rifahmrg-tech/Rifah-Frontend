import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import styles from './Logout.module.scss'
import { useAuth } from '../../context/AuthContext';

function Logout() {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const [loading, setLoading] = useState(false);
 
    const handleLogout = async () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (!confirmLogout) return;

        setLoading(true);
        
        // We don't need a try/catch here anymore because AuthContext handles the error safely
        await logout(); 
        
        setLoading(false);
        navigate("/login"); 
    };

    return (
        <button 
            onClick={handleLogout} 
            disabled={loading}
            className={styles.addButton}
        >
            {loading ? "Logging out..." : "Logout"}
        </button>
    );
}

export default Logout;