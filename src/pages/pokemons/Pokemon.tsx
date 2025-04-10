import { Loader } from '@/components/ui/loader';
import { fetchPokemonByName } from '@/provider/pokemons';
import { PokemonAbility, PokemonType } from '@/types/pokemon-detail';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';

const OnePokemon = () => {
   const { name } = useParams();

   const { data: pokemon, isLoading, isError } = useQuery({
      queryKey: ['pokemon', name],
      queryFn: () => fetchPokemonByName(name!),
      enabled: !!name,
   });


   return (
      <Loader isLoading={isLoading}>
         {isError && <div className="text-red-500">Error fetching data</div>}
         {!pokemon && !isLoading && <div className="text-red-500">Pokemon not found</div>}
         <div className="p-6 max-w-3xl mx-auto">
            <Link to="/" className="text-blue-500 underline mb-4 inline-block">← Volver</Link>
            <div className="bg-white shadow rounded-2xl p-6 text-center">
               <img
                  src={pokemon?.sprites.front_default || ''}
                  alt={pokemon?.name}
                  className="w-32 h-32 mx-auto mb-4"
               />
               <h1 className="text-3xl font-bold capitalize mb-2">{pokemon?.name}</h1>
               <div className="flex justify-center gap-4 mb-4">
                  {pokemon?.types.map((pokemonType: PokemonType) => (
                     <span
                        key={pokemonType.slot}
                        className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
                     >
                        {pokemonType.type.name}
                     </span>
                  ))}
               </div>
               <div className="grid grid-cols-2 gap-4 text-left mt-4">
                  <div>
                     <p><strong>Altura:</strong> {(pokemon?.height ?? 0) / 10} m</p>
                     <p><strong>Peso:</strong> {(pokemon?.weight ?? 0) / 10} kg</p>
                  </div>
                  <div>
                     <p><strong>Experiencia base:</strong> {pokemon?.base_experience}</p>
                     <p><strong>Habilidades:</strong></p>
                     <ul className="list-disc ml-5">
                        {pokemon?.abilities.map((ability: PokemonAbility) => (
                           <li key={ability.ability.name}>{ability.ability.name}</li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </Loader>
   );
};

export default OnePokemon;
