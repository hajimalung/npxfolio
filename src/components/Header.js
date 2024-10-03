// import { Link } from "react-router-dom";

const Header = ()=>{
    return (
    <div className="app-header">
        <div className="app-header-left">
            <div className="web-dev-icon">
                <div className="web-dev-icon-header">
                </div>
                <div className="web-dev-icon-body"> &lt;&nbsp; / &gt; </div>
            </div>
            &nbsp; <a href={"/"} className="hero-text">Hajimalung Baba</a> &nbsp; UI Engineer
        </div>
        <div className="app-header-right">
            <ul className="navbar">
                <a href={"/resume"} className="nav-item">Resume</a>
                <a href={"/projects"} className="nav-item">Projects</a>
                <a href={"/contact"} className="nav-item">Contact</a>
            </ul>
        </div>
    </div>);
}

export default Header;