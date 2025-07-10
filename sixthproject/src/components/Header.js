import React from 'react'

function Header(props)  // as an object it will store, all properties here
{
    console.log(props);
  return (
    <div>
        <h1>{props.heading}</h1>
      <ul>
        <li>{props.item1}</li>
        <li>{props.item2}</li>
        <li>{props.item3}</li>
      </ul>
    </div>
  )
}

export default Header
