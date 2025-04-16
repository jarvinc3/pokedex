import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEffect, useState } from "react"

interface PaginationProps {
   prev: string | null
   next: string | null
   offset: number
   limit: number
   setOffset: (limit: number, offset: number) => void
}

const LIMIT_OPTIONS = [10, 20, 30]

export const Pagination = ({ limit, offset, setOffset, prev, next }: PaginationProps) => {
   const [limitValue, setLimitValue] = useState<number>(limit)

   useEffect(() => {
      if (limitValue !== limit) {
         setOffset(limitValue, 0)
      }
   }, [limitValue, limit, setOffset])   

   const handleLimitChange = (value: string) => {
      setLimitValue(Number(value))
   }

   const from = offset + 1
   const to = Math.min(offset + limitValue, offset + limitValue)

   return (
      <div className="flex justify-between w-full mt-6 gap-4 items-center">
         <AnimatedButton
            direction="prev"
            disabled={!prev}
            onClick={() => setOffset(limitValue, offset - limitValue)}
            aria-label="Previous page"
         />

         <div className="flex items-center gap-4 text-sm">
            <span className="text-muted-foreground">showing</span>
            <span className="font-medium">{from}</span>
            <span>-</span>
            <span className="font-medium">{to}</span>

            <Select value={limitValue.toString()} onValueChange={handleLimitChange}>
               <SelectTrigger className="w-[70px] h-9">
                  <SelectValue placeholder={limitValue} />
               </SelectTrigger>
               <SelectContent>
                  {LIMIT_OPTIONS.map((option) => (
                     <SelectItem key={option} value={option.toString()}>
                        {option}
                     </SelectItem>
                  ))}
               </SelectContent>
            </Select>
         </div>

         <AnimatedButton
            direction="next"
            disabled={!next}
            onClick={() => setOffset(limitValue, offset + limitValue)}
            aria-label="Next page"
         />
      </div>
   )
}

interface AnimatedButtonProps {
   direction: "prev" | "next"
   disabled: boolean
   onClick: () => void
   "aria-label": string
}

const AnimatedButton = ({ direction, disabled, onClick, "aria-label": ariaLabel }: AnimatedButtonProps) => {
   return (
      <button
         disabled={disabled}
         onClick={onClick}
         aria-label={ariaLabel}
         className={`group relative flex size-10 items-center justify-center gap-1 rounded-lg border border-black/30 
         ${disabled ? "opacity-50 cursor-not-allowed" : "hover:border-black/50"}`}
      >
         <div className={`size-1 rounded-full bg-black duration-300 ${!disabled ? "group-hover:opacity-0" : ""}`} />
         <div
            className={`relative size-1 origin-center rounded-full bg-black duration-300
            before:absolute ${direction === "prev" ? "before:left-[2px]" : "before:right-[2px]"}
            before:h-1 before:origin-${direction} before:rounded-full before:bg-black
            before:delay-300 before:duration-300 
            after:absolute ${direction === "prev" ? "after:left-[2px]" : "after:right-[2px]"}
            after:h-1 after:origin-${direction} after:rounded-full after:bg-black
            after:delay-300 after:duration-300 
            ${!disabled
                  ? `
               group-hover:w-6
               group-hover:before:w-3.5 group-hover:after:w-3.5
               ${direction === "prev"
                     ? "group-hover:before:rotate-45 group-hover:after:-rotate-45"
                     : "group-hover:before:-rotate-45 group-hover:after:rotate-45"
                  }
            `
                  : ""
               }`}
         />
         <div className={`size-1 rounded-full bg-black duration-300 ${!disabled ? "group-hover:opacity-0" : ""}`} />
      </button>
   )
}
