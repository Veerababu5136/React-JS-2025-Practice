/*
--------------------------------------------------------------------------------------------------------------------------------------------------------
                                                             Props Drilling in React
--------------------------------------------------------------------------------------------------------------------------------------------------------

What is Props Drilling?

- Props Drilling is the process of passing data (props) from a **top-level component** down to **deeply nested child components**.
- This happens when multiple layers of components are involved and **intermediate components only pass data** without using it.

--------------------------------------------------------------------------------------------------------------------------------------------------------
Why it’s a Problem?

1. Components that don’t need the data still have to pass it down.
2. Makes the component tree **tightly coupled** and **harder to maintain**.
3. Refactoring becomes difficult if props are deeply nested.

--------------------------------------------------------------------------------------------------------------------------------------------------------
When to Avoid Props Drilling?

- When data needs to be accessed by multiple components at different levels.
- Instead of props drilling, use:
  - Context API
  - Redux (or other state management libraries)
  - Global state using custom hooks

--------------------------------------------------------------------------------------------------------------------------------------------------------
Example Structure:

App
 └── Parent ---main child
      └── Child --sub_childs
           └── GrandChild  <-- needs the data (but App must pass through Parent and Child)

*/

/*

- props are usefull for data transfer between compents

- app-componet------>prodcut_card ( we transfered data from app component(api-data) to product_card)

- app_component is parent_component, and product_card child component, here single_parent to single-child data transfer

- props drilling means parent data will be passed to one child and from that child it passed to another_child

- props drilling is for passing data to multiple componets

*/


import Child from "./components/child";

function App() {

  const data={
    id:1,
    nam:"amrutha",
    edu:"mvgr-2024"

  }
  return (
    <div className="App">
     <h1>i am app (Parent)</h1> <br></br>

     {data.id}


<Child name={data.nam} edu={data.edu}/>
    </div>
  );
}

export default App;
