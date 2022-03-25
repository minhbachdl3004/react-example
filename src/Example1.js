import React, { useState } from 'react';
import './App.css';

function Example1() {
  const [count, setCount] = useState(0);
  const decrementCount = () => {
    setCount(prevCount => prevCount - 1)
  }
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default Example1;
