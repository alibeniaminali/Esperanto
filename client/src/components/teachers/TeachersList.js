import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const TeachersList = () => {
  const [teachers, setTeachers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [hasError, setHasError] = useState({ error: false, message: '' })

  useEffect(() => {
    const getTeachers = async () => {
      try {
        const { data } = await axios.get('/api/teachers')
        setTeachers(data)
      } catch (err) {
        setHasError({ error: true, message: err.message })
      }
    }
    getTeachers()
  }, [])

  const handleSubmit = () => {

  }

  return (


    <>
      <Link to="/addteacher" className='btn btn-warning'>add your teacher ↩️ </Link>
      <form onSubmit={handleSubmit}>
        <input type='text' id='teacherssubmit' placeholder="Choose Your Language" onChange={event => {
          setSearchTerm(event.target.value)
        }} ></input>
      </form>
      <ul className='teachers_list'></ul>
      <Container className='teachers_container'>{teachers && teachers.filter((teachers) => {
        if (searchTerm === '') {
          return teachers
        } else if (teachers.teaches.toLowerCase().includes(searchTerm.toLowerCase())) {
          return teachers
        }
      }).map(teacher => {
        const { firstName, lastName, displayPicture, teaches, location, pricePerHour, avgRating, _id } = teacher
        return (
          <Col key={_id} md="10" lg="8" className="teacher mb-4">
            <Link id="teacher_card_link" to={`/teachers/${teacher._id}`}>
              <Card className="h-100">
                <Card.Header><h3>{firstName} {lastName}</h3>
                </Card.Header>
                <Card.Body>
                  <Row className="row1">
                    <Col sm={8}>
                      <div className="image_container">
                        <Card.Img className="img-fluid img-thumbnail" src={displayPicture} />
                      </div>
                    </Col>
                    <Col sm={4}>
                      <Card.Title><p>{firstName} teaches {teaches}</p></Card.Title>
                      <Card.Text>
                        <p>{firstName} is based in {location}</p>
                      </Card.Text>
                      <Card.Text>
                        <p>Average Rating : {avgRating}</p>
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer className="text-center">
                  <p>{firstName}'s Hourly Rate = £{pricePerHour}</p>
                </Card.Footer>
              </Card>
            </Link>
          </Col>
        )
      })}
      </Container>
      
    </>
  )
}


{/* <div class="container">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col"></div> */}

export default TeachersList
