import React, { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState('black');

  const handleColorChange = (event) => {
    setColor(event.target.value);
  }

  return (
    <div
      style={{ backgroundColor: color }}
      onClick={() => {
        const newColor = window.prompt('Choose a new color:');
        if (newColor) {
          setColor(newColor);
        }
      }}
    >
      <p>This background color is {color}</p>
    </div>
  );
}

export default ColorPicker;
