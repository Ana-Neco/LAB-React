import {Link} from "react-router-dom";
import Calculadora from "./Calculadora";

export default function Atv04(){
    return(
        <>
            <div className="voltar">
                <Link to="/">Voltar</Link>
            </div>
            <Calculadora />
        </>
    )
}