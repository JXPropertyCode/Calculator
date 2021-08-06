import './App.css';
import { inputToDisplay, reset, calculateTotal } from './functions.js';
import React, { useState } from 'react';


function App() {
  const [expActive, setExpActive] = useState(false);
  const [negActive, setNegActive] = useState(false);
  const [decimalActive, setDecimalActive] = useState(false);

  return (
    <div>
      <h1 id="display">0</h1>
      {/* you need to do all of these parameters in orders to get the states to transfer into this function
 */}
      <button id="0" onClick={() => inputToDisplay(0, expActive, setExpActive, negActive, setNegActive, decimalActive, setDecimalActive)}>0</button>
      <button id="1" onClick={() => inputToDisplay(1, expActive, setExpActive, negActive, setNegActive, decimalActive, setDecimalActive)}>1</button>
      <button id="2" onClick={() => inputToDisplay(2, expActive, setExpActive, negActive, setNegActive, decimalActive, setDecimalActive)}>2</button>
      <button id="3" onClick={() => inputToDisplay(3, expActive, setExpActive, negActive, setNegActive, decimalActive, setDecimalActive)}>3</button>
      <button id="4" onClick={() => inputToDisplay(4, expActive, setExpActive, negActive, setNegActive, decimalActive, setDecimalActive)}>4</button>
      <button id="5" onClick={() => inputToDisplay(5, expActive, setExpActive, negActive, setNegActive, decimalActive, setDecimalActive)}>5</button>
      <button id="6" onClick={() => inputToDisplay(6, expActive, setExpActive, negActive, setNegActive, decimalActive, setDecimalActive)}>6</button>
      <button id="7" onClick={() => inputToDisplay(7, expActive, setExpActive, negActive, setNegActive, decimalActive, setDecimalActive)}>7</button>
      <button id="8" onClick={() => inputToDisplay(8, expActive, setExpActive, negActive, setNegActive, decimalActive, setDecimalActive)}>8</button>
      <button id="9" onClick={() => inputToDisplay(9, expActive, setExpActive, negActive, setNegActive, decimalActive, setDecimalActive)}>9</button>
      <button id="." onClick={() => inputToDisplay('.', expActive, setExpActive, negActive, setNegActive, decimalActive, setDecimalActive)}>.</button>
      <button id="+" onClick={() => inputToDisplay('+', expActive, setExpActive, negActive, setNegActive, decimalActive, setDecimalActive)}>+</button>
      <button id="-" onClick={() => inputToDisplay('-', expActive, setExpActive, negActive, setNegActive, decimalActive, setDecimalActive)}>-</button>
      <button id="x" onClick={() => inputToDisplay('*', expActive, setExpActive, negActive, setNegActive, decimalActive, setDecimalActive)}>x</button>
      <button id="/" onClick={() => inputToDisplay('/', expActive, setExpActive, negActive, setNegActive, decimalActive, setDecimalActive)}>/</button>
      <button id="(" onClick={() => inputToDisplay('(', expActive, setExpActive, negActive, setNegActive, decimalActive, setDecimalActive)}>(</button>
      <button id=")" onClick={() => inputToDisplay(')', expActive, setExpActive, negActive, setNegActive, decimalActive, setDecimalActive)}>)</button>
      <button id="clear" onClick={() => reset(expActive, setExpActive, negActive, setNegActive, decimalActive, setDecimalActive)}>AC</button>
      <button id="=" onClick={() => calculateTotal()}>=</button>
    </div>
  );
}

export default App;
