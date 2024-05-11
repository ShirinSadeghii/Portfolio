"use client"
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { useRef } from "react";
import { Link } from "react-scroll";

export default function Home() {
  const emailSectionRef = useRef(null);

  const scrollToAboutMe = () => {
    emailSectionRef.current.scrollIntoView({ behaviour: 'smooth'})
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-0 px-8 py-4">
        <div ref={emailSectionRef}>
          <HeroSection onScrollToAboutMe={scrollToAboutMe}/>
        </div>
        <AboutMe />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
