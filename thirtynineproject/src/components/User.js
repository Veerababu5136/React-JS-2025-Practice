import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function User() 
{


  const args=useLocation()

  // console.log(args)

  //   console.log(args.search) // string format


    const location=new URLSearchParams(args.search) // urlsearchparams is an object

    

    var id=location.get('id')

    var name=location.get('name')




  return (
    <div>

      id : {id} <br></br>

      name : {name}
   
    </div>
  )
}

export default User
