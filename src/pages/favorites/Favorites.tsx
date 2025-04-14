import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react';

const slides = [
   { label: 'Slide 1', bg: 'bg-red-500' },
   { label: 'Slide 2', bg: 'bg-blue-500' },
   { label: 'Slide 3', bg: 'bg-green-500' },
   { label: 'Slide 4', bg: 'bg-yellow-500' },
   { label: 'Slide 5', bg: 'bg-purple-500' },
   { label: 'Slide 6', bg: 'bg-pink-500' },
   { label: 'Slide 7', bg: 'bg-orange-500' },
   { label: 'Slide 8', bg: 'bg-cyan-500' },
   { label: 'Slide 9', bg: 'bg-emerald-500' },
   { label: 'Slide 10', bg: 'bg-emerald-900' },
];

export const Favorites = () => {
   const [activeIndex, setActiveIndex] = useState(0);


   return (
      <div className="flex flex-col justify-center gap-14 h-screen bg-gray-900 overflow-hidden">
         <div className="flex justify-center h- items-center bg-gray-900">
            <Swiper
               direction="vertical"
               grabCursor={true}
               slidesPerView={'auto'}
               centeredSlides={true}
               spaceBetween={30}
               mousewheel={{ forceToAxis: true, sensitivity: 1 }}
               onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
               className="w-[400px] h-[600px] swiper-cards"
            >
               {slides.map((slide, index) => {
                  const isActive = index === activeIndex;
                  const isAbove = index < activeIndex;

                  const rotationClass = isActive
                     ? 'rotate-0 scale-100 z-20'
                     : isAbove
                        ? 'rotate-9 scale-95 opacity-80 translate-x-3 z-10'
                        : 'rotate-[-9deg] scale-95 opacity-80 translate-x-24 -translate-y-8 z-10';

                  return (
                     <SwiperSlide
                        key={index}
                        className={`text-white rounded-xl text-2xl font-bold flex items-center justify-center border-2 border-white transition-all duration-500 ease-in-out ${rotationClass} ${slide.bg}`}
                     >
                        {slide.label}
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </div>
         {/* <div className="flex justify-center items-center bg-gray-900">
            <Swiper
               direction="vertical"
               spaceBetween={500}
               mousewheel={true}
               effect="cards"
               grabCursor={true}
               modules={[EffectCards]}
               className="w-60 h-80 swiper-cards flex-col-reverse"
            >
               {slides.map((slide, index) => (
                  <SwiperSlide
                     key={index}
                     className={`text-white rounded-xl text-2xl font-bold flex items-center justify-center border-2 border-white ${slide.bg}`}
                  >
                     {slide.label}
                  </SwiperSlide>
               ))}
            </Swiper>
         </div> */}
      </div>
   );
};
