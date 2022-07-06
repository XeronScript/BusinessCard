import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faFacebook, faInstagram, faGithub} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <div className="footer-container">
            <a href="https://twitter.com/?lang=pl"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.github.com"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
    )
}
