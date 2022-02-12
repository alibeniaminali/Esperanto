import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { userIsAuthenticated, getTokenFromLocalStorage } from '../helpers/auth'

import AddTeacher from './AddTeacher'

import Container from 'react-bootstrap/Container'

const EditTeacher = () => {

  const navigate = useNavigate()
  const { teacherId } = useParams()

  const [teacherError, setTeacherError] = useState('')

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    location: '',
    email: '',
    pricePerHour: 0,
    teaches: '',
    alsoSpeaks: [''],
    aboutMe: '',
    displayPicture: '',
  })

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    location: '',
    email: '',
    pricePerHour: 0,
    teaches: '',
    alsoSpeaks: [''],
    aboutMe: '',
    displayPicture: '',
  })
  

  useEffect(() => {
    // !userIsAuthenticated() && navigate('/login')

    const getTeacher = async () => {
      try {
        const { data } = await axios.get(`/api/teachers/6204fe8df1ea3271035415e1`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${getTokenFromLocalStorage()}`,
            },
          })
        console.log('data ->', data)
        setFormData(data)
      } catch (err) {
        setTeacherError('Failed to retrieve teacher information. Failed to populate.')
      }
    }
    getTeacher()
  }, [teacherId, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(
        `/api/teachers/${teacherId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage()}`,
          },
        }
      )
      navigate(`/teachers/${teacherId}`)
    } catch (err) {
      setFormErrors(err.response.data.errors)
    }
  }

  const handleChange = (e) => {
    const newObj = { ...formData, [e.target.name]: e.target.value }
    setFormData(newObj)
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }

  return (
    // <>
    //   <h1>hiya</h1>
    // </>
    <section className="form-page">
      <Container className='mt-4'>
        <h1>hello</h1>
        <AddTeacher
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
          formErrors={formErrors}
          teacherError={teacherError}
        />
      </Container>
    </section>
  )
}

export default EditTeacher