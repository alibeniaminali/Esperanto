import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import StudentsImg from '../../images/students.png'
// import { ConnectionStates } from "mongoose";

const AboutUs = () => {

  return (
    <Container>
      <Row>
      <Col className="aboutus">
      <h1>About</h1>
      <h4>We are a team of four aspiring software developers in the midst of an intense learning course with General Assembly.</h4>
      </Col>
      <Col><img src={StudentsImg} className="aboutus-img" alt="animated teacher"></img></Col>
      </Row>
      {/* <Row>
      <Col><img src={StudentsImg} className="aboutus-img" alt="animated teacher"></img></Col>
      <Col className="aboutus">
      <h1>About</h1>
      <h4>We are a team of four aspiring software developers in the midst of an intense learning course with General Assembly.</h4>
      </Col>
      </Row> */}
    </Container>
  )
}

export default AboutUs


// <div id='aboutus'>
    //   <div id='page text'>
    //   <h5>So you want to know more?</h5>
    //   <p>We are a team of four aspiring software developers in the midst of an intense learning course with General Assembly. We definitely didn't steal this website idea/design.....anyone that disagrees can send their complaints via email to peterbid@email.com</p>
    //   <h5><em>“The limits of my language mean the limits of my world.”</em></h5>
    //   <p>Visit our brand new website and start expanding your horizons!</p>

    //   <p>If you'd like to learn more about this website's creators check out our individual pages ⬇️</p>
    //   <div className='links'>
    //     <ul className='linkedin'>
    //       <li>LinkedIn</li>
    //       <p><a href="https://www.linkedin.com/in/ali-ali-3ab7a3174/?originalSubdomain=uk" class="link">Ali Ali</a></p>
    //       <p><a href="https://www.linkedin.com/in/dougieb/" class="link">Dougie Brown</a></p>
    //       <p><a href="https://uk.linkedin.com/in/peter-bid-b224185a" class="link">Peter Bid</a></p>
    //       <p><a href="https://www.linkedin.com/in/elenagicheva/" class="link">Elena Gicheva</a></p>
    //     </ul>
    //     <ul className='github'>
    //       <li>GitHub</li>
    //       <p><a href="https://github.com/alibeniaminali" class="link">Ali Ali</a></p>
    //       <p><a href="https://github.com/Dougie-b" class="link">Dougie Brown</a></p>
    //       <p><a href="https://github.com/PeterBid" class="link">Peter Bid</a></p>
    //       <p><a href="https://github.com/ElenaGicheva" class="link">Elena Gicheva</a></p>
    //     </ul>
    //   </div>
    //   <div className='mb-3'>
    //     <h5>Recomended by</h5>
    //   </div>
    //   <div className='container-sm'> 
    //     <div className='mb-4'>
    //     <img className='img-fluid' src='https://static.npmjs.com/attachments/ck49cu3ceh1sust74dkzkfn69-grey-logowall.png' alt='brands' ></img>
    //     </div>
        
    //     </div>
    //   </div>

    // </div>

//   <Container>
  //   <Row className="justify-content-md-center">
  //     <Col xs lg="2">
  //     <img src={TeacherImg} className="img-thumbnail" alt="animated teacher"></img>
  //     </Col>
  //     <Col md="auto">
  //       <h4>We are a team of four aspiring software developers in the midst of an intense learning course with General Assembly.</h4>
  //       </Col>
  //     <Col xs lg="2">
  //       3 of 3
  //     </Col>
  //   </Row>
  //   <Row>
  //     <Col>1 of 3</Col>
  //     <Col md="auto">Variable width content</Col>
  //     <Col xs lg="2">
  //       3 of 3
  //     </Col>
  //   </Row>
  // </Container>
