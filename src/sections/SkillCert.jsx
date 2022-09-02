import CertificateCard from "../components/CertificateCard"


const SkillCert = ({ref}) => {



    return (
        <section className="SkillCert" ref={ref}>
            <div className="certificateDiv">
                <h2 className="welcomePageTextTitle2">CERTIFICATES</h2>
                <CertificateCard 
                    name="AWS Solutions Architect - Associate" 
                    picture="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png" 
                    dateAchieved="April 29, 2022" 
                    verifyLink="https://www.credly.com/badges/21d4e72e-c8a2-463a-8292-c61e03890f0f?source=linked_in_profile" />
                <CertificateCard 
                    name="COMPTIA IT Fundamentals+" 
                    picture="https://www.clarkstate.edu/media/3s3ffyoeqwzbaoy3hznpuepqty/logo-comptia-it-fundamentals.png" 
                    dateAchieved="January 23, 2022" 
                    verifyLink="https://www.credly.com/badges/724149c9-ec70-4902-b626-c58e661be175?source=linked_in_profile" /> 
                <CertificateCard
                    name="COMPTIA Security+" 
                    picture="https://cin.comptia.org/media/securityplus-logo-certified-ce-png.8/full" 
                    dateAchieved="August 15, 2022" 
                    verifyLink="https://www.credly.com/badges/22cdf167-59eb-448d-ae12-b27ca71c94a5" /> 
                <CertificateCard 
                    name="Google Associate Cloud Engineer" 
                    picture="https://miro.medium.com/max/324/1*T59fnCvp71WqNeuytWGorA.png" 
                    dateAchieved="February 25, 2022" 
                    verifyLink="https://www.credential.net/9a3821a4-5d12-4bf0-9f6f-e85bc10f75ad" />
                <CertificateCard 
                    name="Microsoft Azure Fundamentals" 
                    picture="https://k21academy.com/wp-content/uploads/2020/02/Azure.Fundamental_Icon.png" 
                    dateAchieved="February 5, 2022" 
                    verifyLink="https://docs.microsoft.com/en-us/users/austinhaubenschild-6029/transcript/dle9tgmj5ek2kq7" />
            </div>
            <div 
                className="skillsDiv">
                <h2 
                    className="welcomePageTextTitle2">
                        SKILLS
                </h2>
                <div 
                    className="skillsContainer">
                    <ul className="skillsList">
                        <li><span className="skill">PostgreSQL</span></li>
                        <li><span className="skill">ReactJS</span></li>
                        <li><span className="skill">NodeJS</span></li>
                        <li><span className="skill">AWS</span></li>
                        <li><span className="skill">ExpressJS</span></li>
                        <li><span className="skill">MongoDB</span></li>
                        <li><span className="skill">CSS</span></li>
                        <li><span className="skill">C#</span></li>
                        <li><span className="skill">.NET Core</span></li>
                        <li><span className="skill">Relational Database</span></li>
                        <li><span className="skill">Docker</span></li>
                        <li><span className="skill">JSON</span></li>
                        <li><span className="skill">HTML</span></li>
                        <li><span className="skill">RestAPI</span></li>
                        <li><span className="skill">Microsoft Entity Framework</span></li>
                        <li><span className="skill">SQL</span></li>
                        <li><span className="skill">JavaScript</span></li>
                        <li><span className="skill">ASP.NET</span></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SkillCert