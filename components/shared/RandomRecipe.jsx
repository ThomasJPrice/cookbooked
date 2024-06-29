'use client'

import { useState } from "react"
import { Button } from "../ui/button"
import { RecipeCard } from "."

const RandomRecipe = () => {
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

  return (
    <div className="mt-8 flex flex-col items-center">
    <Button onClick={fetchRecipe} disabled={isLoading}>
      Cook Up Something New!
    </Button>

    {recipe && <RecipeCard recipe={recipe} border />}

    </div>
  )
}

export default RandomRecipe