import React from 'react'
import { Container, Row, Col, Image} from 'react-bootstrap';

import SocialMedia from './SocialMedia/SocialMedia';
import ImageG from '../0_General/ImageG';
//import backgroundImage from '../../images/3_architecture.jpg';

import './Profile.scss';

const data = [
    { title: 'TELÉFONO: ', info: '55 33 20 29 75' },
    { title: 'EMAIL: ', info: 'jhon_oropeza810@hotmail.com' },
    { title: 'DIRECCIÓN 1: ', info: 'C. Queretaro #95 Huitzila, Hidalgo.' },
    { title: 'DIRECCIÓN 2: ', info: 'Vallejo 1007, S. C. T, Gustavo A. Madero, CDMX.' }
]

export default function Profile() {
    return (
        <div className="profile">
            <div className="wallpaper">
                <ImageG fileName="3_architecture.jpg" alt="portada" />
            </div>
            <div className="dark" />
            <Container className='box'>
                <Row className="info">
                    <Col xs={12} md={4}>
                        <ImageG fileName="avatar.jpg" alt="Jhonatan Isac Oropeza Mendoza"/>
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
                    </Col>
                </Row>
                <SocialMedia />
            </Container>
        </div>
    )
}
