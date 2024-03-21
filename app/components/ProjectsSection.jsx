"use client"
import React, {useRef, useState} from 'react'
import ProjectCard  from './ProjectCard'
import {motion, useInView} from "framer-motion"


const projectData = [
    {
        id: 1,
        title: "Javascript E-commerce Application",
        description: "built using Javascript DOM, HTML and CSS",
        image: "/images/projects/BandSite.png",
        gitUrl: "https://github.com/ShirinSadeghii/BandSite",
        previewUrl: "https://imgur.com/gallery/r88lnBn"
    },
    {
        id: 2,
        title: "React Streaming Platform",
        description: "built using React, NodeJS, Express and SASS",
        image: "/images/projects/BrainFlix.jpg",
        gitUrl: "https://github.com/ShirinSadeghii/BrainFlix",
        previewUrl: "https://imgur.com/gallery/YQOMzUC"
    },
    {
        id: 3,
        title: "Full Stack Application ",
        description: "built using React, NodeJS, Express, MySQL, Auth and SASS",
        image: "/images/projects/Thynk.png",
        gitUrl: "https://github.com/ShirinSadeghii/Capstone-project-frontend",
        previewUrl: "https://imgur.com/gallery/Rsltww3"
    }
]
const ProjectsSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const cardVariants = {
        initial: {y: 50, opacity: 0},
        animate: {y:0, opacity:1}
    }
  return (
    <section>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-6'>
            My Projects
        </h2>
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projectData.map((project, index) => (
            <motion.li 
                key={index}
                variants={cardVariants} 
                initial="initial" 
                animate={isInView ? "animate" : "initial"}
                transition={{duration: 0.3, delay: index * 0.3}} >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
            </motion.li>
        ))}
        </ul>
    </section>
   
  )
}

export default ProjectsSection