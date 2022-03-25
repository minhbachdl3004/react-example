import { useState } from 'react';
import './App.css';

function Example2() {
  const [color, setColor] = useState('');
  const getNewColor = () => {
    let symbols, color;
    symbols = '0123456789ABCDEF';
    color = "#";
    for (let i = 0; i < 6; i++) {
      color += symbols[Math.floor(Math.random() * 16)];
    }
    document.body.style.background = color;
    setColor(color)
  }
  
  return (
      <>
        <div className='color'>
            <span id = "hex">{color ? color : 'default'}</span>
            <button className='changeColor' onClick={() => getNewColor()}>Change Background Color</button>
        </div>
      </>
  );
}

export default Example2;
