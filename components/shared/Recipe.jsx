'use client'

import { Flag, HandPlatter, Loader2, ShoppingBasket } from "lucide-react"
import { Button } from "../ui/button"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

const Recipe = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [recipe, setRecipe] = useState(null)

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

  return (
    <div className="mt-8 flex flex-col items-center">
      <Button onClick={fetchRecipe} disabled={isLoading}>
        <Loader2 className={`mr-2 h-4 w-4 animate-spin ${isLoading ? '' : 'hidden'}`} />
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
            <Button variant='outline'>
              <Link href=''>View Original</Link>
            </Button>

            <Button variant='secondary'>
              <Link href=''>YouTube Video</Link>
            </Button>
          </div>


          <div className="flex w-full gap-8 mt-16">
            <div className="flex-1">
              <h3 className="font-semibold text-xl text-primary">Ingredients</h3>
            </div>

            <div className="flex-1">
              <img src={recipe.strMealThumb} className="rounded-md" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Recipe
