import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'


import { getTokenFromLocalStorage } from '../helpers/auth'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button'

const TeacherProfile = () => {

  // Global variables
  // const navigate = useNavigate()

  // State
  const [teacher, setTeacher] = useState([])
  const [hasError, setHasError] = useState({ error: false, message: '' })

  // Params
  const { teacherId } = useParams()

  useEffect(() => {
    const getSingleTeacher = async () => {
      try {
        const { data } = await axios.get(`/api/teachers/${teacherId}`, {
          headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage()}`,
          },
        })
        setTeacher(data)
      } catch (err) {
        setHasError({ error: true, message: err.message })
      }
    }
    getSingleTeacher()
  }, [teacherId])

  // const userIsOwner = () => {
  //   const payload = getPayload()
  //   console.log(payload)
  //   if (!payload) return
  //   return teacher.owner === payload.sub
  // }


  return (
    <Container className="mt-4">
      {teacher ?
        <div className="teacherProfile">
          <div><img src={teacher.displayPicture} alt={teacher.firstName} /></div>
          <div className="teacher-info">
            <h3>{teacher.firstName} {teacher.lastName}</h3>
            <p>{teacher.aboutMe}</p>
            <p>{teacher.alsoSpeaks}</p>
            <p>{teacher.email}</p>
            <p>{teacher.location}</p>
            <p>{teacher.reviews}</p>
          </div>
        </div>
        :
        <h2 className="text-center">
          {hasError.error ? 'Oh something went wrong, the sadness 😞' : 'Loading...'}
        </h2>
      }
    </Container>
  )
}


export default TeacherProfile