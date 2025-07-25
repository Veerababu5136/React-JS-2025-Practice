/*
function grandchild(props) {

    console.log(props)
  return (
    <div>
       <div>
            <h2>i am grandchild component</h2>
            {props.data.id}<br></br>
            {props.data.name}<br></br>
            {props.data.salary}
          </div>
    </div>
  )
}

export default grandchild

*/


import React, { useContext } from 'react'
import { context } from '../App'

function Grandchild() 
{

    var emp=useContext(context)

  return (
    <div>

       <h2>i am grandchild component</h2>
            
            {emp.id}<br></br>
            {emp.name}<br></br>
            {emp.salary}
    </div>
  )
}

export default Grandchild

