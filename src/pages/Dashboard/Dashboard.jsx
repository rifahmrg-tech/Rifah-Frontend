
// import React from 'react';
// import { Search, PlusCircle, Handshake, List, MessageSquare, Settings, Bell, MapPin, Phone, Share2 } from 'lucide-react';
// import CustomCard from '../../components/UI/CustomCard';
// import styles from './Dashboard.module.scss';
// import { useNavigate } from 'react-router';
// import { History } from 'lucide-react';


// function Dashboard() {
//   const navigate = useNavigate();

//   const buttons = [
//     { title: 'Search Provider', icon: Search, color: '#4ECDC4', action: () => navigate('/members') },
//     { title: 'Request a Service', icon: PlusCircle, color: '#45B7D1', action: () => navigate('/servicerequest') },
//     { title: 'Provide a Service', icon: Handshake, color: '#FFEAA7', action: () => navigate('/provide-service') },
//     { title: 'My Posts', icon: List, color: '#DDA0DD', action: () => navigate('/myposts') },
//     { title: 'Referral History', icon: History, color: '#FFB6C1', action: () => navigate('/referralhistory') },
//     { title: 'Subscriptions', icon: Bell, color: '#FFB6C1', action: () => navigate('/subscriptions') },
//     { title: 'Settings', icon: Settings, color: '#98FB98', action: () => navigate('/settings') },
//     { title: 'Connect With Us', icon: Phone, color: '#FFD700', action: () => navigate('/contactwithus') },
//     { title: 'Share the App', icon: Share2, color: '#C8A2C8', action: () => shareApp() }
//   ];

//   const shareApp = () => {
//     // Implement share functionality
//     if (navigator.share) {
//       navigator.share({
//         title: 'Check out this app',
//         text: 'I found this great service app!',
//         url: window.location.href,
//       });
//     } else {
//       alert('Share functionality not available in your browser');
//     }
//   };

//    return (
//    <div className={styles.dashboard} >
//       <h1 className={styles.dashboardTitle}>Service Marketplace</h1>
      
//       <div className={styles.buttonGrid} >
//         {buttons.map((button, index) => (
//           <CustomCard 
//             key={index} 
//             className={styles.dashboardButton} 
            
//             hover
//           >
//             <div onClick={button.action}> 
//                 <div className={styles.buttonIcon} style={{ backgroundColor: button.color }} >
//               <button.icon size={24} />
//             </div>
//             <div className={styles.buttonText}>
//               <h3>{button.title}</h3>
//             </div>
//             </div>
            
//           </CustomCard>
//         ))}
//       </div>
//     </div>

//       );
// }

// export default Dashboard;


//------------------------10/02-------------------5.44--------------------------

import React from 'react';
import { Search, PlusCircle, Handshake, List, MessageSquare, Settings, Bell, MapPin, Phone, Share2, History } from 'lucide-react';
import CustomCard from '../../components/UI/CustomCard';
import styles from './Dashboard.module.scss';
import { useNavigate } from 'react-router';

function Dashboard() {
  const navigate = useNavigate();

  const buttons = [
    // ✅ UPDATE: Pointing to the new Search Provider page
    { title: 'Search Provider', icon: Search, color: '#4ECDC4', action: () => navigate('/search-provider') },
    
    { title: 'Request a Service', icon: PlusCircle, color: '#45B7D1', action: () => navigate('/servicerequest') },
    { title: 'Provide a Service', icon: Handshake, color: '#FFEAA7', action: () => navigate('/provide-service') },
    { title: 'My Posts', icon: List, color: '#DDA0DD', action: () => navigate('/myposts') },
    { title: 'Referral History', icon: History, color: '#FFB6C1', action: () => navigate('/referralhistory') },
    { title: 'Subscriptions', icon: Bell, color: '#FFB6C1', action: () => navigate('/subscriptions') },
    { title: 'Settings', icon: Settings, color: '#98FB98', action: () => navigate('/settings') },
    { title: 'Connect With Us', icon: Phone, color: '#FFD700', action: () => navigate('/contactwithus') },
    { title: 'Share the App', icon: Share2, color: '#C8A2C8', action: () => shareApp() }
  ];

  const shareApp = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this app',
        text: 'I found this great service app!',
        url: window.location.href,
      });
    } else {
      alert('Share functionality not available in your browser');
    }
  };

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.dashboardTitle}>Service Marketplace</h1>
      
      <div className={styles.buttonGrid}>
        {buttons.map((button, index) => (
          <CustomCard 
            key={index} 
            className={styles.dashboardButton} 
            hover
          >
            {/* Moved onClick here to ensure the whole card is clickable */}
            <div onClick={button.action} style={{ cursor: 'pointer', width: '100%', height: '100%' }}> 
              <div className={styles.buttonIcon} style={{ backgroundColor: button.color }}>
                <button.icon size={24} />
              </div>
              <div className={styles.buttonText}>
                <h3>{button.title}</h3>
              </div>
            </div>
            
          </CustomCard>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;