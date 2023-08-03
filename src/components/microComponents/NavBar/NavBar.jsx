import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import ProfilePic from "../../../assets/fotoDNI.jpeg"
import "./NavBar.css"

//pages
import LanSelector from "../LanSelector/LanSelector"
import { useTranslation } from 'react-i18next'

import DarkMode from '../DarkMode/DarkMode'

import CustomizedSwitches from '../provisory/provisory'


const NavBar = () => {
    const location = useLocation();
    const [t] = useTranslation("global")


    return (
    <div>
        <nav>
            <ul>
                <img src={ProfilePic} alt="" className='profilePic'/>
                <li>
                <NavLink to="/" className={`a ${location.pathname === '/' ? 'activeLink' : ''}`}>
                {t("header.nav.aboutMe")}
            </NavLink>
                </li>
                <li>
            <NavLink to="/wcid" className={`a ${location.pathname === '/wcid' ? 'activeLink' : ''}`}>
            {t("header.nav.wcid")}
            </NavLink>
            </li>
            <li>
            <NavLink to="/projects" className={`a ${location.pathname === '/projects' ? 'activeLink' : ''}`}>
            {t("header.nav.projects")}
            </NavLink>
            </li>
            <li>
            <NavLink to="/contact" className={`a ${location.pathname === '/contact' ? 'activeLink' : ''}`}>
            {t("header.nav.contact")}
            </NavLink>
            </li>
            <li className='a'>
                <LanSelector/>
            </li>
            <li>
                <CustomizedSwitches/>
            </li>
            </ul>
        </nav>
    </div>
    )
}

export default NavBar