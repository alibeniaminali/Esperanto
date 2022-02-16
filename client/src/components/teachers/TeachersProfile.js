import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


import { getTokenFromLocalStorage } from '../helpers/auth'


import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const TeacherProfile = () => {

  // Global variables
  const navigate = useNavigate()
  const { teacherId } = useParams()
  const { reviewId } = useParams()

  // State
  const [teacher, setTeacher] = useState(null)
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
      } catch (err) {
        setHasError({ error: true, message: err.message })
      }
    }
    getSingleTeacher()
  }, [teacherId])

  // const handleDelete = async (e) => {
  //   e.preventDefault()
  //   try {

  //     await axios.delete(`/api/teachers/${teacherId}/reviews/${reviewId}`, {
  //       headers: {
  //         Authorization: `Bearer ${getTokenFromLocalStorage()}`,
  //       },
  //     })
  //     // navigate(`/${teacherId}`)
  //   } catch (err) {
  //     console.log('yikes')
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`/api/teachers/${teacherId}/reviews`, formData, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
      navigate(`${teacherId}`)
    } catch (err) {
      setFormErrors(err.response.data.errors)
    }
  }

  const handleChange = (e) => {
    const newObj = { ...formData, [e.target.name]: e.target.value }
    setFormData(newObj)
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }

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
            {teacher.reviews.length ?
              teacher.reviews.map((review, i) => {
                return (
                  <>
                    <p key={i} >{review.text}<br />Rating: {review.rating} / 5 <br />Review by {review.owner.username}</p>
                  </>
                )
              })
              : <p>No Reviews Yet</p>}
            <Form className='mt-4'>
              <Form.Group className='mb-2'>
                <Form.Label htmlFor='text'>Enter Your Review Here</Form.Label>
                <Form.Control onChange={handleChange} type="text" name="text" placeholder="Review text" />
              </Form.Group>
              <Form.Group className='mb-2'>
                <Form.Label htmlFor="rating">Rating</Form.Label>
                <Form.Control onChange={handleChange} type="number" min="0" max="5" name="rating" placeholder="Rating" />
              </Form.Group>
              <Form.Group className='text-center mt-4'>
                <Button onSubmit={handleSubmit} variant="warning" type="submit">Post Your Review</Button>
              </Form.Group>
              {/* <Form.Group>
                <Button onSubmit={handleDelete} variant="warning" type="submit">Delete Your Review</Button>
              </Form.Group> */}
            </Form>

            {/* <Button onsubmit={handleDelete} variant="warning" type="submit">Delete Your Review</Button> */}

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