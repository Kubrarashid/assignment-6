import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <section id='Services' className='w-[full] h-[1049px] font-roboto text-left py-[112px] flex flex-row flex-wrap justify-center items-center'>
    <div className='md:w-[768px] w-[410px] h-[109px] hidden md:flex flex-col gap-[24px] mx-[256px]'>
      {/* sec 1 */}
      <h2 className='text-[48px] font-bold leading-[67.2px] h-[134px]'>Explore Courses By Category</h2>
      <p className='text-[18px] leading-[27px] h-[54px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
    </div>

    <div className='w-full h-[636px] flex flex-col gap-[64px] mt-[80px] items-center'>
      {/* sec 2 */}
      
        {/* sub sec 1 */}
        <div className='h-[120px] flex flex-row flex-wrap gap-[24px]'>
        {/* 1---- */}
        <div className='h-[120px] w-[410.67px] bg-[#f7f7f7] flex p-[10px] gap-[30px] rounded-md'>
          <div className='w-[100px] h-[100px] bg-white rounded-md flex justify-center items-center'>
            <img className='w-[32px] h-[32px]' src='/images/pen-tool-2.svg' alt='' />
          </div>
          <div className='w-[246.67] h-[57px] my-[21.5px]'>
            <p className='font-semibold text-[20px] leading-[30px]'>Design & Development</p>
            <p className='text-[18px] leading-[27px]'>50+ Courses Avaiable</p>
          </div>
        </div>
        {/* 2--- */}
        <div className='h-[120px] w-[410.67px] bg-[#f7f7f7] flex p-[10px] gap-[30px] rounded-md'>
          <div className='w-[100px] h-[100px] bg-white rounded-md flex justify-center items-center'>
            <img className='w-[32px] h-[32px]' src='/images/volume-high.svg' alt='' />
          </div>
          <div className='w-[246.67] h-[57px] my-[21.5px]'>
            <p className='font-semibold text-[20px] leading-[30px]'>Marketing</p>
            <p className='text-[18px] leading-[27px]'>50+ Courses Avaiable</p>
          </div>
        </div>
        {/* 3---- */}
        <div className='h-[120px] w-[410.67px] bg-[#f7f7f7] flex p-[10px] gap-[30px] rounded-md'>
          <div className='w-[100px] h-[100px] bg-white rounded-md flex justify-center items-center'>
            <img className='w-[32px] h-[32px]' src='/images/group.svg' alt='' />
          </div>
          <div className='w-[246.67] h-[57px] my-[21.5px]'>
            <p className='font-semibold text-[20px] leading-[30px]'>Development</p>
            <p className='text-[18px] leading-[27px]'>50+ Courses Avaiable</p>
          </div>
        </div>
        </div>
        <div className='h-[120px] flex flex-row flex-wrap gap-[24px]'> {/* sub section 2 */}          
         {/* 4---- */}
        <div className='h-[120px] w-[410.67px] bg-[#f7f7f7] flex p-[10px] gap-[32px] rounded-md'>
          <div className='w-[100px] h-[100px] bg-white rounded-md flex justify-center items-center'>
            <img className='w-[32px] h-[32px]' src='/images/microphone.svg' alt='' />
          </div>
          <div className='w-[246.67] h-[57px] my-[21.5px]'>
            <p className='font-semibold text-[20px] leading-[30px]'>Communication</p>
            <p className='text-[18px] leading-[27px]'>50+ Courses Avaiable</p>
          </div>
        </div>
         {/* 5---- */}
        <div className='h-[120px] w-[410.67px] bg-[#f7f7f7] flex p-[10px] gap-[30px] rounded-md'>
          <div className='w-[100px] h-[100px] bg-white rounded-md flex justify-center items-center'>
            <img className='w-[32px] h-[32px]' src='/images/link.svg' alt='' />
          </div>
          <div className='w-[246.67] h-[57px] my-[21.5px]'>
            <p className='font-semibold text-[20px] leading-[30px]'>Digital Marketing</p>
            <p className='text-[18px] leading-[27px]'>50+ Courses Avaiable</p>
          </div>
        </div>
         {/* 6---- */}
        <div className='h-[120px] w-[410.67px] bg-[#f7f7f7] flex p-[10px] gap-[30px] rounded-md'>
          <div className='w-[100px] h-[100px] bg-white rounded-md flex justify-center items-center'>
            <img className='w-[32px] h-[32px]' src='/images/arrow-2.svg' alt='' />
          </div>
          <div className='w-[246.67] h-[57px] my-[21.5px]'>
            <p className='font-semibold text-[20px] leading-[30px]'>Self Development</p>
            <p className='text-[18px] leading-[27px]'>50+ Courses Avaiable</p>
          </div>
        </div>
        </div>
        <div className='h-[120px] flex flex-col flex-wrap gap-[24px]'>
         {/* 7---- */}
        <div className='h-[120px] w-[410.67px] bg-[#f7f7f7] flex p-[10px] gap-[30px] rounded-md'>
          <div className='w-[100px] h-[100px] bg-white rounded-md flex justify-center items-center'>
            <img className='w-[32px] h-[32px]' src='/images/briefcase.svg' alt='' />
          </div>
          <div className='w-[246.67] h-[57px] my-[21.5px]'>
            <p className='font-semibold text-[20px] leading-[30px]'>Business</p>
            <p className='text-[18px] leading-[27px]'>50+ Courses Avaiable</p>
          </div>
        </div>
        {/* 8---- */}
        <div className='h-[120px] w-[410.67px] bg-[#f7f7f7] flex p-[10px] gap-[30px] rounded-md'>
          <div className='w-[100px] h-[100px] bg-white rounded-md flex justify-center items-center'>
            <img className='w-[32px] h-[32px]' src='/images/book.svg' alt='' />
          </div>
          <div className='w-[246.67] h-[57px] my-[21.5px]'>
            <p className='font-semibold text-[20px] leading-[30px]'>Finance</p>
            <p className='text-[18px] leading-[27px]'>50+ Courses Avaiable</p>
          </div>
        </div>
        {/* 9---- */}
        <div className='h-[120px] w-[410.67px] bg-[#f7f7f7] flex p-[10px] gap-[30px] rounded-md'>
          <div className='w-[100px] h-[100px] bg-white rounded-md flex justify-center items-center'>
            <img className='w-[32px] h-[32px]' src='/images/book (2).svg' alt='' />
          </div>
          <div className='w-[246.67px] h-[57px] my-[21.5px]'>
            <p className='font-semibold text-[20px] leading-[30px]'>Consulting</p>
            <p className='text-[18px] leading-[27px]'>50+ Courses Avaiable</p>
          </div>
        </div>
        </div>
        <div className='w-[155px] h-[48px] border-solid mx-[562.5px]'>
          <button className='text-[16px] hover:bg-slate-300 w-[164px] h-[48px] rounded-md border-solid border-black border-[1px]'> View All Courses</button>
        </div>
      </div>
    
    </section>
  )
}

export default Services
