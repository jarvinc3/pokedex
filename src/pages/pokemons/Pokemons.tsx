import { PokemonCard } from '@/components/features/pokemons/PokemonCard';
import { Loader } from '@/components/ui/loader';
import { Pagination } from '@/components/ui/pagination';
import { fetchPokemonList } from '@/provider/pokemons';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const PokemonPage = () => {
   const [offset, setOffset] = useState(0);

   const { data, isLoading, isError } = useQuery({
      queryKey: ['pokemons', offset],
      queryFn: () => fetchPokemonList(20, offset),
      staleTime: 1000 * 60 * 5,
   });


   return (
      <Loader isLoading={isLoading}>
         {isError && <div className="text-red-500">Error fetching data</div>}

         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {data?.pokemons.map((pokemon) => (
               <PokemonCard
                  key={pokemon.name}
                  type={pokemon.types}
                  name={pokemon.name}
                  image={pokemon.sprites.other['official-artwork'].front_default || ''}
               />
            ))}
         </div>

         {data && (
            <Pagination
               offset={offset}
               setOffset={setOffset}
               prev={data.pagination.prev}
               next={data.pagination.next}
            />
         )}
      </Loader>
   );
};

export default PokemonPage;
