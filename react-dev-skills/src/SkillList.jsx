import React from 'react';
import SkillListItem from'./SkillListItem.jsx';

const SkillList = ({skills}) => {
    return (
        <ul>
            {skills.map((value, key) => (
                <SkillListItem skill={value} index={key}/>
            ))}
        </ul>
    );
}

export default SkillList;