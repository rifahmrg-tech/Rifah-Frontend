
// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//  import  './styles/global.scss'
// import Layout from './components/Layout/Layout';
// import Dashboard from './pages/Dashboard/Dashboard';
// import Members from './pages/Members/Members';
// import ContactWithUs from './pages/ContactWithUs/ContactWithUs';
// import ServiceRequest from './pages/ServiceRequest/ServiceRequest';
// import LoginForm from './LoginForm';
// import PrivateRoute from './PrivateRoute';

// import MyPost from './pages/MyPosts/MyPost';



// function App() {
//   return (
//        <Router>
//         {/* <Layout> */}
//           <Routes>
//              <Route path="/login" element={<LoginForm />} />   
//              <Route path="/" element={<PrivateRoute> <Layout /></PrivateRoute>}>
//             <Route index element={<Dashboard />} />
            
//            <Route path="/members" element={<Members/>} />
//             <Route path="/servicerequest" element={<ServiceRequest/>} />
          
//             <Route path="/contactwithus" element={<ContactWithUs/>} /> 
//             <Route path="/myposts" element={<MyPost/>} /> 
//            </Route>
//           </Routes> 
//         {/* </Layout> */}
//         </Router>
     
//   )
// }

// export default App

//------------------------10/02-------------------4.03--------------------------

// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './styles/global.scss'
// import Layout from './components/Layout/Layout';
// import Dashboard from './pages/Dashboard/Dashboard';
// import Members from './pages/Members/Members';
// import ContactWithUs from './pages/ContactWithUs/ContactWithUs';
// import ServiceRequest from './pages/ServiceRequest/ServiceRequest';
// import LoginForm from './LoginForm';
// import PrivateRoute from './PrivateRoute';
// import MyPost from './pages/MyPosts/MyPost';

// // ✅ Helper component for missing pages
// const PlaceholderPage = ({ title }) => (
//   <div style={{ padding: "20px", textAlign: "center" }}>
//     <h2>{title}</h2><p>Coming Soon...</p>
//   </div>
// );

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LoginForm />} />
        
//         <Route path="/" element={<PrivateRoute> <Layout /></PrivateRoute>}>
//           <Route index element={<Dashboard />} />
//           <Route path="/members" element={<Members/>} />
          
//           {/* ✅ FIXED: Renamed path to match your earlier error logs if needed, 
//               or keep as /servicerequest if that's what your sidebar uses */}
//           <Route path="/servicerequest" element={<ServiceRequest/>} />
          
//           <Route path="/contactwithus" element={<ContactWithUs/>} /> 
//           <Route path="/myposts" element={<MyPost/>} /> 

//           {/* ✅ ADDED: Missing routes to prevent 404 errors */}
//           <Route path="/status-requests" element={<PlaceholderPage title="Status Requests" />} />
//           <Route path="/provide-service" element={<PlaceholderPage title="Provide Service" />} />
//           <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
//           <Route path="/subscriptions" element={<PlaceholderPage title="Subscriptions" />} />
//           <Route path="/referralhistory" element={<PlaceholderPage title="Referral History" />} />
          
//         </Route>
//       </Routes> 
//     </Router>
//   )
// }

// export default App;

//------------------------10/02-------------------5.45--------------------------

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './styles/global.scss';

// import Layout from './components/Layout/Layout';
// import Dashboard from './pages/Dashboard/Dashboard';
// import Members from './pages/Members/Members';
// import ContactWithUs from './pages/ContactWithUs/ContactWithUs';
// import ServiceRequest from './pages/ServiceRequest/ServiceRequest';
// import LoginForm from './LoginForm';
// import PrivateRoute from './PrivateRoute';
// import MyPost from './pages/MyPosts/MyPost';

// // ✅ IMPORT: Import the SearchProvider component we created
// // (Make sure the file path matches where you saved it!)
// import SearchProvider from './pages/SearchProvider/SearchProvider'; 

