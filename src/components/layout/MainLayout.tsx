import { Outlet } from "react-router-dom"
import { Footer } from "./footer"
import { Header } from "./header"
import WaveAnimation from "./WaaveAnimation"


export const MainLayout = () => {
   return (
      <div className="min-h-screen flex justify-end flex-col background">
         <header className="p-4 fixed top-0 left-0 right-0 z-50 flex flex-col-reverse md:justify-between md:flex-row gap-2">
            <Header />
         </header>
         <WaveAnimation />
         <main className="p-4 mt-40 h-full">
            <Outlet />
         </main>
         <footer className="rounded-lg mx-4 lg:mx-16 mb-5 border-2 border-gray-500 p-4 flex flex-col text-center gap-3 sm:gap-0 sm:flex-row justify-between items-center">
            <Footer />
         </footer>
      </div>
   )
}
