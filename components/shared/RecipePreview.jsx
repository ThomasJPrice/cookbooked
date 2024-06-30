'use client'

import Link from "next/link";
import { useState, useEffect } from "react";

const RecipePreview = ({ id }) => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        setRecipe(data.meals[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching recipe: {error.message}</div>;
  if (!recipe) return <div>No recipe found.</div>;

  return (
    <Link href={`/recipe/${id}`} className="recipe-preview border rounded-lg p-4 shadow-md">
      <img className="w-full h-48 object-cover rounded-md" src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h2 className="text-lg font-bold text-primary mt-2">{recipe.strMeal}</h2>
      <p className="text-base mt-1">{recipe.strCategory} | {recipe.strArea}</p>
      <p className="text-text mt-1">{recipe.strInstructions.substring(0, 100)}...</p>
    </Link>
  );
};

export default RecipePreview;
