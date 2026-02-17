// import React, { useEffect, useState } from 'react'
// import styles from './Header.module.scss'
// import { Menu, Bell, Search } from 'lucide-react';

// import Logout from '../UI/Logout';
// import { useAuth } from '../../context/AuthContext';
// import API from '../../axios';
// import { useNavigate } from 'react-router';

// function Header({title,onMenuClick}) {
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth", // smooth scrolling
//     });}
//     const {user,notificationCount,setNotificationCount,refreshNotifications} = useAuth();
   
//     const [notifications, setNotifications] = useState([]);
//     const [showDropdown, setShowDropdown]= useState(false);
//     const navigate = useNavigate();
//     const toggleDropdown = () => {
//   setShowDropdown(prev => !prev);
// };

   

//     useEffect(()=>{
//        if (user) fetchNotification();
//       //  fetchMember(user);
// }, [user, refreshNotifications]); // 👈 now also refetch when toggled


// // const fetchMember= async(user)=>{
// //   const res = await API.get('/member');


// // }

//     const fetchNotification = async()=>{
//       try{
//         let res;
//         if (user?.role === 'Admin') {
//           res = await API.get('/request/status-requests'); // pending only
//          } 
//          else if (user?.role === 'Member') {
//             res = await API.get('/request/status-requests/user'); // approved/rejected
//           }
  
//         const count = res.data.length;
//         setNotifications(res.data);
//         setNotificationCount(count);
//       }
//       catch (err) {
//         console.error("Notification fetch error:", err);
//       }
//     };


//   return (
//      <header className={styles.header}>
//       <div className={styles.left}>
//         <button className={styles.menuButton} onClick={onMenuClick}>
//           <Menu size={24} />
//         </button>
//         <button className={styles.title} onClick={scrollToTop}>{title}</button>
//       </div>
     

//      {/* <div>hello , {user.name}</div> */}

//      <div className={styles.greeting}>
//   {user?.name ? (
//     <span>Hello <strong>{user.name}</strong>, welcome to Rifah Marketplace!</span>
//   ) : (
//     <span>Welcome to Rifah Marketplace!</span>
//   )}
// </div>
    
      
//       <div className={styles.right}>
//         <div className={styles.notificationWrapper}>
//         <button className={styles.iconButton} onClick={toggleDropdown}>
//           <Bell size={20} />
//           {notificationCount > 0 && (
//               <span className={styles.notificationBadge}>{notificationCount}</span>
//             )}
//         </button>
//                   {showDropdown && (
//               <div className={styles.notificationDropdown}>
//                 {notifications.length > 0 ? (
//                   notifications.slice(0, 5).map((item, index) => (
//                     <div
//                       key={index}
//                       className={styles.notificationItem}
//                       onClick={() => {
//                         navigate('/status-requests');
//                         setShowDropdown(false);
//                       }}
//                     >
//                       {user.role === 'Admin' ? (
//                         <> <strong>{item.subTaskId?.title || 'Unnamed'}</strong> → <em>{item.requestedStatus}</em></>
//                       ) : (
//                         <>Your request for <strong>{item.subTaskId?.title || 'Unnamed'}</strong> was <em>{item.status}</em></>
//                       )}
//                     </div>
//                   ))
//                 ) : (
//                   <div className={styles.notificationItem}>No new notifications</div>
//                 )}
//                 <div className={styles.viewAll} onClick={() => {
//                   navigate('/status-requests');
//                   setShowDropdown(false);
//                 }}>
//                   View All →
//                 </div>
//               </div>
//             )}
//                   </div>
//         <Logout/>
//       </div>
//     </header>
//   )
// }

// export default Header

//------------------------10/02-------------------4.02--------------------------

// import React, { useEffect, useState } from 'react'
// import styles from './Header.module.scss'
// import { Menu, Bell } from 'lucide-react';
// import Logout from '../UI/Logout';
// import { useAuth } from '../../context/AuthContext';
// import API from '../../axios';
// import { useNavigate } from 'react-router';

