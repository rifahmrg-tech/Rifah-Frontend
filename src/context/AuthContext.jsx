import { createContext, useContext, useState, useEffect } from 'react';
import API from '../axios'; // Ensure this path matches your file structure

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // 1. State Variables
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);
  
  // (Optional) Keep these if your app uses them, otherwise you can remove them
  const [notificationCount, setNotificationCount] = useState(0);
  const [refreshNotifications, setRefreshNotifications] = useState(false);

  // 2. Fetch User (Check Session)
  const fetchUser = async () => {
    try {
      const res = await API.get('/auth/check', { withCredentials: true }); 
      setUser(res.data); 
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // 3. Login Function (THIS WAS MISSING CAUSING THE ERROR)
  const login = (userData) => {
    setUser(userData); 
  };

  // 4. Fixed Logout Function (Safe from 500 Errors)
  const logout = async () => {
    try {
      // Attempt to tell backend to logout
      await API.post('/auth/logout', {}, { withCredentials: true });
    } catch (err) {
      console.error("Logout API failed, but clearing local session anyway.", err);
    } finally {
      // THIS WILL RUN NO MATTER WHAT
      setUser(null);
      localStorage.removeItem('token'); 
      localStorage.removeItem('user');
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);