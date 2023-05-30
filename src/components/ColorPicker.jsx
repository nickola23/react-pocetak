import React, { useState } from 'react';
import "./colorPicker.css";

function ColorPicker() {
  const [color, setColor] = useState('#181818');

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
      <p className='pickerText'> This background color is { color }</p>
    </div>
  );
}

export default ColorPicker;
