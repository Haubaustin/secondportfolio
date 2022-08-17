import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const welcomePageImage = require("../assets/IMG_6823.jpg")


const WelcomePage = () => {

    return (
        <section className="WelcomePage">
            <img className="welcomePageImage" src={welcomePageImage} alt="" />
            <div className="welcomePageText">
                <h1 className="welcomePageTextTitle">AUSTIN HAUBENSCHILD</h1>
                <h2 className="welcomePageTextTitle2">FULLSTACK DEVELOPER</h2>
                <div className="welcomePageSocial">
                    <a href="https://www.linkedin.com/in/austin-haubenschild/" 
                        className="icon" 
                        target="_blank" 
                        rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" />
                    <h2>LinkedIn</h2>
                    </a>
                    <FontAwesomeIcon 
                        icon={faEnvelope} 
                        size="2x" 
                        className="icon" 
                        onClick={() => window.location = 'mailto:haubaustin@gmail.com'}/>
                    <a href="https://github.com/Haubaustin"
                        className="icon" 
                        target="_blank" 
                        rel="noreferrer">
                        <FontAwesomeIcon icon={faGithubSquare} size="2x" className="icon" />
                    <h2>GitHub</h2>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default WelcomePage