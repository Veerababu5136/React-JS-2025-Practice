import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Company from "./components/Company";

function App() {
  // Internal CSS as JS objects
  const navStyle = {
    backgroundColor: "green",
    padding: "10px"
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    marginRight: "20px",
    fontWeight: "bold"
  };

  
  return (
    <div className="App">
      <BrowserRouter>
        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          <Link to="/contact" style={linkStyle}>
            Contact
          </Link>
          <Link to="/about" style={linkStyle}>
            About
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />}>

              <Route path="company" element={<Company/>}/>
          
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
