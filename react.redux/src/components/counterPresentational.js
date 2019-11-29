import React from "react";

const Counter = ({value, addEvent, subEvent, doubleEvent}) => {
    return (
        <div>
            <button onClick={()=> {addEvent()}}>+</button>
            <h1>{value}</h1>
            <button onClick={()=> {subEvent()}}>-</button>
            <button onClick={()=> {doubleEvent()}}>*</button>
        </div>
    )
}

export default Counter;