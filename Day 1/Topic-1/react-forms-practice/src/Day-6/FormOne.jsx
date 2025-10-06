import { useState } from "react";

function FormOne(){

  const [name,setName]=useState("");

  function handleChange(event)
  {
    setName(event.target.value);
  }
  return(
    <div>
      <h2>Assignment 1: Single Controlled Input</h2>
      <input
      type="text" placeholder="Enter Your Name" value={name} onChange={handleChange} />
      <p>Your Name:{name}</p>
    </div>

  );
}
export default FormOne;