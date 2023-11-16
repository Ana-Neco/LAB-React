import {Link} from "react-router-dom";
import Relogio from "./Relogio";
import Letreiro from "./Letreiro";

export default function Atv01(){
    return(
        <>
            <Relogio/>
            <Letreiro/>
            <div className="voltar">
                <Link to="/">VOLTAR</Link>
            </div>
        </>
    )
}