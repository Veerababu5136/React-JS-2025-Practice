/*

- map is an function 

- map is used for iteration 

Syntax : var_name.map( arrow function, like any_function

)


var_name.map(

(receiving_va_name,index)=>( // index is optional
  


)

)

receiving_var_name has values of each value from var_name at each iteration


- map returns only one block/one compoent/ (one div)

- map is used to render data dynamically in components




*/

import './App.css';

import Menu from './components/Header'

function App() 
{

  // var array=[11,22,33,44,55,66];


  // var emp=[
  //   {id:1,name:"supraja",salary:"93k"},
        
  //   {id:2,name:"sowjanya",salary:"63k"},

  //   {id:3,name:"amrutha pavani",salary:"33k"}

  // ]


  var deatils=[

    {id:1,heading:"learning website",item1:"home",item2:"contact",item3:"about"}, // 0-index
    
    {id:2,heading:"learning website  2",item1:"home 2",item2:"contact 2",item3:"about 2"}, // 1-index

        {id:3,heading:"learning website 3",item1:"home 3",item2:"contact 3",item3:"about 3"} // 0-index



  ]

  return (
    <div className="App">

      {/* {
        array.map(

          ((a,index)=>(
            <div>
            <span key={index}>{a}----------------{index}</span><br/><br/>
            </div>
          )

        ))
      } */}


      {/* {
        emp.map(

          (employee,index)=>(

            <div key={index}>
    <span>{employee.id} ------- {employee.name} -------- {employee.salary}</span>
    <br /><br />
  </div>
          )
        )
          

      } */}



    {/* <Menu heading="Learning website header" item1="home" item2="learn" item3="about"></Menu>  */}

    {/* <Menu obj={deatils[0]}/> 

        <Menu obj={deatils[1]}/>  */}


      {
        deatils.map(
          (employee,index)=>(

          <Menu obj={employee}/>

          )
        )
      }


      
    </div>
  );
}

export default App;
