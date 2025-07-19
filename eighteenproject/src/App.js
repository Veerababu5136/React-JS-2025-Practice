import { useState } from "react";

function App() 
{

  var emp={
    id:1,
    name:"Amrutha pavani"
  }


  const [employee,setEmployee]=useState(emp)

  function updateEmployee()
  {

    // setEmployee(
    //   {
    //     id:2,
    //     name:"Supraja peri"
    //   }
    // )


    var newEmployee={
      id:2,
      name:"Supraja Peri"
    }

    setEmployee(newEmployee)
  }


  function updateSpecific()
  {
    var newEmployee={
      id:employee.id,
      name:"Sowjanya"
    }

    setEmployee(newEmployee)
  }


 
  return (
    <div className="App">

      <h1>Employee Details:</h1> <br></br> <br></br> <br></br>

      {employee.id}  &nbsp; &nbsp; &nbsp;

      {employee.name} <br></br> <br></br> <br></br>

      <button onClick={updateEmployee}>update whole object</button> <br></br> <br></br> <br></br>

      <button onClick={updateSpecific}>update name only in object</button>


    </div>
  );
}

export default App;
