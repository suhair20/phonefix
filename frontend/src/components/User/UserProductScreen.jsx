import Header from './Header'
import React from 'react'
import { HomeIcon,ChevronRightIcon } from '@heroicons/react/24/solid';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Required core styles
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom'; 



import { Autoplay, Navigation, Pagination } from 'swiper/modules';



import image2 from '../../assets/watch.png';

function UserProductScreen() {
   return (
    <>
    <div className='h-screen w-screen  ' >
      <Header/>
       
<div className=' h-screen bg-[#fefffdd8] '>
    <div  className='lg:px-40 px-2  sm:px-28  '>
      <div className='  h-[500px]  rounded ' >
       <div>
       

          <div className='text-black cursor-pointer flex pb-7 pt-6   ' >
            <div className='flex items-center gap-2 justify-center' >
        <HomeIcon className="h-4 w-4 text-blue-500" />
        <ChevronRightIcon className="h-3 w-3  " />
        <p className='text-xs' >Home</p>
        </div>
       </div>

      <div className='text-black pb-5 font-semibold text-3xl'>
    Watch
</div>
<div className='items-center justify-center' >
   
</div>

 

<div className="w-full overflow-x-auto  items-center justify-center flex   touch-auto hide-scrollbar">
  <div className="grid lg:grid-cols-5 grid-cols-3  w-max md:gap-6 gap-3 mb-16 ">
   
        <div className="md:h-80 h-56 rounded w-28 md:w-56 bg-gray-200 flex flex-col justify-between">
  <div className="flex justify-center pt-5">
    <img src={image2} alt="Product" className="w-24 md:w-48 h-auto object-contain" />
  </div>

  <div className="px-3 pt-2 ">
    <p className="font-semibold">Roiex</p>
    <p className="text-gray-700">₹1,500</p>
  </div>

  <div className="px-3 pb-3">
    <button className="w-full h-10 text-sm font-medium text-white bg-blue-950 border border-black rounded-lg hover:bg-blue-900">
      Add to Cart
    </button>
  </div>
</div>


      
        <div className="md:h-80 h-56 rounded w-28 md:w-56 bg-gray-200 flex flex-col justify-between">
         <Link to={'/product'} >  
  <div className="flex justify-center pt-5">
    <img src={image2} alt="Product" className="w-24 md:w-48 h-auto object-contain" />
  </div>
  </Link>  

  <div className="px-3 pt-2 ">
    <p className="font-semibold">Roiex</p>
    <p className="text-gray-700">₹1,500</p>
  </div>

  <div className="px-3 pb-3">
   <Link  to={'/Cart'} >
    <button className="w-full h-10 text-sm font-medium text-white bg-blue-950 border border-black rounded-lg hover:bg-blue-900">
      Add to Cart
    </button>
    </Link>
    
  </div>
</div>


       
        <div className="md:h-80 h-56 rounded w-28 md:w-56 bg-gray-200 flex flex-col justify-between">
           <Link to={'/product'} >  
  <div className="flex justify-center pt-5">
    <img src={image2} alt="Product" className="w-24 md:w-48 h-auto object-contain" />
  </div>
  </Link>

  <div className="px-3 pt-2 ">
    <p className="font-semibold">Roiex</p>
    <p className="text-gray-700">₹1,500</p>
  </div>

  <div className="px-3 pb-3">
     <Link  to={'/Cart'} >
    <button className="w-full h-10 text-sm font-medium text-white bg-blue-950 border border-black rounded-lg hover:bg-blue-900">
      Add to Cart
    </button>
    </Link>
  </div>
</div>

        
        <div className="md:h-80 h-56 rounded w-28 md:w-56 bg-gray-200 flex flex-col justify-between">
           <Link to={'/product'} >  
  <div className="flex justify-center pt-5">
    <img src={image2} alt="Product" className="w-24 md:w-48 h-auto object-contain" />
  </div>
  </Link>

  <div className="px-3 pt-2 ">
    <p className="font-semibold">Roiex</p>
    <p className="text-gray-700">₹1,500</p>
  </div>

  <div className="px-3 pb-3">
      <Link  to={'/Cart'} >
    <button className="w-full h-10 text-sm font-medium text-white bg-blue-950 border border-black rounded-lg hover:bg-blue-900">
      Add to Cart
    </button>
    </Link>
  </div>
</div>

       
        <div className="md:h-80 h-56 rounded w-28 md:w-56 bg-gray-200 flex flex-col justify-between">
           <Link to={'/product'} >  
  <div className="flex justify-center pt-5">
    <img src={image2} alt="Product" className="w-24 md:w-48 h-auto object-contain" />
  </div>
  </Link>

  <div className="px-3 pt-2 ">
    <p className="font-semibold">Roiex</p>
    <p className="text-gray-700">₹1,500</p>
  </div>

  <div className="px-3 pb-3">
    <Link  to={'/Cart'} >
    <button className="w-full h-10 text-sm font-medium text-white bg-blue-950 border border-black rounded-lg hover:bg-blue-900">
      Add to Cart
    </button>
    </Link>
  </div>
</div>




        <div className="md:h-80 h-56 rounded w-28 md:w-56 bg-gray-200 flex flex-col justify-between">
           <Link to={'/product'} >  
  <div className="flex justify-center pt-5">
    <img src={image2} alt="Product" className="w-24 md:w-48 h-auto object-contain" />
  </div>
  </Link>

  <div className="px-3 pt-2 ">
    <p className="font-semibold">Roiex</p>
    <p className="text-gray-700">₹1,500</p>
  </div>

  <div className="px-3 pb-3">
    <Link  to={'/Cart'} >
    <button className="w-full h-10 text-sm font-medium text-white bg-blue-950 border border-black rounded-lg hover:bg-blue-900">
      Add to Cart
    </button>
    </Link>
  </div>
</div>




        <div className="md:h-80 h-56 rounded w-28 md:w-56 bg-gray-200 flex flex-col justify-between">
           <Link to={'/product'} >  
  <div className="flex justify-center pt-5">
    <img src={image2} alt="Product" className="w-24 md:w-48 h-auto object-contain" />
  </div>
  </Link>

  <div className="px-3 pt-2 ">
    <p className="font-semibold">Roiex</p>
    <p className="text-gray-700">₹1,500</p>
  </div>

  <div className="px-3 pb-3">
    <Link  to={'/Cart'} >
    <button className="w-full h-10 text-sm font-medium text-white bg-blue-950 border border-black rounded-lg hover:bg-blue-900">
      Add to Cart
    </button>
    </Link>
  </div>
</div>




        <div className="md:h-80 h-56 rounded w-28 md:w-56 bg-gray-200 flex flex-col justify-between">
           <Link to={'/product'} >  
  <div className="flex justify-center pt-5">
    <img src={image2} alt="Product" className="w-24 md:w-48 h-auto object-contain" />
  </div>
  </Link>

  <div className="px-3 pt-2 ">
    <p className="font-semibold">Roiex</p>
    <p className="text-gray-700">₹1,500</p>
  </div>

  <div className="px-3 pb-3">
    <Link  to={'/Cart'} >
    <button className="w-full h-10 text-sm font-medium text-white bg-blue-950 border border-black rounded-lg hover:bg-blue-900">
      Add to Cart
    </button>
    </Link>
  </div>
</div>




        <div className="md:h-80 h-56 rounded w-28 md:w-56 bg-gray-200 flex flex-col justify-between">
           <Link to={'/product'} >  
  <div className="flex justify-center pt-5">
    <img src={image2} alt="Product" className="w-24 md:w-48 h-auto object-contain" />
  </div>
  </Link>

  <div className="px-3 pt-2 ">
    <p className="font-semibold">Roiex</p>
    <p className="text-gray-700">₹1,500</p>
  </div>

  <div className="px-3 pb-3">
    <Link  to={'/Cart'} >
    <button className="w-full h-10 text-sm font-medium text-white bg-blue-950 border border-black rounded-lg hover:bg-blue-900">
      Add to Cart
    </button>
    </Link>
  </div>
</div>



        <div className="md:h-80 h-56 rounded w-28 md:w-56 bg-gray-200 flex flex-col justify-between">
           <Link to={'/product'} >  
  <div className="flex justify-center pt-5">
    <img src={image2} alt="Product" className="w-24 md:w-48 h-auto object-contain" />
  </div>
  </Link>

  <div className="px-3 pt-2 ">
    <p className="font-semibold">Roiex</p>
    <p className="text-gray-700">₹1,500</p>
  </div>

  <div className="px-3 pb-3">
    <Link  to={'/Cart'} >
    <button className="w-full h-10 text-sm font-medium text-white bg-blue-950 border border-black rounded-lg hover:bg-blue-900">
      Add to Cart
    </button>
    </Link>
  </div>
</div>
   
    
  </div>
</div>


       </div>
      </div>
      <div className='pt-6' >
   <div className="h-px bg-gray-400  w-full"></div>
  </div>
    </div>
    
</div>
      
    
    </div>
    </>
  )
}

export default UserProductScreen
