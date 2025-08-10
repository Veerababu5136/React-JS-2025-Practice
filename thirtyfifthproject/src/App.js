/*
--------------------------------------------------------------------------------------------------------------------------------------------------------
                                                        React Routing
--------------------------------------------------------------------------------------------------------------------------------------------------------

What is Routing?
- Routing allows your React application to navigate between different components (views) without refreshing the page.
- Achieved using the react-router-dom library for client-side routing.

Why use Routing?
- Single Page Application (SPA) behavior
- Faster navigation, no full page reloads
- Allows clean URL structures
- Supports dynamic routing with parameters

--------------------------------------------------------------------------------------------------------------------------------------------------------
Key Components:
1. BrowserRouter
   - Wraps the entire app to enable routing.
   - Uses HTML5 history API for navigation.
   - Props:
     - basename: Set base URL for the app (default: "/").
     - window: Custom window object (advanced use cases).

2. Routes
   - Container for all <Route> components.
   - Matches and renders the route that matches the current URL.


   if route is /home---->routes tells to display componet

3. Route
   - Defines a path and which component should be rendered.
   - Props:
     - path: URL pattern to match (supports parameters and wildcards).
     - element: JSX element to render when path matches.
     - index: Marks this as default route in nested routing.
     - caseSensitive: Path matching is case-sensitive.

4. Link
   - Used for navigation without page reloads.
   - Props:
     - to: Destination path.
     - replace: Boolean, replaces history instead of pushing a new entry.
     - state: Pass state data to the new route.


------------------------------------------------------------
    Link Tag (React Router) vs Anchor Tag (<a>)
------------------------------------------------------------
1. Purpose:
   - <Link>: Used for client-side navigation in React Router apps.
   - <a>: Used for normal HTML page navigation (full page reload).

2. Navigation:
   - <Link>: Changes the URL and renders the component without refreshing the page (SPA behavior).
   - <a>: Reloads the whole page when clicked.

3. Performance:
   - <Link>: Faster — no page reload, only the view changes.
   
   - <a>: Slower — browser reloads the entire document.

4. Syntax:
   - <Link to="/about">About</Link>
   - <a href="/about">About</a>

5. Usage:
   - Use <Link> for internal routes in React Router projects.
   - Use <a> for external links or when you intentionally want a full page reload.
------------------------------------------------------------


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

----------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------------------------------------------
Advantages: (Routing)
- No full page reload → better user experience
- Faster navigation compared to server-side routing
- Easy to implement nested and dynamic routes
- Works well with component-based architecture

Limitations:
- SEO challenges for SPAs (can be solved with SSR/Next.js)
- Needs manual handling of 404 pages
- Requires JavaScript enabled in the browser

--------------------------------------------------------------------------------------------------------------------------------------------------------
Example:

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() { return <h2>Home Page</h2>; }
function About() { return <h2>About Page</h2>; }

<Router>
  <nav>
    <Link to="/">Home</Link> | <Link to="/about">About</Link>
  </nav>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<h2>404 Page Not Found</h2>} />
  </Routes>
</Router>

--------------------------------------------------------------------------------------------------------------------------------------------------------
*/


// link----><a></a>

import { BrowserRouter,Routes,Route,Link } from "react-router-dom"


import Home from "./componets/Home/Home";
import Contact from "./componets/Contact/Contact";
import About from "./componets/About/About";
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
             <Route path="/about" element={<About/>}/>

          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
