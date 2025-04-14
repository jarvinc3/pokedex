import NotFound from "@/components/error/Error404";
import { MainLayout } from "@/components/layout/MainLayout";
import { Favorites } from "@/pages/favorites/Favorites";
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
      path: "/favorites",
      element: <Favorites />,
   },
   {
      path: "*",
      element: <NotFound />,
   },
]);
