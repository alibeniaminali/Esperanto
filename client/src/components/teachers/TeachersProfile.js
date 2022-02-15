import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


import { getTokenFromLocalStorage } from '../helpers/auth'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import TeachersList from './TeachersList'

const TeacherProfile = () => {

  // Global variables
  const navigate = useNavigate()
  const { teacherId } = useParams()

  // State
  const [teacher, setTeacher] = useState(null)
  // const [review, setReview] = useState([])
  const [hasError, setHasError] = useState({ error: false, message: '' })

  const [formData, setFormData] = useState({
    text: '',
    rating: '',
  })

  const [formErrors, setFormErrors] = useState({
    text: '',
    rating: '',
  })


  useEffect(() => {
    const getSingleTeacher = async () => {
      try {
        const { data } = await axios.get(`/api/teachers/${teacherId}`, {
          headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage()}`,
          },
        })
        setTeacher(data)
        // setReview(data.reviews)
      } catch (err) {
        setHasError({ error: true, message: err.message })
      }
    }
    getSingleTeacher()
  }, [teacherId])




  const handleSubmit = async (e) => {
    e.preventDefault() // prevent reload
    try {
      console.log(getTokenFromLocalStorage())
      await axios.post(`/api/teachers/${teacherId}/reviews`, formData, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
      // console.log(formData.firstName)
      // navigate('teachers/:teacherId')
    } catch (err) {
      setFormErrors(err.response.data.errors)
    }
  }





  const handleChange = (e) => {
    const newObj = { ...formData, [e.target.name]: e.target.value }
    setFormData(newObj)
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }


  // console.log(review)
  // console.log(review[0].owner.username)

  // const userIsOwner = () => {
  //   const payload = getPayload()
  //   console.log(payload)
  //   if (!payload) return
  //   return teacher.owner === payload.sub
  // }

  useEffect(() => {
    if (teacher) { console.log(teacher.reviews) }
  }, [teacher])


  return (
    <Container className="mt-4">
      {teacher ?
        <div className="teacherProfile">
          <div className="profile_image_container"><img src={teacher.displayPicture} alt={teacher.firstName} /></div>
          <div className="teacher-info">
            <h3>{teacher.firstName} {teacher.lastName}</h3>
            <p>{teacher.aboutMe}</p>
            <p>{teacher.alsoSpeaks}</p>
            <p>{teacher.email}</p>
            {/* <p>User 's' review of {teacher.firstName} is {review[0].text}</p> */}
            {/* <p>User  rates {teacher.firstName} {review[0].rating} out of 5</p> */}
            {teacher.reviews.length ?
              teacher.reviews.map(review => {
                return (
                  <>
                    <p>User {review.owner.username}'s' review of {teacher.firstName} is {review.text}</p>
                    <p>User {review.owner.username} rates {teacher.firstName} {review.rating} out of 5</p>
                  </>
                )
              })



              : <p>No Reviews Yet</p>}
            <Form onSubmit={handleSubmit} className='mt-4'>
              <Form.Group className='mb-2'>
                <Form.Label htmlFor='text'>Enter Your Review Here</Form.Label>
                <Form.Control onChange={handleChange} type="text" name="text" placeholder="Review text" />
              </Form.Group>
              <Form.Group className='mb-2'>
                <Form.Label htmlFor="rating">Rating</Form.Label>
                <Form.Control onChange={handleChange} type="number" min="0" max="5" name="rating" placeholder="Rating" />
              </Form.Group>
              <Form.Group className='text-center mt-4'>
                <Button variant="warning" type="submit">Submit</Button>
              </Form.Group>
            </Form>
            <Link to={`/editteacher/${teacher._id}`} className='btn btn-warning'> Edit this teacher ↩️ </Link>
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