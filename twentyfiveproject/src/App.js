/*
--------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                  Axios in React
--------------------------------------------------------------------------------------------------------------------------------------------------------

What is Axios?

- Axios is a **promise-based HTTP client** for the browser and Node.js.
- It is used to **make HTTP requests** (GET, POST, PUT, DELETE) from React to external APIs or backend services.

--------------------------------------------------------------------------------------------------------------------------------------------------------
Why use Axios over fetch()?

1. Simpler syntax and better error handling.
2. Automatically transforms JSON data.
3. Allows request/response interception.
4. Supports request cancellation and timeouts.

--------------------------------------------------------------------------------------------------------------------------------------------------------
Installing Axios:

- You must first install Axios via npm:
  
  npm install axios

--------------------------------------------------------------------------------------------------------------------------------------------------------
Using Axios with useEffect:

- Axios is commonly used inside `useEffect` to fetch data on component mount.

Example:

import axios from 'axios';

useEffect(() => {
  axios.get("https://api.example.com/data")
       .then(response => {
         setData(response.data);
       })
       .catch(error => {
         console.log(error);
       });
}, []);

--------------------------------------------------------------------------------------------------------------------------------------------------------
*/

/*

- axios is an library

- axios need to install

- axios used for api-integration

- axios is preferrable than fetch, beacuase , it converts directly in json, not from response

in fetch api-data comes as response/promise, next we convert into json, next we use

in axios api-data automatically converts to json, response skips here

easier syntax to use,

incase fetching data time taking, then cancel request (will discuss in project)

axios has two syntaxs same like fetch

using then,direct

*/

import axios from 'axios'
import { useEffect, useState } from 'react';

import ProductCard from './component/ProductCard';

function App() {


  // axios.get(endpoint)

  // axios.post(endpoint,datainformat of object)


  //   axios.put(endpoint,datainformat of object)

  const [id,setId]=useState(1)
    
  const [products,setProducts]=useState({})


  useEffect(
    ()=>{

      getProducts();

    },[id]
  )


  async function getProducts()
  {

    var body=await axios.get("https://fakestoreapi.in/api/products")

        console.log(body)


    // products=body.data.products;

    //         console.log(products)

    setProducts(body.data.products)


    
    
  }
  
  
  return (
    <div className="App">
      <button onClick={
        ()=>{
          setId(id+1)
        }
      }>Call Api</button>


      <br></br><br></br><br></br>

      <h1>id : {id}</h1>

    {
      
      (products.length>0) ? (products.map(

        (p)=>(
          <ProductCard key={p.id} id={p.id} title={p.title} image={p.image} discount={p.discount}/>
        )
        
      )):"loading........."
    
  }
      
    </div>
  );
}

export default App;
