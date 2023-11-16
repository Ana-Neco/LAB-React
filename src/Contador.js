import React, { useState } from 'react';
import './contador.css';

export default function MyApp()
{
    const [countHomem, setCountHomem] = useState(0);
    const [countMulher, setCountMulher] = useState(0);

    // Função para lidar com a atualização do valor
    const atualizarValor = () => {
        // Atualiza o estado com um novo valor
        setCountHomem(0);
        setCountMulher(0);
    };

    function handleIncrementHomem() {
        setCountHomem(countHomem + 1);
    }

    function handleDecrementHomem() {
        setCountHomem(countHomem - 1);
    }

    function handleIncrementMulher() {
        setCountMulher(countMulher + 1);
    }

    function handleDecrementMulher() {
        setCountMulher(countMulher - 1);
    }

    const totalPessoas = countHomem + countMulher;

    return (
        <div className='container-box'>
            <div className='box-count'>
                
                <h2>TOTAL</h2>
                <div className='counter'>
                    {totalPessoas}
                </div>
                <div className='atualiza'>
                    <img src='/img/recarregar.png' onClick={atualizarValor}/>
                </div>
                <div className='box'>
                    <MyButton count={countHomem} onIncrement={handleIncrementHomem} onDecrement={handleDecrementHomem} title="Homem" />
                    <MyButton count={countMulher} onIncrement={handleIncrementMulher} onDecrement={handleDecrementMulher} title="Mulher" />
                </div>
            </div>
        </div>
    );
    
}

function MyButton({ count, onIncrement, onDecrement, title })
{
    return (

        <div className='pessoa'>
            <div>
            <img src={`/img/${title.toLowerCase()}.png`} alt={title} />
            </div>
            <div className='button'>
                <img src="/img/sinal-de-mais.png" onClick={onIncrement} />
                <img src="/img/botao-de-menos.png" onClick={onDecrement} />
            </div>
            
            <h4>{title}</h4>
            <div className='counter'>
                {count}
            </div>

        </div>

        
    );
}

  