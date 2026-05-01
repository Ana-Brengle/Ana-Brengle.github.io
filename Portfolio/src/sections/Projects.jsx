import { ArrowUpRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"

const projects = [
  {
    title: "Diy-Depot",
    description: "DIY Depot is a simple website that helps you find home repair tools and local workers in one place. It uses a clean design and Google Places API to make sure you find the right help nearby.",
    image: "/projects/project1.png",
    tags: ["ASP.NET MVC", "Azure"],
    link: "https://final220260430160330-c4c9cbfhave5a0at.centralus-01.azurewebsites.net/",
    github: "#",
  },
  {
    title: "Issue-Tracker",
    description: "The Issue Tracker is a full-stack tool built with React, Node.js, and MongoDB to help teams report and fix software bugs. It uses a secure login system to let developers and managers track progress, assign tasks, and collaborate until every issue is resolved.",
    image: "/projects/comingsoon.webp",
    tags: ["Node.js", "MongoDB", "Tailwind", "MERN Stack"],
    github: "https://github.com/RankenTechnicalCollege/all-coursework-Ana-Brengle.git",
  },
  {
    title: "LimbLink",
    description: "This tool helps doctors find patients and manage their visits all in one place. It lets them design custom braces on a body diagram and print out full reports with measurements and insurance info.",
    image: "/projects/comingsoon.webp",
    tags: ["C#"],
    github: "https://github.com/RankenTechnicalCollege/allawd1100coursework-Ana-Brengle.git",
  },
]

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white"> make an impact.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A collection of my latest work, ranging from multi-layered systems to creative tools designed to solve everyday challenges.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
              <div className="relative overflow-hidden aspect-video">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.link && (
                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                  <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}