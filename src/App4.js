import React, { useState } from 'react';

function App4() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState('');

  const handleButtonClick = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    switch (operator) {
      case '+':
        setResult(number1 + number2);
        break;
      case '-':
        setResult(number1 - number2);
        break;
      case '*':
        setResult(number1 * number2);
        break;
      case '/':
        if (number2 === 0) {
          setResult('Cannot divide by zero');
        } else {
          setResult(number1 / number2);
        }
        break;
      default:
        setResult('');
    }
  };

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <div>
        <input
          type="number"
          placeholder="Enter number 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <select
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          placeholder="Enter number 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button onClick={handleButtonClick}>=</button>
      </div>
      <div>
        <p>Result: {result}</p>
      </div>
    </div>
  );
}

export default App4;
