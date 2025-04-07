import { PokemonAbility, PokemonDetail, PokemonType } from '@/types/pokemonDetail';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPokemonByName } from '../api';


const OnePokemon = () => {
   const { name } = useParams();
   const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
      const fetchPokemon = async () => {
         setLoading(true);
         try {
            const data = await getPokemonByName(name!);
            setPokemon(data);
         } catch (error) {
            console.error('Error fetching pokemon details:', error);
         } finally {
            setLoading(false);
         }
      };

      fetchPokemon();
   }, [name]);

   if (loading) return <p className="p-4">Cargando...</p>;
   if (!pokemon) return <p className="p-4">No se encontró el Pokémon.</p>;

   return (
      <div className="p-6 max-w-3xl mx-auto">
         <Link to="/" className="text-blue-500 underline mb-4 inline-block">← Volver</Link>
         <div className="bg-white shadow rounded-2xl p-6 text-center">
            <img
               src={pokemon.sprites.front_default || ''}
               alt={pokemon.name}
               className="w-32 h-32 mx-auto mb-4"
            />
            <h1 className="text-3xl font-bold capitalize mb-2">{pokemon.name}</h1>
            <div className="flex justify-center gap-4 mb-4">
               {pokemon.types.map((types: PokemonType) => (
                  <span
                     key={types.slot}
                     className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
                  >
                     {types.type.name}
                  </span>
               ))}
            </div>
            <div className="grid grid-cols-2 gap-4 text-left mt-4">
               <div>
                  <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
                  <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
               </div>
               <div>
                  <p><strong>Experiencia base:</strong> {pokemon.base_experience}</p>
                  <p><strong>Habilidades:</strong></p>
                  <ul className="list-disc ml-5">
                     {pokemon.abilities.map((abilities: PokemonAbility) => (
                        <li key={abilities.ability.name}>{abilities.ability.name}</li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default OnePokemon;
