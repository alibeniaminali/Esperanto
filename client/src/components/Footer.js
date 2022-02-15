import React from 'react'
// import { Container } from 'react-bootstrap'
import FooterImage from '../images/logo.png'

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="logo-container col-md-3 col-sm-6">
                    <img
                        src={FooterImage} className="footer-logo" alt="logo">
                    </img>
                    </div>
                    <div className="brand col-md-3 col-sm-6">
                        <h4><a href="/" className="all navbar-brand">Esperanto.</a></h4>
                    </div>
                    <div className="platform col-md-3 col-sm-6">
                        <h4>Platform</h4>
                        <hr />
                        <ul className="list-unstyled">
                            <li><a href="/login">Login</a></li>
                            <li><a href="/register">Register</a></li>
                        </ul>
                    </div>
                    <div className="socials col-md-3 col-sm-6">
                        <h4>Social</h4>
                        <hr />
                        <ul className="list-unstyled">
                        <li><a href="/">LinkedIn</a></li>
                        <li><a href="/">GitHub</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="text xs-center">&copy;{new Date().getFullYear()} Esperanto. App - London - United Kingdom</p>
                </div>
            </div>
        </div>
    )
}

export default Footer