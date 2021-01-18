import React from 'react'

import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

import './SocialMedia.scss'

export default function SocialMedia() {
    const SocialNetworks = [
        {
            href: "https://github.com/JhonatanOropeza",
            icon: <FaGithub size={24} className="Icon" />,
        },
        {
            href: "https://www.linkedin.com/in/jhonatan-oropeza-59ba14192/",
            icon: <AiFillLinkedin size={24} className="Icon" />,
        },
        {
            href: "https://www.facebook.com/jhonatan.oropeza",
            icon: <FaFacebookF size={24} className="Icon" />,
        }
    ]

    return (
        <div className="SocialMedia">
            {
                SocialNetworks.map((social, i) => (
                    <a key={i} href={social.href } target="_blank" rel="noopener noreferrer">
                        {social.icon}
                    </a>
                ))
            }
        </div>
    )
}
