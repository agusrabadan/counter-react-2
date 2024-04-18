import React, { useState } from "react"; //Importo React

    const SimpleCounter = () => { //Declaro mi componente

    const [counter, setCounter] = useState(0); //Uso el Hook useState para el botón start
    const [intervalId, setIntervalId] = useState(null); //Uso el Hook useState para el botón stop

    const startClock = () => { //Función para que empiece a contar
        const id = setInterval(() => { 
            setCounter(counter => counter + 1);
        }, 1000);
        setIntervalId(id);
    };

    const stopClock = () => { //Función para que deje de contar
        clearInterval(intervalId);
    };

    const resetClock = () => { //Función para resetear el contador
        setCounter(0); 
      };
        
    return ( //Código HTML
        <div className="container">
            <h1>Simple Counter</h1>
            <div className="bigCounter">
                <div className="nums"><i className="far fa-clock"></i></div>
                <div className="nums">{Math.floor(counter/100000 % 10)}</div>
                <div className="nums">{Math.floor(counter/10000 % 10)}</div>
                <div className="nums">{Math.floor(counter/1000 % 10)}</div>
                <div className="nums">{Math.floor(counter/100 % 10)}</div>
                <div className="nums">{Math.floor(counter/10 % 10)}</div>
                <div className="nums">{Math.floor(counter)%10}</div>
            </div>
            <div className="buttons mt-3">
                <button onClick={startClock} type="button" className="btn btn-success mx-2">Start</button>
                <button onClick={stopClock} type="button" className="btn btn-danger mx-2">Stop</button>
                <button onClick={resetClock} type="button" className="btn btn-warning mx-2">Reset</button>
            </div>
            
        </div>
        
    );
}

export default SimpleCounter; //Exporto mi componente