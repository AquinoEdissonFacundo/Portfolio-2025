import React from 'react';

const Button = ({ label, variant = 'button-default', onClick, link, type = 'button' }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // Ejecutar función personalizada si se proporciona
    }
  };

  // Verifica si el enlace es interno (empieza con #)
  if (link?.startsWith('#')) {
    return (
      <a href={link} className={`button ${variant}`}>
        {label}
      </a>
    );
  }

  // Si el enlace es externo
  return link ? (
    <a href={link} className={`button ${variant}`} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  ) : (
    <button className={`button ${variant}`} onClick={handleClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
