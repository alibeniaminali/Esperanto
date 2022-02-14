import React, { useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { getTokenFromLocalStorage } from '../helpers/auth'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const AddTeacher = () => {

    // navigate
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    location: '',
    pricePerHour: '',
    teaches: '',
    alsoSpeaks: [''],
    aboutMe: '',
    })

    const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    location: '',
    pricePerHour: '',
    teaches: '',
    alsoSpeaks: [''],
    aboutMe: '',
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
          <Form onSubmit={handleSubmit} className='mt-4'>
            <h2>Register as a teacher</h2>
            {/* First name */}
            <Form.Group className='mb-2'>
              <Form.Label htmlFor='firstName'>First Name</Form.Label>
              <Form.Control onChange={handleChange} type="text" name="firstName" placeholder="First Name" defaultValue={formData.firstName} />
              {formErrors.firstName && <Form.Text>{formErrors.firstName}</Form.Text>}
            </Form.Group>
            {/* Last name */}
            <Form.Group className='mb-2'>
              <Form.Label htmlFor="lastName">Last Name</Form.Label>
              <Form.Control onChange={handleChange} type="text" name="lastName" placeholder="Last Name" defaultValue={formData.lastName} />
              {formErrors.lastName && <Form.Text>{formErrors.lastName}</Form.Text>}
            </Form.Group>
            {/* Location */}
            <Form.Group className='mb-2'>
              <Form.Label htmlFor="location">Location</Form.Label>
              <Form.Control onChange={handleChange} type="text" name="location" placeholder="Location" defaultValue={formData.location} />
              {formErrors.location && <Form.Text>{formErrors.location}</Form.Text>}
            </Form.Group>
            {/* Price per hour */}
            <Form.Group className='mb-2'>
              <Form.Label htmlFor="pricePerHour">Price per hour</Form.Label>
              <Form.Control onChange={handleChange} type="number" min="0" max="30" name="pricePerHour" placeholder="Price per hour" defaultValue={formData.pricePerHour} />
              {formErrors.pricePerHour && <Form.Text>{formErrors.pricePerHour}</Form.Text>}
            </Form.Group>
            {/* Teaches */}
            <Form.Group className='mb-2'>
              <Form.Label htmlFor="teaches">Teaches</Form.Label>
              <Form.Control onChange={handleChange} type="text" name="teaches" placeholder="Japanese" defaultValue={formData.teaches} />
              {formErrors.teaches && <Form.Text>{formErrors.teaches}</Form.Text>}
            </Form.Group>
            {/* Also speaks */}
            <Form.Group className='mb-2'>
              <Form.Label htmlFor="alsoSpeaks">Also speaks</Form.Label>
              <Form.Control onChange={handleChange} type="text" name="alsoSpeaks" placeholder="English, Turkish, Bulgarian ..." defaultValue={formData.alsoSpeaks} />
              {formErrors.alsoSpeaks && <Form.Text>{formErrors.alsoSpeaks}</Form.Text>}
            </Form.Group>
            {/* About me */}
            <Form.Group className='mb-2'>
              <Form.Label htmlFor="aboutMe">About</Form.Label>
              <Form.Control onChange={handleChange} type="text" max="500" name="aboutMe" placeholder="Write something about yourself" defaultValue={formData.aboutMe} />
              {formErrors.aboutMe && <Form.Text>{formErrors.aboutMe}</Form.Text>}
            </Form.Group>
            {/* Submit */}
            <Form.Group className='text-center mt-4'>
              <Button variant="warning" type="submit">Submit</Button>
            </Form.Group>
          </Form>
        </Container>
      </section>
    )
  }

export default AddTeacher