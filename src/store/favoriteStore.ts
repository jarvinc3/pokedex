import { create } from 'zustand';

interface FavoriteState {
   favorites: string[];
   toggleFavorite: (name: string) => void;
   isFavorite: (name: string) => boolean;
}

export const useFavoriteStore = create<FavoriteState>((set, get) => ({
   favorites: [],
   toggleFavorite: (name) => {
      const { favorites } = get();
      set({
         favorites: favorites.includes(name)
            ? favorites.filter((f) => f !== name)
            : [...favorites, name],
      });
   },
   isFavorite: (name) => get().favorites.includes(name),
}));
