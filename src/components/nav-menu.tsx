import * as React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = (props) => ( 
    <div className="nav">
        <div className="profile-image"></div>
        <Link to="/" className="nav-button home-button">Home</Link>
        <Link to="/aboutme" className="nav-button aboutme-button">About Me</Link>
        <Link to="/resume" className="nav-button resume-button">Resume</Link>
        <a href="https://github.com/wmartin81" className="nav-button repo-button">Repo</a>
        <a href="https://www.linkedin.com/in/wilberm" className="nav-button contact-button">Contact</a>
    </div>
)

export default NavMenu;