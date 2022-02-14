import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SiteNavbar from './components/SiteNavbar'
import Home from './components/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import TeachersList from './components/teachers/TeachersList'
import TeachersProfile from './components/teachers/TeachersProfile'
import AddTeacher from './components/teachers/AddTeacher'
import AboutUs from './components/teachers/AboutUs'
import UserProfile from './components/teachers/UserProfile'
import EditTeacher from './components/teachers/EditTeacher'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <SiteNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="teachers" element={<TeachersList />} />
          <Route path="teachers/:teacherId" element={<TeachersProfile />} />
          <Route path="addteacher" element={<AddTeacher />} />
          <Route path="userprofile" element={<UserProfile />} />
          <Route path="editteacher/:teacherId" element={<EditTeacher />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App