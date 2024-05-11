"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import EmailSection from './EmailSection';


const HeroSection = () => {

const scrollToEmailSection = () => {
    const emailSection = document.getElementById('emailSection');
    if (emailSection) {
        emailSection.scrollIntoView({ behavior: 'smooth' });
    }
};


  return (
    <section className='lg:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
                <h1 className="text-white mb-4 text-4xl sm:text-5xl md:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>Hello, I&apos;m {""}</span>
                    <br></br>
                    <TypeAnimation
                    sequence={[
                        'Shirin',
                        2000,
                        'A Web Developer',
                        1500,
                        'A FullStack Developer',
                        1500
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
                    I&apos;m a recent software developer graduate, with an interest in Front-End development, animations and aesthetics. 
                    When I&apos;m not coding, I spend my time weight lifting, travelling (my goal is to visit as many countries, in all 7 continents, as possible), or trying to find 
                    new and interesting food places to check out.
                </p>
                <div>
                    <Link href={"/"}>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'
                        onClick={scrollToEmailSection}
                    >Hire Me
                        
                    </button>
                    </Link>
                    <Link href="/resume.pdf" download="resume">
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download Resume</span>
                        </button>
                    </Link>

                </div>
            </div>
            <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image 
                    src="/images/hero-image.png"
                    alt='Hero Image'
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    width={300}
                    height={300}
                    />
                </div>
               

            </div>
        </div>
      
    </section>
  )
}

export default HeroSection