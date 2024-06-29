import { Recipe } from "@/components/shared";
import RecipeCard from "@/components/shared/RecipeCard";

const recipe = {
  "idMeal": "52938",
  "strMeal": "Jamaican Beef Patties",
  "strDrinkAlternate": null,
  "strCategory": "Beef",
  "strArea": "Jamaican",
  "strInstructions": "Make the Pastry Dough\r\n\r\nTo a large bowl, add flour, 1 teaspoon salt, and turmeric and mix thoroughly.\r\nRub shortening into flour until there are small pieces of shortening completely covered with flour.\r\nPour in 1/2 cup of the ice water and mix with your hands to bring the dough together. Keep adding ice water 2 to 3 tablespoons at a time until the mixture forms a dough.\r\nAt this stage, you can cut the dough into 2 large pieces, wrap in plastic and refrigerate for 30 minutes before using it.\r\nAlternatively, cut the dough into 10 to 12 equal pieces, place on a platter or baking sheet, cover securely with plastic wrap and let chill for 30 minutes while you make the filling.\r\nMake the Filling\r\n\r\nAdd ground beef to a large bowl. Sprinkle in allspice and black pepper. Mix together and set aside.\r\nHeat oil in a skillet until hot.\r\nAdd onions and sauté until translucent. Add hot pepper, garlic and thyme and continue to sauté for another minute. Add 1/4 teaspoon salt.\r\nAdd seasoned ground beef and toss to mix, breaking up any clumps, and let cook until the meat is no longer pink.\r\nAdd ketchup and more salt to taste.\r\nPour in 2 cups of water and stir. Bring the mixture to a boil then reduce heat and let simmer until most of the liquid has evaporated and whatever is remaining has reduced to a thick sauce.\r\nFold in green onions. Remove from heat and let cool completely.\r\nAssemble the Patties\r\n\r\nBeat the egg and water together to make an egg wash. Set aside.\r\nNow you can prepare the dough in two ways.\r\nFirst Method: Flour the work surface and rolling pin. If you had cut it into 2 large pieces, then take one of the large pieces and roll it out into a very large circle. Take a bowl with a wide rim (about 5 inches) and cut out three circles.\r\n\r\nPlace about 3 heaping tablespoons of the filling onto 1/2 of each circle. Dip a finger into the water and moisten the edges of the pastry. Fold over the other half and press to seal. \r\n\r\nTake a fork and crimp the edges. Cut off any extra to make it look neat and uniform. Place on a parchment-lined baking sheet and continue to work until you have rolled all the dough and filled the patties.\r\nSecond Method: If you had pre-cut the dough into individual pieces, work with one piece of dough at a time. Roll it out on a floured surface into a 5-inch circle or a little larger. Don’t worry if the edges are not perfect.\r\n\r\nPlace 3 heaping tablespoons of the filling on one side of the circle. Dip a finger into the water and moisten the edges of the pastry. Fold over the other half and press to seal.\r\n\r\nTake a fork and crimp the edges. Cut off any extra to make it look neat and uniform. Place on a parchment-lined baking sheet and continue work until you have rolled all the dough and filled the patties.\r\n\r\nFrying and Serving the Patties\r\n\r\nAfter forming the patties, place the pans in the refrigerator while you heat the oven to 350 F.\r\nJust before adding the pans with the patties to the oven, brush the patties with egg wash.\r\nBake patties for 30 minutes or until golden brown.\r\nCool on wire racks.\r\nServe warm.",
  "strMealThumb": "https://www.themealdb.com/images/media/meals/wsqqsw1515364068.jpg",
  "strTags": "Snack,Spicy",
  "strYoutube": "https://www.youtube.com/watch?v=ypQjoiZiTac",
  "strIngredient1": "Plain Flour",
  "strIngredient2": "Salt",
  "strIngredient3": "Curry Powder",
  "strIngredient4": "Butter",
  "strIngredient5": "Water",
  "strIngredient6": "Minced Beef",
  "strIngredient7": "Allspice",
  "strIngredient8": "Black Pepper",
  "strIngredient9": "Vegetable Oil",
  "strIngredient10": "Onions",
  "strIngredient11": "Red Pepper",
  "strIngredient12": "Garlic",
  "strIngredient13": "Thyme",
  "strIngredient14": "Salt",
  "strIngredient15": "Tomato Ketchup",
  "strIngredient16": "Water",
  "strIngredient17": "Onions",
  "strIngredient18": "Egg",
  "strIngredient19": "Water",
  "strIngredient20": "Water",
  "strMeasure1": "4 cups ",
  "strMeasure2": "1 tsp ",
  "strMeasure3": "1 tsp ",
  "strMeasure4": "250g",
  "strMeasure5": "1 cup ",
  "strMeasure6": "900g",
  "strMeasure7": "1 tsp ",
  "strMeasure8": "1/2 tsp",
  "strMeasure9": "2 tbs",
  "strMeasure10": "1 cup ",
  "strMeasure11": "Ground",
  "strMeasure12": "2 tsp ground",
  "strMeasure13": "1 tbs",
  "strMeasure14": "1/4 tsp",
  "strMeasure15": "2 tbs",
  "strMeasure16": "2 cups ",
  "strMeasure17": "1/2 cup ",
  "strMeasure18": "1 beaten",
  "strMeasure19": "1 tbs",
  "strMeasure20": "1/4 cup",
  "strSource": "https://www.thespruce.com/jamaican-beef-patties-recipe-2137762",
  "strImageSource": null,
  "strCreativeCommonsConfirmed": null,
  "dateModified": null
}

export default function Home() {
  return (
    <main className="max-w-[1024px] px-2 mx-auto">
      <h1 className="text-center mt-8 text-primary font-bold text-3xl capitalize">Discover Your Next Favorite Recipe!</h1>

      <RecipeCard recipe={recipe} />

      <Recipe />
    </main>
  );
}
