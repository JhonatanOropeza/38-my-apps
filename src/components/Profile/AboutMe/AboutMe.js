import React from 'react'
import { Container, Button } from 'react-bootstrap';

import CV from '../../../documents/cv.pdf';

import "./AboutMe.scss"
export default function AboutMe() {
    return (
        <div>
            <Container className="about-me">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <hr />
                <a href={CV} target="_blank" rel="noreferrer">
                    <Button>Descargar CV</Button>
                </a>
            </Container>
        </div>
    )
}
