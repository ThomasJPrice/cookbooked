'use client'

import { Flag, HandPlatter, Loader2, LogIn, ShoppingBasket } from "lucide-react"
import { Button } from "../ui/button"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

const Recipe = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [recipe, setRecipe] = useState(null)

  console.log(recipe);

  const fetchRecipe = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      const data = await response.json()
      setRecipe(data.meals[0])
    } catch (error) {
      console.error('Error fetching recipe:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const countIngredients = (recipe) => {
    let ingredientCount = 0;
    for (let i = 1; i <= 20; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredientCount++;
      }
    }
    return ingredientCount;
  };

  const extractIngredients = (recipe) => {
    if (!recipe) return

    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push([measure ? measure.trim() : "", ingredient.trim()]);
      }
    }
    return ingredients;
  };

  const ingredients = extractIngredients(recipe)

  return (
    <div className="mt-8 flex flex-col items-center">
      <Button onClick={fetchRecipe} disabled={isLoading}>
        Cook Up Something New!
      </Button>

      {recipe && (
        <div className="border-t border-border mt-16 w-full flex flex-col items-center">
          <h2 className="mt-8 text-2xl font-semibold text-primary">{recipe.strMeal}</h2>

          <div className="mt-4 flex gap-4">
            <p className="flex gap-1"><HandPlatter width='32px' />{recipe.strCategory}</p>
            <p className="text-secondary">|</p>
            <p className="flex gap-1"><Flag width='32px' />{recipe.strArea}</p>
            <p className="text-secondary">|</p>
            <p className="flex gap-1"><ShoppingBasket width='32px' />{countIngredients(recipe)} Ingredients</p>
          </div>

          <div className="mt-4 flex gap-4">
            {recipe.strSource && <Button variant='outline'>
              <Link href={recipe.strSource}>View Original</Link>
            </Button>}

            {recipe.strYoutube && <Button variant='secondary'>
              <Link href={recipe.strYoutube}>YouTube Video</Link>
            </Button>}
          </div>


          <div className="flex md:flex-row flex-col w-full gap-8 mt-16">
            <div className="flex-1 flex flex-col items-center md:items-start">
              <h3 className="font-semibold text-2xl text-primary relative">Ingredients
                <div className="w-1/2 h-[1px] bg-primary mt-2 max-md:mx-auto"></div>
              </h3>

              <ul className="mt-2 flex flex-col gap-2">
                {ingredients.map((item, index) => (
                  <li key={item + index} className="w-full flex gap-1 items-center">
                    <span className="text-lg text-primary font-medium">{item[0]}</span>
                    <span>{item[1]}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1">
              <img src={recipe.strMealThumb} className="rounded-md" />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="font-semibold text-2xl text-primary text-center relative">Method
              <div className="w-1/2 h-[1px] bg-primary mt-2 mx-auto"></div>
            </h3>

            <p className="mt-8 mb-16 whitespace-pre-line">
              {recipe.strInstructions}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Recipe
