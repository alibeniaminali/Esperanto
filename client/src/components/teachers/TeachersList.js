import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const TeachersList = () => {
  const [teachers, setTeachers] = useState([])
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

  return (
    <Container className="mt-4">
      <Row>
        <>
          {teachers.map((teacher) => {
            const { firstName, pricePerHour, _id } = teacher
            return (
              <Col key={_id} md="6" lg="4" className="teacher mb-4">
                <Card className="h-100">
                  <div className="card-image m-auto">
                    <p className="w-100"> {firstName}</p>
                  </div>
                  <Card.Footer className="text-center">
                    {pricePerHour}
                  </Card.Footer>
                </Card>
              </Col>
            )
          })}
        </>
      </Row>
    </Container>
  )
}

export default TeachersList
