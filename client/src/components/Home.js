import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PeopleTalking from '../images/people-talking-img.png'
// import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import Navbar from 'react-bootstrap/Navbar'


const Home = () => {
  return (
<>
<Container fluid>
  <Row className="row1">
    <Col sm={8}>
      <h1>Esperanto.</h1>
      <h2>Your personal learning portal.</h2>
        <p>
          Few good word for our beloved website. Few good word for our beloved
          website. Few good word for our beloved website. Few good word for
          our beloved website. Few good word for our beloved website.
        </p>
        <Link to="/teachers" className='btn btn-warning'>Find your teacher ↩️ </Link>
    </Col>
    <Col sm={4}>
      <img
      src="https://media.istockphoto.com/photos/student-using-laptop-having-online-class-with-teacher-picture-id1288092444?b=1&k=20&m=1288092444&s=170667a&w=0&h=L968NhkwgRZhpHWoNtdKy_Hk4kNELzb88Jp9Ja5qzWY="
      className="img-thumbnail"
      alt="person studying online">
      </img>
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
  <Row className="animated-img">
    <img src={PeopleTalking} alt="people chatting"></img>
  </Row>
  {/* <Row>
  <div className="collaborations">
    <p>Collaborating with :</p>
    <div className="collaborations-links">
    <a href="/">LinkedIn</a>
    <a href="/">LinkedIn</a>
    <a href="/">LinkedIn</a>
    </div>
  </div>
</Row> */}
</Container>


{/* <Navbar fixed="bottom">
<Container fluid>
  <Row>
    <Col sm>Our Logo</Col>
    <Col sm>Text to lead to home page </Col>
    <Nav className="me-auto">
            <NavDropdown title="About this website" id="collasible-nav-dropdown">
              <NavDropdown.Item
                href="https://www.linkedin.com/in/alibeniaminali/"
                target="_blank"
              >
                Ali Ali
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Dougie Brown
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Peter Bid</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Elena Gicheva
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                About this website
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
    
  </Row>
</Container>
</Navbar> */}
</>
  )
}

export default Home