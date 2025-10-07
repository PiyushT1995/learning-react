import { useState } from "react";

function FormTwo(){

  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  function handleSubmit(e){
    e.preventdefault();
    alert(`Email:${email}\nPassword:${password}`);
  }
  return(
    <div>
      <h2>Assignment 2: Multiple Controlled Inputs (Login Form) </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input type="email" placeholder="Enter your E-Mail ID" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div>
          <label>Password: </label>
          <input type="password" placeholder="Enter your Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <button type="submit">Submit</button>

        <p>Email:{email}</p>
        <p>Password:{password}</p>

      </form>
    </div>


  );
}
export default FormTwo;