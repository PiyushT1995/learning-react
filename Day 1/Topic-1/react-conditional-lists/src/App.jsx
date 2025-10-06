import ShowMessage from "./Day-4/ShowMessage"
import LoginStatus from "./Day-4/LoginStatus";
import GreetingTime from "./Day-4/GreetingTime";
import SubscriptionStatus from "./Day-4/SubscriptionStatus";
function App(){
  return(
    <div style={{padding:"20px"}}> 
      <h1>Day 4: Conditional Rendering</h1>
      <hr/>

      <ShowMessage/>
      <hr/>
      <LoginStatus/>
      <hr/>
      <GreetingTime/>
      <hr/>
      <SubscriptionStatus/>
      <hr/>
      

    </div>

  );
}
export default App
