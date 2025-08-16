import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import Footer from "./components/Footer"
import Error from "./components/Error"

import "./App.css";

function App() {
  return (
    <>
    <BrowserRouter>
      <header className="header">
        <h1>🍽 Food Recipes</h1>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
                    <Route path="*" element={<Error />} />

        </Routes>
      </main>
    </BrowserRouter>
    <Footer />
</>
    
  );
}

export default App;
