import React from 'react';
import Button from '../components/buttons/buttondefault';
import Navbar from '../components/navbar/navbar';

const HeroSection = () => {
  return (
    <>
      <Navbar />
      <section className='hero'>
        <div className='hero__content'>
          <div className='hero__contenttitle'>
            <h1 className='hero__title'>
              Soy <span className='hero__name'> Facundo Toloza</span>
            </h1>
            <p className='hero__role'>Full Stack-Developer</p>
            <Button
              variant='button-large'
              label='Contactar'
              link='https://wa.me/5491123456789?text=Hola,%20estoy%20interesado%20en%20tus%20servicios!'
            />
          </div>
        </div>
        <div className='hero__contentsocial'>
          <img
            src='FacuToloza.svg'
            alt='Facundo Toloza'
            className='hero__image'
          />
          <div className='hero__social'>
            <a href='https://github.com' target='_blank' rel='noreferrer'>
              <img
                src='/public/github-icon.svg'
                alt='GitHub'
                className='hero__social-icon'
              />
            </a>
            <a href='mailto:correo@example.com'>
              <img
                src='/public/email-icon.svg'
                alt='Correo'
                className='hero__social-icon'
              />
            </a>
            <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
              <img
                src='/public/linkedin-icon.svg'
                alt='LinkedIn'
                className='hero__social-icon'
              />
            </a>
            <a
              href='https://wa.me/5491123456789'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='/public/whatsapp-icon.svg'
                alt='WhatsApp'
                className='hero__social-icon'
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
