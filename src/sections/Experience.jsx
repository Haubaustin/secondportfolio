import ProjectCard from "../components/ProjectCard"
import WorkCard from "../components/WorkCard"
const Spathe = require("../assets/Spathe_Thumbnail.png")
const inVINtory = require("../assets/inVINtory.png")
const myLieu = require("../assets/myLieu.jpg")

const Experience = ({ref}) => {
    

    return (
        <section className="Experience" ref={ref}>
            <div className="workExperience">
                <h2 className="welcomePageTextTitle2">
                    EXPERIENCE
                </h2>
                <div className="experienceDiv">
                    <WorkCard 
                        company="Spathe Systems"
                        image={Spathe}
                        datesStarted="August 2022"
                        dateEnded="Present"
                        description="Full Stack Development"
                        jobTitle="Associate Web Software Developer"
                        location="San Diego, CA"/>
                    <WorkCard 
                        company="1-140th AVN REG"
                        image={"https://www.nationalguard.mil/Portals/31/Images/Image%20Gallery/Graphics/ARNG%20Marketing%20Logo/ARNG%20Marketing%20Logo.png"}
                        datesStarted="June 2020"
                        dateEnded="Present"
                        description="Directly manage the safety and training of 26 individuals. Plan, coordinate, organize, and direct all operations of the platoon. Regularly evaluate the performance of Soldiers, communicating feedback, assistance, mentorship , and direction. Implement standards and methods to measure effectiveness of training"
                        jobTitle="Maintenance Platoon Leader"
                        location="Los Alamitos, CA"/>
                    <WorkCard 
                        company="General Assembly"
                        image={"https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/2/original/CMYK-Red_Small_GeneralAssembly-Cog__1_.png"}
                        datesStarted="February 2022"
                        dateEnded="May 2022"
                        description="Full-stack software engineering immersive student in an intensive, 12-week, 450+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies. Developed a portfolio of individual and group projects."
                        jobTitle="Software Engineer (Fellow)"
                        location="Remote"/>
                </div>
            </div>
            <div className="projectsDiv">
                <h2 className="welcomePageTextTitle2">
                    PROJECTS
                </h2>
                <ProjectCard 
                    title="InVINtory"
                    image={inVINtory}
                    description="Wine storage tracking app"
                    frontEndRepo={"https://github.com/Haubaustin/inVINtory_frontend"}
                    backEndRepo={"https://github.com/Haubaustin/inVINtory_backend"}
                    deploy={"https://invintory.link"}
                />
                <ProjectCard 
                    title="MyLieu"
                    image={myLieu}
                    description="Medium like blog application"
                    frontEndRepo={"https://github.com/sbandy9210/MyLieu-Frontend"}
                    backEndRepo={"https://github.com/Haubaustin/MyLieu_Backend"}
                    deploy={"https://mylieu.herokuapp.com/"}/>
            </div>
           
        </section>
    )
}

export default Experience