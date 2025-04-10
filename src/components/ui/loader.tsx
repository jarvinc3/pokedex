import { useMemo } from 'react';

interface LoaderProps {
   className?: string;
   isLoading: boolean;
   children?: React.ReactNode;
}

export const Loader = ({ className, isLoading, children }: LoaderProps) => {
   const selectedGif = useMemo(() => {
      const gifs = [
         '/gif/fire-pokemon.gif',
         '/gif/pika-sticker-2.gif',
         '/gif/pokeball-gif.gif',
      ];
      if (isLoading) {
         return gifs[Math.floor(Math.random() * gifs.length)];
      }
      return null;
   }, [isLoading]);

   return (
      <div className={`relative flex flex-col justify-center items-center ${className}`}>
         {isLoading && selectedGif && (
            <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
               <img src={selectedGif} alt="Pokeball Loader" className="size-52" />
            </div>
         )}
         {children}
      </div>
   );
};
