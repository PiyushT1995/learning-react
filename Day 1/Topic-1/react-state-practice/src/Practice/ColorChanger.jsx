import { useState } from "react";

function ColorChanger(){
  const[color,setcolor]=useState("black");

  function changeColor(){
    setcolor(color==="black"?"blue":"black");
  }

  return(
    <div>
      <h2 style={{color:color}}>Color:{color}</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>

  );
}
export default ColorChanger;