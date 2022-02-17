import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import { getTokenFromLocalStorage, getPayload } from '../helpers/auth'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const TeacherProfile = () => {

  const navigate = useNavigate()
  const { teacherId } = useParams()

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

  const deleteTeacher = async () => {
    try {
      await axios.delete(`/api/teachers/${teacherId}`, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
      navigate('/teachers')
    } catch (err) {
      setFormErrors(err.response.data.errors)
    }
  }

  const userIsOwner = () => {
    const payload = getPayload()
    if (!payload) return
    return teacher.owner === payload.sub
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`/api/teachers/${teacherId}/reviews`, formData, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
      window.location.reload()
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
    <Container>
      {teacher ?
        <div className="teacherProfile">
          <Link to="/teachers" id="back-to-teachers" className='btn btn-warning'>Back to teachers ↩️ </Link>
          <Row>
            <Col sm={3}>
              <div className="profile_image_container"><img src={teacher.displayPicture} alt={teacher.firstName} /></div>
            </Col>
            <Col>
              <Card className="info-card">
                <Card.Body>
                  <Card.Title>{teacher.firstName} {teacher.lastName}</Card.Title>
                  <Card.Header>Hourly Rate:   £{teacher.pricePerHour}</Card.Header>
                  <Card.Text>About Me:   {teacher.aboutMe}</Card.Text>
                  <p>Teaching: {teacher.teaches}</p>
                  <p>Also speaks:   {teacher.alsoSpeaks.join(', ')}</p>
                  <a class="btn btn-success" href={`mailto:${teacher.email}`} role="button">Contact me by email ✉️ </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="teacher-info">
            {teacher.reviews.length ?
              teacher.reviews.map((review, i) => {
                return (
                  <>
                    <Card className="teachers-profile-card">
                      <Card.Header>Rating : {review.rating} / 5 </Card.Header>
                      <Card.Body>
                        <blockquote className="blockquote mb-0">
                          <p key={i}>
                            {review.text}
                          </p>
                          <footer className="blockquote-footer">
                            Review by: {review.owner.username}
                          </footer>
                        </blockquote>
                      </Card.Body>
                    </Card>
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
            </Form>
            <div className="profile-buttons">
              <Button onClick={handleSubmit} variant="warning" type="submit">Post Your Review</Button>
              {userIsOwner() &&
                <div className="buttons mb-4">
                  <Button variant='danger' onClick={deleteTeacher}>Delete teacher</Button>
                </div>
              }
              {userIsOwner() &&
                <div className="buttons mb-4">
                  <Link to={`/editteacher/${teacher._id}`} className='btn btn-warning'> Edit this teacher</Link>
                </div>
              }
            </div>
          </div>
        </div>
        :
        <h2 className="text-center">
          {hasError.error ? 'Please log in first' : 'Loading...'}
        </h2>
      }
    </Container>
  )
}

export default TeacherProfile