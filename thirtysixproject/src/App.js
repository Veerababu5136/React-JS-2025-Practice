/*

/*
=====================================================================
                          NESTED ROUTING IN REACT
=====================================================================

What is Nested Routing?
- Nested routing allows you to render child routes inside a parent route.
- Useful when you have a layout (like Dashboard) and different subpages
  (Profile, Settings, etc.) that share the same layout.

----------------------------------------------------------------------
 Example Structure:
    /dashboard           → Renders Dashboard layout + default child
    /dashboard/profile   → Renders Dashboard layout + Profile page
    /dashboard/settings  → Renders Dashboard layout + Settings page

----------------------------------------------------------------------
 Key Steps in App.js:
1️ Import necessary components from 'react-router-dom':
    - BrowserRouter, Routes, Route, Link, Outlet

2️ Create parent (layout) component:
    - Contains shared layout (e.g., header, nav links)
    - Uses <Outlet /> to render child routes dynamically

3️ Create child components:
    - Each child route is defined inside <Route> as a nested <Route>

4️ Define nested routes:
    - Parent <Route> wraps multiple child <Route> elements
    - Example:
        <Route path="dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
        </Route>

5️ Accessing Nested Routes:
    - Use <Link> or <NavLink> to navigate
    - Example: <Link to="profile">Profile</Link>

----------------------------------------------------------------------
 Why use Nested Routing?
 Keeps code organized by grouping related pages
 Prevents repetitive layout code
 Makes UI consistent for related routes


--------------------------------------------------------------------------------------------------------------------------------------------------------
*/


// link----><a></a>

import { BrowserRouter,Routes,Route,Link } from "react-router-dom"


import Home from "./componets/Home/Home";
import Contact from "./componets/Contact/Contact";
import About from "./componets/About/About";
import Company from "./componets/company/company";

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

          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
