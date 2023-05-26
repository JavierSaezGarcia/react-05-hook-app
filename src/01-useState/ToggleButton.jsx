import React, { useState } from 'react';

export const ToggleButton = () => {
  // Definimos el estado inicial como false
  const [isToggled, setToggle] = useState(false);

  // Función para alternar el valor del estado booleano
  const toggle = () => {
    setToggle(!isToggled);
  };

  return (
    <div>
      <button className="btn btn-success" type="button" onClick={toggle}>
        {isToggled ? 'Apagado' : 'Encendido'}
      </button>
    </div>
  );
}
