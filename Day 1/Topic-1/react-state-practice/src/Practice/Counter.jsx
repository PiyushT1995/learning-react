import { useState } from "react";

function Counter(){
  const[count,setCount]=useState(0);

  function increase(){
    setCount(count+1);
  }
  function decrease(){
    setCount(count-1);
  }

  return(

    <div>
      <h2>Counter:{count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
export default Counter;