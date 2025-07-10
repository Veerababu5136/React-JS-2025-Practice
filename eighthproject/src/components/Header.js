import React from 'react'

function Header(props)  {


    console.log(props.children);




  return (
    <div>
      in childern props
      {props.children}
    </div>
  )
}


function Header2({heading,item1,item2,item3='deafult'})  {


  return (
    <div>
      <h1>{heading}</h1>
      <ul>
        <li>{item1}</li>
        <li>{item2}</li>
        <li>{item3}</li>
      </ul>
    </div>
  )
}

export default Header

export {Header2}
