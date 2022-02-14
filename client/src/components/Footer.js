import React from 'react'
import FooterImage from '../images/footer-image.png'

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                    <img
                        src={FooterImage} className="footer-image" alt="person studying online">
                    </img>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Platform</h4>
                        <ul className="list-unstyled">
                            <li>Sign up</li>
                            <li>Register</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Social</h4>
                        <ul className="list-unstyled">
                            <li>LinkedIn</li>
                            <li>GitHub</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="text xs-center">&copy;{new Date().getFullYear()} Esperanto. App - All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer