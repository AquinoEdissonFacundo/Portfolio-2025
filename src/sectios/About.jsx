import React from 'react';

const About = () => {
  return (
    <div className='about'>
      <div className='about-content'>
        <div className='about-container'>
          {' '}
          <div className='about-container-text'>
            <h1 className='about-title'>Sobre mi &#123;</h1>
            <div>
              <div className='about-image'>
                <img src='computadora.svg' alt='' />
              </div>
              <div>
                <p className='about-text'>
                  ¡Hola! Soy Facundo, tengo 22 años y me encanta programar. Hace
                  2 años descubrí mi pasión por la tecnología y desde entonces,
                  no paré de capacitarme. Me adapto fácilmente a distintos
                  entornos y tengo muchas ganas de seguir aprendiendo.
                </p>{' '}
                <br />
                <p className='about-text'>
                  Actualmente, estoy buscando mi primera oportunidad laboral en
                  el mundo IT para seguir desarrollando mis habilidades y
                  adquirir más experiencia.
                </p>{' '}
                <div className='about-bracket'>&#125;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
