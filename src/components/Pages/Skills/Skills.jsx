import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next'
import "./Skills.css"



import HTMLLogo from "../../../assets/HTML.png";
import JavaScriptLogo from "../../../assets/JavaScript-logo.png";
import SASSLogo from "../../../assets/SASS.png";
import GITLogo from "../../../assets/GIT.png";
import ReactLogo from "../../../assets/React.png";
import CSSLogo2 from "../../../assets/CSS3-2.svg"

const Skills = () => {
  const [activeButton, setActiveButton] = useState('');

  const [t] = useTranslation("global")

  // Manejador de eventos para cada botón
  const handleButtonClick = (buttonText) => {
    setActiveButton(buttonText);
  };

  // Información sobre cada tecnología
  const technologyInfo = {
    HTML: t('main.wcidPage.techInfo.HTML'),
    CSS: t('main.wcidPage.techInfo.CSS'),
    SASS: t('main.wcidPage.techInfo.SASS'),
    JavaScript: t('main.wcidPage.techInfo.JavaScript'),
    React: t('main.wcidPage.techInfo.React'),
    GIT: t('main.wcidPage.techInfo.GIT'),
  };

  // Efecto secundario para mostrar el alert cuando cambia el estado
  useEffect(() => {
    if (activeButton) {
      Swal.fire({
        title: activeButton,
        text: technologyInfo[activeButton], // Mostrar información personalizada
        icon: 'info',
        confirmButtonText: 'OK',
      });
    }
  }, [activeButton, technologyInfo]);

  return (
    <div>
    <div className='skillsDisplay'>
      <div>
      <h1>{t('main.wcidPage.h1')}</h1>
      <h3>{t('main.wcidPage.h3')}</h3>
      </div>
      <ul>
        <li>
          <button id='htmlButton' onClick={() => handleButtonClick('HTML')}>
            <img src={HTMLLogo} alt="Logo HTML" />
          </button>
        </li>
        <li>
          <button id='cssButton' onClick={() => handleButtonClick('CSS')}>
            <img src={CSSLogo2} alt="" />
          </button>
        </li>
        <li>
          <button id='sassButton' onClick={() => handleButtonClick('SASS')}>
            <img src={SASSLogo} alt="" />
          </button>
        </li>
        <li>
          <button id='javascriptButton' onClick={() => handleButtonClick('JavaScript')}>
            <img src={JavaScriptLogo} alt="" />
          </button>
        </li>
        <li>
          <button id='reactButton' onClick={() => handleButtonClick('React')}>
            <img src={ReactLogo} alt="" />
          </button>
        </li>
        <li>
          <button id='gitButton' onClick={() => handleButtonClick('GIT')}>
            <img src={GITLogo} alt="" />
          </button>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Skills;