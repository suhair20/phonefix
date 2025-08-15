import React from 'react'
import Header from './Header'
import Footer from './Footer';
import { HomeIcon } from '@heroicons/react/24/solid';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Required core styles
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Star, Users, ShieldCheck, Store } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import image from '../../assets/OIP.jpeg';

import image2 from '../../assets/watch.png';
import image3 from '../../assets/headset.png'
import image4 from '../../assets/earrrrpod.png'
import image5 from '../../assets/earpod.png'


function UserHomeScreen() {
  return (
    <>
    <div className='   ' >
      <Header/>
<div className='  bg-[#fefffdd8] '>
   
    <div  className='  bg-gradient-to-tr from-blue-950 via-black to-blue-950'>
      <div></div>

 <h1 className="absolute text-[70px] whitespace-nowrap md:top-[40%] left-1/2 -translate-x-1/2 mt-28 -translate-y-1/2 md:text-[150px] font-extrabold text-white opacity-80 z-0 font-serif   pointer-events-none">
        Phonefix
    </h1>

      <div className='md:h-[500px] rounded flex items-center justify-center overflow-hidden z-10'>
      
       

          

      

<div className="w-full overflow-x-auto  scroll-smooth snap-x snap-mandatory touch-auto hide-scrollbar">
  <div className="flex w-max md:gap-28 mt-20 mb-6  md:mt-40 gap-14 animate-slide hover:[animation-play-state:paused]">
    {/* Original + duplicate cards */}
    {[...Array(2)].map((_, i) => (
      <React.Fragment key={i}>
       





       
        <div className='  group relative md:h-80 p-3  items-center justify-center h-60 w-44 rounded-2xl  md:w-72 overflow-hidden text-white cursor-pointer transition-transform duration-300 ease-in-out bg-gray-950'>

           <div className="absolute   bg-[#5c3c2d] text-xs text-[#f0c590] px-3 py-1 rounded-full uppercase font-semibold">
           Limited to 50 pieces
           </div>
            <Link to={'/product'} >  
         <div className="mt-12 flex items-center justify-center">
        <img
         src={image3}
         alt="Watch"
           className="md:w-44 w-24   group-hover:scale-125 group-focus:scale-125 transition-transform duration-500 ease-in-out "
        />
     </div>
     </Link>
           <div className="absolute mt-4  ">
    <p className="text-xs text-gray-400 tracking-wider">CH-9341.2-CUBK</p>
    <p className="text-xs md:text-sm font-semibold">SPACE TIMER JUPITER GOLD</p>
  </div>
         
        </div>









       <div className="  group relative bg-[#262e48] rounded-2xl p-3  md:h-80  h-60 w-44 md:w-72   text-white overflow-hidden  cursor-pointer transition-transform duration-300 ease-in-out ">
  {/* Limited badge */}
  <div className="absolute   bg-[#5c3c2d] text-xs text-[#f0c590] px-3 py-1 rounded-full uppercase font-semibold">
    Limited to 30 pieces
  </div>

  {/* Watch image with angle */}
   <Link to={'/product'} >  
  <div className="mt-12 flex items-center justify-center">
    <img
      src={image2}
      alt="Watch"
      className="md:w-44 w-24 rotate-[35deg] scale-110   group-hover:scale-125 group-focus:scale-125 transition-transform duration-500 ease-in-out "
    />
  </div>
  </Link>

  {/* Text content */}
  <div className="absolute mt-4 ">
    <p className="text-xs text-gray-400 tracking-wider">CH-9341.2-CUBK</p>
    <p className="text-xs md:text-sm font-semibold">SPACE TIMER JUPITER GOLD</p>
  </div>
</div>






        <div className=' group  relative md:h-80 p-3  items-center justify-center h-60 w-44 rounded-2xl  md:w-72 overflow-hidden text-white bg-gray-950 cursor-pointer transition-transform duration-300 ease-in-out '>

           <div className="absolute   bg-[#5c3c2d] text-xs text-[#f0c590] px-3 py-1 rounded-full uppercase font-semibold">
           Limited to 25 pieces
           </div>
            <Link to={'/product'} >  
         <div className="mt-12 flex items-center justify-center">
        <img
         src={image4}
         alt="Watch"
           className="md:w-44 w-24 rotate-[35deg] scale-110  group-hover:scale-125 group-focus:scale-125 transition-transform duration-500 ease-in-out "
        />
     </div>
     </Link>
           <div className="absolute mt-4 ">
    <p className="text-xs text-gray-400 tracking-wider">CH-9341.2-9UBK</p>
    <p className="text-xs md:text-sm font-semibold">KDM AirPod</p>
  </div>
         
        </div>





         <div className=' group   relative md:h-80 p-3  items-center justify-center h-60 w-44 rounded-2xl  md:w-72 overflow-hidden text-white bg-[#262e48]  cursor-pointer transition-transform duration-300 ease-in-out'>

           <div className="absolute   bg-[#5c3c2d] text-xs text-[#f0c590] px-3 py-1 rounded-full uppercase font-semibold">
           Limited to 37 pieces
           </div>
            <Link to={'/product'} >  
         <div className="mt-12 flex items-center justify-center">
        <img
         src={image5}
         alt="Watch"
           className="md:w-44 w-24 rotate-[35deg] scale-110   group-hover:scale-125 group-focus:scale-125 transition-transform duration-500 ease-in-out "
        />
     </div>
     </Link>
           <div className="absolute mt-4 ">
    <p className="text-xs text-gray-400 tracking-wider">CH-99941.2-CUBK</p>
    <p className="text-xs md:text-sm font-semibold">AirPods pro</p>
  </div>
         
        </div>







        <div className='  group relative md:h-80 p-3  items-center justify-center h-60 w-44 rounded-2xl  md:w-72 overflow-hidden text-white bg-[#121a34] cursor-pointer transition-transform duration-300 ease-in-out '>

           <div className="absolute   bg-[#5c3c2d] text-xs text-[#f0c590] px-3 py-1 rounded-full uppercase font-semibold">
           Limited to 58 pieces
           </div>
            <Link to={'/product'} >  
         <div className="mt-12 flex items-center justify-center">
        <img
         src={image2}
         alt="Watch"
           className="md:w-44 w-24 rotate-[35deg] scale-110  group-hover:scale-125 group-focus:scale-125 transition-transform duration-500 ease-in-out "
        />
     </div>
     </Link>
           <div className="absolute mt-4 ">
    <p className="text-xs text-gray-400 tracking-wider">CH-9341.2-CUBK</p>
    <p className="text-xs md:text-sm font-semibold">SPACE TIMER JUPITER GOLD</p>
  </div>
         






        </div>
      </React.Fragment>
    ))}
  </div>
</div>


       
      </div>
      
    </div>
   <div className='pt-4 md:pt-10 px-4 md:px-36 h-auto'>
  <h1 className='text-3xl font-normal p-4 md:p-10'>POPULAR BRAND</h1>

  {/* Horizontal Scroll Container for Small Screens */}//
  <div className='flex flex-col gap-4'>

    {/* Wrap inside overflow container */}
    <div className='flex lg:gap-16 gap-2 overflow-x-auto xl:overflow-visible whitespace-nowrap'>
      <div className='min-w-[12rem] h-12 p-4 font-normal hover:text-blue-500 cursor-pointer flex items-center justify-center bg-slate-300 rounded-lg'>
        UBLOTE
      </div>
      <div className='min-w-[12rem] h-12 font-normal hover:text-blue-500 cursor-pointer flex items-center justify-center bg-slate-300 rounded-lg'>
        G SHOCK
      </div>
      <div className='min-w-[12rem] h-12 font-normal hover:text-blue-500 cursor-pointer flex items-center justify-center bg-slate-300 rounded-lg'>
        ROLEX
      </div>
      <div className='min-w-[12rem] h-12 font-normal hover:text-blue-500 cursor-pointer flex items-center justify-center bg-slate-300 rounded-lg'>
        KDM
      </div>
      <div className='min-w-[12rem] h-12 font-normal hover:text-blue-500 cursor-pointer flex items-center justify-center bg-slate-300 rounded-lg'>
        POPUP
      </div>
    </div>

    {/* Second Row */}
    <div className='flex lg:gap-16 gap-2 overflow-x-auto xl:overflow-visible whitespace-nowrap'>
      <div className='min-w-[12rem] h-12 p-4 font-normal hover:text-blue-500 cursor-pointer flex items-center justify-center bg-slate-300 rounded-lg'>
        GYMEN
      </div>
      <div className='min-w-[12rem] h-12 font-normal hover:text-blue-500 cursor-pointer flex items-center justify-center bg-slate-300 rounded-lg'>
        EXIOX
      </div>
      <div className='min-w-[12rem] h-12 font-normal hover:text-blue-500 cursor-pointer flex items-center justify-center bg-slate-300 rounded-lg'>
        DIOMEIN
      </div>
      <div className='min-w-[12rem] h-12 font-normal hover:text-blue-500 cursor-pointer flex items-center justify-center bg-slate-300 rounded-lg'>
        SHWIR
      </div>
      <div className='min-w-[12rem] h-12 font-normal hover:text-blue-500 cursor-pointer flex items-center justify-center bg-slate-300 rounded-lg'>
        TIOX
      </div>
    </div>

  </div>
</div>






<div className="bg-[#fefffdd8] py-16 mt-12 px-6 md:px-36  text-center">
  <h2 className="text-3xl font-bold mb-10">Why People Trust Us</h2>

  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 text-gray-700">
    <div className=' border border-gray-500 hover:border-blue-600 cursor-pointer h-36 flex flex-col items-center justify-center  rounded-lg ' >
      <Star className="w-10 h-10 text-blue-400 mb-2" />
      <h3 className="md:text-4xl font-bold text-black">4.8 / 5</h3>
      <p className="mt-2">Average Customer Rating</p>
    </div>

    <div className=' border border-gray-500  hover:border-blue-600 h-36 flex cursor-pointer flex-col items-center justify-center  rounded-lg ' >
        <Users className="w-10 h-10 text-blue-500 mb-2" />
      <h3 className="md:text-4xl font-bold text-black">50,000+</h3>
      <p className="mt-2">Monthly Visitors</p>
    </div>

    <div className=' border border-gray-400  cursor-pointer hover:border-blue-600  h-36 flex flex-col items-center justify-center  rounded-lg ' >
      <ShieldCheck className="w-10 h-10 text-blue-500 mb-2" />
      <h3 className="md:text-4xl font-bold text-black">100%</h3>
      <p className="mt-2">Buyer Protection Guaranteed</p>
    </div>

 <div className=' border border-gray-400 cursor-pointer hover:border-blue-600 h-36 flex flex-col items-center justify-center  rounded-lg ' >
     <Store className="w-10 h-10 text-blue-500 mb-2" />
      <h3 className="md:text-4xl font-bold text-black">1,200+</h3>
      <p className="mt-2">Trusted Sellers</p>
    </div>
  </div>
</div>




<div className="bg-[#fefffdd8] py-16 mt-12 px-6 md:px-36  ">
  <h2 className="text-3xl font-bold mb-10">Explore phonefix</h2>

  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 text-gray-700">
    <div>
    <div className=' border border-gray-500 hover:border-blue-600 cursor-pointer h-56 flex flex-col items-center justify-center  rounded-lg ' >
     <img
         src={image5}
         alt="Watch"
           className="md:w-44 w-24 rotate-[35deg] scale-110   group-hover:scale-125 group-focus:scale-125 transition-transform duration-500 ease-in-out "
        />
      
    </div>
    <p className="mt-2 text-center">Average Customer Rating</p>
    </div>
    
 <div>
    <div className=' border border-gray-500  hover:border-blue-600 h-56 flex cursor-pointer flex-col items-center justify-center  rounded-lg ' >
         <img
         src={image4}
         alt="Watch"
           className="md:w-44 w-24 rotate-[35deg] scale-110   group-hover:scale-125 group-focus:scale-125 transition-transform duration-500 ease-in-out "
        />
      
    </div>
    <p className="mt-2 text-center ">Monthly Visitors</p>
    </div>

<div>
    <div className=' border border-gray-400  cursor-pointer hover:border-blue-600  h-56  flex flex-col items-center justify-center  rounded-lg ' >
      <img
         src={image3}
         alt="Watch"
           className="md:w-44 w-24 rotate-[35deg] scale-110   group-hover:scale-125 group-focus:scale-125 transition-transform duration-500 ease-in-out "
        />
      
    </div>
    <p className="mt-2 text-center ">Buyer Protection Guaranteed</p>
    </div>


<div>
    <div className=' border border-gray-400  cursor-pointer hover:border-blue-600  h-56  flex flex-col items-center justify-center  rounded-lg ' >
      <img
         src={image2}
         alt="Watch"
           className="md:w-44 w-24 rotate-[35deg] scale-110   group-hover:scale-125 group-focus:scale-125 transition-transform duration-500 ease-in-out "
        />
      
    </div>
    <p className="mt-2 text-center ">Buyer Protection Guaranteed</p>
    </div>


    <div>
    <div className=' border border-gray-400  cursor-pointer hover:border-blue-600  h-56  flex flex-col items-center justify-center  rounded-lg ' >
      <img
         src={image3}
         alt="Watch"
           className="md:w-44 w-24 rotate-[35deg] scale-110   group-hover:scale-125 group-focus:scale-125 transition-transform duration-500 ease-in-out "
        />
      
    </div>
    <p className="mt-2 text-center ">Buyer Protection Guaranteed</p>
    </div>


   <div>
    <div className=' border border-gray-400  cursor-pointer hover:border-blue-600  h-56  flex flex-col items-center justify-center  rounded-lg ' >
      <img
         src={image2}
         alt="Watch"
           className="md:w-44 w-24 rotate-[35deg] scale-110   group-hover:scale-125 group-focus:scale-125 transition-transform duration-500 ease-in-out "
        />
      
    </div>
    <p className="mt-2 text-center ">Buyer Protection Guaranteed</p>
    </div>


   <div>
    <div className=' border border-gray-400  cursor-pointer hover:border-blue-600  h-56  flex flex-col items-center justify-center  rounded-lg ' >
      <img
         src={image3}
         alt="Watch"
           className="md:w-44 w-24 rotate-[35deg] scale-110   group-hover:scale-125 group-focus:scale-125 transition-transform duration-500 ease-in-out "
        />
      
    </div>
    <p className="mt-2 text-center ">Buyer Protection Guaranteed</p>
    </div>

   <div>
    <div className=' border border-gray-400  cursor-pointer hover:border-blue-600  h-56  flex flex-col items-center justify-center  rounded-lg ' >
      <img
         src={image3}
         alt="Watch"
           className="md:w-44 w-24 rotate-[35deg] scale-110   group-hover:scale-125 group-focus:scale-125 transition-transform duration-500 ease-in-out "
        />
      
    </div>
    <p className="mt-2 text-center ">Buyer Protection Guaranteed</p>
    </div>
  </div>
</div>









</div>
      
   
    </div>
     <Footer/>
    </>
  )
}

export default UserHomeScreen
