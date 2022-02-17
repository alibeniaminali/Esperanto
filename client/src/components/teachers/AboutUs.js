import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import StudentsImg from '../../images/students.png'
// import { ConnectionStates } from "mongoose";



const AboutUs = () => {

  return (
    <Container>
      <h1 className="h1">About Us</h1>
      <Row>
        <Col sm={8}>
          <h3 className="h3">We are a team of four aspiring software developers</h3>
          <h6 className="h6">Our Story</h6>
          <p className="lead">Much like the original Esperanto language that was created over 100 years ago in an attempt to connect people worldwide, as a team of developers ranging from diverse international backgrounds, we too wished to create a platform that took these principles into the internet age. A new Esperanto. </p>
          <h6 className="h6">The Website</h6>
          <p className="lead">Esperanto is a global language learning community that connects students and teachers for 1-on-1 online language lessons. We’re passionate about allowing everyone to learn languages in the most personalized and authentic way possible while also offering great flexibility for our teachers.</p>
          <p className="lead">Please contact us via the individual links to our Linkedin pages located in the Navbar.</p>
        </Col>
        <Col sm={4}><img src={StudentsImg} className="img-fluid" alt="animated teacher"></img></Col>
      </Row>
    </Container>
  )
}

export default AboutUs



