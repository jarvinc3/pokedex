
export const Example = () => {
   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#F0F0F3] p-8">
         <h1 className="text-3xl font-normal tracking-widest mb-16">NEUMORPHISM</h1>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full">
            {/* Left Card */}
            <div>
               <div
                  className="w-full aspect-square rounded-2xl"
                  style={{
                     backgroundColor: "#F0F0F3",
                     boxShadow: "-10px -10px 30px 0 rgba(255, 255, 255, 1), 10px 10px 30px 0 rgba(174, 174, 192, 0.4)",
                  }}
               ></div>
            </div>

            {/* Middle Card */}
            <div>
               <div
                  className="w-full aspect-square rounded-2xl"
                  style={{
                     backgroundColor: "#F0F0F3",
                     boxShadow:
                        "-10px -10px 30px 0 rgba(255, 255, 255, 1), 10px 10px 30px 0 rgba(174, 174, 192, 0.4), inset -10px -10px 10px 0 rgba(174, 174, 192, 0.25), inset 10px 10px 10px 0 rgba(255, 255, 255, 1)",
                  }}
               ></div>
            </div>

            {/* Right Card */}
            <div>
               <div
                  className="w-full aspect-square rounded-2xl"
                  style={{
                     backgroundColor: "#F0F0F3",
                     boxShadow: "-10px -10px 10px 0 rgba(255, 255, 255, 0.7), 10px 10px 10px 0 rgba(174, 174, 192, 0.2)",
                  }}
               ></div>
            </div>
         </div>
      </div>
   )
}

