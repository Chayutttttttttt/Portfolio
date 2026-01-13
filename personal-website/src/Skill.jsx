import { useState,useEffect,Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import "./skill.css";

export default function skill() {    
    const [skills, setSkills] = useState([]);
    const [activeSkill, setActiveSkill] = useState(null);
    const {data = [] ,isLoading ,Error} = useQuery({
        queryKey : ["skills"],
        queryFn : async () => {
            const res = await fetch("https://website-api-9hff.onrender.com/api/skills");
            if (!res.ok) throw new Error("Something went wrong...");
            return res.json();
        }
    })
    // useEffect(() => {
    //     fetch("https://website-api-9hff.onrender.com/api/skills").then((res) => res.json())
    //     .then((data) => setSkills(data))
    //     .catch((err) => console.error("ERROR CAN'T LOAD DATA",err));
    // },[]);
    if (isLoading) return Loading();
    if (Error) return <div>Error: {Eorror.message}</div>;
    
    return (
        <>
            <div id="skill" className="skill">
                <Header/>
                <div className="container">
                    {data.map(skill =>  (
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
                    ))}
                </div>
            </div>
        </>
    );
}

function Loading() {
    return (
        <div className="skill">
            <Header/>
            <div className="loading"> Loading </div>
        </div>
    )
}

function Header() {
    return (
        <>
            <h2 className="skill-title">Skills & Experience</h2>
        </>
    )
}