import { useState } from "react";

/*

- ui design----------done

- make logic preapre

- connect them

*/
function App() 
{

  const [counter,setCounter]=useState(0)


  function Incrementer()
  {
    if(counter===10)
    {
      alert("max range reached");
    }
    else{
        setCounter(counter+1)
    }
  }


  function decrementer()
  {

    if(counter===0)
    {
      alert("min range reached");

    }
    else
    {
          setCounter(counter-1)

    }
  }


  return (
    <div className="App">
      <pre>

      <button onClick={Incrementer}>+</button>  &nbsp;

      <span><b>{counter}</b></span> &nbsp;

      <button onClick={decrementer}>-</button>

      </pre>

    </div>
  );
}

export default App;
