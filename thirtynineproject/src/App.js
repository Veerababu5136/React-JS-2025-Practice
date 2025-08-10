/*
=====================================================================
      QUERY PARAMS, PATH PARAMS, STATIC & DYNAMIC ROUTING IN REACT
=====================================================================
----------------------------------------------------------------------
 1️ USELOCATION
----------------------------------------------------------------------

Definition:
- A React Router hook that returns the current location object.
- Provides full details about the current URL, including:
  - Pathname
  - Search string (query parameters as raw text)
  - Hash
  - State
  - Key (internal use by React Router)

Syntax Example:
    import { useLocation } from "react-router-dom";
    const location = useLocation();
    console.log(location.pathname); // "/products"
    console.log(location.search);   // "?category=shoes&sort=price"

Location Object Structure:
    {
      pathname: "/products",
      search: "?category=shoes&sort=price",
      hash: "",
      state: null,
      key: "abc123"
    }

Best Use Case:
- When you need complete URL details.
- When you want to trigger effects when route changes.
- When you need both path and query string together.
- Useful for analytics, breadcrumbs, and conditionally rendering based on location.

Tip:
- To extract query parameters from `location.search`, use:
      const params = new URLSearchParams(location.search);
      console.log(params.get("category")); // "shoes"


----------------------------------------------------------------------

 2️ PATH PARAMETERS
----------------------------------------------------------------------

Definition:
- Parameters that are part of the URL path itself.
- Used for identifying a specific resource.
- Usually required.

Syntax Example:
    /products/123
    Here, "123" is a path parameter representing a product ID.

How to Access (React Router v6):
    import { useParams } from "react-router-dom";
    const { id } = useParams();

Best Use Case:
- Resource identifiers like IDs, usernames, slugs

----------------------------------------------------------------------

 3️ DIFFERENCE: QUERY PARAMS vs PATH PARAMS
----------------------------------------------------------------------

| Feature              | Query Params                       | Path Params                         |
|----------------------|------------------------------------|--------------------------------------|
| Location in URL      | After "?"                          | Inside the URL path                  |
| Example              | /users?role=admin                  | /users/123                           |
| Optional?            | Usually optional                   | Usually required                     |
| Multiple Params      | /page?sort=asc&limit=10             | /product/101/review/202              |
| Access in React      | useSearchParams()                   | useParams()                          |
| Best For             | Filters, search, optional configs  | IDs, required route values           |

----------------------------------------------------------------------

 4️ STATIC ROUTING
----------------------------------------------------------------------

Definition:
- The route path is fixed and predefined.
- Used for constant pages like Home, About, Contact.

Example:
    <Route path="/about" element={<About />} />

Pros:
- Easy to implement
- Predictable

Cons:
- Cannot handle dynamic IDs or variable paths

----------------------------------------------------------------------

 5️ DYNAMIC ROUTING
----------------------------------------------------------------------

Definition:
- The route path contains variables/parameters, allowing it to change.
- Makes routes reusable for multiple data entries.

Example:
    <Route path="/product/:id" element={<ProductDetail />} />
    Here ":id" is a dynamic part of the route.

Pros:
- Flexible
- Works with large datasets

Cons:
- Requires extra logic to fetch data for given parameter

----------------------------------------------------------------------

 6️ STATIC vs DYNAMIC ROUTING
----------------------------------------------------------------------

| Feature             | Static Routing                | Dynamic Routing                  |
|---------------------|--------------------------------|-----------------------------------|
| Path                | Fixed (/about)                | Variable (/user/:id)              |
| Use Case            | Pages with no changing data   | Pages where data changes by ID    |
| Flexibility         | Low                           | High                              |
| Example             | /contact                      | /blog/:postId                     |

----------------------------------------------------------------------
 Summary:
- Use Query Params for optional or filter-like data.
- Use Path Params for required identifiers in the route.
- Use Static Routing for fixed pages.
- Use Dynamic Routing for pages that need to adapt to changing data.

----------------------------------------------------------------------
*/



/*


static routing , path fixed, no args can pass


- In dynamic routing, we can pass data to component, through routing in 2-ways

-1 .query params / query parameters/ query variables

-2. path/Route params / Path paramters/ Path Variables

- both mix

*/
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"

import User from "./components/User";


import Error from "./components/Error";

function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <Link to="/user?id=87&name=amrutha pavani">User-1</Link>  &nbsp; &nbsp;

      <Link to="/user?id=77&name=Sowjanya">User-2</Link>  &nbsp; &nbsp;


      <Link to="/user?id=81&name=supraja">User-3</Link>  &nbsp; &nbsp;

      <Link to="/user?id=93">User-4</Link>  &nbsp; &nbsp;

      <Link to="/user?name=peri&id=877">User-5</Link>  &nbsp; &nbsp;


    
      <Routes>

        <Route path="/user" element={<User/>}>User-1</Route>

            <Route path="*" element={<Error/>}>User-1</Route>


      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
