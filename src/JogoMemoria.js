import { useState } from 'react';
import Carta from './CartaJogo.js';
import './jogomemoria.css';

function JogoMemoria(){

    const [itens, setItens] = useState([
        { id: 0, img: '/img/helmet-1.png', status: ""},
        { id: 0, img: '/img/helmet-1.png', status: ""},
        { id: 1, img: '/img/potion-1.png', status: ""},
        { id: 1, img: '/img/potion-1.png', status: ""},
        { id: 2, img: '/img/ring-1.png', status: ""},
        { id: 2, img: '/img/ring-1.png', status: ""},
        { id: 3, img: '/img/scroll-1.png', status: ""},
        { id: 3, img: '/img/scroll-1.png', status: ""},
        { id: 4, img: '/img/shield-1.png', status: ""},
        { id: 4, img: '/img/shield-1.png', status: ""},
        { id: 5, img: '/img/sword-1.png', status: ""},
        { id: 5, img: '/img/sword-1.png', status: ""},
    ].sort(() => Math.random() - 0.5))

    //armazena o índice da carta anteriormente clicada.
    const [anterior, setAnterior] = useState(-1)

    //é uma função que compara as cartas clicadas para verificar se correspondem.
    //Se as cartas correspondem, seus estados são definidos como "correto", e a variável anterior é resetada para -1.
    //Se não correspondem, os estados são definidos como "incorreto", e após um segundo (1000 milissegundos), os estados são resetados para vazio, simulando a virada das cartas.

    function verificarSeCorresponde(atual){
        if(itens[atual].id === itens[anterior].id){
            itens[atual].status = "correto";
            itens[anterior].status = "correto";
            setItens([...itens]);
            setAnterior(-1);
        }else{
            itens[atual].status = "incorreto";
            itens[anterior].status = "incorreto";
            setItens([...itens]);
            setTimeout(() => {
                itens[atual].status = "";
                itens[anterior].status = "";
                setItens([...itens]);
                setAnterior(-1);
            }, 1000)
        }
    }

    //Clique é chamada quando uma carta é clicada.
    //Se não houver uma carta anteriormente clicada (anterior === -1), o estado da carta é definido como "ativo", e o índice é armazenado na variável anterior.
    //Se já houver uma carta anteriormente clicada, a função verificarCorrespondencia é chamada.

    function Clique(id){
        if(anterior === -1){
            itens[id].status = "ativo"
            setItens([...itens])
            setAnterior(id)
        }else{
            verificarSeCorresponde(id)
        }
    }

    return (
        <div className="cartinhas-box">
            { itens.map((item, indice) => (
                <Carta key={indice} item={item} id={indice} Clique={Clique} />
            )) }
        </div>
    )
}

export default JogoMemoria;
