import React from 'react';
import './componentes.css';

export function Profile()
{
    return (
        <img className='kath'
        src='https://i.imgur.com/Up8cUQN_d.webp?maxwidth=760&fidelity=grand' 
        alt='Katherine Jhonson' 
        />
    );
}

export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientist</h1>
            <Profile/>
            <Profile/>
            <Profile/>
        </section>
    );
}
