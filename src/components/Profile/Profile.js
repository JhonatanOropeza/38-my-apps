import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

import SocialMedia from './SocialMedia/SocialMedia';

import ImageProfile from '../../images/avatar.jpg';

import './Profile.scss';

const data = [
    { title: 'Teléfono: ', info: '55 33 20 29 75' },
    { title: 'Email: ', info: 'jhon_oropeza810@hotmail.com' },
    { title: 'Dirección 1: ', info: 'C. Queretaro #95 Huitzila, Hidalgo.' },
    { title: 'Dirección 2: ', info: 'Vallejo 1007, S. C. T, Gustavo A. Madero, CDMX.' }
]

export default function Profile() {
    return (
        <div className="profile">
            <div className="wallpaper" />
            <div className="dark" />
            <Container className='box'>
                <Row className="info">
                    <Col xs={12} md={4}>
                        <Image src={ImageProfile} fluid />
                    </Col>
                    <Col xs={12} md={8} className="info__data">
                        <p>Jhonatan Isaac Oropeza Mendoza</p>
                        <p>Desarrollador Web</p>
                        <hr />
                        <div className="more__info">
                            {
                                data.map((item, i) => (
                                    <div key={i} className="item">
                                        <p>{item.title}</p>
                                        <p>{item.info}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <SocialMedia />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
