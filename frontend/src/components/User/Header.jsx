

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { UserIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom'; 


function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
     


<header >
  {/* Thin white line */}
 
<div className="w-full py-2 items-center text-[12px] font-normal justify-center flex bg-gradient-to-tr from-blue-950 to-black text-white" >
   <p>Have you tried  the Phonefix app ? Discover now! </p>
</div>
  <div className="bg-[#fefffdd8] px-4 sm:px-20 lg:px-40 md:pt-5 pt-2">
     
      <div className="flex items-center justify-between">
     
        
        <h1 className="text-3xl md:text-4xl w-full ml-6 md:ml-0 md:w-max  items-center flex justify-center  font-serif font-extrabold">LObUY</h1>

       <div className="relative w-[600px] hidden md:flex">
  <MagnifyingGlassIcon className="w-5 h-5 text-gray-800 absolute left-3 top-3" />

  <input
    type="text"
    placeholder="Search products..."
    className="w-full pl-10 pr-4 py-2 bg-slate-200  text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>

        {/* Right section */}
        <div className=" flex items-center justify-center space-x-2">
          <Link to={'/login'} >
          <UserIcon className="h-6 w-6 text-black" />
          </Link>
          <Link to={'/login'}>
          <button className="hidden md:flex hover:text-gray-600">Login / Register</button>
          </Link>
        </div>

        {/* Mobile menu icon (three bars) */}
        <div className="lg:hidden absolute  ">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Nav links */}
      <div className="hidden lg:flex space-x-20 pt-6 pb-2 gap-9 font-normal text-[15px] cursor-pointer text-gray-900 items-center justify-center">
         <Link to={'/'} >
        <p className="hover:text-blue-600">Home</p>
        </Link>
        <Link to={'/shop'} >
        <p className="hover:text-blue-600">Men Watches</p>
        </Link>
         <Link to={'/shop'} >
        <p className="hover:text-blue-600">Head phone</p>
        </Link>
         <Link to={'/shop'} >
        <p className="hover:text-blue-600">Ear pode</p>
        </Link>
         <Link to={'/shop'} >
        <p className="hover:text-blue-600">Girl Watches</p>
        </Link>
        
         <Link to={'/shop'} >
        <p className="hover:text-blue-600">Accessories</p>
        </Link>
         <Link to={'/shop'} >
        <p className="hover:text-blue-600">Contact</p>
        </Link>
      </div>

      {/* Mobile nav menu */}
     
        <div className={`fixed top-0 left-0 w-64  rounded bg-white text-black z-40 transform transition-transform duration-500 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>

             <div className="flex justify-center  items-center p-4 border-b">
          <h2 className="text-lg text-center font-bold">Menu</h2>
          
          <XMarkIcon
           className="h-6 w-6 cursor-pointer absolute right-4"
            onClick={() => setMenuOpen(false)}
          />
         
        </div>
        <div className="flex-col  text-lg font-playball items-center p-4  border-b">
        <Link to={'/'} >
            <div className='flex justify-between'>
        <p className="hover:text-blue-600 p-2 ">Home</p>
      
        </div>
        </Link>
          <Link to={'/shop'} >
          <div className='flex justify-between'>
   <p className="hover:text-blue-600 p-2  ">Men Watches</p>
         <ChevronRightIcon className="w-7 " />
          </div>
     
        </Link>
         <Link to={'/shop'} >
         <div className='flex justify-between'>
        <p className="hover:text-blue-600 p-2 ">Head phone</p>
        <ChevronRightIcon className="w-7 " />
        </div>
        
        </Link>
         <Link to={'/shop'} >
         <div className='flex justify-between'>
        <p className="hover:text-blue-600 p-2 ">Ear pode</p>
        <ChevronRightIcon className="w-7 " />
        </div>
        </Link>
         <Link to={'/shop'} >
         <div className='flex justify-between'>
        <p className="hover:text-blue-600 p-2">Girl Watches</p>
        <ChevronRightIcon className="w-7 " />
        </div>
        </Link>
         <Link to={'/shop'} >
       
        </Link>
         <Link to={'/shop'} >
         <div className='flex justify-between'>
        <p className="hover:text-blue-600 p-2 ">Accessories</p>
       
        </div>
        </Link>
         <Link to={'/shop'} >
         <div className='flex justify-between'>
        <p className="hover:text-blue-600 p-2">Contact</p>
        
        </div>
        </Link>
        </div>
        </div>
      
    </div>
  {/* Top bar: Logo + Login */}
 









    
 
  
</header>
    </div>
  )
}

export default Header
