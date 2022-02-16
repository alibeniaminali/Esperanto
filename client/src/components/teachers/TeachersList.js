import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
// import Select from 'react-select'

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

  const handleChange = (event) => {
    const filteredTeachers = teachers.filter((teachers) => {
      return teachers.pricePerHour <= parseFloat(event.target.value)
    })
    setTeachers(filteredTeachers)
  }

  console.log(teachers)

  
  // const options = teachers.map(teacher => {
  //   return {
  //     label: teacher.teaches,
  //     value: teacher.teaches
  //   }
  // })
  // console.log(options)

  return (


    <>
      <Link to="/addteacher" className='btn btn-warning'>add yourself as a teacher ↩️ </Link>
      <p className='lead'>Search from {teachers.length} teachers</p>
      {/* <Select
        className='search-line'
        placeholder='Search...'
        options={options}
        onChange={opt => console.log(opt)}
        /> */}
      <form onChange={handleChange}>
        <label>Search by max price </label>
        <select>
          <option value="" defaultValue>Make a choice</option>
          <option value="10">£10</option>
          <option value="15">£15</option>
          <option value="20">£20</option>
          <option value="25">£25</option>
          <option value="30">£30</option>
          <option value="30">£35</option>
        </select>
      </form>
      <div className='form_container'>
        <Form onSubmit={handleSubmit}>
          <Form.Label htmlFor="inputPassword5">Write the language you want to find teachers for</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock" type='text' id='teacherssubmit' placeholder="I want to Learn" onChange={event => {
              setSearchTerm(event.target.value)
            }} />
        </Form>
      </div>
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


export default TeachersList
