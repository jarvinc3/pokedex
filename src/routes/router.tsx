import PokemonPage from "@/features/pokemons/pages/Pokemons";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <PokemonPage />,
   },
]);
