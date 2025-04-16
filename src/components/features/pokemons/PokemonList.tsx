import { PokemonType } from "@/types/pokemon-detail";
import { typeColors } from "@/types/pokemons-types";
import { useNavigate } from "react-router-dom";

interface PokemonListProps {
   name: string;
   image: string;
   type?: PokemonType[];
}


export const PokemonList = ({ name, image, type }: PokemonListProps) => {
   const navigate = useNavigate();
   const primaryType = type?.[0];
   const primaryColor = typeColors[primaryType?.type.name as keyof typeof typeColors ?? 'normal']
   const gradientBackground = `linear-gradient(to right,${primaryColor}, ${primaryColor}, transparent)`;

   return (
      <div className="relative flex items-center" onClick={() => navigate(`/pokemon/${name}`)} >
         <div className="rounded-xl flex p-3 w-full transition-all relative duration-300 h-32" style={{ background: gradientBackground }}>
            <div className="flex flex-col justify-between">
               <h2 className="ml-6 capitalize font-semibold text-xl text-white drop-shadow shadow-black">
                  • {name} •
               </h2>
               <div className="flex gap-2 w-full">
                  {type?.map((type, index) => (
                     <span
                        key={index}
                        className="text-sm font-medium text-white drop-shadow shadow-black w-24 py-1 rounded-md flex justify-center items-center gap-1 border border-slate-900/20"
                        style={{ backgroundColor: typeColors[type.type.name as keyof typeof typeColors] }}
                     >
                        <img src={`/icons/${type.type.name}-type.ico`} className="w-4 h-4" alt="" />
                        {type.type.name}
                     </span>
                  ))}
               </div>
            </div>
         </div>
         <img src={image} alt={name} className="lg:size-80 size-40 absolute top-1/2 -right-14 -translate-y-1/2" />
      </div>
   )
}
