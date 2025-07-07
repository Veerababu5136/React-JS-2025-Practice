/*

- using js we display content (refer-project-1-first.html)

- using react-cdn we created elements using js using react-syntax (refer-project-2-first.html)

- observation is complex in creating elements (h1,span,div)

- they introduced jsx (javascrip extension-language) / javascript+xml---language

- using jsx the complexity is reduced while creating elements

- jsx is similar to html with some changes, changes related to attributes



- in jsx {}---it will allow to write js-code

- attributes in html with - replaced with like below

   html                     jsx                      js/react
- background-color        backgroundColor-----------> background-color

- background-image        backgroundImage


- jsx to js will be converted using compiler, the compiler is babel

- babel is module/library availbe in node modules


*/

import logo from './logo.svg';
import './App.css';


function App() 
{

  // jsx , its not html
  return (
   <div> 
    <h1 id='name' className='emp' style={{backgroundColor:'green'}}>Hi Supraja Peri</h1>

   </div>
  );
}

export default App;
