import { useFavoriteStore } from '@/store/favoriteStore';
import { Heart, HeartOff } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PokemonCardProps {
  name: string;
  image: string;
}

export const PokemonCard = ({ name, image }: PokemonCardProps) => {
  const { toggleFavorite, isFavorite } = useFavoriteStore();

  return (
    <div className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition relative">
      <button
        onClick={() => toggleFavorite(name)}
        className="absolute top-2 right-2 text-red-500"
        title="Toggle favorite"
      >
        {isFavorite(name) ? <Heart className="fill-red-500" /> : <HeartOff />}
      </button>

      <Link to={`/pokemon/${name}`}>
        <img src={image} alt={name} className="w-24 h-24 mx-auto" />
        <h2 className="text-center capitalize font-semibold text-lg mt-2">{name}</h2>
      </Link>
    </div>
  );
};
