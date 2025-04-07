import { PokemonPage } from "@/pages/pokemons/Pokemons";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <PokemonPage />,
   },
]);
