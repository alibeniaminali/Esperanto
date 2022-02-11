import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SiteNavbar from './components/SiteNavbar'
import Home from './components/Home'

import Login from './components/auth/Login'
import TeachersList from './components/teachers/TeachersList'

const App = () => {
  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <SiteNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<TeachersList />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App