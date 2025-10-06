import { useState } from "react";

function GreetingTime(){
  const hour = new Date().getHours();

  let greetingMessage;

  if(hour<12)
  {
    greetingMessage="Good Morning";
  }
  else if(hour<18){
    greetingMessage="Good Afternoon"; 
  }
  else{
    greetingMessage="Good Evening";

  }

  return(
    <div>
      <h2>Assignment 3: Greeting Based on Time</h2>
      <p>{greetingMessage}</p>

    </div>
  )

  
}
export default GreetingTime;