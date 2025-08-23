
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

 import  './styles/global.scss'
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
// import Projects from './pages/Projects/Projects';
// import Tasks from './pages/Tasks/Tasks';
// import Subtasks from './pages/Subtasks/Subtasks';
// import Settings from './pages/Settings/Settings';
import Members from './pages/Members/Members';
// import MembersDetail from './pages/Members/MembersDetail';
// import AssignFor from './pages/AssignFor/AssignFor';
// import ProjectDetail from './pages/Projects/ProjectDetail';
// import TaskDetail from './pages/Tasks/TaskDetail';
// import SubtaskDetail from './pages/Subtasks/SubtaskDetail';
// import AssignForDetail from './pages/AssignFor/AssignForDetail';
// import ContactWithUs from './pages/ContactWithUs/ContactWithUs';
// import ServiceRequest from './pages/ServiceRequest/ServiceRequest';
// import ChatBox from './pages/ChatBox/ChatBox';
import LoginForm from './LoginForm';
import PrivateRoute from './PrivateRoute';


function App() {
  return (
       <Router>
        {/* <Layout> */}
          <Routes>
             <Route path="/login" element={<LoginForm />} />   
             <Route path="/" element={<PrivateRoute> <Layout /></PrivateRoute>}>
            <Route index element={<Dashboard />} />
            
           <Route path="/members" element={<Members/>} />
             {/* <Route path="/projects" element={<Projects/>} />
            <Route path="/tasks" element={<Tasks/>} />
            <Route path="/subtasks" element={<Subtasks/>} />
            <Route path='/assignFor' element={<AssignFor/>}/>
            <Route path="/settings" element={<Settings/>} />
            <Route path="/member/:id" element={<MembersDetail/>} />
            <Route path="/project/:id" element={<ProjectDetail/>} />
            <Route path="/task/:id" element={<TaskDetail/>} />
            <Route path="/subTask/:id" element={<SubtaskDetail/>} />
            <Route path="/assignFor/:id" element={<AssignForDetail/>} />
            <Route path="/servicerequest" element={<ServiceRequest/>} />
            <Route path="/chatbox" element={<ChatBox/>} />
            <Route path="/contactwithus" element={<ContactWithUs/>} /> */} 
           </Route>
          </Routes> 
        {/* </Layout> */}
        </Router>
     
  )
}

export default App