import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin,FaTwitter,FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Headline = () => {
  return (
    <header className='mx-auto p-2 bg-secondry border-2'>
      <div className='container w-full flex flex-col sm:flex-row sm:justify-between items-center gap-4 border-[2px] bg-[#F7F7F7]'>
        
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm sm:text-base items-start'>
            <p className='ml-[64px] text-black font-normal mt-3 mb-3'>
              Phone Number: 956 742 455 678  
            </p>
            <p className='text-primary font-normal mt-1.5 mb-1.5 hidden sm:block'></p>
            <p className=' text-black font-normal mt-3 mb-3'>
              Email:info@ddsgnr.com 
            </p> 
        </div>
        
        <div className='flex gap-4 justify-center sm:justify-end items-center mr-11'>
          <FaLinkedin size={21} className='text-black cursor-pointer mt-2.5' />
          <FaFacebookF size={21} className='text-black cursor-pointer mt-2.5' />
          <FaInstagram size={21} className='text-black cursor-pointer mt-2.5' />
          <FaTwitter size={21} className='text-black cursor-pointer mt-2.5' />
        </div>
      </div>
        <div className='w-[1280px] h-[72px] py-[14px] border-[2px] mt-5 bg-[#F7F7F7]'>
          <div className='w-[1152px] h-[44px] mx-[64px] flex xl:flex-row flex-col items-center justify-between gap-2'>
            <div className='w-[130.6px] h-[41px] justify-center items-center'>
              <img src='/images/Ddsgnr Library.svg' />
            </div>

      <div className='lg-:w-[910px] md:w-[750px] h-[44px] ml-[111.4px] flex lg:gap-[32px] gap-[8px] md:flex-row flex-col items-center'>
      <nav className='flex font-roboto text--[16px] lg:gap-[32px] sm:gap-[5px]'>
        <Link href="./home" className='hover:text-blue-500'>Home</Link>
        <Link href="./courses" className='hover:text-blue-500'>Courses</Link>
        <Link href="./services" className='hover:text-blue-500'>Services</Link>
        <Link href="./achievement" className='hover:text-blue-500'>Achievement</Link>
        <Link href="./about-us" className='hover:text-blue-500'>AboutUs</Link>
        <Link href="./testimonial" className='hover:text-blue-500'>Testimonial</Link>
      </nav>
         <div className='h-[40px] w-[191px] flex py-[1px]'>
           <button className='w-[80px] h-[40px] rounded-md border-[1px] border-black'>Login</button>
           <button className='w-[95px] h-[40px] rounded-md border-[1px] border-black bg-[#000000] text-white ml-[16px]'>Sign Up</button>
         </div>
        </div>    
      </div>
      </div>
    </header>
  )
}

export default Headline
