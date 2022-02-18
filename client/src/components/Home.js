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
      console.log('it\'s me')
      teachers.forEach(teachers => {
        if (!arr.includes(teachers.teaches)) {
          arr.push(teachers.teaches)
        }
      })
      setLanguages(arr)
    }
    countLanguages()
  })

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


// {/* <Row className="row2">
//     <Col sm>
//       <Card>
//         <Card.Body>
//           <Card.Title>Large selection of languages </Card.Title>
//           <Card.Subtitle className="mb-2 text-muted">
//             Online Learning
//           </Card.Subtitle>
//           <Card.Text>
//             Find the languages you want to learn and practice at your own pace.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </Col>

//   <Col sm>
//     <Card>
//       <Card.Body>
//         <Card.Title>Native-speaking teachers</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">
//           Live online sessions with your teachers
//         </Card.Subtitle>
//         <Card.Text>
//           Find teachers from all over the world sharing their languages,
//           dialects, and cultures.
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   </Col>

//   <Col sm>
//   <Card>
//     <Card.Body>
//       <Card.Title>Lifetime access </Card.Title>
//       <Card.Subtitle className="mb-2 text-muted">
//         Online learning
//       </Card.Subtitle>
//       <Card.Text>
//         We keep your course materials so you can access them whenever you need.
//       </Card.Text>
//     </Card.Body>
//   </Card>
//   </Col>
//   </Row> */}


// {/* <Col sm={4}>
//       <img
//       src="https://media.istockphoto.com/photos/student-using-laptop-having-online-class-with-teacher-picture-id1288092444?b=1&k=20&m=1288092444&s=170667a&w=0&h=L968NhkwgRZhpHWoNtdKy_Hk4kNELzb88Jp9Ja5qzWY="
//       className="img-thumbnail"
//       alt="person studying online">
//       </img>
//     </Col> */}