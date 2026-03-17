import { AboutSection } from "../components/AboutSection"
import { HeroSection } from "../components/HeroSection"
import { NavBar } from "../components/NavBar"
import { ProjectsSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"
import { SkillsSection } from "../components/SkillsSection"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const Home = () => {
          useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });

    Aos.refresh();
  }, []);

    return <div className="min-h-container bg-background text-foreground overflow-x-hidden">

        <ThemeToggle />
        
        <StarBackground />
        
        <NavBar />
        
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection/>
        </main>
      <Footer/>  
    </div>
}