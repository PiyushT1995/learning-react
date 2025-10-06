import { useState } from "react";

function ShowMessage(){
  const[show,setShow]=useState(false);

  function toggleMessage(){
    setShow(!show);
  }

return(
  <div>
    <h2>Assignment 1: Show / Hide Message</h2>
    <button onClick={toggleMessage}>{show?"Hide Message":"Show Message"}</button>
    {show && <p>Hello React Learner</p>}
  </div>

);
}
export default ShowMessage;