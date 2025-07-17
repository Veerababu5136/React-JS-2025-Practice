import logo from './logo.svg';
/*
--------------------------------------------------------------------------------------------------------------------------------------------------------
                                                        React Fragments
--------------------------------------------------------------------------------------------------------------------------------------------------------

What are Fragments?

- Fragments let you group multiple elements without adding extra nodes to the DOM.
- In React, components must return a single parent element.
- Instead of wrapping elements in a <div>, we can use <React.Fragment> or shorthand <> </>.

Why use Fragments?

- Prevent unnecessary divs in the DOM
- Cleaner and more semantic HTML output
- Useful inside lists, tables, and reusable UI components

--------------------------------------------------------------------------------------------------------------------------------------------------------
Syntax Options:
1. <React.Fragment> ... </React.Fragment>
2. <> ... </> (shorthand)
--------------------------------------------------------------------------------------------------------------------------------------------------------


advnatges : 

- because to overcome additional divs problems when applying styles like display-realted


*/

import Header from './components/Header/Header';
function App() 
{
  //internal


  var HeaderStyles={
        
    
           display:"flex",

            flexWrap:"wrap",

            gap :"10px"
  }


  return (
    <div className="App" style={HeaderStyles}>
      <Header></Header>
    </div>
  );
}

export default App;
