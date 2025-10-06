function ListFour(){
  const products = [
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Headphones", price: 1500 },
    { id: 3, name: "Keyboard", price: 1200 },
    { id: 4, name: "Smartwatch", price: 4000 },
    { id: 5, name: "Monitor", price: 9000 },
  ];

  const expensiveProduct = products.filter((product)=>product.price>2000);

  return(
    <div>
      <h2>Assignment 4: Conditional List Rendering</h2>
      <p>Showing only expensive products (price above ₹2000):</p>

      <ul>
        {expensiveProduct.map((product)=>(
          <li key={product.id}>{product.name}-{product.price}</li>

        ))}
      </ul>
    </div>

  );
}
export default ListFour;