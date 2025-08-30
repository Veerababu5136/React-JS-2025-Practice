/*

- state managent : it defines as management of states 

- useState hook is used for statemanagement

- useReducer is an hook

- used for state management but in better way than useState

Ex : lets say there 3-state variables , means use state usen, so whenever changer occur, state variables update

at that we will use useReducer

useReducer will manage multiple states at a time

useReducer will use some pattern/architecture

useReducer help full in api project

in api project we have multiple states

- calling api , handles one state variable

- until data comes, handles one state variable

- if error, handles one state variable


useState + useEffect--->api--->basic/medium project (food project, learing website)

useeffect + useReducer------>adavnce level (remove use state, try to use usereducer at food_project)

using redux is next level, redux is also for state management, but adavnce then useReducer(), redux is toolkit



-----------------------------------------------------

value---->state

const[state,setter_function]=useState(Intialstate/IntialStateVariableValue)


const[states/values,setter_function]=useReducer(function,Intialstates/IntialStatesVariablesValues)


    Pattern

    
    - use reducer has multiple state variables and store in single state variable 


    multiple states : counter1,counter2-------------------->single state variable : counter


    - use reducer has single setter function : setCounter

    - this setCounter called by ui, includes, but react calls reducer/fucntion with present_states,data through setCounter method,

    and there reducer() logic of updating states




    intialstates---->counter---->setCounter--->react passes present states,setcouter data to reducer(), and reducer returns new_states and setted to counter (single state variable)


*/






import { useReducer, useState } from "react";


function reducer(counter,action) // action has data passed through setCounter
{

  // console.log("present state:"+counter.counter1+" action/data passed throgh setCounter-who:"+action.who+"data"+action.data)

    console.log("present state:"+"counter-1:"+counter.counter1+"\t\tcounter-2:"+counter.counter2+"\n\naction who:"+action.who+",\t\t\tdata"+action.data)




  if(action.who==="counter1")
  {
      return {...counter,counter1:counter.counter1+action.data}; 

  }

  
  if(action.who==="counter2")
  {
      return {...counter,counter2:counter.counter2+action.data}; 

  }

  




  /*

  ...counter

  {
      counter1:0, 
      counter2:0  
  }

  counter1:counter.counter1+action //1


                0+1

                0+(-1)


                {
      counter1:1, 
      counter2:0  
  }

  */




}

function App() {


  //counter-1,counter-2 are state variables, setcounter1,setcounter2 are state changing functions

  var c1=0;

  var c2=0;

  const[counter1,setCounter1]=useState(c1)

    const[counter2,setCounter2]=useState(c2)



    //useReducer


    const Intialstates={
      counter1:0, // first state variable value (intial value=0)
      counter2:0  // second state variable value (intial value=0)
    }


    const[counter,setCounter]=useReducer(reducer,Intialstates); //counter has multiple states, 


    // when setCounter calls , react internally calls reducer() with data like present_state (state variable : counter), data passed to setCounter()

    // need to write logic for updating states_varible(counter) at reducer(), 
    
    
    // and reducer must return new_states








  return (
    <div className="App">

      <div>
        Counter-1 : {counter1} <br></br><br></br>
        <button onClick={()=>setCounter1(counter1+1)}>+</button> &nbsp;&nbsp;&nbsp; <button onClick={()=>setCounter1(counter1-1)}>-</button>

      </div>

      <br></br><br></br><br></br><br></br>


      <div>
        Counter-2 : {counter2}<br></br><br></br>

        <button onClick={()=>setCounter2(counter2+1)}>+</button> &nbsp;&nbsp;&nbsp; <button onClick={()=>setCounter2(counter2-1)}>-</button>

      </div>


      <h1>Using Use Reducer</h1>


       <div>
        Counter-1 : {counter.counter1} <br></br><br></br>
        <button onClick={()=>setCounter({who:"counter1",data:1})}>+</button> &nbsp;&nbsp;&nbsp; <button onClick={()=>setCounter({who:"counter1",data:-1})}>-</button>

      </div>

      <br></br><br></br><br></br><br></br>


      <div>
        Counter-2 : {counter.counter2}<br></br><br></br>

      <button onClick={()=>setCounter({who:"counter2",data:1})}>+</button> &nbsp;&nbsp;&nbsp; <button onClick={()=>setCounter({who:"counter2",data:-1})}>-</button>



      </div>







    </div>
  );
}

export default App;
