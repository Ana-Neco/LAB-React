import Gallery, {Profile} from './Gallery.js';
import Convertendo from './Convertendo.js';
import Card from './Card.js';
import Item from './Item.js';
import Lista from './Lista.js';
import Receita from './Receita.js';
import Cups from './Cups.js';
import './componentes.css';


export default function Componentes() {
    return (
        <div className='organiza'>
            <Profile />
            <br></br>
            <Convertendo />
            <br></br>
            <Card />
            <br></br>
            <Item />
            <br></br>
            <Lista />
            <br></br>
            <Receita />
            <br></br>
            <Cups />
        </div>
    );
}

