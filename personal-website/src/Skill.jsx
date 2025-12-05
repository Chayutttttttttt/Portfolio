import { useState,useEffect } from "react";
import "./skill.css";


export default function skill() {    
    const [skills, setSkills] = useState([]);
    const [activeSkill, setActiveSkill] = useState(null);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/skills").then((res) => res.json())
        .then((data) => setSkills(data))
        .catch((err) => console.error("ERROR CAN'T LOAD DATA",err));
    },[]);

    return (
        <>
            <div id="skill" className="skill">
                <h2 className="skill-title">Skills</h2>
                <div className="container">
                    {skills.map((skill) =>
                        <div key={skill.id}>
                            {activeSkill === skill.id && (
                                <div className="popup-bg" onClick={() => setActiveSkill(false)}>
                                    <div className="popup" onClick={() => setActiveSkill(activeSkill)}>
                                        <h2 className="skill-name">{skill.name}</h2>
                                        <button className="back" onClick={() => setActiveSkill(false)}>Back</button>
                                    </div>
                                </div>
                            )}
                            <div
                                key={skill.id}
                                className="box"
                                onClick={() => setActiveSkill(skill.id)}
                            >
                                {skill.name}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}