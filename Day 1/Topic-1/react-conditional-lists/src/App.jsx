import ShowMessage from "./Day-4/ShowMessage"
import LoginStatus from "./Day-4/LoginStatus";
import GreetingTime from "./Day-4/GreetingTime";
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
      

    </div>

  );
}
export default App
