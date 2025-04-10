import { AnimatePresence, motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

export default function NotFound() {
   return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-50 to-yellow-100 p-4">
         <div className="max-w-md w-full mx-auto text-center">
            <motion.div
               className="relative mb-6 mx-auto"
               transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  duration: 1,
               }}
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
            >
               <div className="w-40 h-40 mx-auto relative cursor-pointer">
                  <img
                     src="/gif/pika-sticker-4.gif"
                     alt="Pikachu"
                     width={160}
                     height={160}
                     className="pointer-events-none"
                  />

                  <AnimatePresence>
                        <motion.div
                           className="absolute inset-0 -top-10 bottom-10 flex items-center justify-center"
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                        >
                           <div className="absolute top-0 left-0">
                              <Sparkles className="text-yellow-400 w-6 h-6" />
                           </div>
                           <div className="absolute top-0 right-0">
                              <Sparkles className="text-yellow-400 w-6 h-6" />
                           </div>
                           <div className="absolute bottom-0 left-0">
                              <Sparkles className="text-yellow-400 w-6 h-6" />
                           </div>
                           <div className="absolute bottom-0 right-0">
                              <Sparkles className="text-yellow-400 w-6 h-6" />
                           </div>
                        </motion.div>
                  </AnimatePresence>
               </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
               <h1 className="text-6xl font-bold text-red-500 mb-2">
                  4<span className="text-yellow-500">0</span>4
               </h1>
               <h2 className="text-2xl font-semibold text-gray-800 mb-6">Oh no! Pikachu couldn't find this page!</h2>
               <Link to="/">
                  <button
                     className="bg-white border-2 border-red-400 text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
                     type="button"
                  >
                     <div className="bg-red-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-0.5 group-hover:w-[184px] z-10 duration-500">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 1024 1024"
                           height="25px"
                           width="25px"
                        >
                           <path
                              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                              fill="#000000"
                           />
                           <path
                              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                              fill="#000000"
                           />
                        </svg>
                     </div>
                     <p className="translate-x-2">Go Home</p>
                  </button>
               </Link>
            </motion.div>
         </div>
      </div>
   )
}
