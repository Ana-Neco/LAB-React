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
            <Convertendo />
            <Card />
            <Item />
            <Lista />
            <Receita />
            <Cups />
        </div>
    );
}

