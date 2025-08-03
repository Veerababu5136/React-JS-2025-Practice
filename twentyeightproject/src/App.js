/*
--------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                      useMemo in React
--------------------------------------------------------------------------------------------------------------------------------------------------------

What is useMemo?

- `useMemo` is a React Hook used to **optimize performance**.
- It **memoizes the result of an expensive function** so that the function doesn't run unnecessarily on every render.
- It only recalculates the value when the dependencies change.

--------------------------------------------------------------------------------------------------------------------------------------------------------
Why useMemo?

1. Prevents **unnecessary re-computation**.
2. Useful when dealing with **complex calculations**, **large lists**, or **pure functions**.
3. Helps reduce **render time** in performance-sensitive components.

--------------------------------------------------------------------------------------------------------------------------------------------------------
Syntax:

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

- `computeExpensiveValue`: function to compute result.
- `[a, b]`: dependencies; only recompute if these change.

--------------------------------------------------------------------------------------------------------------------------------------------------------
Note:

- `useMemo` does **not cache between sessions/renders** — it's only for the current render cycle.
- Only use it when **necessary** — it adds complexity.

--------------------------------------------------------------------------------------------------------------------------------------------------------
*/

import { useMemo, useState } from "react"

/*

function multiplication(n) // 2mins
{

for(i=0;i<1000000;i++)
{
n=n*n;
}

return n;


}

memory--->input---->output

 4       10           1rc


multiplication(10) // output : 1cr , 2mins

multiplication(10) // output : 1cr , 1 second

if input is same, output is same

multiplication(20) // output : 2cr , 2mins

multiplication(10) // output : 1cr , 2mins

multiplication(10) // output : 1cr , 1 second

usememo we will memrozie input, outputs


useMemo(callback function,[depency array])


app() renders at times

- browser-refersh

- any tag changes it state



*/

function multiplication(n)
{
  console.log("multiplication executing..........")


// for(var i=1;i<1000000000000000000;i++)
// {
// // n=n*n;
// }

return n;

}
function App()
{

  console.log("app-rendered.........")


  const [number,setNumber]=useState(1)

    const [text,setText]=useState("")

    // var counter=multiplication(number) without useMemo

    var counter=useMemo(
      ()=>{
        return multiplication(number)
      },[number]
    )


  


  return (
    <div>


      <input type="number" value={number} onChange={
        (event)=>{
          // console.log(event)
          // console.log(event.target)
          // console.log(event.target.value)
          setNumber(parseInt(event.target.value))
        }
      }/>

      <br></br>      <br></br>
      <br></br>

<h1>COunter : {counter}</h1>


       <input type="text" value={text} onChange={
        (event)=>{
          // console.log(event)
          // console.log(event.target)
          // console.log(event.target.value)
          setText(event.target.value)
        }
      }/>

      
      
  </div>
  )
}

export default App
