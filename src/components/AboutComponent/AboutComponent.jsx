import "./aboutComponent.style.css";
import photo from "../../assets/1.jpg"

    const AboutComponent = () => {
        return (
            <div className="about-name">
                
                <div className="about-img">
                    <img src={photo} className="myPhoto" alt="about" />
                </div>
                <div className="myCV">
                    <h2 className="about-h1">About</h2>
                    <p className="about-p">My name is Slaviša Novaković, I graduated from the Faculty of Information Technology and earned a degree in Computer Science and Informatics in 2018. I also completed an introductory course for Frontend Developer in 2021</p>
                    <p className="about-p">Professional skills in HTML, CSS, SASS, Javascript, Team Building, Microsoft Office, and Adobe. As a beginner I did one great project, a scroll for contact.😊</p>
                </div>
                
            </div>
        )
    }
    export default AboutComponent;