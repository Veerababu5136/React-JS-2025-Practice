/*

- lazyloading is used to load specific components/pages to source  when they required, so performance will increase

- lazyloading applied using lazy(), suspense

- lazy function required componet import 

- lazy loading applied at conditional rendering, routing

*/

import { lazy, Suspense, useState } from "react"



import Home  from "./components/home"
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"

const Contact=lazy( ()=> import ("./components/contact"))

function App() 
{

  const[status,setStatus]=useState(true)


  return (
    <div>

      {/* <Suspense fallback={<div>loading.....................</div>}>
              {status ? <Home/>:<Contact/>}

      </Suspense> */}

        <BrowserRouter>

        <Link to="/contact">clcil</Link>

        <Suspense fallback={<div>loading............</div>}>

      <Routes>

        <Route path="/" element={<Home/>}>User-1</Route>

        <Route path="/contact" element={<Contact/>}>User-1</Route>


      </Routes>
        </Suspense>

      
      </BrowserRouter>
      
      


      <button onClick={()=>setStatus(false)}>cick</button>
      
    </div>
  )
}

export default App
