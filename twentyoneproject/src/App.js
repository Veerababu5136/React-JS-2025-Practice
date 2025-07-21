/*

- ui development

- functionality add

- checking


*/

import { useState } from 'react';
import Keypad from './components/KeyPad'

function App() {


  const appStyling={
    
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  }

  const inputStyling={

   width: "245px",
   padding:"10px",
   textAlign:"right"
   
  }


  const [input,setInput]=useState("")


  function handleClickUpdateInput(data)
  {
    console.log(data)

    if(data==='C')
    {
      setInput("")
    }
    else if(data==='=')
    {
      try
      {
      var result=eval(input)

      console.log(result)

      }
      catch(Exception)
      {
        alert("invalid input")
        setInput("")
        result=""
      }

      setInput(result)
    }
    else
    {
    setInput(input+data)
    }
  }
 

  return (
    <div className="App" style={appStyling}>

      <input type='text' style={inputStyling} value={input}/>

      <Keypad function1={handleClickUpdateInput}></Keypad>

    </div>
  );
}

export default App;
