import React, { useState } from 'react';
import './calculadora.css';

function Calculator() {
    
    const [result, setResult] = useState('0');

    const clicou = (e) => {
        // Não concatena zero se já houver um zero à esquerda
        if (result === '0') {
            setResult(e.target.name);
          } else {
            setResult((prev) => prev + e.target.name);
        }
    };    
  
    const limpar = () => {
      setResult('0');
    }
  
    const porcentagem = () => {
        setResult((eval(result) / 100).toString());
    }

    const trocaSinal = () => {
        if (result[0] === '-') {
            setResult(result.slice(1));
          } else {
            setResult('-' + result);
        }
    }
  
    const calcular = () => {
      try {
        setResult(eval(result).toString());
      } catch {
        setResult("Error")
      }
    }
  
    return (
      <div className="App">
        <div className='container-cal'>
          <form>
            <input className='number' type="text" value={result} />
          </form>
  
          <div className='keypad'>
            <button onClick={limpar} id='limpar' className='highlight'>AC</button>
            <button onClick={trocaSinal} className='highlight'>+/-</button>
            <button onClick={porcentagem} className='highlight'>%</button>
            <button name='/' onClick={clicou} className='highlight'>&divide;</button>
            <button className='botao' name="7" onClick={clicou}>7</button>
            <button className='botao' name="8" onClick={clicou}>8</button>
            <button className='botao' name="9" onClick={clicou}>9</button>
            <button name="*" onClick={clicou} className='highlight'>&times;</button>
            <button className='botao' name="4" onClick={clicou}>4</button>
            <button className='botao' name="5" onClick={clicou}>5</button>
            <button className='botao' name="6" onClick={clicou}>6</button>
            <button name="-" onClick={clicou} className='highlight'>-</button>
            <button className='botao' name="1" onClick={clicou}>1</button>
            <button className='botao' name="2" onClick={clicou}>2</button>
            <button className='botao' name="3" onClick={clicou}>3</button>
            <button name="+" onClick={clicou} className='highlight'>+</button>
            <button className='botao' name="0" onClick={clicou}>0</button>
            <button className='botao' name="." onClick={clicou}>.</button>
            <button onClick={calcular} id='equal' className='highlight'>=</button>
          </div>
  
        </div>
  
      </div>
    );
}

export default Calculator;
