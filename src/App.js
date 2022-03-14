import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const decrementCount = () => {
    setCount(prevCount => prevCount - 1)
  }
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  }
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
    // <div className='color'>
    //   <span id = "hex">{color ? color : 'default'}</span>
    //   <button className='changeColor' onClick={() => getNewColor()}>Change Background Color</button>
    // </div>
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