// // Helper component for missing pages
// const PlaceholderPage = ({ title }) => (
//   <div style={{ padding: "20px", textAlign: "center" }}>
//     <h2>{title}</h2><p>Coming Soon...</p>
//   </div>
// );

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LoginForm />} />
        
//         <Route path="/" element={<PrivateRoute> <Layout /></PrivateRoute>}>
//           <Route index element={<Dashboard />} />
          
//           <Route path="/members" element={<Members/>} />
//           <Route path="/servicerequest" element={<ServiceRequest/>} />
//           <Route path="/contactwithus" element={<ContactWithUs/>} /> 
//           <Route path="/myposts" element={<MyPost/>} /> 

//           {/* ✅ NEW ROUTE: Added Search Provider */}
//           <Route path="/search-provider" element={<SearchProvider />} />

//           {/* Placeholders */}
//           <Route path="/status-requests" element={<PlaceholderPage title="Status Requests" />} />
//           <Route path="/provide-service" element={<PlaceholderPage title="Provide Service" />} />
//           <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
//           <Route path="/subscriptions" element={<PlaceholderPage title="Subscriptions" />} />
//           <Route path="/referralhistory" element={<PlaceholderPage title="Referral History" />} />
          
//         </Route>
//       </Routes> 
//     </Router>
//   )
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './styles/global.scss';

// import Layout from './components/Layout/Layout';
// import Dashboard from './pages/Dashboard/Dashboard';
// import Members from './pages/Members/Members';
// import ContactWithUs from './pages/ContactWithUs/ContactWithUs';
// import ServiceRequest from './pages/ServiceRequest/ServiceRequest';
// import LoginForm from './LoginForm';
// import PrivateRoute from './PrivateRoute';
// import MyPost from './pages/MyPosts/MyPost';

// // ✅ IMPORT: Import the SearchProvider component we created
// import SearchProvider from './pages/SearchProvider/SearchProvider'; 

// // Helper component for missing pages
// const PlaceholderPage = ({ title }) => (
//   <div style={{ padding: "20px", textAlign: "center" }}>
//     <h2>{title}</h2><p>Coming Soon...</p>
//   </div>
// );

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LoginForm />} />
        
//         <Route path="/" element={<PrivateRoute> <Layout /></PrivateRoute>}>
//           <Route index element={<Dashboard />} />
          
//           <Route path="/members" element={<Members/>} />
//           <Route path="/servicerequest" element={<ServiceRequest/>} />
//           <Route path="/contactwithus" element={<ContactWithUs/>} /> 
//           <Route path="/myposts" element={<MyPost/>} /> 

//           {/* ✅ FIXED: Added both paths so the sidebar link works */}
//           <Route path="/search-provider" element={<SearchProvider />} />
//           <Route path="/service" element={<SearchProvider />} />

//           {/* Placeholders */}
//           <Route path="/status-requests" element={<PlaceholderPage title="Status Requests" />} />
//           <Route path="/provide-service" element={<PlaceholderPage title="Provide Service" />} />
//           <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
//           <Route path="/subscriptions" element={<PlaceholderPage title="Subscriptions" />} />
//           <Route path="/referralhistory" element={<PlaceholderPage title="Referral History" />} />
          
//         </Route>
//       </Routes> 
//     </Router>
//   )
// }

// export default App;

//------------------------11/2-------------------2.22-------------------

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './styles/global.scss';

// import Layout from './components/Layout/Layout';
// import Dashboard from './pages/Dashboard/Dashboard';
// import Members from './pages/Members/Members';
// import ContactWithUs from './pages/ContactWithUs/ContactWithUs';
// import ServiceRequest from './pages/ServiceRequest/ServiceRequest';
// import LoginForm from './LoginForm';
// import PrivateRoute from './PrivateRoute';
// import MyPost from './pages/MyPosts/MyPost';
// import SearchProvider from './pages/SearchProvider/SearchProvider'; 

// // ✅ 1. IMPORT YOUR NEW PAGE HERE
// import Subscriptions from './pages/Subscriptions/Subscriptions';

