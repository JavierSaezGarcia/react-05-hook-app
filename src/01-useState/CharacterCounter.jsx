import React, { useState } from 'react';

export const CharacterCounter = () => {
  const [text, setText] = useState('');

  // Función para manejar el cambio en el campo de texto
  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    console.log(`Texto actualizado: ${newText}`);
  };

  return (
    <div>
      <h2>Contador de caracteres</h2>
      <input className="form-control" type="text" value={text} onChange={handleChange} />
      <h3>Longitud del texto: {text.length}</h3>
    </div>
  );
}
