import React from 'react'
import Grandchild from './grandchild'
function child(props) {
  return (
    <div>
        <h1>i am child</h1><br></br> <br></br>
      {props.name}

      <Grandchild edu={props.edu}/>
    </div>
  )
}

export default child
