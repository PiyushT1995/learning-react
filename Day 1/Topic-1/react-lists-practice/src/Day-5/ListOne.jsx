function ListOne(){
  const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

  return(

    <div>
      <h2>Assignment 1: Basic List Rendering</h2>
      <ul>
        {fruits.map((fruit) =>

        (
          <li>{fruit}</li>

        ))}
      </ul>
    </div>

  );
}
export default ListOne;