import { useState, useEffect } from "react";
import "./welcome.css";

function Welcome() {
    const [fade, setFade] = useState(true);
    const [isEnglish, setIsEnglish] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIsEnglish(prev => !prev);
                setFade(true);
            }, 500);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="welcome">
            <div className="welcome-box">
                <div className="welcome-container">
                    <div className="area">
                        <div className="circles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </div>
                    </div>
                    <div className="welcome-text">
                        <h1 className="welcome-header">Hi it's me</h1>
                        <h1
                            id="name_changed"
                            className={`transition-text`}
                            style={{
                                fontWeight: isEnglish ? 900 : 600,
                                opacity: fade ? 1 : 0,
                                fontFamily: isEnglish
                                    ? "Zalando Sans Expanded, sans-serif"
                                    : "Kanit, sans-serif"
                            }}
                        >
                            {isEnglish ? "CHAYUTPHONG DIKHAM" : "ชยุตพงศ์ ดีคำ"}
                        </h1>
                        <p className="welcome-contain">
                            ผมเป็นคนที่พัฒนาตัวเองตลอดเวลา
                            ผมชอบที่จะทำงานที่ท้าทายและได้เรียนรู้สิ่งใหม่ๆ
                            ผมมีความสนใจในงานด้านกราฟฟิกเเละเทคโนโลยี
                            ผมมีความสนใจในการทำเกม พัฒนาเว็บไซต์ เเละการพัฒนา AI.
                        </p>
                    </div>
                </div>
            </div>
            <div className="-z-1 absolute opacity-10">
                <img src="https://website-api-9hff.onrender.com/img/table.png"/>
            </div>
        </div>
    );
}

export default Welcome;