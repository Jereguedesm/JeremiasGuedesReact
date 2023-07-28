import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

//pages
import AboutPage from '../AboutPage/AboutPage'
import Skills from '../Skills/Skills'
import MyProjects from '../MyProjects/MyProjects'

//micro components
//import DarkMode from '../microComponents/DarkMode/DarkMode'

const NavBar = () => {
    const location = useLocation();
    return (
    <div>
        <nav>
            <ul>
                <li><img src="" alt="" /></li>
                <li>
                <NavLink to="/" className={`a ${location.pathname === '/' ? 'activeLink' : ''}`}>
                About me
            </NavLink>
                </li>
                <li>
            <NavLink to="/wcid" className={`a ${location.pathname === '/wcid' ? 'activeLink' : ''}`}>
                What can I do?
            </NavLink>
            </li>
            <li>
            <NavLink to="/projects" className={`a ${location.pathname === '/projects' ? 'activeLink' : ''}`}>
                My projects
            </NavLink>
            </li>
                <li className='a'>
                    <NavLink className='a'>Language</NavLink>
                </li>
                <li className='a'>
                    <NavLink className='a'>Contact</NavLink>
                </li>
            </ul>
        </nav>
    </div>
    )
}

export default NavBar