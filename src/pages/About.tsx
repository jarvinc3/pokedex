import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
   return (
      <motion.div
         initial={{ opacity: 0, x: 50 }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: -50 }}
         transition={{ duration: 0.5 }}
         className="p-4 text-center"
      >
         <h1 className="text-3xl font-bold">Acerca de</h1>
         <p>Esta es la página About</p>
         <Link to="/" className="mt-4 inline-block text-blue-500">
            Volver al Inicio
         </Link>
      </motion.div>
   );
}
