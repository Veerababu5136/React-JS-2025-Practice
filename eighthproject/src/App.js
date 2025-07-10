/*

- props means or full form is properties / data

- props are used to transfer the data (dynmaic data) between components

- here data is tranfer bewteen parent component to child component

- in order to make child component as reusable component, since data passing dynamically


Note : 

- a component can be made as reusable while passing dynamic data to it, using concept of props
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Props destrcuting : 

- props destructing separating the props into variables

- it is not mandatory, but improves code-readabilty, maintainability

- props destruting in 3-ways

- 1st way using in function 

- 2nd way in arg

- 3rd way default way


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 Children Props

- props used to pass jsx content in props

- children props needs chilren componentb should using open and close beacuse to pass inner-html/jsx

*/



//in  app.js APP is a  parent compnent 
 
import './App.css';

import Menu1 from './components/Header' //child component

import { Header2 as Menu2 } from './components/Header';


function App() {
  return (
    <div className="App">

     <Menu1>
      <h1>Header passing</h1>
      <ul>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
      </Menu1> 


     <Menu2 heading="Learning website header" item1="home" item2="learn" item4="about"></Menu2> 

     <Menu2 heading="College Website header" item1="admin" item2="fees" item4="students"/>  

 
    </div>
  );
}

export default App;
