import { Outlet } from "react-router-dom"
import { Footer } from "./footer"
import { Header } from "./header"


export const MainLayout = () => {
   return (
      <body className="min-h-screen flex justify-between flex-col">
         <header className="p-4">
            <Header />
         </header>
         <main className="p-4 h-full">
            <Outlet />
         </main>
         <footer className="rounded-lg mx-16 mb-10 border-2 border-gray-500 p-4 flex justify-between items-center">
            <Footer />
         </footer>
      </body>
   )
}
