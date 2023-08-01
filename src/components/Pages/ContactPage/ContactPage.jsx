import React from 'react'
import { Link } from "react-router-dom"

//images
//import WhatsappLogo from "../../../assets/Wh"
import WhatsappLogo from "../../../assets/WhatsApp.svg.png"
import InstagramLogo from "../../../assets/Instagram_logo_2016.svg.webp"
import LinkedInLogo from "../../../assets/LinkedIn_icon.svg.png"
import GmailLogo from "../../../assets/Gmail_icon_(2020).svg.webp"
import GitHubLogo from "../../../assets/GitHub-logo.wine.svg"

const ContactPage = () => {
  return (
    <div className='contactPage'>
        <div>
        <h1>¿Cómo te podés poner en contacto conmigo?</h1>
        <h3>Mis redes sociales son las siguientes, podés contactarme en cualquier momento:</h3>
        </div>
        <div>
          <ul>
            <li>
              <Link to="https://wa.me/541133290716" target='_BLANK'>
                <img src={WhatsappLogo} alt="Whatsapp logo" />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/jereguedesm/" target='_BLANK'>
                <img src={InstagramLogo} alt="Instagram logo" />
              </Link>
            </li>
            <li>
              <Link to="https://github.com/Jereguedesm" target='_BLANK'>
                <img src={GitHubLogo} alt="GitHub logo" />
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/jerem%C3%ADas-guedes-b8b480250/" target='_BLANK'>
                <img src={LinkedInLogo} alt="LinkedIn Logo" />
              </Link>
            </li>
            <li>
              <Link to="https://mailto:jeremiasguedes04@gmail.com" target='_BLANK'>
                <img src={GmailLogo} alt="Gmail Logo" />
              </Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default ContactPage