import { useState,useEffect } from "react";
import "./skill.css";

export default function skill() {
    return (
        <>
            <div id="skill" className="skill">
                <h2 className="skill-title">Skills</h2>
                <div className="container">                    
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
            </div>
        </>
    );
}