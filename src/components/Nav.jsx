const logo = require("../assets/Austin Haubenschild-logos_white_adjust.png")


const Nav = ({ offset }) => {

    return (
        <div className="Nav">
            <img src={logo} alt="" />
            <h3 
                onClick={()=>{window.scrollTo(0,0)}}
                className={`navLink${offset === 1 ? ' current' : ''}`}>
                    Home
            </h3>
            <h3 
                onClick={()=>{window.scrollTo(0,1000)}}
                className={`navLink${offset === 2 ? ' current' : ''}`}>
                    Skills | Certs
            </h3>
            <h3 
                onClick={()=>{window.scrollTo(0,2000)}}
                className={`navLink${offset === 3 ? ' current' : ''}`}>
                    Experience
            </h3>
            <h3 className="navLink">Resume</h3>

        </div>
    )
}

export default Nav