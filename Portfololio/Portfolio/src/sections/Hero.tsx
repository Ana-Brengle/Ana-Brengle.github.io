import { ArrowRight, Download} from "lucide-react"
import { Button } from "../components/Button"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"

export const Hero = () => {
    
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/**Background */}
            <div className="absolute inset-0">
                 <img 
                    src="/hero-bg.jpg" 
                    alt="Hero Image"
                    className="w-full h-full object-cover opacity-40" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
            </div>
           
            {/**Green Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((__, i) => (
                    <div 
                        className="absolute w-1 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`

                        }}/>
                ))}

            </div>
            {/**Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-20 ">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/**Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>Web Developer
                            </span>
                        </div>
                        {/**Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Full-stack <span className="text-primary glow-text">development</span>
                                <br />
                                front to
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    back.
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-x-lg animate-fade-in animation-delay-300">
                                Hi, I'm Ana - a web developer specializing in MERN Stack, Javascript, Typescript, C#
                                and more. Building clean, scalable web applications.
                            </p>
                        </div>
                        {/**CTA */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay">
                            <Button size="lg">
                                Contact Me <ArrowRight className="w-5 h-5"/>
                            </Button>
                                {/**Animated SVG Button */}
                                <AnimatedBorderButton/>
                        </div>
                        {/**Social Links */}
                        <div>
                            <span>Follow Me: </span>

                        </div>
                    </div>
                    {/**Right Column - Profile Image */}
                </div>
            </div>
        </section>
    )
}