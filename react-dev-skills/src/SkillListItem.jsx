import React from 'react';
import './SkillListItem.css';

const SkillListItem = (props) => {
    return (
        <li className="SkillListItem">
            {props.index + 1}) {props.skill.name} <span className="level">Level: {props.skill.level}</span>
        </li>
    );
}

export default SkillListItem;