import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu'; // Importa el icono de menú de MUI


import { NavLink, useLocation } from 'react-router-dom'
import LanSelector from "../LanSelector/LanSelector"
import { useTranslation } from 'react-i18next'

import CustomizedSwitches from '../provisory/provisory';


const DeployableMenu = () => {

    const location = useLocation();
    const [t] = useTranslation("global")

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* Botón de menú */}
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="menu-button" // Añade una clase personalizada para el botón de menú
      >
        <MenuIcon /> {/* Icono de menú */}
      </Button>
      {/* Menú desplegable */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
        <NavLink to="/" className={`a ${location.pathname === '/' ? 'activeLink' : ''}`}>
                {t("header.nav.aboutMe")}
            </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <NavLink to="/wcid" className={`a ${location.pathname === '/wcid' ? 'activeLink' : ''}`}>
            {t("header.nav.wcid")}
            </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <NavLink to="/projects" className={`a ${location.pathname === '/projects' ? 'activeLink' : ''}`}>
            {t("header.nav.projects")}
            </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <NavLink to="/contact" className={`a ${location.pathname === '/contact' ? 'activeLink' : ''}`}>
            {t("header.nav.contact")}
            </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <LanSelector/>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <CustomizedSwitches/>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DeployableMenu;
