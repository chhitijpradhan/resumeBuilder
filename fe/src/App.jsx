import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Templates from './pages/Templates';
import Auth from './pages/Auth';
import ResumeViewer from './pages/ResumeViewer';

const App = () => {
  return (

    <Router>
      <div className='flex h-screen'>
        <Sidebar />

        <div className='flex-1 p-6 overflow-auto'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/login" element={<Auth mode="login" />} />
            <Route path="/register" element={<Auth mode="register" />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/template/:id" element={<ResumeViewer />} />
          </Routes>
        </div>
      </div>
    </Router>

  )
}

export default App