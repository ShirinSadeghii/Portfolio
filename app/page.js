import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-0 px-10 py-4">
        <HeroSection />
        <AboutMe />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
