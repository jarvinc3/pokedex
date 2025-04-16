import { PokemonCard } from '@/components/features/pokemons/PokemonCard';
import { PokemonList } from '@/components/features/pokemons/PokemonList';
import { Loader } from '@/components/ui/loader';
import { Pagination } from '@/components/ui/pagination';
import { fetchPokemonList } from '@/provider/pokemons';
import { useViewModeStore } from '@/store/useListModeStore';
import { useQuery } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const containerVariants = {
   hidden: { opacity: 0, y: 20 },
   visible: {
      opacity: 1,
      y: 0,
      transition: {
         staggerChildren: 0.06,
         duration: 0.3,
      },
   },
   exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const itemVariants = {
   hidden: { opacity: 0, y: 20 },
   visible: { opacity: 1, y: 0 },
};

const PokemonPage = () => {
   const { isList } = useViewModeStore();
   const [pagination, setPagination] = useState({ limit: 21, offset: 0 });

   const { data, isLoading, isError } = useQuery({
      queryKey: ['pokemons', pagination],
      queryFn: () => fetchPokemonList(pagination.limit, pagination.offset),
      staleTime: 1000 * 60 * 5,
   });

   if (isError) return <div className="text-red-500">Error fetching data</div>;

   const renderPokemons = () => {
      const layoutClass = isList
         ? 'flex flex-col gap-7 w-full pr-10 relative'
         : 'grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10';

      return (
         <AnimatePresence mode="wait">
            <motion.div
               key={isList ? 'list' : 'cards'} // Forzar cambio de layout
               className={layoutClass}
               variants={containerVariants}
               initial="hidden"
               animate="visible"
               exit="exit"
            >
               {data?.pokemons.map((pokemon) => {
                  const Component = isList ? PokemonList : PokemonCard;
                  return (
                     <motion.div key={pokemon.name} variants={itemVariants}>
                        <Component
                           type={pokemon.types}
                           name={pokemon.name}
                           image={pokemon.sprites.other['official-artwork'].front_default || ''}
                        />
                     </motion.div>
                  );
               })}
            </motion.div>
         </AnimatePresence>
      );
   };

   return (
      <Loader isLoading={isLoading}>
         {renderPokemons()}
         {data && (
            <Pagination
               offset={pagination.offset}
               limit={pagination.limit}
               setOffset={(limit, offset) => setPagination({ limit, offset })}
               prev={data.pagination.prev}
               next={data.pagination.next}
            />
         )}
      </Loader>
   );
};

export default PokemonPage;
