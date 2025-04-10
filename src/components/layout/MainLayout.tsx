import { Outlet } from "react-router-dom"


export const MainLayout = () => {
   return (
      <body className="min-h-screen flex justify-between flex-col">
         <header className="bg-gray-800 text-white p-4">
            <h1 className="text-2xl">Pokemon App</h1>
         </header>
         <main className="p-4 h-full">
            <Outlet />
         </main>
      </body>
   )
}
