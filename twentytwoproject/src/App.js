/*

- DOM IS DOCUMENT_OBJECT_MODEL

- DOM HAS DOM_TREE


--------------------------------------js

-                        html

   head                 body             

   title                div-1-------->re-render   

   style                div-3---------->value is changing

   tree starts build from start to end


   ------------------------------react
          html

   head                 body             

   title                div-1-------->re-render not, since no value in changed   

   style                div-3---------->value is changing



   virtaual _tree  (copy)

     html

   head                 body             

   title                div-1-------->  

   style                div-3---------->re-render, since differnce in original and virtual_tree, differecce sincde value is changed



   in react dom_tree compares virtual-dom-tree



   - rendering/displaying content in webpage is fast



   -loss is extra space , since virtual_dom_tree is maintaing for comparing










   ------------------------------------------------------------------------------------------------------------------------------

   marksheet (original)


   column_1 : "veera"

   column_2 : "chinni"

   column_3 : "supraja"



    marksheet (copy)


   column_1 : "veera"

   column_2 : "chinni"

   column_3 : "supraja"



   lets original update / value changed


    marksheet (original)                   


   column_1 : "veerababu"

   column_2 : "chinni"

  column_3 : "supraja"




   now update copy







*/
import React, { useState } from 'react';

function App() {

  const items = ['item-1', 'item-2', 'item-3', 'item-4'];

  const [count, setCount] = useState(0);

  console.log("React: App rendered");

  return (
    <div>

      <h1>Counter: {count}</h1>

      <button onClick={() => setCount(count + 1)}>Update</button>

      <ul>
        {
        items.map((item, index) => 
          {

          return <li key={index}>{item}</li>;

        })}
      </ul>
    </div>
  );
}

export default App;
