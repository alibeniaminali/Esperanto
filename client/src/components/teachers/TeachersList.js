import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// import Select from 'react-select'

import { Link } from 'react-router-dom'

const TeachersList = () => {
  const [teachers, setTeachers] = useState([])
  const [updatedTeachers, setUpdatedTeachers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [hasError, setHasError] = useState({ error: false, message: '' })

  useEffect(() => {
    const getTeachers = async () => {
      try {
        const { data } = await axios.get('/api/teachers')
        setTeachers(data)
        setUpdatedTeachers(data)
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
    setUpdatedTeachers(filteredTeachers)
  }

  console.log(updatedTeachers)




  return (


    <>
    <Container className='teacherlist_container'>
      {/* <Link to="/addteacher" className='btn btn-warning'>add yourself as a teacher ↩️ </Link> */}
      <p className='lead'>Search from our {teachers.length} trusted teachers</p>


      <div className='form_container'>
        <Form onSubmit={handleSubmit}>
          <Form.Label htmlFor="inputPassword5">Write the language you want to find teachers for</Form.Label>
          <Form.Control
            aria-describedby="passwordHelpBlock" type='text' id='teacherssubmit' placeholder="I want to Learn" onChange={event => {
              setSearchTerm(event.target.value)
            }} />
        </Form>
      
      {/* <div className='select_form_container'> */}
      <form className='select_form' onChange={handleChange}>
        <label>Search by max price </label>
        <select class="form-select" aria-label="Default select example">
          <option value="" disabled selected >-£-</option>
          <option value="10000">Any</option>
          <option value="10">£10</option>
          <option value="15">£15</option>
          <option value="20">£20</option>
          <option value="25">£25</option>
          <option value="30">£30</option>
          <option value="35">£35</option>
        </select>
      </form>
      {/* </div>  */}
      </div> 
      <ul className='teachers_list'></ul>
      {/* {updatedTeachers.length > 0 ?
        <> */}
          {/* <Container className='teachers_container'> */}
            {updatedTeachers && updatedTeachers.filter((teachers) => {
            if (searchTerm === '') {
              return updatedTeachers
            } else if (teachers.teaches.toLowerCase().includes(searchTerm.toLowerCase())) {
              return updatedTeachers
            }
          }).map(teacher => {
            const { firstName, lastName, displayPicture, teaches, location, pricePerHour, avgRating, _id } = teacher
            return (
              <Col key={_id} md="10" lg="8" className="teacher mb-4">
                {/* <Link id="teacher_card_link" to={`/teachers/${teacher._id}`}> */}
                  <Card className="h-100">
                    <Card.Header><h3>{firstName} {lastName}</h3>
                    </Card.Header>
                    <Card.Body>
                      <Row className="row1">
                        <Col sm>
                          <div className="image_container">
                            <Card.Img className="img-fluid img-thumbnail" src={displayPicture} />
                          </div>
                        </Col>
                        <Col sm>
                          <Card.Title><p>{firstName} teaches {teaches}</p></Card.Title>
                          <Card.Text>
                            <p>{firstName} is based in {location}</p>
                          </Card.Text>
                          <Card.Text>
                            <p>Average Rating : {avgRating}</p>
                          </Card.Text>
                        </Col>
                        <Col sm className='button_col'>
                          <div className="button_container">
                          {/* <Button variant="warning">Warning</Button>{' '} */}
                          <Link to={`/teachers/${teacher._id}`} id="teacher_card_link" className='btn btn-warning list'>View Profile </Link> 
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                    <Card.Footer className="text-center">
                      <p>{firstName}'s Hourly Rate = £{pricePerHour}</p>
                    </Card.Footer>
                  </Card>
                {/* </Link> */}
              </Col>
            )
          })}
          {/* </>
      } */}
        {/* </Container> */}
        </Container>

    </>
  )
}


export default TeachersList
