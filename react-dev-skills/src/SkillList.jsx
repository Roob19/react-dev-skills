import React from 'react';
import SkillListItem from'./SkillListItem.jsx';
import './SkillList.css';

const SkillList = ({skills}) => {
    return (
        <ul className="SkillList">
            {skills.map((value, key) => (
                <SkillListItem skill={value} index={key}/>
            ))}
        </ul>
    );
}

export default SkillList;