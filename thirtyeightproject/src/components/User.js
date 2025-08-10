import React from 'react'
import { useParams } from 'react-router-dom'

function User() 
{


    const args=useParams()

    console.log(args)
  return (
    <div>
      id: {args.id} <br></br>

      name: {args.name}
    </div>
  )
}

export default User
