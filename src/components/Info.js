import React from 'react'
import profile_pic from './../images/profile-pic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import './Info.css'

export default function Info() {
    return (
        <div className="info-container">
            <img src={profile_pic} alt="profile_pic.png" className="profile-pic"/>
            <h4 className="name">Kamil Sasin</h4>
            <p className="profession">Student Informatyki</p>
            <small className="email">kamil.sasin00@gmail.com</small>
            <div className="info-buttons">
                <button className="email-btn"><FontAwesomeIcon icon={faEnvelope} />Email</button>
                <button className="linkedin-btn"><FontAwesomeIcon icon={faLinkedin} />LinkedIn</button>
            </div>
        </div>
    )
}
