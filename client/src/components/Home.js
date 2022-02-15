import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PeopleTalking from '../images/people-talking-img.png'
import TeacherImg from '../images/join.png'


const Home = () => {
  return (
<>
<Container fluid>
  <Row className="row1">
    <Col sm={8}>
      <h1>Esperanto.</h1>
      <h2>Your personal learning portal.</h2>
        <p>
        Learn a language early morning, lunchtime, evenings or at weekends. Choose from Arabic, French, German, Greek, Italian, Japanese, Korean, Mandarin, Portuguese, Spanish and Russian. One to one and private group classes also available.
        </p>
        <p className="nunito">Choose your language and expand your world!</p>
        
        <Link to="/teachers" className='btn btn-warning'>Find your teacher ↩️ </Link>
    </Col>
    <Col sm={4}>
      <img
      src="https://media.istockphoto.com/photos/student-using-laptop-having-online-class-with-teacher-picture-id1288092444?b=1&k=20&m=1288092444&s=170667a&w=0&h=L968NhkwgRZhpHWoNtdKy_Hk4kNELzb88Jp9Ja5qzWY="
      className="img-thumbnail"
      alt="person studying online">
      </img>
    </Col>
    <Col sm={3}>
      <img src={TeacherImg} className="img-thumbnail" alt="animated teacher"></img>
    </Col>
  </Row>

  <Row className="row2">
    <Col sm>
      <Card>
        <Card.Body>
          <Card.Title>Large selection of languages </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Online Learning
          </Card.Subtitle>
          <Card.Text>
            Find the languages you want to learn and practice at your own pace.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

  <Col sm>
    <Card>
      <Card.Body>
        <Card.Title>Native-speaking teachers</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Live online sessions with your teachers
        </Card.Subtitle>
        <Card.Text>
          Find teachers from all over the world sharing their languages,
          dialects, and cultures.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>

  <Col sm>
  <Card>
    <Card.Body>
      <Card.Title>Lifetime access </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        Online learning
      </Card.Subtitle>
      <Card.Text>
        We keep your course materials so you can access them whenever you need.
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  </Row>
  <Row className="animated-img-chatting">
    <img src={PeopleTalking} alt="people chatting"></img>
  </Row> 
</Container>
</>
  )
}

export default Home