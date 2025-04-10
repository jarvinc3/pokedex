import { NamedAPIResource, PokemonDetails } from "@/types/pokemon-detail";
import api from "./base";

export interface Pagination {
   next: string | null;
   prev: string | null;
}

export const fetchPokemonList = async (limit = 20, offset = 0):
   Promise<{ pokemons: PokemonDetails[]; pagination: Pagination }> => {
   try {
      const { data } = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);

      if (!data.results || !Array.isArray(data.results)) {
         throw new Error("Invalid response format: 'results' is missing or not an array");
      }

      const pokemons = await fetchPokemonDetails(data.results);

      return {
         pokemons,
         pagination: {
            next: data.next,
            prev: data.previous,
         },
      };
   } catch (error) {
      console.error("Error fetching pokemons with details:", error);
      throw new Error("Failed to fetch pokemons with details.");
   }
};


const fetchPokemonDetails = async (pokemons: NamedAPIResource[]): Promise<PokemonDetails[]> => {
   try {
      if (!Array.isArray(pokemons)) {
         throw new Error("Invalid pokemons data.");
      }

      const details = await Promise.all(
         pokemons.map(async ({ url }) => {
            const res = await api.get(url);
            if (!res.data) {
               throw new Error(`Failed to fetch data for Pokémon at URL: ${url}`);
            }
            return res.data;
         })
      );

      return details;
   } catch (error) {
      console.error("Error fetching pokemon details:", error);
      throw new Error("Failed to fetch pokemon details.");
   }
};


export const fetchPokemonByName = async (name: string): Promise<PokemonDetails> => {
   try {
      const res = await api.get(`/pokemon/${name}`);

      if (!res.data) {
         throw new Error(`No data found for Pokémon: ${name}`);
      }

      return res.data;
   } catch (error) {
      console.error("Error fetching pokemon by name:", error);
      throw new Error(`Failed to fetch Pokémon with name: ${name}`);
   }
};
