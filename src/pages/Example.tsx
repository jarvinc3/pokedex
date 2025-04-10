import { motion } from "framer-motion"
import { useState } from "react"

export const Example = () => {
   const [active, setActive] = useState(true)

   const toggleShadow = () => setActive(!active)

   const baseStyle = {
      backgroundColor: "#F0F0F3",
      borderRadius: "1rem",
      width: "100%",
      aspectRatio: "1 / 1",
   }

   const shadows = {
      none: {
         boxShadow: "none",
      },
      left: {
         boxShadow: "-10px -10px 30px 0 rgba(255, 255, 255, 1), 10px 10px 30px 0 rgba(174, 174, 192, 0.4)",
      },
      middle: {
         boxShadow:
            "-10px -10px 30px 0 rgba(255, 255, 255, 1), 10px 10px 30px 0 rgba(174, 174, 192, 0.4), inset -10px -10px 10px 0 rgba(174, 174, 192, 0.25), inset 10px 10px 10px 0 rgba(255, 255, 255, 1)",
      },
      right: {
         boxShadow: "-10px -10px 10px 0 rgba(255, 255, 255, 0.7), 10px 10px 10px 0 rgba(174, 174, 192, 0.2)",
      },
   }

   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#F0F0F3] p-8">
         <h1 className="text-3xl font-normal tracking-widest mb-8">NEUMORPHISM</h1>

         <button
            className="mb-16 px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg transition"
            onClick={toggleShadow}
         >
            {active ? "Quitar sombras" : "Activar sombras"}
         </button>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full">
            <motion.div
               animate={active ? shadows.left : shadows.none}
               transition={{ duration: 0.5 }}
               style={baseStyle}
            />

            <motion.div
               animate={active ? shadows.middle : shadows.none}
               transition={{ duration: 0.5 }}
               style={baseStyle}
            />

            <motion.div
               animate={active ? shadows.right : shadows.none}
               transition={{ duration: 0.5 }}
               style={baseStyle}
            />
         </div>
      </div>
   )
}
