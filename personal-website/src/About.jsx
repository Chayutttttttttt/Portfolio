import "./about.css";
import { useEffect } from "react";

function About() {
    useEffect(() => {
    const boxes = document.querySelectorAll(".about-img-container")
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
          }
        })},{
        threshold: 0.2,
      }
    )
    boxes.forEach((box) => observer.observe(box))
    return () => {
      boxes.forEach((box) => observer.unobserve(box))
    }
  }, [])
  return (
    <>
        <div id="about" className="about h-screen">
            <div className="about-box">
                <div className="about-container">
                    <div className="about-img-box">
                        <div className="about-img-container">
                            <div className="about-img">
                                <img src="http://localhost:8000/api/my-img" alt="profile" className="img" style={{animation : "img-moving 5s ease-in-out infinite"}} />
                            </div>
                            <div className="shapes">
                                <li className="top-[100px] right-[600px]
                                                w-[60px] h-[60px]"
                                                style={{animation : "moving 4s ease-in-out infinite"}}></li>
                                <li className="top-[390px] right-[600px]
                                                w-[80px] h-[80px]"
                                                style={{animation : "moving 10s ease-in-out infinite"}}>
                                                </li>
                                <li className="top-[350px] right-[600px]
                                                w-[80px] h-[60px]"
                                                style={{animation : "moving 6s ease-in-out infinite"}}></li>
                                <li className="top-[350px] right-[550px]
                                                w-[100px] h-[120px]"
                                                style={{animation : "moving 4s ease-in-out infinite"}}></li>
                                <li className="top-[200px] right-[600px]
                                                w-[140px] h-[130px]"
                                                style={{animation : "moving 7s ease-in-out infinite"}}></li>
                                <li className="top-[200px] right-[600px]
                                                w-[80px] h-[70px]"
                                                style={{animation : "moving 8s ease-in-out infinite"}}></li>
                                <li className="top-[400px] right-[400px]
                                                w-[80px] h-[70px]"
                                                style={{animation : "moving 9s ease-in-out infinite"}}></li>
                                <li className="top-[180px] right-[640px]
                                                w-[100px] h-[80px]"
                                                style={{animation : "moving 5s ease-in-out infinite"}}></li>
                                <li className="top-[80px] right-[630px]
                                                w-[120px] h-[100px]"
                                                style={{animation : "moving 6s ease-in-out infinite"}}></li>
                                <li className="top-[390px] right-[430px]
                                                w-[100px] h-[100px]"
                                                style={{animation : "moving 12s ease-in-out infinite"}}></li>
                                <li className="top-[300px] right-[510px]
                                                w-[60px] h-[60px]"
                                                style={{animation : "moving 5s ease-in-out infinite"}}></li>
                                <li className="top-[380px] right-[710px]
                                                w-[70px] h-[70px]"
                                                style={{animation : "moving 4s ease-in-out infinite"}}></li>
                            </div>
                        </div>
                    </div>
                    <div className="about-text">
                        <h2 className="text-header">ผมคือใคร</h2>
                        <p>สวัดดีครับ! ผม<span>โฟล์ค </span> 
                            อายุ 16 ปีครับ เจ้าของช่อง MisTake 
                            ผมเป็นคนที่อยากลองอะไรใหม่ๆ ตลอดๆ 
                            ผมชอบการทำงานมาก ผมทำงานกับทีมได้ดีเลย 
                            ผมเป็นคนที่พร้อมจะพัฒนาตัวเองในทุกวันครับ
                        </p>
                        <p>ปัจจุบันผมกำลังศึกษาภาษา Python ,C++ ,HTML ,CSS ,JavaScripts ,React ,TailwindCSS, FastAPI,
                            ส่วน ภาษาอื่นๆ ที่ผมศึกษาก็มีคือ Lua สำหรับทำเกมจาก Roblox</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default About