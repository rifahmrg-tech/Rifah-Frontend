import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Users, FolderOpen, CheckSquare, List, X ,Settings ,UserCheck,ClipboardCheck, User} from 'lucide-react';
import styles from './Sidebar.module.scss'
import logo from '/logo.png';
import { useAuth } from '../../context/AuthContext';

function Sidebar({ isOpen, onClose }) {
  const {user} = useAuth();

  const menuItems = [
    { path: '/', icon: Home, label: 'Dashboard' },
    { path: '/members', icon: Users, label: 'Search Provider', adminOnly: true },
    { path: '/servicerequest', icon: FolderOpen, label: 'Request a Service' },
    { path: '/provide-service', icon: CheckSquare, label: 'Provide a Service' },
    { path: '/myposts', icon: List, label: 'My Posts' },
    { path: '/referralhistory', icon: UserCheck, label: 'Referral History' },
    { path: '/subscriptions', icon: UserCheck, label: 'Subscriptions' },
    
    { path: '/service', icon: Settings, label: 'Services' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  
    
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.header}>
        {/* <div className={styles.logo}>
          <div className={styles.logoIcon}>PM</div>
          <span>Project Manager</span>
          
        </div> */}
       <div className={styles.logo}>
          <img src={logo} width={200}  style={{ borderRadius: '10%' }} />  
          {/* <span>OMT</span> */}
        </div> 
        <button className={styles.closeButton} onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      <nav className={styles.nav}>
        {menuItems.map((item) => {
           // If item is admin-only and user is not admin, skip it
          if (item.adminOnly && user?.role !== 'Admin') return null;
          
          return (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ''}`
            }
            onClick={onClose}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        )})}
      </nav>
    </aside>
  )
}

export default Sidebar