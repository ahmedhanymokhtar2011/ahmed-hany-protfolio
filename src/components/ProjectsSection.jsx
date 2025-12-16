import { ArrowRight, ExternalLink, Github } from "lucide-react";
import ecommerceImg from '../../public/projects/ecommerce.png';
import azkaryImg from '../../public/projects/azkary.png';
import weatherImg from '../../public/projects/wheather.png';
import foodImg from '../../public/projects/food.png';
import gameImg from '../../public/projects/game.png';

export const ProjectsSection = () => {
    const projects = [
        {
            id: 1,
            title: "TOPICO-Ecommerce using-react",
            description: "it is a ecommerce website about online store using react.js",
            image: ecommerceImg,
            tags: ["React"],
            demoUrl: "https://ahmedhanymokhtar2011.github.io/TOPICO-ecommerce-using-react.js/",
            githubUrl: "https://github.com/ahmedhanymokhtar2011/TOPICO-ecommerce-using-react.js",
        },
        {
            id: 2,
            title: "Azkary",
            description:
                "azkary app is for muslims who wants to read 'azkar' .",
            image: azkaryImg,
            tags: ["HTML", "CSS", "Javascript"],
            demoUrl: "https://ahmedhanymokhtar2011.github.io/azkary/",
            githubUrl: "https://github.com/ahmedhanymokhtar2011/azkary",
        },
        {
            id: 3,
            title: "weather app",
            description:
                "it is weather app for cities of all world.",
            image: weatherImg,
            tags: ["HTML", "CSS", "Javascript"],
            demoUrl: "https://ahmedhanymokhtar2011.github.io/weather-app/",
            githubUrl: "https://github.com/ahmedhanymokhtar2011/weather-app",
        },
        {
            id: 4,
            title: "food restaurant app",
            description:
                "it is a simple food restaurant app using html & tailwind css",
            image: foodImg,
            tags: ["HTML", "tailwindcss"],
            demoUrl: "https://ahmedhanymokhtar2011.github.io/food-restaurant/",
            githubUrl: "https://github.com/ahmedhanymokhtar2011/food-restaurant",
        },
        {
            id: 5,
            title: "game center app",
            description:
                "🎮 A modern gaming hub with fun mini-games: test your memory, play Tic Tac Toe, and challenge yourself with Hangman — quick, simple, and exciting!",
            image: gameImg,
            tags: ["HTML", "CSS", "Javascript"],
            demoUrl: "https://ahmedhanymokhtar2011.github.io/game-center/",
            githubUrl: "https://github.com/ahmedhanymokhtar2011/game-center",
        },

    ];
    return <section id="projects" className="py-24 px-4 relative">

        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project was carefully
                crafted with attention to detail, performance, and user experience.
            </p>
            <div className="grid grid-cols:1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (

                    <div
                        key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-6">

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs border bg-primary/20
                                    font-medium rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20} /></a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >

                                        <Github size={20} /></a>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a
                    target="_blank"
                    href="https://github.com/ahmedhanymokhtar2011"
                    className=" consmic-button w-fit flex items-center mx-auto gap-2">
                    Check My GitHub <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
}