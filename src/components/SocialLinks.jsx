import React from "react"
import '../styles/SocialLinks.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function SocialLinks() {
    const facebookIcon = <FontAwesomeIcon icon={faFacebookSquare} size="xl"/>;
    const githubIcon = <FontAwesomeIcon icon={faGithub} size="xl"/>;
    const instagramIcon = <FontAwesomeIcon icon={faInstagram} size="xl"/>;
    return (
        <footer className="social-links">
            <button><a href="https://www.facebook.com/keanettk/" target="blank_">{facebookIcon}</a></button>
            <button><a href="https://www.instagram.com/ttkkeane/" target="blank_">{instagramIcon}</a></button>
            <button><a href="https://www.github.com/keanetay624/" target="blank_">{githubIcon}</a></button>
        </footer>
    )
}