import React from 'react';

const Button = ({ label, variant, onClick, link, type = 'button' }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank'); // Abrir enlaces (ejemplo: WhatsApp)
    } else if (onClick) {
      onClick(); // Ejecutar función personalizada
    }
  };

  return (
    <button className={`button ${variant}`} onClick={handleClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
