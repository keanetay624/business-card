import React from "react"
import '../styles/SocialLinks.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function SocialLinks() {
    const facebookIcon = <FontAwesomeIcon icon={faFacebookF} size="xl"/>;
    const githubIcon = <FontAwesomeIcon icon={faGithub} size="xl"/>;
    const instagramIcon = <FontAwesomeIcon icon={faInstagram} size="xl"/>;
    return (
        <footer className="social-links">
            <button className="btn btn--social"><a href="https://www.facebook.com/keanettk/" target="blank_">{facebookIcon}</a></button>
            <button className="btn btn--social"><a href="https://www.instagram.com/ttkkeane/" target="blank_">{instagramIcon}</a></button>
            <button className="btn btn--social"><a href="https://www.github.com/keanetay624/" target="blank_">{githubIcon}</a></button>
        </footer>
    )
}