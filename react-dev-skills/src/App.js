// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import SkillList from './SkillList.jsx';
// import SkillListItem from './SkillListItem.jsx';
import NewSkillForm from './NewSkillForm.jsx';
import './style.css';

function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);

  const addSkill = (skill) => {
    setSkills([...skills, skill]);
  }

  const [showSkills, setShowSkills] = useState(true);

  return (
    <div className="App padding-0 teal-text">
      <h1>React Dev Skills</h1>
      <hr></hr>
      {showSkills && <SkillList skills={skills}/>}
      <NewSkillForm addSkill={addSkill}/>
    </div>
  );
}

export default App;
