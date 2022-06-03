import React from 'react';
import { useState } from 'react';
import './NewSkillForm.css';


// function handleChange(event) {
//     const newSkillDetail = { ...newSkill, [event.target.name]: event.target.value };
//     setNewSkill(newSkillDetail);
// }
// function handleAddSkill(event){
//     event.preventDefault();
//     addSkill(newSkill);
//     setNewSkill({ name: "", level: 3 });
// }


const NewSkillForm = ({addSkill}) => {
    const [newSkill, setNewSkill] = useState({name: '', level: 3});

    const handleChange = (event) => {
        const newSkillDetail = {...newSkill, [event.target.name]: event.target.value};
        setNewSkill(newSkillDetail);
    }

    const handleAddSkill = (event) => {
        event.preventDefault();
        addSkill(newSkill);
        setNewSkill({name: '', level: 3});
    }

    return (
        <form 
            onSubmit={handleAddSkill} 
            className="NewSkillForm"
            >
            <label>Skill</label>
                <input
                    name="name"
                    value={newSkill.name}
                    onChange={handleChange}
                    required
                    pattern=".{4,}"
                    placeholder="New Skill"
                />
            <label>Level</label>
                <select 
                    name="level"
                    value={newSkill.level}
                    onChange={handleChange}>
                    <option value={5}>5</option>
                    <option value={4}>4</option>
                    <option value={3}>3</option>
                    <option value={2}>2</option>
                    <option value={1}>1</option>
                </select>
            <button type="submit">ADD SKILL!</button>
        </form>
    );
}

export default NewSkillForm;