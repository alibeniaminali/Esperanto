import React, { useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { getTokenFromLocalStorage } from '../helpers/auth'

import TeacherForm from './TeacherForm.js'

import Container from 'react-bootstrap/Container'



const AddTeacher = () => {

  // navigate
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    pricePerHour: '',
    teaches: '',
    alsoSpeaks: [''],
    aboutMe: '',
    displayPicture: '',
  })

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    pricePerHour: '',
    teaches: '',
    alsoSpeaks: [''],
    aboutMe: '',
    displayPicture: '',
  })
  

  const handleChange = (e) => {
    const newObj = { ...formData, [e.target.name]: e.target.value }
    setFormData(newObj)
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault() // prevent reload
    try {
      console.log(getTokenFromLocalStorage())
      await axios.post('/api/teachers', formData, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
      // console.log(formData.firstName)
      navigate('/teachers')
    } catch (err) {
      setFormErrors(err.response.data.errors)
    }
  }

  return (
    <section className="form-page">
      <Container>
        <h2>Register as a teacher</h2>
        <TeacherForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
          formErrors={formErrors}
        />
      </Container>
    </section>
  )
}

export default AddTeacher