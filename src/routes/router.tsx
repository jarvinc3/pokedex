import { createBrowserRouter } from "react-router-dom";
import PokemonPage from "../features/pokemons/pages/Pokemons";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <PokemonPage />,
   },
]);
