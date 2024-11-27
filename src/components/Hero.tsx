import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id='Home' className='w-[1280px] h-[full] font-roboto'>
    <div className='flex justify-between items-center md:flex-row flex-col'>
        <div className=' w-[640px] h-[300px] xl:my-[250px] lg:my-[170px] md:my-[14px] my-[50px] xl:pl-[80px] xl:pr-[60px] pl-[10px] flex flex-col gap-[24px]'>
          <div className='w-[500px] h-[2124px] flex flex-col gap-[24px]'>
            <h1 className='text-[56px] font-bold leading-[67.2px] h-[134px]'>Learn new skills online with ease</h1>
            <p className='text-[18px] leading-[27px] h-[54px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
          </div>
            
          <div className='w-[358px] h-[64px] pt-[16px] flex gap-[16px]'>
            <button className='w-[178px] h-[48px] text-[#FFFFFF] rounded-md border-[1px] border-black bg-black'>Start learning now</button>
            <button className='w-[164px] h-[48px] font-Roboto font-normal text-black rounded-md border-[1px] border-black bg-white'>Explore Courses</button>
            </div>                         
          </div>
          <div className='w-[640px]'>
            <img src='/images/img.svg' alt='' />
          </div>   
    </div>

    <div className='h-[228px] bg-[#f7f7f7] flex justify-between'>
      <div className='w-[315px] h-[68px]'>
        <h5 className='font-bold text-[24px] leading-[33.6px] py-[80px] ml-[8px]'>Trusted by 200+ companies worldwide.</h5>
      </div>
      <div className='w-[880px] h-[56px] flex my-[86px] py-[8.74px] xl:gap-[19.2px] xl:pl-[41.56px]'>
        <img src='/images/Logo-1.svg' alt='' />
        <img src='/images/Logo-2.svg' alt='' />
        <img src='/images/Logo-3.svg' alt='' />
        <img className='hidden lg:block' src='/images/Logo-4.svg' alt='' />
        <img className='hidden lg:block' src='/images/Logo-5.svg' alt='' />
        <img className='hidden lg:block' src='/images/Logo-6.svg' alt='' />
      </div>
    </div>
    
    </section>
  );
};

export default Hero;
