import { useState,useEffect } from "react";

function Assignment2(){
  const[count,setCount]=useState(0);

  useEffect(()=>{
    console.log(`Count changed: ${count}`);
  },[count]);

  return(
    <div>
      <h2>Assignment 2: Counter with useEffect</h2>
      <p>Count: {count}</p>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>

  );

}
export default Assignment2;