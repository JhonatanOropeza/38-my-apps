import React from 'react';
import BasicLayout from "../Layouts/BasicLayout";
import './projects.scss';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AppArray from '../utils/projectsUtils';
import Seo from '../components/Seo/Seo';

export default function Projects() {

    return (
        <BasicLayout menuColor="#000">
            <Seo title="Proyectos"/>
            <Container className="projects">
                <h1>Proyectos</h1>
                <Row >
                    {
                        AppArray.map((item, i) => (
                            <Col xs={12} md={6} className="project" key={i}>
                                <Card style={{ MaxWidth: '34rem' }}>
                                    <div
                                        className="image"
                                        style={{ backgroundImage: `url("${item.image}")` }}
                                    />
                                    <Card.Img variant="top" src="" />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                        <div className="divButton">
                                            <a href={item.url} target="_blank" rel="noreferrer" >
                                                <Button className="boton_proyectos">Ver proyecto</Button>
                                            </a>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </BasicLayout>
    )
}
