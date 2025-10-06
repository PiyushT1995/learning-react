function ListThree(){

  const products = [{id:1, name:"Laptop",price:3000},
  {id:2,name:"Headphones",price:2000},
  {id:3,name:"Keyboard",price:1000},
  {id:4,name:"Mouse",price:500},
  {id:5,name:"SmartWatch",price:300},];

  return(
    <div>
      <h2>Assignment 3: Rendering List of Objects </h2>
      
      <ul>
        {products.map((product)=>(
          <li key={product.id}>{product.name}-Rs {product.price}</li>
))}
      </ul>

    </div>
  );
}
export default ListThree;