import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FooterImage from '../images/logo.png'

const Footer = () => {
    return (
        <Container fluid className="footer">
            <Row className="footer-row">
                <Col className="footer-logo col-sm">
                <img
                    src={FooterImage} className="footer-logo" alt="logo">
                </img>
                </Col>
                <Col className="footer-title col-sm">
                <h4><a href="/" className="all navbar-brand">Esperanto.</a></h4>
                </Col>
                {/* <Col className="footer-links col-sm">
                    <h4>Platform</h4>
                    <ul className="list-unstyled">
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                    </ul>
                </Col>
                <Col className="footer-links col-sm">
                    <h4>Socials</h4>
                    <ul className="list-unstyled">
                        <li><a href="https://github.com/alibeniaminali/project-3" target="blank" >GitHub</a></li>
                        <li><a href="/">LinkedIn</a></li>
                    </ul>
                </Col> */}
            </Row>
            <div className="footer-bottom">
                <p className="text xs-center">&copy;{new Date().getFullYear()} Esperanto. App - London - United Kingdom</p>
            </div>
        </Container>
    )
}

export default Footer