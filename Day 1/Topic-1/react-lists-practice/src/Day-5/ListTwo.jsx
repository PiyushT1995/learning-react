function ListTwo(){
  const fruits=["Apple", "Banana", "Mango", "Orange", "Pineapple"];

  return(
    <div>
      <h2>Assignment 2: Rendering Lists with Keys</h2>
      <ul>
        {fruits.map((fruit,index)=>(
          <li key={index}>{fruit}</li>

        ))}

      </ul>
    </div>

  );
}
export default ListTwo;