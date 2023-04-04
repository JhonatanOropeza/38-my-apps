import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import SocialMedia from './SocialMedia/SocialMedia';
import ImageG from '../0_General/ImageG';
import BackgroundSection from '../0_General/BackgroundSection';

import './Profile.scss';

const data = [
    { title: 'TELÉFONO: ', info: '55 33 20 29 75' },
    { title: 'EMAIL: ', info: 'jhon_oropeza810@hotmail.com' },
    { title: 'DIRECCIÓN 1: ', info: 'Huitzila, Tizayuca, Hidalgo.' },
    { title: 'DIRECCIÓN 2: ', info: 'Vallejo, S. C. T, Gustavo A. Madero, CDMX.' }
]

export default function Profile() {
    return (
        <div className="profile">
            <BackgroundSection />
            <div className="dark" />
                <Container className='box'>
                    <Row className="info">
                        <Col xs={12} md={4} className="info__image">
                            <ImageG fileName="avatar.jpg" alt="Jhonatan Isac Oropeza Mendoza" />
                        </Col>
                        <Col xs={12} md={8} className="info__data">
                            <p>Jhonatan Isaac Oropeza Mendoza</p>
                            <p>Desarrollador Web</p>
                            <div className="more__info">

                                {
                                    data.map((item, i) => (
                                        <div key={i} className="item">
                                            <Row className="item__row">
                                                <Col xs={12} md={5}>
                                                    <p className="PrimerP">{item.title}</p>
                                                </Col>
                                                <Col xs={12} md={7}>
                                                    <p className="SegundoP">{item.info}</p>
                                                </Col>
                                            </Row>
                                        </div>

                                    ))
                                }

                            </div>
                        </Col>
                    </Row>
                    <SocialMedia />
            </Container>
        </div>
    )
}
