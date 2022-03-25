import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function Example5() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button className='shoot' onClick={shoot}>Take the shot!</button>
  );
}

export default Example5;
