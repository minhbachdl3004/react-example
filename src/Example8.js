import { useState } from "react";
import ReactDOM from 'react-dom';

function Example8() {
  const [number, setNumber] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (number > 10) {
        alert(`The number is greater than 10: ${number}`);
    }
    else if (number < 10) {
        alert(`The number is less than 10: ${number}`);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="number" 
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

export default Example8;