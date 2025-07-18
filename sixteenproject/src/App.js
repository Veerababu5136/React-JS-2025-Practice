/*
--------------------------------------------------------------------------------------------------------------------------------------------------------
                                                              Data Binding in React
--------------------------------------------------------------------------------------------------------------------------------------------------------

What is Data Binding?

- Data Binding is the connection between UI (view) and the data (component logic).
- It ensures that changes in data reflect in the UI and vice versa (in some cases).

--------------------------------------------------------------------------------------------------------------------------------------------------------
Types of Data Binding in React:

1. **One-Way Data Binding**:
   - Data flows in a single direction: **from component (state/props) to UI**.
   - UI elements cannot directly modify the data.
   - Achieved using props or `useState` to pass and manage data.

2. Two-Way Data Binding:

Data flows in both directions: from component to UI and from UI to component.

Mostly used in form fields.

Achieved using state and event handlers like onChange.

*/

import { useState } from "react";


/*

- data binding : data binding is linking data between ui and browser/components,props

- data binding ensures sync between ui and browser data

- data binding done using hooks

- example : useState is used for local-data in data-binding process


- data-binding in 2-ways :   browser/.js_file--------------------ui

- 1. one-way-data binding : when changes in browser it reflects to ui   (browser/.js_file-------------------->ui)

- 2. Two-way-data binding : when changes in browser it relectes to ui and when changes in ui reflects to browser 

(browser/.js_file<-------------------->ui)


*/

function App() {


  const [name,setName]=useState("supraja peri")

  console.log(name)


  function updateName(n)
  {
    setName(n)
  }

  return (

    <div className="App">

      <span>one way : {name}</span> <br></br> <br></br>

      <button onClick={()=>{
        updateName("sailaja")
      }}>clcik</button>

<br></br> <br></br>

      <span>Two way : <input type="text" onChange={
        (event)=>{

        updateName(event.target.value)
      }}/> {name} </span>


     
    </div>
  );
}

export default App;
