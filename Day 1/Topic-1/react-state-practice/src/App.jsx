import ColorChanger from "./Practice/ColorChanger";
import Counter from "./Practice/Counter";
import ToggleMessge from "./Practice/ToggleMessage";
function App(){
  return(
    <div style={{padding:"20px"}}>
     <h1>React State & Events Practice</h1> 
     <Counter/>
      <hr/>

     <ToggleMessge/>
     <hr/>

     <ColorChanger/>
     <hr/>


    </div>
  );
}
export default App;