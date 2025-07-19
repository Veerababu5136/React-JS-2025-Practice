import { useState } from "react";


/*


array of objecvts

- usestate using variable-single

- usestate using single-object

- map, setter() in  usestate

()=>{
  
  }



obj.map(

()=>(
  
  )

)


*/
function App() 
{

  var emp=[

    {id:1,name:"amrutha pavani"},

    {id:2,name:"supraja"}

  ]

  const [employees,setEmployees]=useState(emp)



  function appendEmployee()
  {


    var newEmployee={
      id:3,
      name:"chinni"
    }

     var newEmployee2={
      id:4,
      name:"chinni"
    }


    setEmployees(
      [
        ...employees,
        newEmployee,
        newEmployee2
      ]
    )


  }

  return (
    <div className="App">

      {/* {employees[0].name} testing*/}

      {
        employees.map(
          (e)=>(

            <>
            {e.id}  &nbsp; &nbsp;

            {e.name}
            
            
            <br></br> <br></br>
            </>

          )
        )

      }


            <br></br> <br></br>

      <button onClick={appendEmployee}>add employee</button>

     
    </div>



  );
}

export default App;
