import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


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
      alt="...">
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
          {/* <Card.Link href="#">Another Link</Card.Link> */}
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
      {/* <Card.Link href="#">Another Link</Card.Link> */}
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
      {/* <Card.Link href="#">Another Link</Card.Link> */}
    </Card.Body>
  </Card>
  </Col>
  </Row>
</Container>
<Container fluid>
  <Row className="footer">
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
</>
  )
}

// <>
//   <div className="hero">
//     <Card className="homecard">
//       <Card.Body>
//         <h1>Esperanto.</h1>
//         <h2>Your personal learning portal.</h2>
//         <p>
//           Few good word for our beloved website. Few good word for our beloved
//           website. Few good word for our beloved website. Few good word for
//           our beloved website. Few good word for our beloved website.
//         </p>
//         <button className="btn btn-warning" type="button">
//           Find your teacher ⤴️
//         </button>
//       </Card.Body>
//     </Card>
//     <img
//       src="https://scdn.italki.com/ng/static/image/milkway/homepage/content2.png"
//       className="img-thumbnail"
//       alt="..."
//     ></img>
//   </div>
//   <div className="info-cards">
//     <Card style={{ width: '23rem' }}>
//       <Card.Body>
//         <Card.Title>Languages</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">
//           Online Learning
//         </Card.Subtitle>
//         <Card.Text>Large selection of languages</Card.Text>
//         {/* <Card.Link href="#">Card Link</Card.Link>
//           <Card.Link href="#">Another Link</Card.Link> */}
//       </Card.Body>
//     </Card>

//     <Card style={{ width: '23rem' }}>
//       <Card.Body>
//         <Card.Title>Live sessions with native-speaking teachers</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">
//           Online Learning
//         </Card.Subtitle>
//         <Card.Text>
//           Learn from the best teachers. Participate from the comfort of your
//           home!
//         </Card.Text>
//         {/* <Card.Link href="#">Card Link</Card.Link>
//           <Card.Link href="#">Another Link</Card.Link> */}
//       </Card.Body>
//     </Card>

//     <Card style={{ width: '23rem' }}>
//       <Card.Body>
//         <Card.Title>Lifetime access</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">
//           Online Learning
//         </Card.Subtitle>
//         <Card.Text>
//           The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
//           dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//         </Card.Text>
//         {/* <Card.Link href="#">Card Link</Card.Link>
//           <Card.Link href="#">Another Link</Card.Link> */}
//       </Card.Body>
//     </Card>
//   </div>
// </>

export default Home