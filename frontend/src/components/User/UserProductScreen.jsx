import Header from './Header'
import React from 'react'
import { HomeIcon,ChevronRightIcon } from '@heroicons/react/24/solid';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Required core styles
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link, useParams } from 'react-router-dom'; 
import { useGetProductsByCategoryQuery } from '../../../slices/userSlice';



import { Autoplay, Navigation, Pagination } from 'swiper/modules';



import image2 from '../../assets/watch.png';

function UserProductScreen() {

const {categoryId}=useParams()
console.log(categoryId,'idddddddd');

const { data:products, isLoading } = useGetProductsByCategoryQuery(categoryId);



console.log(products);


if (isLoading) {
  return <div className="text-center">Loading products...</div>;
}



   return (
    <>
    <div className='h-screen w-screen  ' >
      <Header/>
       
<div className=' h-screen bg-[#fefffdd8] '>
    <div  className='lg:px-40 px-6  sm:px-28  '>
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

 

<div className="w-full overflow-x-auto items-center justify-center flex touch-auto hide-scrollbar">
  <div className="grid lg:grid-cols-5 grid-cols-2 w-max md:gap-6 gap-8 mb-16">

    {products.map((product) => (
      <div
        key={product._id}
        className="md:h-80 h-56 rounded w-36 md:w-56 bg-gray-200 border-2 flex flex-col justify-between"
      >
        {/* Product page */}
        <Link to={`/product/${product._id}`}>
          <div className="flex justify-center ">
            <img
              src={product?.images?.[0]?.url}
              alt={product?.name}
              className="w-24 md:w-48 h-44 object-contain"
            />
          </div>
        </Link>

        {/* Product info */}
        <div className="px-3 pt-2">
          <p className="font-semibold">{product?.name}</p>
          <p className="text-gray-700">₹{product?.price}</p>
        </div>

        {/* Add to cart */}
        <div className="px-3 pb-3">
          <Link to="/cart">
            <button className="w-full h-10 text-sm font-medium text-white bg-blue-950 border border-black rounded-lg hover:bg-blue-900">
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    ))}

  </div>
</div>



     

      

      




   
    
  


       </div>
      </div>
     
    </div>
    
</div>
      
    
    </div>
    </>
  )
}

export default UserProductScreen
