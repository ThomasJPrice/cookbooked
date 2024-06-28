import { Recipe } from "@/components/shared";

async function getRandomRecipe() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default function Home() {
  return (
    <main className="max-w-[1024px] px-2 mx-auto">
      <h1 className="text-center mt-8 text-primary font-bold text-3xl capitalize">Discover Your Next Favorite Recipe!</h1>

      <Recipe />
    </main>
  );
}
