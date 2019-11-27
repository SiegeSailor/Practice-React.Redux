import React from "react";

const Counter = ({value, addEvent, subEvent}) => {
    return (
        <div>
            <button onClick={()=> {addEvent()}}>+</button>
            <h1>{value}</h1>
            <button onClick={()=> {subEvent()}}>-</button>
        </div>
    )
}

export default Counter;