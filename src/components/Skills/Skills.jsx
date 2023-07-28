import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const Skills = () => {
  const [activeButton, setActiveButton] = useState('');

  // Manejador de eventos para cada botón
  const handleButtonClick = (buttonText) => {
    setActiveButton(buttonText);
  };

  // Información sobre cada tecnología
  const technologyInfo = {
    HTML: 'HTML es un lenguaje de marcado de hipertexto utilizado para estructurar el contenido de una página web, en otras palabras, es "el esqueleto" de una página.',
    CSS: 'CSS es un lenguaje de hojas de estilo que se utiliza para dar estilo y diseño a una página web, sería algo así como la "piel".',
    SASS: 'SASS es un preprocesador de CSS que ofrece características adicionales y una sintaxis más poderosa, maquillaje.',
    JavaScript: 'JavaScript es un lenguaje de programación que se utiliza para agregar interactividad a una página web, es lo que la hace funcionar, como los órganos o músculos.',
    React: 'React es una biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas y reutilizables; es como trabajar por partes en lugar de capas (cabeza, manos, etc...).',
    GIT: 'GIT es un sistema de control de versiones que permite rastrear cambios en el código fuente y colaborar en proyectos, osea, para cuando rompés algo y querés volver atrás.',
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
    <div className='skillsDisplay'>
      <h1>¿Qué tecnologías domino?</h1>
      <ul>
        <li>
          <button id='htmlButton' onClick={() => handleButtonClick('HTML')}>
            HTML
          </button>
        </li>
        <li>
          <button id='cssButton' onClick={() => handleButtonClick('CSS')}>
            CSS
          </button>
        </li>
        <li>
          <button id='sassButton' onClick={() => handleButtonClick('SASS')}>
            SASS
          </button>
        </li>
        <li>
          <button id='javascriptButton' onClick={() => handleButtonClick('JavaScript')}>
            JavaScript
          </button>
        </li>
        <li>
          <button id='reactButton' onClick={() => handleButtonClick('React')}>
            React
          </button>
        </li>
        <li>
          <button id='gitButton' onClick={() => handleButtonClick('GIT')}>
            GIT
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Skills;