//Day 1 Components
import Header from "./Day-1/Header";
import Footer from "./Day-1/Footer";
import Middle from "./Day-1/Middle";

//Day 2 Properties & Reusability
import Message from "./Day-2/Message";

function App(){
  return(
    <div>
      <h1>Day 1:Components </h1>
      <Header/>
      <Middle/>
      <Footer/>

      <hr />

      <h1>Day 2:Props & Reusability</h1>
      <Message text="Prop1"/>
      <Message text="Prop2"/>
      <Message text="Prop3"/>

    </div>

  );
}
export default App;