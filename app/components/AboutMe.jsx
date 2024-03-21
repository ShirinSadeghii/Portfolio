"use client";
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const AboutMe = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: 
        <ul className='list-disc pl-3'>
            <li>Javascript</li>
            <li>React</li>
            <li>NextJS</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>MySQL</li>
        </ul>
    },
    {
        title: "Education",
        id: "education",
        content: 
        <ul className='list-disc pl-3'>
            <li>Web Development Diploma, BrainStation</li>
            <li>Associates Degree in Criminology, Douglas College</li>
        </ul>
    },
    {
        title: "Certification",
        id: "certification",
        content: 
        <ul className='list-disc pl-3'>
            <li>...</li>
            <li>...</li>
        </ul>
    }
  ]

  const handleTabChange = (id) => {
    startTransition(() => {
        setTab(id);
    })
  }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src={"/images/about-image.png"} width={500} height={500} alt='about-image'/>
            <div className='mt-4 md:0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'> I am a junior Full Stack Web Developer with a 
                    passion for creating interactive and responsive
                    web applications.  </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                    <TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}>Certification</TabButton>
                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe