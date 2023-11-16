import React from "react";

const today = new Date();

const person = {
    name: 'Hedy Lamarr',
    theme: {
        background: 'black',
        width: '400px',
        color: 'pink'
    }
};

function formatDate(date)
{
    return new Intl.DateTimeFormat(
        'pt-BR',
        {weekday: 'long'}
    ).format(date);
}

export default function TodoList()
{
    const avatar = 'https://i.imgur.com/KcI3uax_d.webp?maxwidth=760&fidelity=grand';
    const description = 'Hedy Lamarr';
    return(
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <h2>To do List for {formatDate(today)}</h2>
            <img 
                className="photo"
                src={avatar}
                alt={description}
            />
            <ul style={{
                background: 'black',
                color: 'pink'
            }}>
                <li>Invent new traffic ligths</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
        </div>
    );
}

// export default function Avatar()
// {
//     const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
//     const description = 'Gregorio Y. Zara';
//     return(
//         <img 
//             src={avatar}
//             alt={description}
//         />
//     );
// }
