/*
--------------------------------------------------------------------------------------------------------------------------------------------------------
                                                               API Integration in React
--------------------------------------------------------------------------------------------------------------------------------------------------------

What is API Integration?

- API integration means connecting your React application to an external service to **fetch data from** or **send data to** a backend server.
- Common tools: `fetch()`, `axios`, or any HTTP client library.
- Most commonly done inside `useEffect()` to make sure data is fetched when component loads.

--------------------------------------------------------------------------------------------------------------------------------------------------------
Why useEffect for API Calls?

- `useEffect()` is ideal for API calls because:
  1. It runs after the component mounts — perfect for loading data.
  2. It avoids infinite re-renders by using a dependency array.
  3. Cleanup (abort fetch or cancel subscriptions) can be done using the return function.

--------------------------------------------------------------------------------------------------------------------------------------------------------
Syntax: Basic Fetch in useEffect

useEffect(() => {
    fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => {
        // update state with data
    });
}, []);  // empty array = runs once after first render

--------------------------------------------------------------------------------------------------------------------------------------------------------
*/

import { useEffect, useState } from "react";


/*

- use effct hook is use for api-integration

- api-call/hitting end_point/url in three-ways

- using fetch() :

fecth is an browser function, used for api-call

fecth has two syntax using then() and async+await

Note : async functions not allowed in call_back_functions in use effct

- using axios library

- using jquery



*/

function App() {


    const [id,setId]=useState(1)

//   useEffect(
//     ()=>{
//  fetch("https://fakestoreapi.in/api/products")
// .then(res => res.json())
// .then(res => console.log(res))

//     },[id])



// useEffect(

//       async function getPrdoucts()
//       {

//         var response=await fetch("https://fakestoreapi.in/api/products")

//         var body=await response.json()

//         console.log(body)

//       getPrdoucts()
// // warning + data, but browser warning only

//     },[id]) 



useEffect(

      ()=>
      {

     
      getPrdoucts()

    },[id]) 



    async function getPrdoucts()
      {

        var response=await fetch("https://fakestoreapi.in/api/products")

        var body=await response.json()

        console.log(body)


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
    </div>
  );
}

export default App;
