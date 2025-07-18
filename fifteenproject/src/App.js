/*
--------------------------------------------------------------------------------------------------------------------------------------------------------
                                                              React Hooks - Overview
--------------------------------------------------------------------------------------------------------------------------------------------------------

What are React Hooks?

- Hooks are built-in functions introduced in React 16.8 that allow functional components to have state and lifecycle features.
- They enable you to "hook into" React features like state management, side effects, refs, context, and more—without using class components.

--------------------------------------------------------------------------------------------------------------------------------------------------------
Why Hooks?

Before Hooks:
- State and lifecycle methods were only available in class components.
- Code logic was harder to reuse and manage across components.
- Large components became messy and hard to maintain.

With Hooks:
- You can use state and other React features in functional components.
- Hooks provide cleaner, reusable, and testable code.
- Logic can be split into smaller reusable pieces (custom hooks).

--------------------------------------------------------------------------------------------------------------------------------------------------------
Advantages:

✓ Simplifies code by removing the need for class components  
✓ Encourages reusable logic with custom hooks  
✓ Cleaner syntax and better separation of concerns  
✓ Easier to test and debug  
✓ Improves readability and maintainability  

--------------------------------------------------------------------------------------------------------------------------------------------------------
Rules of Hooks:

1. Only call hooks at the top level (not inside loops, conditions, or nested functions).
2. Only call hooks from React function components or custom hooks.

--------------------------------------------------------------------------------------------------------------------------------------------------------
Commonly Used Built-in Hooks:

1. **useState**       → Adds state to functional components  
2. **useEffect**      → Handles side effects (e.g., API calls, subscriptions)  
3. **useRef**         → Accesses DOM nodes or persists values across renders  
4. **useContext**     → Accesses global state from a context provider  
5. **useReducer**     → For more complex state logic than useState  
6. **useMemo**        → Memoizes expensive computations  
7. **useCallback**    → Memoizes functions to prevent unnecessary re-renders


Conclusion:

Hooks modernize React by bringing powerful capabilities to functional components.  
They promote cleaner, modular, and maintainable code, making them essential for building modern React apps.

--------------------------------------------------------------------------------------------------------------------------------------------------------
*/

import { useState } from "react";


/*



--------------------------------------------------------------------------------------------------------------------------------------------------------
                                                         useState Hook in React
--------------------------------------------------------------------------------------------------------------------------------------------------------

What is useState?

- `useState` is a React Hook that allows functional components to maintain and update local state.
- It returns an array containing the current state value and a function to update it.

--------------------------------------------------------------------------------------------------------------------------------------------------------
Syntax:

const [state, setState] = useState(initialValue);

- state     → Current value of the state variable.
- setState  → Function used to update the value.
- initialValue → The value that state starts with.

--------------------------------------------------------------------------------------------------------------------------------------------------------
Why use useState?

- To create interactive and dynamic UI components.
- Enables functional components to use local state without needing class components.
- Keeps component rendering in sync with internal data changes.

--------------------------------------------------------------------------------------------------------------------------------------------------------
Common Use Cases:

1. Counter functionality  
2. Handling form input values  
3. Conditional rendering  
4. Managing toggle states  
5. Storing and updating fetched data  

--------------------------------------------------------------------------------------------------------------------------------------------------------
Example:

import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;

--------------------------------------------------------------------------------------------------------------------------------------------------------
Notes:

- Updating state triggers a re-render of the component.
- Do not mutate the state directly; always use the setter function.
- Each call to `useState` is independent, allowing multiple state variables in one component.

--------------------------------------------------------------------------------------------------------------------------------------------------------
*/



/*

- hooks are functions

- hooks used to make functional_components more powerfull

- hooks used to update state/values in browser,html/ui in same

 - usestate() ---------min data (variables,arrays)

 - useRef()----------api data-------(array of objects/json)

 - useMemo()---------internal memory data

 - useReducer()

 - useEffect()--------api data


 ------------------------------------------------------------------------------------------------------------------------

 - useState is an react-hook

 - used for state-management (value changes/state changes) in local (in present project, variables we created)

 - useState syntax


      const [variable,updateVariable] =useState(intialvalue); // use state returns 1-array (it has value-holder/state-holder and value-update-function/state-update-function)

 

*/

//1st time.browser refresh--1
function App() 
{
   
  // var name="supraja"; // value changes named as (state changes / state update) in React

  // function updateName(n)
  // {
  //   name=n;

  //     console.log(name)

  // }



  const [name,setName]=useState("supraja")


  //browser
  function handleUpdateName(n)
  {
    setName(n)

  }



  console.log("in app_function:"+name)

  return (

    //ui
    <div className="App">


     {/* {name}

     <button onClick={()=>{
      updateName("amrutha pavani")
     }}>clcik</button> */}



     {name}

<br></br><br></br>

 <button onClick={()=>{
      handleUpdateName("amrutha pavani")
     }}>clcik</button>



    </div>
  );
}

export default App;
