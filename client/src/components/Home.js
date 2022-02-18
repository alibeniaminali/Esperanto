import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TeacherImg from '../images/joinus.png'
import LearningLady from '../images/learning-lady.png'



const Home = () => {
  const [teachers, setTeachers] = useState([])
  const [hasError, setHasError] = useState({ error: false, message: '' })
  const [languages, setLanguages] = useState([])

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

  useEffect(() => {
    function countLanguages() {
      let arr = []
      teachers.forEach(teachers => {
        if (!arr.includes(teachers.teaches)) {
          arr.push(teachers.teaches)
        }
      })
      setLanguages(arr)
    }
    countLanguages()
  }, [teachers])

  return (
    <>
      {/* Row 1 */}
      <Container fluid>
        <Row className="row1">
          <Col sm={5}>
            <h1>Esperanto.</h1>
            <h2>Your personal learning portal</h2>
            <p>
              Learn a language in the early morning, lunchtime, evenings or even at weekends. Choose from Arabic, French, German, Greek, Italian and a whole bunch more! One to one and group classes also available.
            </p>
            <p>Choose your language and expand your horizons! 🌎</p>
            <Link to="/teachers" className='btn btn-warning'>Find your teacher ↩️ </Link>
          </Col>
          <Col sm={3}>
            <img src={LearningLady} className="img-thumbnail" alt="animated teacher"></img>
          </Col>
        </Row>
        {/* End of Row 1 */}
        {/* Row 2 */}
        <Row className="row2">
          <Col sm={3}>
            <img src={TeacherImg} className="image" alt="animated teacher"></img>
          </Col>
          <Col sm={3}>
            <h2>1-on-1 lessons with more than {languages.length} languages available!</h2>
            <ul>
              <li>Learn from certified teachers with proven experience.</li>
              <li>Find teachers from all over the world sharing their languages, dialects, and cultures</li>
              <li>Study at your own pace without worrying about rigid schedules or fixed fees</li>
            </ul>
          </Col>
        </Row>
        {/* End of Row 2 */}
        <Row className="row3">
          <Col sm={4}>
            <h3>Learn more than just a language</h3>
            <p>On Esperanto it's about mastering a timeless skill, cultivating new perspectives, and connecting with fascinating people from around the world.</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home