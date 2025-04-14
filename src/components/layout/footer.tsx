
export const Footer = () => {
   return (
      <>
         <div className="flex flex-col justify-center gap-2">
            <h2 className="text-lg">
               <strong>Jarvin Collado</strong>
               {" "} - jarvinct3@gmail.com
            </h2>
            <p className="text-sm text-gray-500">© 2023 Pokémon. All rights reserved.</p>
         </div>
         <div className="flex justify-center items-center gap-4">
            <button className="Btn">
               <span className="svgContainer">
                  <img className="size-8 rounded-sm" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/external-github-community-for-software-building-and-testing-online-logo-bold-tal-revivo.png" alt="" />
               </span>
               <span className="BG" />
            </button>
            <button className="Btn">
               <span className="svgContainer">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     x="0px"
                     y="0px"
                     width={100}
                     height={100}
                     viewBox="0 0 50 50"
                  >
                     <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                  </svg>
               </span>
               <span className="BG" />
            </button>
            <button className="Btn">
               <span className="svgContainer">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     x="0px"
                     y="0px"
                     viewBox="0 0 50 50"
                  >
                     <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z" />
                  </svg>
               </span>
               <span className="BG" />
            </button>
         </div>
      </>
   )
}