// function Header({title, onMenuClick}) {
//   const { user, notificationCount, setNotificationCount, refreshNotifications } = useAuth();
//   const [notifications, setNotifications] = useState([]);
//   const [showDropdown, setShowDropdown]= useState(false);
//   const navigate = useNavigate();

//   const toggleDropdown = () => setShowDropdown(prev => !prev);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }

//   useEffect(()=>{
//      if (user) fetchNotification();
//   }, [user, refreshNotifications]);

//   const fetchNotification = async() => {
//     try {
//       let res;
//       // ✅ FIXED: Updated paths to match 'server.js' and added safety checks
//       if (user?.role === 'Admin') {
//         // Was '/request/status-requests' -> Now '/api/service-requests/status-requests'
//         res = await API.get('/api/service-requests/status-requests'); 
//       } else if (user?.role === 'Member') {
//         res = await API.get('/api/service-requests/status-requests/user');
//       }

//       // ✅ FIXED: Safety check to prevent "Cannot read properties of undefined"
//       if (res && res.data) {
//         setNotifications(res.data);
//         setNotificationCount(res.data.length);
//       }
//     } catch (err) {
//       // Optional chaining prevents crash on 404 or network error
//       console.error("Notification fetch error:", err.response?.data?.message || err.message);
//     }
//   };

//   return (
//     <header className={styles.header}>
//       <div className={styles.left}>
//         <button className={styles.menuButton} onClick={onMenuClick}>
//           <Menu size={24} />
//         </button>
//         <button className={styles.title} onClick={scrollToTop}>{title}</button>
//       </div>

//       <div className={styles.greeting}>
//         {user?.name ? (
//           <span>Hello <strong>{user.name}</strong>, welcome to Rifah Marketplace!</span>
//         ) : (
//           <span>Welcome to Rifah Marketplace!</span>
//         )}
//       </div>
      
//       <div className={styles.right}>
//         <div className={styles.notificationWrapper}>
//           <button className={styles.iconButton} onClick={toggleDropdown}>
//             <Bell size={20} />
//             {notificationCount > 0 && (
//               <span className={styles.notificationBadge}>{notificationCount}</span>
//             )}
//           </button>
          
//           {showDropdown && (
//             <div className={styles.notificationDropdown}>
//               {notifications.length > 0 ? (
//                 notifications.slice(0, 5).map((item, index) => (
//                   <div
//                     key={index}
//                     className={styles.notificationItem}
//                     onClick={() => {
//                       navigate('/status-requests');
//                       setShowDropdown(false);
//                     }}
//                   >
//                     {user.role === 'Admin' ? (
//                        <><strong>{item.subTaskId?.title || 'Unnamed'}</strong> → <em>{item.requestedStatus}</em></>
//                     ) : (
//                        <>Your request for <strong>{item.subTaskId?.title || 'Unnamed'}</strong> was <em>{item.status}</em></>
//                     )}
//                   </div>
//                 ))
//               ) : (
//                 <div className={styles.notificationItem}>No new notifications</div>
//               )}
//               <div className={styles.viewAll} onClick={() => {
//                 navigate('/status-requests');
//                 setShowDropdown(false);
//               }}>
//                 View All →
//               </div>
//             </div>
//           )}
//         </div>
//         <Logout/>
//       </div>
//     </header>
//   )
// }

// export default Header;

//------------------------10/02-------------------4.57--------------------------
import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { Menu, Bell, Globe } from 'lucide-react'; // Added Globe icon for language
import Logout from '../UI/Logout';
import { useAuth } from '../../context/AuthContext';
import API from '../../axios';
import { useNavigate } from 'react-router';

