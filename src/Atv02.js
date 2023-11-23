import {Link} from "react-router-dom";
import Contador from "./Contador";
import "./contador.css";

export default function Atv02(){
    return(
        <>
            <div className="voltar">
                <Link to="/">VOLTAR</Link>
            </div>
            <Contador/>
        </>
    )
}