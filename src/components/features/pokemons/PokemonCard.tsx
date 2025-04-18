import { PokemonType } from '@/types/pokemon-detail';
import { typeColors } from '@/types/pokemons-types';
import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PokemonCardProps {
  name: string;
  image: string;
  type?: PokemonType[];
}

export const PokemonCard = ({ name, image, type }: PokemonCardProps) => {
  const primaryType = type?.[0];
  const primaryColor = typeColors[primaryType?.type.name as keyof typeof typeColors ?? 'normal']
  const gradientBackground = `linear-gradient(to bottom, transparent, ${primaryColor})`;

  return (
    <div
      className={`rounded-2xl mt-14 shadow p-3 hover:shadow-lg transition relative duration-300 border lg:h-72 h-50 border-slate-300`}
      style={{ background: gradientBackground }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/img/pokeball-bg-2.png"
          alt="Pokeball"
          className="w-full h-full object-contain opacity-10"
        />
      </div>

      <Link to={`/pokemon/${name}`} className="relative h-full flex flex-col justify-end">
        <img src={image} alt={name} className="lg:size-80 size-96 mx-auto" />
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