import { useState } from "react";
import "./header.css";

function Header() {
    return (
        <>
            <header className="header">
                <div className="header-box">
                    <div className="header-container">
                        <h2 className="header-text">Home</h2>
                        <h2 className="header-text">About</h2>
                        <h2 className="header-text">Skill</h2>
                        <h2 className="header-text">Experience</h2>
                        <h2 className="header-text">Contact</h2>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header