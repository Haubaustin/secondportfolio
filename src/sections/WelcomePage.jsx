import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const welcomePageImage = require("../assets/IMG_6823.jpg")


const WelcomePage = ({ref}) => {
    const [data, setData] =useState(false)

    

    return (
        <section className="WelcomePage" ref={ref}>
            <img className="welcomePageImage" src={welcomePageImage} alt="" />
            <div className="welcomePageText">
                <h1 className="welcomePageTextTitle">AUSTIN HAUBENSCHILD</h1>
                <h2 className="welcomePageTextTitle2">FULLSTACK DEVELOPER</h2>
                <div className="welcomePageSocial">
                    <a href="https://www.linkedin.com/in/austin-haubenschild/" 
                        target="_blank" 
                        rel="noreferrer">
                        <FontAwesomeIcon 
                            icon={faLinkedin} 
                            size="2x" 
                            className="icon" />
                    </a>
                    <FontAwesomeIcon 
                        icon={faEnvelope} 
                        size="2x" 
                        className="icon" 
                        onClick={() => window.location = 'mailto:haubaustin@gmail.com'}/>
                    <a href="https://github.com/Haubaustin"
                        target="_blank" 
                        rel="noreferrer">
                        <FontAwesomeIcon 
                            icon={faGithubSquare} 
                            size="2x" 
                            className="icon" />
                    </a>
                </div>
                <h4 className="welcomePageTextTitle3" 
                    onClick={()=>{setData(true)}}
                    hidden={data}>
                    About Me
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        className="arrowRight" 
                        />
                </h4>
                {data && <div className="aboutMe" 
                    onClick={()=>{setData(false)}}
                    hidden={data}
                    >
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        className="arrowLeft"
                        hidden={data}
                        />
                    <p className="aboutMePara">Hello!</p>
                    <p className="aboutMePara">I am a Fullstack Developer with skills in Node, React, Express, SQL, Javascript, C#, .Net, and Python. When I am not working on developing my programming skills, I supplement my knowledge with IT certifications. Among others, I have achieved the AWS Certified Solutions Architect - Associate, Google Associate Cloud Engineer, and my COMPTIA Security+(IAT-II)</p>
                    <p className="aboutMePara">Before becoming a software developer, I completed my B.A. in Political Science at California Polytechnic - San Luis Obispo. After graduating, I worked at a COVID-19 testing center as a healthcare worker and worked my way up to the position of Director of COVID operations. During my time as Director, our six testing sites tested over 50,000 unique patients and pulled in over three million dollars in the month of December 2020. I enacted changes to the EHR and CRM systems that enabled the testing sites to handle large influxes of patients with minimal staffing.</p>
                    
                </div>}
            </div>
        </section>
    )
}

export default WelcomePage