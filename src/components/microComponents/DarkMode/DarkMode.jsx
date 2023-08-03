/*import React, { useState, useEffect } from 'react';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('selectedTheme') === 'dark'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('selectedTheme', 'dark');
    } else {
      root.removeAttribute('data-theme');
      localStorage.setItem('selectedTheme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={darkMode}
      />
    </div>
  );
};

export default DarkMode;

*/

import React from 'react'
import "./DarkMode.css"



const DarkMode = () => {

    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark")
        localStorage.setItem("selectedTheme", "dark")
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light")
        localStorage.setItem("selectedTheme", "light")
    }
    
    const selectedTheme = localStorage.getItem("selectedTheme")
    if(selectedTheme === "dark"){
        setDarkMode()
    }else{
        setLightMode()
    }

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode()
        else setLightMode()
    }
  return (
    <div>
        <input
        
        type="checkbox"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
        />
    </div>
  )
}

export default DarkMode