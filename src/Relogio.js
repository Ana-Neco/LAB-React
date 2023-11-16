// import React, { useState } from 'react';
import './Relogio.css';

// function Relogio() 
// {
//     const [time, setTime] = useState(new Date());

//     setInterval(() => {
//         setTime(new Date());
//     }, 1000);

//     const formattedTime = time.toLocaleTimeString();

//     return (
//         <div class="clock">
//             <div class="time" id="time">
//                 {formattedTime}
//             </div>
//         </div>
//     );
// }

import React, { useEffect, useState } from 'react';

function DigitalClock() {
    const [time, setTime] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            setTime({
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds(),
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="time">
            <ClockCircle time={time.hours} max={24} unit="Horas" color="#ff2972" />
            <ClockCircle time={time.minutes} max={60} unit="Minutos" color="#fee800" />
            <ClockCircle time={time.seconds} max={60} unit="Segundos" color="#04fc43" />
        </div>
    );
}

function ClockCircle({ time, max, unit, color }) {
    const strokeDashoffset = 440 - (440 * time) / max;
    const rotation = (360 * time) / max;

    return (
        <div className="circle" style={{ '--cor': color }}>
            <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" style={{ strokeDashoffset }}></circle>
                <div className="dots" style={{ transform: `rotate(${rotation}deg)` }}></div>
            </svg>
            <div>{time}<br /><span>{unit}</span></div>
        </div>
    );
}

export default DigitalClock;
