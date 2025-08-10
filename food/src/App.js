import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import Footer from "./components/Footer"
import "./App.css";

function App() {
  return (
    <>
    <Router>
      <header className="header">
        <h1>🍽 Food Recipes</h1>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </main>
    </Router>
    <Footer />
</>
    
  );
}

export default App;
