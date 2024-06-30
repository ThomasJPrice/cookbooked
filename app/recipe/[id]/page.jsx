import { RecipeCard } from '@/components/shared'
import React from 'react'

const RecipeDetails = async ({ params }) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
  const data = await response.json()
  const recipe = data.meals[0]

  return (
    <div className='max-w-[1024px] mx-auto px-2'>
      <RecipeCard recipe={recipe} />
    </div>
  )
}

export default RecipeDetails