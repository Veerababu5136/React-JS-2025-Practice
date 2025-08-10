import React, { useEffect, useState } from 'react'
import axios from "axios"
function RecipeList() 
{

    const [recipes,setRecipes]=useState([])

    useEffect(()=>{

    async function getData()
    {

        const res=await axios.get('https://dummyjson.com/recipes')

        //console.log(res.data)

        setRecipes(res.data)
        
    }

    getData();

    },[])
  
  return (
   
  <div className="grid">

    {
        recipes.map(
            rec=>(

                console.log(rec.id)
            )
        )
    }
      
    </div>
  )
}

export default RecipeList
