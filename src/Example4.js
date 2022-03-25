import React, { useState, useEffect } from 'react';
import './App.css';

function Example4() {
    //const [count, setCount] = useState(0);
    const [age, setAge] = useState(1);
    const [state, setState] = useState('');
  
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      if(age >= 18) {
        setState('Adult')
      }
      else if (age >= 12 && age < 18) {
          setState('Teenager')
      }
      else {
          setState('Child')
      }
    });
  
    return (
      <div>
        <p>{age} tuổi: {state}</p>
        <input onChange={e => setAge(e.target.value)} />
      </div>
    );
  }

export default Example4;