import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        setRecipes(data.recipes);
      } catch (err) {
        console.error("Error fetching recipes:", err);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="grid">
      {recipes.map(recipe => (
        <div key={recipe.id} className="card">
          <img src={recipe.image} alt={recipe.name} className="card-img" />
          <div className="card-body">
            <h3>{recipe.name}</h3>
            <p className="cuisine">{recipe.cuisine}</p>
            <p className="rating">⭐ {recipe.rating}</p>
            <Link to={`/recipe/${recipe.id}`} className="btn">View Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
