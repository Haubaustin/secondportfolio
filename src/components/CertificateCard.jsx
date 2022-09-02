
const CertificateCard = ({ picture, name, dateAchieved, verifyLink }) => {


    return (
    <div className="CertificateCard">
        <img
            className="certificateCardPicture"
            src={picture} 
            alt ="">
        </img>
        <div className="certificateText">
            <a href={verifyLink} className="verifyLink">
            <h4 className="certificateCardTitle">
                {name}
            </h4>
                <p>
                Date Achieved: {dateAchieved} <br/><br/>   
                </p>
            </a> 
        </div>
    </div>
    )
}

export default CertificateCard