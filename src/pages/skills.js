import React from 'react';
import { Container } from 'react-bootstrap';

import BasicLayout from "../Layouts/BasicLayout";
import SkillList from '../components/SkillsList/SkillsList';
import './Skills.scss';

import {
    backendSkills, backendSkillsColors,
    databaseSkills, databaseSkillsColors,
    frontendSkills, frontendSkillsColors,
    othersSkills, othersSkillsColors,
    languages, languagesColors
} from '../utils/skills'

export default function Skills() {
    return (
        <BasicLayout menuColor="#000">
            <Container className="skills">
                <div className="skills__block">
                    <h2>Backend</h2>
                    <SkillList skills={backendSkills} colors={backendSkillsColors}/>
                </div>
                <div className="skills__block">
                    <h2>Sistemas de  gestión de bases de datos</h2>
                    <SkillList skills={databaseSkills} colors={databaseSkillsColors}/>
                </div>
                <div className="skills__block">
                    <h2>Frontend</h2>
                    <SkillList skills={frontendSkills} colors={frontendSkillsColors}/>
                </div>
                <div className="skills__block">
                    <h2>Otras herramientas</h2>
                    <SkillList skills={othersSkills} colors={othersSkillsColors}/>
                </div>
                <div className="skills__block">
                    <h2>Idiomas</h2>
                    <SkillList skills={languages} colors={languagesColors}/>
                </div>
            </Container>
        </BasicLayout>
    )
}