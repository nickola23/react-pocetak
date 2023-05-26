import React, { useState } from 'react';
import "./colorPicker.css";

function ColorPicker() {
  const [color, setColor] = useState('#181818');

  const handleColorChange = (event) => {
    setColor(event.target.value);
  }

  return (
    <div
      className='picker'
      style={{ backgroundColor: color }}
      onClick={() => {
        const newColor = window.prompt('Choose a new color:');
        if (newColor) {
          setColor(newColor);
        }
      }}
    >
      <p><b> This background color is { color }</b></p>
    </div>
  );
}

export default ColorPicker;
