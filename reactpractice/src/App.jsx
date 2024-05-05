import React, { useState } from 'react';
import './index.css'


const Counter = () => {
  // Declare a state variable named 'count' and initialize it to 0
  const [count, setCount] = useState(10);

  let increseVal=()=>{
    if(count===20){
      setCount(count)
    
    }else{
      setCount(count+1)
    }
  }
  let decreseVal=()=>{
    if(count===0){
      setCount(count)
    }else{
      setCount(count-1)
    }
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      {/* Button to increment the count */}
      <button onClick={increseVal}>Increment</button>
      {/* Button to decrement the count */}
      <button onClick={decreseVal}>Decrement</button>

    </>
  );
};

export default Counter;
