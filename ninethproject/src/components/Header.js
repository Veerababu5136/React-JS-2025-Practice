import React from 'react'



function Header(props) 
 {



  console.log(props)

  return (
    <div>
      
        <h1>{props.obj.heading}</h1>
      
      <ul>
        <li>{props.obj.item1}</li>
        <li>{props.obj.item2}</li>
        <li>{props.obj.item3}</li>
      </ul> 
      
   </div>
  )
}


export default Header
