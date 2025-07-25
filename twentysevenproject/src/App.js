/*
--------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                 useContext in React
--------------------------------------------------------------------------------------------------------------------------------------------------------

What is useContext?

- `useContext` is a React Hook that allows you to **access global data** (like props) **without manually passing it through every level** of the component tree.
- It helps to avoid **props drilling**.

--------------------------------------------------------------------------------------------------------------------------------------------------------
Why useContext?

- Simplifies component structure.
- Avoids redundant props passing.
- Centralizes shared state or configuration.

--------------------------------------------------------------------------------------------------------------------------------------------------------
How it works?

1. **Create Context** using `React.createContext()`
2. **Provide value** using `<Context.Provider>`
3. **Consume value** using `useContext(SomeContext)`

--------------------------------------------------------------------------------------------------------------------------------------------------------
Syntax:

const MyContext = React.createContext();

<MyContext.Provider value={someValue}>
   <Child />
</MyContext.Provider>

Inside Child:
const value = useContext(MyContext);

--------------------------------------------------------------------------------------------------------------------------------------------------------
*/


/*

props drilling-->data transfer between multiple components

 1st scenario : 


 app------->child---------->grandchild

 2-var------->2nd---------->3rd
 1st


 2nd scenario : 
                     extra intermediates data transfer
 app--------------------------->child----------child-2--------------->grandchild

3-variables-------------------->no display-------------------->display
                               just transfer



2nd scenario optimization: 
                                      data (global)

app--------------------------->child----------child-2--------------->grandchild

app-data is maked as global,


- we can make data as global, using React.createcontext() method

- we can use in which componet , we wants, using useContext hook



*/

/*
import Child from './components/child'
function App() {


  var emp={
    id:1,
    name:"amrutha pavani supraja",
    salary:87000
  }

  return (
   <div>
    <h1>i am app (Parent)</h1>
    <Child data={emp}/>
   </div>
  );
}

export default App;

*/


import React from 'react'

import Child from './components/child'


export const context=React.createContext() // makes data as global

function App() {

   var emp={
    id:1,
    name:"amrutha pavani supraja",
    salary:87000
  }


  return (
     <context.Provider value={emp}>
  <div>
    <h1>i am app (Parent)</h1>
    <Child/>
 </div>
 </context.Provider>
  )
}

export default App

