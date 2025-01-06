import React from 'react';
import Button from '../buttons/buttondefault';

const Navbar = () => {
  return (
    <div>
      <nav className="hero__nav">
        <Button label="Sobre" variant="button-default" link="#about" />
        <Button label="Portafolio" variant="button-default" link="#portfolio" />
        <Button label="Contacto" variant="button-default" link="#contact" />
      </nav>
    </div>
  );
};

export default Navbar;
