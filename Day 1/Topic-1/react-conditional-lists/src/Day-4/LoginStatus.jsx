import { useState } from "react";

function LoginStatus(){
  const[isLoggedIn,setisLoggedIn]=useState(false);

  function toggleLogin(){
    setisLoggedIn(!isLoggedIn);
  }
  return(
    <div>
      <h2>Assignment 2: Login / Logout Message</h2>
      <p>{isLoggedIn?"Welcome,Back Piyush":"Login First"}</p>
      <button onClick={toggleLogin}>{isLoggedIn?"Logout":"Login"}</button>

    </div>

  );
}
export default LoginStatus;