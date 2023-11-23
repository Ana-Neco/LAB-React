import React from "react";
import {Link} from "react-router-dom";
import "./home.css";

const Home = () => {
    return(
        <div className="container">
            <nav>
                <ul>
                    <li>
                        <Link to="/Atv01">Atividade 1 - Relógio e Letreiro</Link>
                    </li>
                    <li>
                        <Link to="/Atv02">Atividade 2 - Contador de Pessoas</Link>
                    </li>
                    <li>
                        <Link to="/Atv03">Atividade 3 - Componentes Diversos</Link>
                    </li>
                    <li>
                        <Link to="/Atv04">Atividade 4 - Calculadora</Link>
                    </li>
                    <li>
                        <Link to="/Atv05">Atividade 5 - Jogo da Memória</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;