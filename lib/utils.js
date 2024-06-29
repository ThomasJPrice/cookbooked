import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const countIngredients = (recipe) => {
  let ingredientCount = 0;
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredientCount++;
    }
  }
  return ingredientCount;
};

export const extractIngredients = (recipe) => {
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