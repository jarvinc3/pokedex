import { useCallback, useEffect, useState } from 'react';
import { getAllPokemons, getPokemonDetails } from '../api';
import { PokemonCard } from '../components/PokemonCard';

interface Pokemon {
   name: string;
   image: string;
}

const PokemonPage = () => {
   const [pokemons, setPokemons] = useState<Pokemon[]>([]);
   const [offset, setOffset] = useState(0);
   const [loading, setLoading] = useState(true);

   const fetchPokemons = useCallback(async () => {
      setLoading(true);
      try {
         const data = await getAllPokemons(20, offset);
         const detailed = await Promise.all(
            data.results.map(async (data: { name: string; url: string } ) => {
               const details = await getPokemonDetails(data.url);
               return {
                  name: data.name,
                  image: details.sprites.front_default,
               };
            })
         );
         setPokemons(detailed);
      } catch (error) {
         console.error('Error fetching pokemons:', error);
      } finally {
         setLoading(false);
      }
   }, [offset]);

   useEffect(() => {
      fetchPokemons();
   }, [fetchPokemons]);

   return (
      <div className="p-4">
         <h1 className="text-2xl font-bold mb-4">All Pokémons</h1>
         {loading ? (
            <p>Loading...</p>
         ) : (
            <>
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {pokemons.map((pokemon) => (
                     <PokemonCard key={pokemon.name} name={pokemon.name} image={pokemon.image} />
                  ))}
               </div>
               <div className="flex justify-center mt-6 gap-4">
                  <button
                     onClick={() => setOffset((prev) => Math.max(prev - 20, 0))}
                     disabled={offset === 0}
                     className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                  >
                     Prev
                  </button>
                  <button
                     onClick={() => setOffset((prev) => prev + 20)}
                     className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                     Next
                  </button>
               </div>
            </>
         )}
      </div>
   );
};

export default PokemonPage;
