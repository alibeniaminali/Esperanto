import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { ImageUploadField } from '../ImageUpload.js'

const TeacherForm = ({ formData, formErrors, handleChange, handleSubmit }) => (
  <Form onSubmit={handleSubmit} className='mt-4'>
    <Form.Group className='mb-2'>
      <Form.Label htmlFor='firstName'>First Name</Form.Label>
      <Form.Control onChange={handleChange} type="text" name="firstName" placeholder="First Name" defaultValue={formData.firstName} />
      {formErrors.firstName && <Form.Text>{formErrors.firstName}</Form.Text>}
    </Form.Group>
    <Form.Group className='mb-2'>
      <Form.Label htmlFor="lastName">Last Name</Form.Label>
      <Form.Control onChange={handleChange} type="text" name="lastName" placeholder="Last Name" defaultValue={formData.lastName} />
      {formErrors.lastName && <Form.Text>{formErrors.lastName}</Form.Text>}
    </Form.Group>
    <Form.Group className='mb-2'>
      <Form.Label htmlFor="email">Email Address</Form.Label>
      <Form.Control onChange={handleChange} type="email" name="email" placeholder="Email" defaultValue={formData.email} />
      {formErrors.email && <Form.Text>{formErrors.email}</Form.Text>}
    </Form.Group>
    <Form.Group className='mb-2'>
      <Form.Label htmlFor="location">Location</Form.Label>
      <Form.Control onChange={handleChange} type="text" name="location" placeholder="Location" defaultValue={formData.location} />
      {formErrors.location && <Form.Text>{formErrors.location}</Form.Text>}
    </Form.Group>
    <Form.Group className='mb-2'>
      <Form.Label htmlFor="pricePerHour">Price per hour</Form.Label>
      <Form.Control onChange={handleChange} type="number" min="0" max="30" name="pricePerHour" placeholder="Price per hour" defaultValue={formData.pricePerHour} />
      {formErrors.pricePerHour && <Form.Text>{formErrors.pricePerHour}</Form.Text>}
    </Form.Group>
    <Form.Group className='mb-2'>
      <Form.Label htmlFor="teaches">Teaches</Form.Label>
      <Form.Control onChange={handleChange} type="text" name="teaches" placeholder="Japanese" defaultValue={formData.teaches} />
      {formErrors.teaches && <Form.Text>{formErrors.teaches}</Form.Text>}
    </Form.Group>
    <Form.Group className='mb-2'>
      <Form.Label htmlFor="alsoSpeaks">Also speaks</Form.Label>
      <Form.Control onChange={handleChange} type="text" name="alsoSpeaks" placeholder="English, Turkish, Bulgarian ..." defaultValue={formData.alsoSpeaks} />
      {formErrors.alsoSpeaks && <Form.Text>{formErrors.alsoSpeaks}</Form.Text>}
    </Form.Group>
    <Form.Group className='mb-2'>
      <Form.Label htmlFor="aboutMe">About</Form.Label>
      <Form.Control onChange={handleChange} type="text" max="500" name="aboutMe" placeholder="Write something about yourself" defaultValue={formData.aboutMe} />
      {formErrors.aboutMe && <Form.Text>{formErrors.aboutMe}</Form.Text>}
    </Form.Group>
    <ImageUploadField
      value={formData.displayPicture}
      name="displayPicture"
    // handleImageUrl={handleImageUrl}
    />
    <Form.Group className='text-center mt-4'>
      <Button variant="warning" type="submit">Submit</Button>
    </Form.Group>
  </Form>
)

export default TeacherForm