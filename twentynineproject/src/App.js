/*
--------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                   useRef in React
--------------------------------------------------------------------------------------------------------------------------------------------------------

What is useRef?

- `useRef` is a React Hook used to:
  1. **Create a reference** to a DOM element.
  2. **Hold mutable values** that do not cause re-render when updated.

--------------------------------------------------------------------------------------------------------------------------------------------------------
Why useRef?

1. To **access or manipulate DOM elements** directly (e.g., focus input).
2. To **persist values** across renders without causing a re-render.
3. To store **previous state values** or **timer IDs**.

--------------------------------------------------------------------------------------------------------------------------------------------------------
Syntax:

const myRef = useRef(initialValue);

- `myRef.current` holds the value.
- Changing `myRef.current` does **not** trigger a component re-render.
--------------------------------------------------------------------------------------------------------------------------------------------------------
*/

import { useRef, useState } from "react";



/* 

- useRef is an hook 

example take js : 

<h1 id="target">amrutha pavani</h1> // element


<script>

function getName()
{

var name=document.getElementById('target'); // dom-manipulation, model is an elements in html/document,
// 
var name={
id:"target",
innerText:"amrutha pavani"
}

name.innerText="supraja"

}

</script>



- useRef is useful for dom-manipulation in a better way 

- in useState, if value changed then app+component re-render

- in useRef, if value changed then component re-render


*/
function App() {


  console.log("app-rendered........")

  // const [num1,setNum1]=useState(1)


  const [h1,setH1]=useState("i am h1 using useState")


  // var heading=useRef("i am h2")

  // console.log(heading)


  
  var heading=useRef()

  console.log(heading)


 
  return (
    <div className="App">

      <h1>virtual dom....................</h1><br></br><br></br><br></br>


     {/* <input type="number" onChange={
      (event)=>{

        setNum1(parseInt(event.target.value))
      }
      }  value={num1}/> */}


<h1 onClick={
      ()=>{

       setH1("i am amrutha chaned using useState")

      }
      }>{h1}</h1>
<br></br><br></br><br></br>



    <h1 ref={heading} onClick={
      ()=>{

        console.log(heading)
                console.log(heading.current)

                heading.current.innerText="i am supraja peri changed using dom-mainpulation using useRef"

                heading.current.style="background:green"

                                console.log(heading.current)


      }
      }>i am h1 using ref</h1>




    </div>
  );
}

export default App;
