import React, { useState } from 'react'

export const Counter = () => {
const [count,setCount]=useState(0)

const countHandler=()=>{
    setCount(prev=>prev +1)
    console.log(count);
    
}
const minusHandler=()=>{
    setCount(prev=>prev -1)
    console.log(count);
    if(minusHandler===0){

    }
    
}

  return (
    <div>
        <button onClick={countHandler}>+</button>
        <h1>{count}</h1>
        <button onClick={minusHandler}>-</button>
    </div>
  )
}

