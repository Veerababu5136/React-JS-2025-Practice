import { useState } from "react";

/*

- task has id,title

- add and delete task


-----------------------------------------------------------------------------------------------------------------------------------------------------------------

- task has id,title : (2-fields,object)

- add (appendObject), array_of_objects

- delete 

-----------------------------------------------------------------------------------------------------------------------------------------------------------------


- development steps

- ui creation

- logic 
   
   - array of objects

   - add functionality

   - delete functionality using filter()


   map will display all array values

   but filter display all array values but eliminate whose index we given

*/
function App() 
{

  var tasksObjects=[

    {id:1,title:"going home"},

    {id:2,title:"going hometown"}

  ]

  const [tasks,setTask]=useState(tasksObjects)



  function appendTask()
  {   

    var newTaskTitle=document.getElementById("task").value

    var newTaskId=tasks.length+1;

    var newTask={

      id:newTaskId,
      title:newTaskTitle
    }

    setTask(
      [
        ...tasks,
        newTask

      ]
    )

  }



  function deleteTask(id)
  {
    // console.log(id)

    const updatedTasks=tasks.filter(
      (t)=>(
        t.id!==id
      )
    )


    setTask(updatedTasks)
  }

  return (
    <div className="App">

      <div className="container">

        <input type="text" id="task"/>  <button onClick={appendTask}>Add task</button>
        
        <br></br> <br></br>

        {/* <div className="task">

          <span><b>id : </b>1 &nbsp; &nbsp; <b>title : </b>eat lunch</span> &nbsp; &nbsp; &nbsp;

          <span><button>Delete</button></span>

        </div> */}


        {
          tasks.map(
            (t)=>(

              <div className="task">

                 <span><b>id : </b>{t.id} &nbsp; &nbsp; <b>title : </b>{t.title}</span> &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;

                 <span><button onClick={
                  ()=>{
                   deleteTask(t.id) 
                  }
                 }>Delete</button></span>

                         <br></br> <br></br>


               </div>


            )
          )
        }

      </div>
     
    </div>
  );
}

export default App;
