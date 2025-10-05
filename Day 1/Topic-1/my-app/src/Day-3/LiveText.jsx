import { useState } from "react";

function LiveText(){
  const[text,setText] = useState("");

  function handleChange(event){
    setText(event.target.value);
  }

  return(

    <div>
      <h2>Live Text Example</h2>
      <input
      type="text"
      placeholder="Type Something Here"
      onChange={handleChange}
      />
      <p>You typed:{text}</p>
    </div>
  );
}
export default LiveText;