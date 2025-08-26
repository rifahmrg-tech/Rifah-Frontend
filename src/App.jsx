
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

 import  './styles/global.scss'
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Members from './pages/Members/Members';
import ContactWithUs from './pages/ContactWithUs/ContactWithUs';
import ServiceRequest from './pages/ServiceRequest/ServiceRequest';
import LoginForm from './LoginForm';
import PrivateRoute from './PrivateRoute';

import MyPost from './pages/MyPosts/MyPost';



function App() {
  return (
       <Router>
        {/* <Layout> */}
          <Routes>
             <Route path="/login" element={<LoginForm />} />   
             <Route path="/" element={<PrivateRoute> <Layout /></PrivateRoute>}>
            <Route index element={<Dashboard />} />
            
           <Route path="/members" element={<Members/>} />
            <Route path="/servicerequest" element={<ServiceRequest/>} />
          
            <Route path="/contactwithus" element={<ContactWithUs/>} /> 
            <Route path="/myposts" element={<MyPost/>} /> 
           </Route>
          </Routes> 
        {/* </Layout> */}
        </Router>
     
  )
}

export default App