// const PlaceholderPage = ({ title }) => (
//   <div style={{ padding: "20px", textAlign: "center" }}>
//     <h2>{title}</h2><p>Coming Soon...</p>
//   </div>
// );

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LoginForm />} />
        
//         <Route path="/" element={<PrivateRoute> <Layout /></PrivateRoute>}>
//           <Route index element={<Dashboard />} />
          
//           <Route path="/members" element={<Members/>} />
//           <Route path="/servicerequest" element={<ServiceRequest/>} />
//           <Route path="/contactwithus" element={<ContactWithUs/>} /> 
//           <Route path="/myposts" element={<MyPost/>} /> 
//           <Route path="/search-provider" element={<SearchProvider />} />
//           <Route path="/service" element={<SearchProvider />} />

//           {/* ✅ 2. CHANGE THIS LINE (Remove PlaceholderPage, use Subscriptions) */}
//           <Route path="/subscriptions" element={<Subscriptions />} />

//           {/* Placeholders */}
//           <Route path="/status-requests" element={<PlaceholderPage title="Status Requests" />} />
//           <Route path="/provide-service" element={<PlaceholderPage title="Provide Service" />} />
//           <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
//           <Route path="/referralhistory" element={<PlaceholderPage title="Referral History" />} />
          
//         </Route>
//       </Routes> 
//     </Router>
//   )
// }

// export default App;


//------------------------17/2-------------------11.26-------------------

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './styles/global.scss';

// import Layout from './components/Layout/Layout';
// import Dashboard from './pages/Dashboard/Dashboard';
// import Members from './pages/Members/Members';
// import ContactWithUs from './pages/ContactWithUs/ContactWithUs';
// import ServiceRequest from './pages/ServiceRequest/ServiceRequest';
// import LoginForm from './LoginForm';
// import PrivateRoute from './PrivateRoute';
// import MyPost from './pages/MyPosts/MyPost';
// import SearchProvider from './pages/SearchProvider/SearchProvider'; 
// import Subscriptions from './pages/Subscriptions/Subscriptions';

// const PlaceholderPage = ({ title }) => (
//   <div style={{ padding: "20px", textAlign: "center" }}>
//     <h2>{title}</h2><p>Coming Soon...</p>
//   </div>
// );

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LoginForm />} />
        
//         {/* Main Layout Routes */}
//         <Route path="/" element={<PrivateRoute> <Layout /></PrivateRoute>}>
          
//           {/* ✅ This handles http://localhost:5173/ */}
//           <Route index element={<Dashboard />} />
          
//           {/* ✅ FIX: This handles http://localhost:5173/dashboard */}
//           <Route path="dashboard" element={<Dashboard />} />

//           <Route path="/members" element={<Members/>} />
//           <Route path="/servicerequest" element={<ServiceRequest/>} />
//           <Route path="/contactwithus" element={<ContactWithUs/>} /> 
//           <Route path="/myposts" element={<MyPost/>} /> 
//           <Route path="/search-provider" element={<SearchProvider />} />
//           <Route path="/service" element={<SearchProvider />} />
//           <Route path="/subscriptions" element={<Subscriptions />} />

//           {/* Placeholders */}
//           <Route path="/status-requests" element={<PlaceholderPage title="Status Requests" />} />
//           <Route path="/provide-service" element={<PlaceholderPage title="Provide Service" />} />
//           <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
//           <Route path="/referralhistory" element={<PlaceholderPage title="Referral History" />} />
          
//         </Route>
//       </Routes> 
//     </Router>
//   )
// }

// export default App;

//------------------------17/2-------------------3.42-------------------

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './styles/global.scss';

// import Layout from './components/Layout/Layout';
// import Dashboard from './pages/Dashboard/Dashboard';
// import Members from './pages/Members/Members';
// import ContactWithUs from './pages/ContactWithUs/ContactWithUs';
// import ServiceRequest from './pages/ServiceRequest/ServiceRequest';
// import LoginForm from './LoginForm';
// import PrivateRoute from './PrivateRoute';
// import MyPost from './pages/MyPosts/MyPost';
// import SearchProvider from './pages/SearchProvider/SearchProvider'; 
// import Subscriptions from './pages/Subscriptions/Subscriptions';
// // ✅ IMPORT THE NEW CHECKOUT PAGE
// import Checkout from './pages/Checkout/Checkout'; 

