

const WorkCard = ({ company, image, datesStarted, dateEnded, description, jobTitle, location }) => {


    return (
        <div className="WorkCard">
            <img src={image} alt='' className="workCardImg"></img>
            <div className="workCardText">
                <div className="workCardTop">
                    <h4 className="workCardJobTitle">{jobTitle} - {company}</h4>
                    <p className="workCardDates">{datesStarted} - {dateEnded} | {location}</p>
                </div>
                <div className="workCardBottom">
                    <p className="workCardDesc">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default WorkCard;