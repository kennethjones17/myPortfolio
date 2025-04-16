import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';
import { SpeedInsights } from "@vercel/speed-insights/next"


const Hero = () => {
  return (
    
    <div className='pb-20 pt-36'>
      <SpeedInsights/>
      <div>
        <Spotlight className=" -top-40 -left-10
        md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className=" -top-10 -left-full h-[80vh] 
        w-[50vw] " fill="purple" />
        <Spotlight className=" top-28 left-80
        h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white 
        dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex 
        items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h1 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            Hello, I&apos;m Kenneth Jones
          </h1>

          <TextGenerateEffect
            className='text-center text-[40px]
            md:text-5xl lg:text-6xl'
            words="Welcome to My Portfolio"
          />
          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
          Cloud & Software developer driving innovation for businesses
          </p>

             {/* Picture of User */}
          <div className='flex relative mb-6'>
            <img
              src='/profilepic.jpeg' // Update with the actual path to your picture
              alt='Profile'
              className='w-50 h-50 rounded-full border-4 border-pruple-100 bg-black-200'
            />
          </div>

          <a
            href='/data/RESUME_v3.0.pdf'
            download
            className='inline-flex items-center'
            title='Download my resume'
          > 
            <MagicButton
              title='Download my resume'
              icon={<FaDownload />}
              position='right'
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
