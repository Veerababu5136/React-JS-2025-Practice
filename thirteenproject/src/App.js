/*
--------------------------------------------------------------------------------------------------------------------------------------------------------
                                                    Event Handling in React
--------------------------------------------------------------------------------------------------------------------------------------------------------

What is Event Handling?

- React handles events similar to HTML DOM but uses camelCase syntax.
- You can pass functions as event handlers (e.g., onClick, onChange, onMouseOver).

Key Points:
- Functions must be written in camelCase (e.g., onClick, onSubmit).
- Do NOT call the function with parentheses unless you're passing arguments.
- Use arrow functions for inline event handlers when passing arguments.

--------------------------------------------------------------------------------------------------------------------------------------------------------
Common Events:
- onClick         → Click event
- onChange        → Input change
- onSubmit        → Form submit
- onMouseOver     → Mouse hover
- onKeyDown       → Key press

--------------------------------------------------------------------------------------------------------------------------------------------------------
Syntax:

<button onClick={handleClick}>Click Me</button>

<input type="text" onChange={handleChange} />

<button onClick={() => handleClickWithArgs(id)}>Click</button>

--------------------------------------------------------------------------------------------------------------------------------------------------------
*/


/*


  html


- event is an action

- handler : who handles the event is known as event handler

- click is an action/event, onclick(event-handler), event-handler calls or perfoms result of action (function call, any data change)

- in  react

- 1. use camelcase (onclick----->onClick), error will come 

- 2. dont pass args to function until u required, automatic eventhandler executes without action performed


- 3. use function_named/arrow_function / anayomouse_function when want to pass args, because arrow_function requires return, so until it stops

-
*/
function App() 
{


  function handleClick(args)
  {
    console.log("jio network:"+args)
  }


  return (
    <div className="App">


      {/* <button onClick={handleClick("supraja")}>Click</button> */}

      <button onClick={
        ()=>{
          handleClick("amrutha")
        }
      }>click</button>
      
    </div>
  );
}

export default App;
