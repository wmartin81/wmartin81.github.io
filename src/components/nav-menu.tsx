import * as React from 'react';
import NavButton from './nav-button';

const NavMenu = (props) => ( 
    <div className="nav">
        <div className="profile-image"></div>
        <NavButton title="Home" iconClassName="home-icon"/>
        <NavButton title="About Me" iconClassName="about-me-icon"/>
        <NavButton title="Resume" iconClassName="resume-icon"/>
        <NavButton title="Repo" iconClassName="repo-icon"/>
        <NavButton title="Contact" iconClassName="contact-icon"/>
    </div>
)

export default NavMenu;