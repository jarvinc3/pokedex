import { useFavoriteStore } from '@/store/favoriteStore';
import { PokemonType } from '@/types/pokemon-detail';
import { typeColors } from '@/types/pokemons-types';
import { Heart, HeartOff, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PokemonCardProps {
  name: string;
  image: string;
  type?: PokemonType[];
}

export const PokemonCard = ({ name, image, type }: PokemonCardProps) => {
  const { toggleFavorite, isFavorite } = useFavoriteStore();
  const primaryType = type?.[0];
  const primaryColor = typeColors[primaryType?.type.name as keyof typeof typeColors ?? 'normal']
  const gradientBackground = `linear-gradient(to bottom, transparent, ${primaryColor})`;


  return (
    <div
      className={`rounded-2xl shadow p-3 hover:shadow-lg transition relative duration-300 overflow-hidden border h-56 border-slate-300`}
      style={{ background: gradientBackground }}
    >
      <>
        <button
          onClick={() => toggleFavorite(name)}
          className="absolute top-2 right-2 text-red-500 z-10"
          title="Toggle favorite"
        >
          {isFavorite(name) ? <Heart className="fill-red-500" /> : <HeartOff />}
        </button>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/img/pokeball-bg-2.png"
            alt="Pokeball"
            className="w-full h-full object-contain opacity-10"
          />
        </div>
      </>

      <Link to={`/pokemon/${name}`} className="relative z-10 h-full flex flex-col justify-end">
        <img src={image} alt={name} className="size-auto mx-auto" />
        <h2 className="text-center mb-3 capitalize font-semibold text-xl mt-1 text-white drop-shadow shadow-black">
          • {name} •
        </h2>
        <div className="flex justify-center items-end gap-1 w-full">
          {type?.map((type, index) => (
            <span
              key={index}
              className="text-sm font-medium text-white drop-shadow shadow-black w-full py-1 rounded-md flex justify-center items-center gap-1 border border-slate-900/20"
              style={{ backgroundColor: typeColors[type.type.name as keyof typeof typeColors] }}
            >
              <img src={`/icons/${type.type.name}-type.ico`} className="w-4 h-4" alt="" />
              {type.type.name}
            </span>
          ))}
        </div>
        <button className="bg-[#0d1b14]/40 border border-slate-900/20 rounded-md py-1 mt-2 text-white">
          View Details
          <Zap className="w-4 h-4 inline-block ml-1" />
        </button>
      </Link>
    </div>
  );
};

