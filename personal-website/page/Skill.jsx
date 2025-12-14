import { useState,useEffect } from "react";
import "./skill.css";

export default function skill() {    
    const [skills, setSkills] = useState([]);
    const [activeSkill, setActiveSkill] = useState(null);

    useEffect(() => {
        fetch("https://website-api-9hff.onrender.com/api/skills").then((res) => res.json())
        .then((data) => setSkills(data))
        .catch((err) => console.error("ERROR CAN'T LOAD DATA",err));
    },[]);

    return (
        <>
            <div id="skill" className="skill">
                <h2 className="skill-title">Skills & Experience</h2>
                <div className="container">
                    {skills.map((skill) =>
                        <div key={skill.id}>
                            {activeSkill === skill.id && (
                                <div className="popup-bg">
                                    <div className="popup">
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