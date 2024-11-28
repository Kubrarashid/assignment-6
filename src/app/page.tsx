import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import Achievements from '@/components/Achievements'
import Courses from '@/components/Courses'
import Testimonials from '@/components/Testimonials'
import Services from '@/components/Services'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Achievements />
      <Courses />
      <AboutUs />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default page
