/*
--------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                 useEffect in React
--------------------------------------------------------------------------------------------------------------------------------------------------------

What is useEffect?

- `useEffect` is a Hook that lets you perform side effects in function components.
- Examples of side effects: data fetching, DOM manipulation, setting up timers, subscriptions, etc.

--------------------------------------------------------------------------------------------------------------------------------------------------------
How it Works:

- useEffect runs **after the component renders**.
- You can control when the effect runs using the **dependency array**.
- It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.

--------------------------------------------------------------------------------------------------------------------------------------------------------
Syntax:

useEffect(() => {
   // code to run (side effect)

   return () => {
      // optional cleanup code
   };
}, [dependencies]);

--------------------------------------------------------------------------------------------------------------------------------------------------------
Types of useEffect Usage:

1. **Run on every render** (no second argument)
2. **Run once on mount** (`[]` as second argument)
3. **Run only when specific state/prop changes** (`[state]` or `[prop]`)

*/

import { useEffect, useState } from "react";





/*

- useeffct is an hook/function(built-in), these are used in functional-components to make more powerfull

- useeffct hook used for api-integration 

- In api integration , we call api and get data from api, and include in our project, and render/display in our project

- api-integration using useefect



syntax : 


- useefct has 2-args, 1-is mandatory,2-optional

- useeffect(callback_function,[dependecies])

- call back function is mandatory

- dependencies array is optional


- call_back_function can be named_function,anayoums_function,arrow_function,iiee_function (mandatory)


- dependecy array : it is normal array, which describe when use_effct should call/executes

 - it can be empty, then use effct exe or called only when browser_refresh

 - if it is filled , then how many times that filled data changes that many times use effct calls or excutes

 - that data can be props,variables,states


when useefcct  executes ?

- when only-1st argument(call_back_function) passed in useeffct then how many times component_re_render (when brower refresh + any elemenet changes in component)

that many times useefcts executes, and componets_render_first then useefcts executes


- In next i passed, dependecy array, but empty, then only re_reder using brower_refresh it executes, any element_change, was not use effct call or
exe


*/
function App() {

  // useEffect(
  //   function hello()
  //   {
  //     console.log("inside use effect")
  //   }
  // )


  //  useEffect(
  //   function()
  //   {
  //     console.log("inside use effect")
  //   }
  // )

  //  useEffect(
  //   ()=>{
  //     console.log("inside use effect")
  //   }
  // )


  //  useEffect(
  //   ()=>
  //   {
  //     console.log("inside use effect")
  //   },[])


  const [id,setId]=useState(1)

     useEffect(
    ()=>
    {
      console.log("inside use effect")
    },[id])


  return (

    <div className="App">
     {console.log("inside component")}
lkd

     <button onClick={
      ()=>{
        setId(id+1)
      }
     }>Click</button> <br></br> <br></br> <br></br>

     <h1>id : {id} </h1>
     hi ammu
     klajldwdm;la;lkdl

     {/* <h1>Hi a;ldss;mrutha;ls,mc,;a,;a pavani susd;lcwpraja</h1>
     <h2>aosjdoajddddssdsd,la,k.ala;lsmcd,cw,ndads;lk;ask;ladjlajlc</h2> */}
    </div>
  );
}

export default App;