// const PlaceholderPage = ({ title }) => (
//   <div style={{ padding: "20px", textAlign: "center" }}>
//     <h2>{title}</h2><p>Coming Soon...</p>
//   </div>
// );

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LoginForm />} />
        
//         {/* Main Layout Routes */}
//         <Route path="/" element={<PrivateRoute> <Layout /></PrivateRoute>}>
          
//           <Route index element={<Dashboard />} />
//           <Route path="dashboard" element={<Dashboard />} />

//           <Route path="/members" element={<Members/>} />
//           <Route path="/servicerequest" element={<ServiceRequest/>} />
//           <Route path="/contactwithus" element={<ContactWithUs/>} /> 
//           <Route path="/myposts" element={<MyPost/>} /> 
//           <Route path="/search-provider" element={<SearchProvider />} />
//           <Route path="/service" element={<SearchProvider />} />
//           <Route path="/subscriptions" element={<Subscriptions />} />

//           {/* ✅ NEW ROUTE: Checkout Page */}
//           {/* :planId allows us to grab "silver" or "gold" from the URL */}
//           <Route path="/checkout/:planId" element={<Checkout />} />

//           {/* Placeholders */}
//           <Route path="/status-requests" element={<PlaceholderPage title="Status Requests" />} />
//           <Route path="/provide-service" element={<PlaceholderPage title="Provide Service" />} />
//           <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
//           <Route path="/referralhistory" element={<PlaceholderPage title="Referral History" />} />
          
//         </Route>
//       </Routes> 
//     </Router>
//   )
// }

// export default App;
//-------------------------17/2-------------------5.11-------------------

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.scss';

import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Members from './pages/Members/Members';
import ContactWithUs from './pages/ContactWithUs/ContactWithUs';
import ServiceRequest from './pages/ServiceRequest/ServiceRequest';
import LoginForm from './LoginForm';
import PrivateRoute from './PrivateRoute';
import MyPost from './pages/MyPosts/MyPost';
import SearchProvider from './pages/SearchProvider/SearchProvider'; 
import Subscriptions from './pages/Subscriptions/Subscriptions';
import Checkout from './pages/Checkout/Checkout'; 
// ✅ 1. IMPORT THE NEW SUCCESS PAGE
import PaymentSuccess from './pages/Checkout/PaymentSuccess';

const PlaceholderPage = ({ title }) => (
  <div style={{ padding: "20px", textAlign: "center" }}>
    <h2>{title}</h2><p>Coming Soon...</p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        
        {/* Main Layout Routes */}
        <Route path="/" element={<PrivateRoute> <Layout /></PrivateRoute>}>
          
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="/members" element={<Members/>} />
          <Route path="/servicerequest" element={<ServiceRequest/>} />
          <Route path="/contactwithus" element={<ContactWithUs/>} /> 
          <Route path="/myposts" element={<MyPost/>} /> 
          <Route path="/search-provider" element={<SearchProvider />} />
          <Route path="/service" element={<SearchProvider />} />
          <Route path="/subscriptions" element={<Subscriptions />} />

          {/* Checkout Pages */}
          <Route path="/checkout/:planId" element={<Checkout />} />
          
          {/* ✅ 2. ADD THE ROUTE FOR PAYMENT SUCCESS */}
          <Route path="/payment-success" element={<PaymentSuccess />} />

          {/* Placeholders */}
          <Route path="/status-requests" element={<PlaceholderPage title="Status Requests" />} />
          <Route path="/provide-service" element={<PlaceholderPage title="Provide Service" />} />
          <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
          <Route path="/referralhistory" element={<PlaceholderPage title="Referral History" />} />
          
        </Route>
      </Routes> 
    </Router>
  )
}

export default App;