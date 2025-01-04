import React from 'react';
import Button from '../components/buttons/buttondefault';
import Navbar from '../components/navbar/navbar';
const HeroSection = () => {
  return (
    <section className='hero'>
      <Navbar />

      <div className='hero__content'>
        <h1>
          Soy <span className='hero__name'>Facundo Toloza</span>
        </h1>
        <p className='hero__role'>Full Stack-Developer</p>
        <Button
          variant='button-large'
          label='Contactar'
          link='https://wa.me/5491123456789?text=Hola,%20estoy%20interesado%20en%20tus%20servicios!'
        />
      </div>
      <div className='hero__contentsocial'></div>
    </section>
  );
};

export default HeroSection;
