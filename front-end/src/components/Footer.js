import React from 'react'
import { SocialIcon } from 'react-social-icons';
import "./Footer.css"

export default function Footer() {
    return (
        <section className="Footer">
            <section className="footer-icons">
            <SocialIcon url="https://www.linkedin.com/in/raffy-cordero-1857a0131" />
            <SocialIcon url="https://github.com/rafogi" />
            <SocialIcon url="https://www.instagram.com/raficturetime/" />
            </section>
        </section>
    )
}


