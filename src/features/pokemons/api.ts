import api from '../../lib/axios';

export const getAllPokemons = async (limit = 20, offset = 0) => {
   const res = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);
   return res.data;
};

export const getPokemonDetails = async (url: string) => {
   const res = await api.get(url);
   return res.data;
};

export const getPokemonByName = async (name: string) => {
   const res = await api.get(`/pokemon/${name}`);
   return res.data;
};
