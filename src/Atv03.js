import {Link} from "react-router-dom";
import Componentes from "./Componentes";
import "./componentes.css"

export default function Atv03(){
    return(
        <>
            <div className="voltar">
                <Link to="/">Voltar</Link>
            </div>
            <div className="caixa">
                <Componentes/>
            </div>
        </>
    )
}