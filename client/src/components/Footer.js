import React from 'react'
import FooterImage from '../images/3.png'

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="row1 col-md-3 col-sm-6">
                    <img
                        src={FooterImage} className="footer-image" alt="person studying online">
                    </img>
                    </div>
                    <div className="brand col-md-3 col-sm-6">
                        <h4><a href="/" className="all navbar-brand">Esperanto.</a></h4>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Platform</h4>
                        <ul className="list-unstyled">
                            <li><a href="/login">Login</a></li>
                            <li><a href="/register">Register</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Social</h4>
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