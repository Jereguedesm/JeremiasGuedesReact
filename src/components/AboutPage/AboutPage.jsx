import React from 'react'


const AboutPage = () => {
  return (
    <main className='main'>
        <div>
        <p>Hola, me presento, mi nombre completo es Jeremías Nicolás Guedes Mendes, soy de Bueno Aires, Argentina, o como a mí me gusta decirle, la civilización austral {"(guiño a Santi Siri)"}.</p>
        <p>
          Empecé a finales de 2022/principios de 2023 a investigar y adentrame en el mundo de la programación y desarrollo de software tras armar mí primer PC después de un tiempo comprando los componentes por separado {"(arrancó a la primera :) )."}
        </p>
        <p>
          De momento no tengo demasiada experiencia en el rubro a parte de alguna que otra landing page y lo que practiqué por mi cuenta; pero aprendo rápido, inicié el año sin saber lo que era un archivo HTML y ahora ya estoy aprendiendo backend con Node js y Mongo DB.
        </p>
        <p>
          Me atrevo a decir que domino las tecnologías/lenguajes HTML, CSS, SASS, GIT, JavaScript y React JS; y como dije, estoy aprendiendo Node JS, Mongo DB y Express JS vía CODERHOUSE, estoy también inscripto en el curso de Big Data/Data Analytics de Codo a Codo y tengo algún conocimiento sobre Python de YouTube.
        </p>
        <p>
          En el futuro me interesaría dominar tanto bases de datos relacionales como no relacionales {"(dígase Mongo DB y MySQL)"}, tener conocimientos fuertes sobre Python para adentrarme en el mundo de la inteligencia artificial {"(de hecho, estoy cursando el ingreso a la UBA por UBA XXI para la carrera de Licenciatura en ciencias de datos, más específicamente, la rama de redes neuronales e inteligencia artificial)"}, y también quisiera adentrarme en el mediano plazo dentro del mundo de los lenguajes de tipado débil, seguramente Go; así en el futuro trabajar backend con dicho lenguaje.
        </p>
        <p>
          Me considero un aficionado de la tecnología en general, me encanta mantenerme al día con todo lo nuevo y aprender constantemente. Soy autodidacta, gran parte de todo lo que sé en la vida proviene de YouTube e internet en general; en la pandemia me autodesafié a aprender inglés de una vez por todas tras años de clases particulares sin avances notorios, miré entre tres y cuatro horas diarias de videos nativos en inglés {"(al principio no entendía absolutamente nada)"} y para el final de la pandemia ya entendía sin problemas todo lo que veía. Ahora estoy aprendiendo alemán 100% autodidacta, me lo estoy tomando con mucha calma, pero llevo un año ya y sin estudiar puedo entender el contexto general de videos en alemán y leer textos simples {"(creo que en un año más a éste ritmo podré decir que entiendo alemán :) )"}.
        </p>
        </div>
    </main>
  )
}

export default AboutPage



/*import React, { useState, useEffect, useRef } from 'react';

const AboutPage = () => {
  const textoCompleto = `H ola, me presento, mi nombre completo es Jeremías Nicolás Guedes Mendes, soy de Bueno Aires, Argentina, o como a mí me gusta decirle, la civilización austral (guiño a Santi Siri).

  Empecé a finales de 2022/principios de 2023 a investigar y adentrame en el mundo de la programación y desarrollo de software tras armar mí primer PC después de un tiempo comprando los componentes por separado (arrancó a la primera :) ).

  De momento no tengo demasiada experiencia en el rubro a parte de alguna que otra landing page y lo que practiqué por mi cuenta; pero aprendo rápido, inicié el año sin saber lo que era un archivo HTML y ahora ya estoy aprendiendo backend con Node js y Mongo DB.

  Me atrevo a decir que domino las tecnologías/lenguajes HTML, CSS, SASS, GIT, JavaScript y React JS; y como dije, estoy aprendiendo Node JS, Mongo DB y Express JS vía CODERHOUSE, estoy también inscripto en el curso de Big Data/Data Analytics de Codo a Codo y tengo algún conocimiento sobre Python de YouTube.

  En el futuro me interesaría dominar tanto bases de datos relacionales como no relacionales (dígase Mongo DB y MySQL), tener conocimientos fuertes sobre Python para adentrarme en el mundo de la inteligencia artificial (de hecho, estoy cursando el ingreso a la UBA por UBA XXI para la carrera de Licenciatura en ciencias de datos, más específicamente, la rama de redes neuronales e inteligencia artificial), y también quisiera adentrarme en el mediano plazo dentro del mundo de los lenguajes de tipado débil, seguramente Go; así en el futuro trabajar backend con dicho lenguaje.

  Me considero un aficionado de la tecnología en general, me encanta mantenerme al día con todo lo nuevo y aprender constantemente. Soy autodidacta, gran parte de todo lo que sé en la vida proviene de YouTube e internet en general; en la pandemia me autodesafié a aprender inglés de una vez por todas tras años de clases particulares sin avances notorios, miré entre tres y cuatro horas diarias de videos nativos en inglés (al principio no entendía absolutamente nada) y para el final de la pandemia ya entendía sin problemas todo lo que veía. Ahora estoy aprendiendo alemán 100% autodidacta, me lo estoy tomando con mucha calma, pero llevo un año ya y sin estudiar puedo entender el contexto general de videos en alemán y leer textos simples (creo que en un año más a éste ritmo podré decir que entiendo alemán :) ).`;
  const intervalo = 8; // Tiempo en milisegundos entre cada caracter

  const [textoMostrado, setTextoMostrado] = useState('');
  const indexRef = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextoMostrado((textoActual) => textoActual + textoCompleto.charAt(indexRef.current));
      indexRef.current++;
      if (indexRef.current >= textoCompleto.length) {
        clearInterval(intervalId);
      }
    }, intervalo);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <main className='main'>
      <div>
        <p>{textoMostrado}</p>
      </div>
    </main>
  );
};

export default AboutPage;*/