// 1. Simple Translation Dictionary
const translations = {
  en: {
    welcomeUser: "Hello",
    welcomeBack: "welcome to Rifah Marketplace!",
    welcomeGeneral: "Welcome to Rifah Marketplace!",
    notifications: "Notifications",
    noNotifications: "No new notifications",
    viewAll: "View All",
    statusPending: "Pending",
    statusApproved: "Approved",
    statusRejected: "Rejected",
    reqSent: "Your request for",
    was: "was",
    toggleLabel: "தமிழ்" // Label to show when current is English
  },
  ta: {
    welcomeUser: "வணக்கம்",
    welcomeBack: "ரிஃபா வர்த்தக தளத்திற்கு வரவேற்கிறோம்!",
    welcomeGeneral: "ரிஃபா வர்த்தக தளத்திற்கு வரவேற்கிறோம்!",
    notifications: "அறிவிப்புகள்",
    noNotifications: "புதிய அறிவிப்புகள் இல்லை",
    viewAll: "அனைத்தையும் காண்க",
    statusPending: "நிலுவையில்",
    statusApproved: "ஏற்கப்பட்டது",
    statusRejected: "நிராகரிக்கப்பட்டது",
    reqSent: "கோரிக்கை:",
    was: "நிலை:",
    toggleLabel: "English" // Label to show when current is Tamil
  }
};

function Header({ title, onMenuClick }) {
  const { user, notificationCount, setNotificationCount, refreshNotifications } = useAuth();
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  
  // 2. Language State (Default to English)
  const [lang, setLang] = useState('en'); 
  const t = translations[lang]; // Helper to get current text

  const navigate = useNavigate();

  const toggleDropdown = () => setShowDropdown(prev => !prev);

  // 3. Language Toggle Function
  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'ta' : 'en'));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (user) fetchNotification();
  }, [user, refreshNotifications]);

  const fetchNotification = async () => {
    try {
      let res;
      if (user?.role === 'Admin') {
        res = await API.get('/api/service-requests/status-requests');
      } else if (user?.role === 'Member') {
        res = await API.get('/api/service-requests/status-requests/user');
      }

      if (res && res.data) {
        setNotifications(res.data);
        setNotificationCount(res.data.length);
      }
    } catch (err) {
      console.error("Notification fetch error:", err.response?.data?.message || err.message);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button className={styles.menuButton} onClick={onMenuClick}>
          <Menu size={24} />
        </button>
        <button className={styles.title} onClick={scrollToTop}>{title}</button>
      </div>

      {/* 4. Translated Greeting */}
      <div className={styles.greeting}>
        {user?.name ? (
          <span>
            {t.welcomeUser} <strong>{user.name}</strong>, {t.welcomeBack}
          </span>
        ) : (
          <span>{t.welcomeGeneral}</span>
        )}
      </div>
      
      <div className={styles.right}>
        {/* 5. Language Toggle Button */}
        <button 
          onClick={toggleLanguage} 
          className={styles.iconButton} 
          style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '14px', fontWeight: 'bold' }}
        >
          <Globe size={18} />
          {t.toggleLabel}
        </button>

        <div className={styles.notificationWrapper}>
          <button className={styles.iconButton} onClick={toggleDropdown}>
            <Bell size={20} />
            {notificationCount > 0 && (
              <span className={styles.notificationBadge}>{notificationCount}</span>
            )}
          </button>
          
          {showDropdown && (
            <div className={styles.notificationDropdown}>
              <div style={{padding: '8px 12px', fontWeight: 'bold', borderBottom: '1px solid #eee'}}>
                {t.notifications}
              </div>
              
              {notifications.length > 0 ? (
                notifications.slice(0, 5).map((item, index) => (
                  <div
                    key={index}
                    className={styles.notificationItem}
                    onClick={() => {
                      navigate('/status-requests');
                      setShowDropdown(false);
                    }}
                  >
                    {user.role === 'Admin' ? (
                       <>
                         <strong>{item.subTaskId?.title || 'Unnamed'}</strong> → 
                         <em>{item.requestedStatus}</em>
                       </>
                    ) : (
                       // Translated Notification Text
                       <>
                         {t.reqSent} <strong>{item.subTaskId?.title || 'Unnamed'}</strong> <br/>
                         {t.was} <em>{item.status}</em>
                       </>
                    )}
                  </div>
                ))
              ) : (
                <div className={styles.notificationItem}>{t.noNotifications}</div>
              )}
              
              <div className={styles.viewAll} onClick={() => {
                navigate('/status-requests');
                setShowDropdown(false);
              }}>
                {t.viewAll} →
              </div>
            </div>
          )}
        </div>
        <Logout />
      </div>
    </header>
  );
}

export default Header;