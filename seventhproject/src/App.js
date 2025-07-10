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

*/

//in  app.js APP is a  parent compnent 
 
import './App.css';

import Menu from './components/Header' //child component


function App() {
  return (
    <div className="App">

     <Menu heading="Learning website header" item1="home" item2="learn" item4="about"></Menu> 

     <Menu heading="College Website header" item1="admin" item2="fees" item4="students"></Menu> 


     <Menu heading="Shopping website header" item1="cart" item2="re-order" item4="latest arrivals"></Menu> 

    </div>
  );
}

export default App;
