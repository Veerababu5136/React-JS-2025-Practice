/*
--------------------------------------------------------------------------------------------------------------------------------------------------------
                                                       Conditional Rendering in React.js
--------------------------------------------------------------------------------------------------------------------------------------------------------

What is Conditional Rendering?

- Conditional rendering means displaying different elements or components based on certain conditions.
- React uses JavaScript expressions to control what should be shown on the screen.

Common Techniques:

1. Using if/else statement
2. Using ternary operator
3. Using logical AND (&&)

--------------------------------------------------------------------------------------------------------------------------------------------------------
1. Using if/else
--------------------------------------------------------------------------------------------------------------------------------------------------------

- You use this outside JSX to assign or return different components.
  Example:
    let content;
    if (isLoggedIn) {
      content = <p>Welcome</p>;
    } else {
      content = <p>Please log in</p>;
    }

--------------------------------------------------------------------------------------------------------------------------------------------------------
2. Using Ternary Operator
--------------------------------------------------------------------------------------------------------------------------------------------------------

- Used inside JSX directly.
  Syntax:
    condition ? JSX_if_true : JSX_if_false

--------------------------------------------------------------------------------------------------------------------------------------------------------
3. Using Logical AND (&&)
--------------------------------------------------------------------------------------------------------------------------------------------------------

- Renders the element only if the condition is true.
  Syntax:
    condition && JSX

--------------------------------------------------------------------------------------------------------------------------------------------------------
Example Below Demonstrates All Three Methods
--------------------------------------------------------------------------------------------------------------------------------------------------------
*/


/*



- displaying the content,components based upon condtions using (if-else),(if,else_if,else),(switch)


*/
function App() 
{

  var age=21;

  var isEligible=false

  var message="";

  if(age>=18)
  {
    isEligible=true
  }
  else
  {
    isEligible=false
  }


  // if(isEligible)
  // {
  //   message=<span>voter is elibile to vote</span>
  // }
  // else 
  // {
  //       message=<span>voter is not elibile to vote</span>

  // }

  message= isEligible ? <span>voter is elibile to vote</span> : <span>voter is not elibile to vote</span>; //using opertaors (tenray-operator)

  return (
    <div className="App">

      {message}
      
    </div>
  );
}

export default App;
