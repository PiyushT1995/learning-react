import { useState } from "react";

function SubscriptionStatus(){

  const[plan,setPlan]=useState("free");

  return(
    <div>
      <h2>Assignment 4: Subscription Status</h2>
      <p>
        {plan==="free"?"You are using the free plan":
        plan==="pro"?"You are using the pro plan"
      :"You are using premium plan"}
      </p>

      <button onClick={()=>setPlan("free")}>Free</button>
      <button onClick={()=>setPlan("pro")}>Pro</button>
      <button onClick={()=>setPlan("premium")}>Premium</button>
    </div>
  )
}
export default SubscriptionStatus;