import React from 'react'

//import SkillBar from 'react-skills-bars';
import loadable from '@loadable/component';
import './SkillsList.scss';

const SkillBar = loadable(()=> import("react-skills-bars"));

export default function SkillsList({ skills, colors }) {
    return (
        <div className="list-skills">
            <SkillBar skills={skills} colors={colors} animationDelay={0}/>
        </div>
    )
}
