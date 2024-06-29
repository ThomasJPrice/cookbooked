import { RandomRecipe } from "@/components/shared";

export default function Home() {
  return (
    <main className="max-w-[1024px] px-2 mx-auto">
      <h1 className="text-center mt-8 text-primary font-bold text-3xl capitalize">Discover Your Next Favorite Recipe!</h1>

      <RandomRecipe />
    </main>
  );
}
