import { AboutSection } from "../components/AboutSection"
import { HeroSection } from "../components/HeroSection"
import { NavBar } from "../components/NavBar"
import { ProjectsSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"
import { SkillsSection } from "../components/SkillsSection"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"
import { Footer } from "../components/Footer";
export const Home = () => {
    
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