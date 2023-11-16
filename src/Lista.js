import { people } from './data.js';
import { getImageUrl  } from './utils';


export default function List(){
    const chemists = people.filter(person => person.profession === 'chemist');

    const listItems = chemists.map(person => 
        <li key={person.id} className='alinhar'>
            <img
                className='avatar'
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                <br/>
                Known for {person.accomplishment}
            </p>
        </li>
    )
    
    return <ul>{listItems}</ul>
}