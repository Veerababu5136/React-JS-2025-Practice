import React from 'react'

function Header({heading,item1,item2,item3='deafult'})  // as an object it will store, all properties here
{
    // console.log(props);


    // const {heading,item1,item2,item3}=props // props-destructing - 1st way


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
