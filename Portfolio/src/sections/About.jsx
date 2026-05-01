import { ScanEye, Lightbulb, Users, ShieldCheck, DogIcon } from "lucide-react"

const highlights = [
  { icon: ShieldCheck, title: "Reliability", description: "I am always on time and make sure my work is done correctly and reliably." },
  { icon: ScanEye, title: "Detail Oriented", description: "I focus on the small details to make sure the final result looks and works great." },
  { icon: Users, title: "Collaboration", description: "Working closely with people to bring ideas to life." },
  { icon: Lightbulb, title: "Innovation", description: "I use creative thinking to find new and better ways to solve hard problems." },
]

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white"> one line of code at a time.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p> I am a student at Ranken Technical College with a passion for building things and figuring out how they work. 
                  What started as a simple curiosity about the digital world has grown into hands-on experience creating functional,
                  modern projects from the ground up.
              </p>
              <p>I focus on using tools like React, C#, and ASP.NET to turn ideas into reality. 
                Whether I’m working on a simple layout or a complex system, I aim to create projects that are easy to use, look great, 
                and solve real problems.
             </p>
              <p>When I'm not coding, you'll find me exploring new technologies, building side projects, and spending time with my dogs. <DogIcon className="inline w-5 h-5" /></p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I focus on making things work smoothly behind the scenes while keeping the final design simple and user-friendly."
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}