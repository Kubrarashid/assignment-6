import React from 'react'
import Image from 'next/image'
import { FaLinkedin,FaTwitter,FaDribbble } from "react-icons/fa"

const AboutUs = () => {
  return (
    <section id='AboutUs' className='w-[full] h-[895px] bg-[#f7f7f7] py-[112px] flex flex-col gap-[80px] items-center'>
    <div className='w-[768px] h-[109px] mx-[256px] flex flex-col gap-[16px] '>
      <h2 className='font-bold text-[48px] leading-[57.6px] text-center'>Our team</h2>
      <p className='text-center text-[18px] leading-27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    <div className='h-[482px] flex flex-col gap-[64px]'>
          {/* profile-1 */}
      <div className='h-[209px] xl:w-[1060px] md:w-[760px] sm:w-[640px] flex flex-row xl:gap-[48px] justify-center'>
         <div className='w[200px] h-[209px] flex flex-col gap-[24px]'>
          <div className='w-[80px] h-[80px] mx-[157.33px]'>
            <img src="/images/pr-1.svg" alt="" />
          </div>
          <div className='w-[394.67px] h-[57px]'>
            <p className='text-center font-semibold text-[20px] leading-[30px]'>James Nduku</p>
            <p className='text-center text-[18px] leading-[27px]'>Marketing Coordinato</p>
          </div>
          <div className='w-[100px] h-[24px] flex gap-[14px] mx-[147.33px]'>
          <FaLinkedin size={18} className='text-black cursor-pointer mt-2.5' />
          <FaTwitter size={18} className='text-black cursor-pointer mt-2.5' />
          <FaDribbble size={18} className='text-black cursor-pointer mt-2.5' />
          </div>
        </div>
         {/* profile-2 */}
         <div className='w-[394.67px] h-[209px] flex flex-col gap-[24px] items-center'>
          <div className='w-[80px] h-[80px] mx-[157.33px]'>
            <img src="/images/pr-2.svg" alt="" />
          </div>
          <div className='w-[394.67px] h-[57px]'>
            <p className='text-center font-semibold text-[20px] leading-[30px]'>Joseph Munyambu</p>
            <p className='text-center text-[18px] leading-[27px]'>Nursing Assistant</p>
          </div>
          <div className='w-[100px] h-[24px] flex gap-[14px] mx-[147.33px]'>
          <FaLinkedin size={18} className='text-black cursor-pointer mt-2.5' />
          <FaTwitter size={18} className='text-black cursor-pointer mt-2.5' />
          <FaDribbble size={18} className='text-black cursor-pointer mt-2.5' />
          </div>
          </div>
          {/* profile-3 */}
         <div className='w[394.67px] h-[209px] flex flex-col gap-[24px] items-center'>
          <div className='w-[80px] h-[80px] mx-[157.33px]'>
            <img src="/images/pr-3.svg" alt="" />
          </div>
          <div className='w-[394.67px] h-[57px]'>
            <p className='text-center font-semibold text-[20px] leading-[30px]'>Joseph Ngumbou</p>
            <p className='text-center text-[18px] leading-[27px]'>Medical Assistant</p>
          </div>
          <div className='w-[100px] h-[24px] flex gap-[14px] mx-[147.33px]'>
          <FaLinkedin size={18} className='text-black cursor-pointer mt-2.5' />
          <FaTwitter size={18} className='text-black cursor-pointer mt-2.5' />
          <FaDribbble size={18} className='text-black cursor-pointer mt-2.5' />
          </div>
          </div>
      </div>
    </div>
    <div className='h-[482px] flex flex-col gap-[64px]'>
          {/* profile-4 */}
          <div className='h-[209px] xl:w-[1060px] md:w-[760px] sm:w-[640px] flex flex-row xl:gap-[48px] justify-center'>
          <div className='w-[394.67px] h-[209px] flex flex-col gap-[24px] items-center'>
          <div className='w-[80px] h-[80px] mx-[157.33px]'>
            <img src="/images/pr-4.svg" alt="" />
          </div>
          <div className='w-[394.67px] h-[57px]'>
            <p className='text-center font-semibold text-[20px] leading-[30px]'>Erick Kipkemboi</p>
            <p className='text-center text-[18px] leading-[27px]'>Web Designer</p>
          </div>
          <div className='w-[100px] h-[24px] flex gap-[14px] mx-[147.33px]'>
          <FaLinkedin size={18} className='text-black cursor-pointer mt-2.5' />
          <FaTwitter size={18} className='text-black cursor-pointer mt-2.5' />
          <FaDribbble size={18} className='text-black cursor-pointer mt-2.5' />
          </div>
          </div>
                  
          {/* profile-5 */}
         <div className='w[394.67px] h-[209px] flex flex-col gap-[24px] items-center'>
          <div className='w-[80px] h-[80px] mx-[157.33px]'>
            <img src="/images/pr-5.svg" alt="" />
          </div>
          <div className='w-[394.67px] h-[57px]'>
            <p className='text-center font-semibold text-[20px] leading-[30px]'>JStephen Kerubo</p>
            <p className='text-center text-[18px] leading-[27px]'>president of Sales</p>
          </div>
          <div className='w-[100px] h-[24px] flex gap-[14px] mx-[147.33px]'>
          <FaLinkedin size={18} className='text-black cursor-pointer mt-2.5' />
          <FaTwitter size={18} className='text-black cursor-pointer mt-2.5' />
          <FaDribbble size={18} className='text-black cursor-pointer mt-2.5' />
          </div>
          </div>
                  {/* profile-6 */}
         <div className='w[394.67px] h-[209px] flex flex-col gap-[24px] items-center'>
          <div className='w-[80px] h-[80px] mx-[157.33px]'>
            <img src="/images/pr-6.svg" alt="" />
          </div>
          <div className='w-[394.67px] h-[57px]'>
            <p className='text-center font-semibold text-[20px] leading-[30px]'>John Lebooo</p>
            <p className='text-center text-[18px] leading-[27px]'>Dog Trainer</p>
          </div>
          <div className='w-[100px] h-[24px] flex gap-[14px] mx-[147.33px]'>
          <FaLinkedin size={18} className='text-black cursor-pointer mt-2.5' />
          <FaTwitter size={18} className='text-black cursor-pointer mt-2.5' />
          <FaDribbble size={18} className='text-black cursor-pointer mt-2.5' />
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
