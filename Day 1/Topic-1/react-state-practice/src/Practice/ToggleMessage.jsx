import { useState } from "react";

function ToggleMessge(){
  const[show,setShow]=useState(true);

  function toggle(){
    setShow(!show);
  }

return(
  <div>
    <button onClick={toggle}>Toggle Message</button>
    {show && <p>Hello React Learner</p>}
  </div>

);
}
export default ToggleMessge;
