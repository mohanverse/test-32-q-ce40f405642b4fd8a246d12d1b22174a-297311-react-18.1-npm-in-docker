import './App.css';
import { useState } from 'react';

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  function displayResult () {
    setResult(firstNumber + secondNumber);
  }
  return (
    <div>
      <div>
        <label>Enter First number
          <input
           type="text"
           value={firstNumber} 
           onChange={e=>setFirstNumber(+e.target.value)} />
        </label>
      </div>
      <div>
        <label>Enter Second number
          <input
           type="text"
           value={secondNumber}
          onChange={e=>setSecondNumber(+e.target.value)} 
          />
        </label>
      </div>
      <div>
        <label>Result
          <input
          type="text"
          value={result}
          onChange={e=>setResult(+e.target.value)}
          />
        </label>
      </div>
      <button onClick={displayResult}>Display</button>
    </div>
  );
}

export default App;
