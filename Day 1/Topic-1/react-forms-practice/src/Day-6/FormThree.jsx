import { useState } from "react";

function FormThree(){
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[message,setMessage]=useState("");

  const[submittedData,setSubmittedData]=useState(null);

  function handleSubmit(e){
    e.preventDefault();

    setSubmittedData({
      name,
      email,
      message,
    });

    setName("");
    setEmail("");
    setMessage("");
  }

    return(
      <div>
        <h2>Assignment 3: Handling Form Submission</h2>
        <form onSubmit={handleSubmit}>
          
          <div>
            <label>Name: </label>
            <input 
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}/>
          </div>  

          <div>
            <label>Email: </label>
            <input 
            type="email"
            placeholder="Enter your E-Mail ID"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>Message: </label>
            <textarea
             type="message"
             placeholder="Enter the Message"
             value={message}
             onChange={(e)=>setMessage(e.target.value)}
            ></textarea>

          </div>

          <button type="submit">Submit</button>

          <hr/>

          {submittedData &&(
            <div>
              <h3>Submitted Data:</h3>
              <p>Name:{submittedData.name}</p>
              <p>Email:{submittedData.email}</p>
              <p>Message:{submittedData.message}</p>
            </div>
          )}

        </form>

      </div>
    );

  
}
export default FormThree;