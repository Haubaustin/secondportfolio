

const ProjectCard = ({ title, description, image, frontEndRepo, backEndRepo, deploy }) => {

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    return (
        <div className="ProjectCard">
            <div className="projectCardMain">
                <img 
                    src={image} 
                    alt="" 
                    className="projectCardImage" />
                <div className="projectCardText">
                    <h4 className="projectCardTitle">
                        {title}
                    </h4>
                    <p className="projectCardDescription">
                        {description}
                    </p>
                </div>
            </div>
            <div className="projectCardButtonDiv">
                <button 
                    className="pcButton" 
                    hidden={!frontEndRepo}
                    onClick={()=>{openInNewTab(frontEndRepo)}}>
                    Front End Repo
                </button>
                <button 
                    className="pcButton" 
                    hidden={!backEndRepo}
                    onClick={()=>{openInNewTab(backEndRepo)}}>
                    Back End Repo
                </button>
                <button 
                    className="pcButton" 
                    hidden={!deploy}
                    onClick={()=>{openInNewTab(deploy)}}>
                    Deployed App
                </button>
            </div>
        </div>
    )
}

export default ProjectCard