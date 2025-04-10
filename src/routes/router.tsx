import NotFound from "@/components/error/Error404";
import { MainLayout } from "@/components/layout/MainLayout";
import OnePokemon from "@/pages/pokemons/Pokemon";
import PokemonPage from "@/pages/pokemons/Pokemons";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         {
            index: true,
            element: <PokemonPage />,
         },
         {
            path: "/pokemon/:name",
            element: <OnePokemon />,
         },
      ],
   },
   {
      path: "*",
      element: <NotFound />,
   },
   {}
]);
