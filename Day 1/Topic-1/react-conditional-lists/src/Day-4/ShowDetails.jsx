import { useState } from "react";

function ShowDetails(){
  const[visible,setVisible]=useState(false)

  function toggleDetailes(){
    setVisible(!visible);
  }
  return(
    <div>
      <h2>Assignment 5: Show / Hide User Details</h2>

      <button onClick={toggleDetailes}>{visible? "Hide Details" : "Show Details"}</button>

      {visible?(
        <div>
          <p><b>Name:</b>Piyush Tripathi</p>
          <p><b>Role:</b>Frontend Developer</p>
          <p><b>Currently Learning:</b>React.js</p>
        </div>
      )
      :
      (<p>Details are hidden</p>)
    }
    </div>

  );
}
export default ShowDetails;