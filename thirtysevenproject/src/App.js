/*
=====================================================================
                      ERROR PAGES IN REACT ROUTING
=====================================================================

Definition:
- An error page is a fallback UI shown when a user navigates to a
  route that does not exist or when an error occurs during rendering.
- Common examples: "404 Not Found", "500 Server Error".

Why Needed:
- Improves user experience by giving clear feedback.
- Prevents blank or broken screens.
- Keeps users within your app instead of hitting browser default errors.

----------------------------------------------------------------------

Common Error Pages:
1. 404 Not Found
   - Shown when no matching route exists for the URL.
2. 500 Server Error (or general error)
   - Shown when something goes wrong in the app logic.

*/


import { BrowserRouter,Routes,Route,Link } from "react-router-dom"


import Home from "./componets/Home/Home";
import Contact from "./componets/Contact/Contact";
import About from "./componets/About/About";
import Company from "./componets/company/company";

import Error from "./componets/error/Error";

// route is known as each link/url/end-point


function App() {
  return (
    <div className="App">

      <BrowserRouter>


      <nav>

        <Link to="/home">Home</Link> &nbsp;

        <Link to="/contact">contact</Link> &nbsp;
        
        <Link to="/about">about</Link>&nbsp;

      </nav>

          <Routes>
            
             <Route path="/home" element={<Home/>}/>
             <Route path="/contact" element={<Contact/>}/>
             {/* <Route path="/about" element={<About/>}/> */}

             <Route path="/about" element={<About/>}>

             <Route path="company" element={<Company/>}/>
             
             </Route>


             <Route path="*" element={<Error/>}/>

          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
