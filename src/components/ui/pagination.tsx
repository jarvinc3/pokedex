interface PaginationProps {
   prev: string | null;
   next: string | null;
   offset: number;
   setOffset: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination = ({ offset, setOffset, prev, next }: PaginationProps) => {
   return (
      <div className="flex justify-between w-full mt-6 gap-4">
         {/* Botón Anterior */}
         <button
            disabled={!prev}
            onClick={() => setOffset(offset - 20)}
            className={`group relative flex size-10 items-center justify-center gap-1 rounded-lg border border-black/30 
               ${!prev ? 'opacity-50 cursor-not-allowed' : 'hover:border-black/50'}`
            }
         >
            <div className={`size-1 rounded-full bg-black duration-300 ${prev ? 'group-hover:opacity-0' : ''}`} />
            <div
               className={`relative size-1 origin-center rounded-full bg-black duration-300
                  before:absolute before:left-[2px] before:h-1 before:origin-left before:rounded-full before:bg-black
                  before:delay-300 before:duration-300 
                  after:absolute after:left-[2px] after:h-1 after:origin-left after:rounded-full after:bg-black
                  after:delay-300 after:duration-300 
                  ${prev ? 'group-hover:w-6 group-hover:before:w-3.5 group-hover:before:rotate-45 group-hover:after:w-3.5 group-hover:after:-rotate-45' : ''}`}
            />
            <div className={`size-1 rounded-full bg-black duration-300 ${prev ? 'group-hover:opacity-0' : ''}`} />
         </button>

         {/* Botón Siguiente */}
         <button
            disabled={!next}
            onClick={() => setOffset(offset + 20)}
            className={`group relative flex size-10 items-center justify-center gap-1 rounded-lg border border-black/30 
               ${!next ? 'opacity-50 cursor-not-allowed' : 'hover:border-black/50'}`
            }
         >
            <div className={`size-1 rounded-full bg-black duration-300 ${next ? 'group-hover:opacity-0' : ''}`} />
            <div
               className={`relative size-1 origin-center rounded-full bg-black duration-300
                  before:absolute before:right-[2px] before:h-1 before:origin-right before:rounded-full before:bg-black
                  before:delay-300 before:duration-300 
                  after:absolute after:right-[2px] after:h-1 after:origin-right after:rounded-full after:bg-black
                  after:delay-300 after:duration-300 
                  ${next ? 'group-hover:w-6 group-hover:before:w-3.5 group-hover:before:-rotate-45 group-hover:after:w-3.5 group-hover:after:rotate-45' : ''}`}
            />
            <div className={`size-1 rounded-full bg-black duration-300 ${next ? 'group-hover:opacity-0' : ''}`} />
         </button>
      </div>
   );
};
