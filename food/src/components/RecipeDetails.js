import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await res.json();
        setRecipe(data);
      } catch (err) {
        console.error("Error fetching recipe:", err);
      }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) return <p className="loading">Loading...</p>;

  return (
    <div className="details">
      <Link to="/" className="back-btn">⬅ Back</Link>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} className="details-img" />

      <div className="info">
        <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
        <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
        <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins</p>
        <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins</p>
        <p><strong>Servings:</strong> {recipe.servings}</p>
        <p><strong>Calories:</strong> {recipe.caloriesPerServing}</p>
      </div>

      <h3>Ingredients</h3>
      <ul className="list">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Instructions</h3>
      <ol className="list">
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetails;
