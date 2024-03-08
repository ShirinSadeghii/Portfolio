"use client";
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const AboutMe = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
        setTab(id);
    })
  }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src={"/images/about-image.png"} width={500} height={500} />
        </div>
        <div>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base lg:text-lg'> I am a Full Stack Web Developer with a 
                passion for creatig interactive and responsive
                web applications.  </p>
        </div>
        <div className='flex flex-row mt-8'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "eduction"}>Education</TabButton>
            <TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}>Certification</TabButton>
        </div>
    </section>
  )
}

export default AboutMe