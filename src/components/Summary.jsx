import React from "react"
import KeaneProfilePic from "../keane.jpg";
import '../styles/Summary.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Summary() {
  const envelopeIcon = <FontAwesomeIcon icon={faEnvelope} className="icon"/>
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} className="icon"/>
  
    return (
      <header>
        <img src={KeaneProfilePic} style={{ maxWidth: 317 }}/>
        <h1>Keane Tay</h1>
        <h2>Software Developer</h2>
        <h3>keanetay.com</h3>
        <div className="summary-socials">
          <button className="btn"><a href="mailto: keanetay@gmail.com">{envelopeIcon}Email</a></button>
          <button id="btnLinkedin"><a href="https://www.linkedin.com/in/keane-tay-21061116b/" className="linkedin" target="_blank">{linkedinIcon}LinkedIn</a></button>
        </div>
      </header>)
}