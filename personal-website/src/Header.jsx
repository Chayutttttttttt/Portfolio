import "./header.css"

function Header() {
    return (
        <>
            <header className="header">
                <div className="header-box">
                    <div className="header-container">
                        <a href="#" className="header-text">Home</a>
                        <a href="#about" className="header-text">About</a>
                        <a href="#skill" className="header-text">Skill</a>
                        <a href="#" className="header-text">Experience</a>
                        <a href="#" className="header-text">Contact</a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header