import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import ProfilePic from "../../assets/fotoDNI.jpeg"

//pages
import AboutPage from '../AboutPage/AboutPage'
import Skills from '../Skills/Skills'
import MyProjects from '../MyProjects/MyProjects'
import Languages from '../microComponents/Languages/Languages'


//micro components

//import DarkMode from '../microComponents/DarkMode/DarkMode'

const NavBar = () => {
    const location = useLocation();
    return (
    <div>
        <nav>
            <ul>
            <button id='profilePic' onClick={() => expandPhoto()}>
                <img src={ProfilePic} alt="" className='profilePic'/>
            </button>
                <li>
                <NavLink to="/" className={`a ${location.pathname === '/' ? 'activeLink' : ''}`}>
                Acerca de mí
            </NavLink>
                </li>
                <li>
            <NavLink to="/wcid" className={`a ${location.pathname === '/wcid' ? 'activeLink' : ''}`}>
                ¿Qué puedo hacer?
            </NavLink>
            </li>
            <li>
            <NavLink to="/projects" className={`a ${location.pathname === '/projects' ? 'activeLink' : ''}`}>
                Mis proyectos
            </NavLink>
            </li>
            <li>
            <NavLink to="/contact" className={`a ${location.pathname === '/contact' ? 'activeLink' : ''}`}>
                Contacto
            </NavLink>
            </li>
            <li className='a'>
                <Languages/>
            </li>
            </ul>
        </nav>
    </div>
    )
}

export default NavBar
