import React, { useState } from "react";

export const SimpleCounter = () => {

    const [counter, setCounter] = useState();

    return(
        <div className="container">
            <h1>Simple Counter</h1>
            <div className="bigCounter">
                <div>{Math.floor(counter/1000 % 10)}</div>
                <div>{Math.floor(counter/100 % 10)}</div>
                <div>{Math.floor(counter/10 % 10)}</div>
                <div>{Math.floor(counter)}</div>
            </div>
            
        </div>
    )
}

export default SimpleCounter