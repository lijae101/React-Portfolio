import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [

    {
        id: 1,
        title: "Equitip",
        description: "Mobile app for restaurants to manage fair tip pools. Contributed to front-end development, core tip calculation logic, and key features like simulations and saved configurations.",
        image: "/projects/project1New.png",
        tags: ["Draftbit", "Xano", "React-Native"],
        demoUrl: "https://play.google.com/store/apps/details?id=online.northvan.tipshare&utm_source=na_Med",
        githubUrl: "#"
    },

    {

        id: 2,
        title: "Quiz Webapp",
        description: "Full-stack app for elderly users built with Java Servlets, MySQL, and WebSockets; enabled individual play and real-time group quizzes as part of a 5-person team.",
        image: "/projects/project2New.png",
        tags: ["Java", "Tomcat", "Websockets", "Docker", "RESTful API", "MySQL"],
        demoUrl: "#",
        githubUrl: "https://github.com/Catherine-Queenan/CS-QuizGame"
    },

    {

        id: 3,
        title: "NextUp",
        description: "Mobile App that allows users to create groups, suggest activities and randomly select one.",
        image: "projects/project3New.png",
        tags: ["HTML", "CSS", "JavaScript", "EJS", "Websockets", "Tailwind", "Node.js", "Express", "MongoDB"],
        demoUrl: "#",
        githubUrl: "https://github.com/gu1dosan/2800-202410-BBY15"
    },

    {

        id: 4,
        title: "Pokedex Website",
        description: "A responsive web application built with JavaScript, jQuery, Bootstrap, and the PokeAPI. Features include dynamic data fetching, pagination, type-based filtering, and detailed Pokémon evolution chains.",
        image: "projects/project4.png",
        tags: ["HTML", "CSS", "JavaScript", "jQuery", "Axios", "PokeAPI"],
        demoUrl: "https://exquisite-marzipan-e77a10.netlify.app/",
        githubUrl: "#"
    },

    {

        id: 5,
        title: "Pokemon Memory Game",
        description: "Pokemon-themed memory card game built with HTML, CSS, and JavaScript.",
        image: "projects/project5.png",
        tags: ["HTML", "CSS", "JavaScript", "jQuery", "Async/Await", "PokeAPI"],
        demoUrl: "https://melodious-pasca-03349e.netlify.app/",
        githubUrl: "#"
    }

]


export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center "> Featured <span className="text-primary"> Projects</span></h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some projects that reflect both my individual contributions and collaborative work
            within teams, with an emphasis on usability, performance, and real-world impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
                <div key={key}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                    
                    <div className="h-48 overflow-hidden">
                        <img src={project.image} alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) =>(
                                <span className="px-2 py-1 border text-xs font-medium rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                            ))}
                        </div>
                    
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-3">
                            <a href={project.demoUrl}
                            target="_blank"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                <ExternalLink size={20}/>
                            </a>
                            <a href={project.githubUrl}
                            target="_blank"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                <Github size={20}/>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="text-center mt-12">
            <a href="https://github.com/lijae101"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2">Check my Github <ArrowRight size={16}/></a>
        </div>
        </div>
    </section>
}