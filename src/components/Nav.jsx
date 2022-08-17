const logo = require("../assets/Austin Haubenschild-logos_white_adjust.png")


const Nav = () => {

    return (
        <div className="Nav">
            <img src={logo} alt="" />
            <h3 className="navLink">Home</h3>
            <h3 className="navLink">Skills/Certs</h3>
            <h3 className="navLink">Projects</h3>
            <h3 className="navLink">Resume</h3>

        </div>
    )
}

export default Nav