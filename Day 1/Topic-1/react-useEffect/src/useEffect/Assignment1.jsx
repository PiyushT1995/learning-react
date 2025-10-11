import { useEffect } from "react";

function Assignment1(){

  useEffect(()=>{
    console.log("Component Mounted");

    return()=>{
      console.log("Componet Unmounted");
    };
  },[])

  return(
    <div>
      <h2>Assignment 1: Component Mounted Example</h2>
      <p>Open the console to see the log message.</p>
    </div>

  );
}
export default Assignment1;