import {Link} from "react-router-dom";
import JogoMemoria from "./JogoMemoria";
import './jogomemoria.css';

export default function Atv05(){
    return(
        <>
            <div className="voltar">
                <Link to="/">Voltar</Link>
            </div>
            <h1 className="center">Jogo da Memória</h1>
            <JogoMemoria />
        </>
    )
}