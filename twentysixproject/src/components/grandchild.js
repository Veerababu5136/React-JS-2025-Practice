import React from 'react'

function grandchild(props) {
  return (
    <div>
      <h1>i am grand child</h1> <br></br> <br></br>
      {
        props.edu
      }
    </div>
  )
}

export default grandchild
