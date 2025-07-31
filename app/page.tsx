"use client"

import { useEffect, useState, useRef } from "react"
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Monitor, Code, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function RetroMacPortfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [typewriterText, setTypewriterText] = useState("")
  const [isTypewriterComplete, setIsTypewriterComplete] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  const fullTypewriterText = "Developer & Designer"

  // Typewriter effect
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullTypewriterText.length) {
        setTypewriterText(fullTypewriterText.slice(0, index))
        index++
      } else {
        setIsTypewriterComplete(true)
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset
        const parallax = scrolled * 0.5
        heroRef.current.style.transform = `translateY(${parallax}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const skills = [
    { name: "JavaScript", icon: "JS", category: "Frontend" },
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Next.js", icon: "▲", category: "Frontend" },
    { name: "TypeScript", icon: "TS", category: "Frontend" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "Python", icon: "🐍", category: "Backend" },
    { name: "CSS", icon: "🎨", category: "Frontend" },
    { name: "Git", icon: "📝", category: "Tools" },
    { name: "Docker", icon: "🐳", category: "Tools" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern React patterns and scalable architecture.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      image: "/placeholder.svg?height=200&width=300&text=E-Commerce+Platform",
      github: "#",
      live: "#",
    },
    {
      title: "Task Management Suite",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
      image: "/placeholder.svg?height=200&width=300&text=Task+Manager",
      github: "#",
      live: "#",
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "Responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics with data visualization.",
      tech: ["React", "D3.js", "API Integration", "Chart.js", "CSS"],
      image: "/placeholder.svg?height=200&width=300&text=Weather+Dashboard",
      github: "#",
      live: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-retro-cream text-retro-charcoal relative overflow-x-hidden">
      {/* Retro grain texture overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none retro-grain" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-retro-cream/90 backdrop-blur-md border-b border-retro-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-mono text-xl font-bold text-retro-charcoal retro-text-shadow">&gt; Adithya_</div>

            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-mono font-medium transition-all duration-300 hover:text-retro-coral relative ${
                    activeSection === item.toLowerCase() ? "text-retro-coral" : "text-retro-charcoal"
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-retro-coral animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Landing Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000">
            <div className="mb-8">
              <h1 className="font-mono text-6xl md:text-8xl font-bold text-retro-charcoal mb-4 retro-text-shadow leading-tight">
                Hello,
                <br />
                I'm <span className="text-retro-coral retro-glow">Adithya</span>
              </h1>
              <div className="font-mono text-2xl md:text-3xl text-retro-charcoal/80 min-h-[40px]">
                {typewriterText}
                <span className={`${isTypewriterComplete ? "animate-pulse" : "animate-ping"} text-retro-coral`}>|</span>
              </div>
            </div>

            <p className="text-lg text-retro-charcoal/80 mb-8 leading-relaxed max-w-lg">
              Crafting digital experiences with clean code, thoughtful design, and a passion for innovation. Welcome to
              my corner of the web.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="retro-button bg-retro-coral hover:bg-retro-coral/90 text-retro-cream px-8 py-3 text-lg font-mono font-medium transition-all duration-300 hover:shadow-retro hover:-translate-y-1"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="retro-button-outline border-2 border-retro-charcoal text-retro-charcoal hover:bg-retro-charcoal hover:text-retro-cream px-8 py-3 text-lg font-mono font-medium transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          <div
            ref={heroRef}
            className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 delay-300"
          >
            <div className="relative">
              <div className="retro-window bg-retro-cream border-2 border-retro-charcoal/20 p-8 shadow-retro">
                <div className="retro-window-header flex items-center gap-2 mb-6 pb-4 border-b border-retro-charcoal/10">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="ml-4 font-mono text-sm text-retro-charcoal/60">developer.profile</span>
                </div>
                <img
                  src="/profilepic.png?height=400&width=400&text=Developer+Portrait"
                  alt="Adithya"
                  className="w-full h-auto retro-image-filter"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-retro-coral/30 -z-10"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-retro-charcoal/60" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-retro-charcoal/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll opacity-0 translate-x-[-50px] transition-all duration-1000">
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-retro-charcoal mb-8 retro-crt-flicker">
              &gt; About_Me
            </h2>
            <div className="space-y-6 text-lg text-retro-charcoal/80 leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 3 years of experience crafting digital solutions that
                matter. My journey began with curiosity about how things work under the hood, and it's evolved into a
                love affair with clean code and elegant design.
              </p>
              <p>
                I specialize in modern JavaScript frameworks, with a particular fondness for React and Next.js. When I'm
                not pushing pixels or debugging code, you'll find me exploring new technologies, contributing to
                open-source projects, or sketching ideas for the next big thing.
              </p>
              <p>
                I believe in the power of simple, elegant solutions and strive to write code that's not only functional
                but also beautiful and maintainable. Every project is an opportunity to learn something new and push the
                boundaries of what's possible.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-retro-coral font-mono">
                <Monitor size={20} />
                <span>Frontend Focused</span>
              </div>
              <div className="flex items-center gap-2 text-retro-coral font-mono">
                <Code size={20} />
                <span>Full-Stack Capable</span>
              </div>
              <div className="flex items-center gap-2 text-retro-coral font-mono">
                <Palette size={20} />
                <span>Design Minded</span>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-x-[50px] transition-all duration-1000 delay-200">
            <div className="relative">
              <div className="retro-window bg-retro-cream border-2 border-retro-charcoal/20 p-8 shadow-retro">
                <div className="retro-window-header flex items-center gap-2 mb-6 pb-4 border-b border-retro-charcoal/10">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="ml-4 font-mono text-sm text-retro-charcoal/60">workspace.jpg</span>
                </div>
                <img
                  src="/placeholder.svg?height=350&width=350&text=Workspace+Setup"
                  alt="About Adithya"
                  className="w-full h-auto retro-image-filter"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-retro-coral/30 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-mono text-4xl md:text-5xl font-bold text-retro-charcoal text-center mb-16 retro-crt-flicker animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            &gt; Tech_Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 retro-skill-card bg-retro-cream border-2 border-retro-charcoal/10 hover:border-retro-coral/50 hover:shadow-retro hover:-translate-y-2 cursor-pointer group`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-6 text-center">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="font-mono font-medium text-retro-charcoal group-hover:text-retro-coral transition-colors duration-300 mb-2">
                    {skill.name}
                  </h3>
                  <span className="text-xs font-mono text-retro-charcoal/60">{skill.category}</span>
                </div>
                <div className="absolute inset-0 bg-retro-coral/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-retro-charcoal/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-mono text-4xl md:text-5xl font-bold text-retro-charcoal text-center mb-16 retro-crt-flicker animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            &gt; Projects
          </h2>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 retro-project-card group`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="retro-window bg-retro-cream border-2 border-retro-charcoal/20 hover:border-retro-coral/50 shadow-retro hover:shadow-retro-lg transition-all duration-300 hover:-translate-y-2">
                  {/* Mac OS Window Header */}
                  <div className="retro-window-header flex items-center gap-2 p-4 border-b border-retro-charcoal/10">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="ml-4 font-mono text-sm text-retro-charcoal/60 truncate">{project.title}</span>
                  </div>

                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover retro-image-filter group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-retro-charcoal/0 group-hover:bg-retro-charcoal/10 transition-colors duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="font-mono text-xl font-bold text-retro-charcoal mb-3 group-hover:text-retro-coral transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-retro-charcoal/80 mb-4 leading-relaxed text-sm">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-retro-charcoal/10 text-retro-charcoal text-xs font-mono rounded-full border border-retro-charcoal/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="retro-button-outline border border-retro-charcoal/30 text-retro-charcoal hover:bg-retro-charcoal hover:text-retro-cream font-mono bg-transparent"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="retro-button bg-retro-coral hover:bg-retro-coral/90 text-retro-cream font-mono"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-mono text-4xl md:text-5xl font-bold text-retro-charcoal text-center mb-16 retro-crt-flicker animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
            &gt; Contact_Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="animate-on-scroll opacity-0 translate-x-[-50px] transition-all duration-1000">
              <h3 className="font-mono text-2xl font-bold text-retro-charcoal mb-6">Let's build something amazing</h3>
              <p className="text-lg text-retro-charcoal/80 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. Whether you have a question, want to
                collaborate, or just want to say hello, feel free to reach out.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:adithya@example.com"
                  className="flex items-center gap-4 text-retro-charcoal hover:text-retro-coral transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-retro-charcoal/10 rounded-lg flex items-center justify-center group-hover:bg-retro-coral/10 transition-colors duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="font-mono font-medium">Email</div>
                    <div className="text-sm text-retro-charcoal/60">adithya@example.com</div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/adithya"
                  className="flex items-center gap-4 text-retro-charcoal hover:text-retro-coral transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-retro-charcoal/10 rounded-lg flex items-center justify-center group-hover:bg-retro-coral/10 transition-colors duration-300">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <div className="font-mono font-medium">LinkedIn</div>
                    <div className="text-sm text-retro-charcoal/60">linkedin.com/in/adithya</div>
                  </div>
                </a>

                <a
                  href="https://github.com/adithya"
                  className="flex items-center gap-4 text-retro-charcoal hover:text-retro-coral transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-retro-charcoal/10 rounded-lg flex items-center justify-center group-hover:bg-retro-coral/10 transition-colors duration-300">
                    <Github size={20} />
                  </div>
                  <div>
                    <div className="font-mono font-medium">GitHub</div>
                    <div className="text-sm text-retro-charcoal/60">github.com/adithya</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 translate-x-[50px] transition-all duration-1000 delay-200">
              <div className="retro-window bg-retro-cream border-2 border-retro-charcoal/20 shadow-retro">
                <div className="retro-window-header flex items-center gap-2 p-4 border-b border-retro-charcoal/10">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="ml-4 font-mono text-sm text-retro-charcoal/60">contact_form.txt</span>
                </div>

                <div className="p-8">
                  <form className="space-y-6">
                    <div>
                      <Input
                        placeholder="Your Name"
                        className="retro-input bg-retro-cream border-2 border-retro-charcoal/20 text-retro-charcoal placeholder-retro-charcoal/60 focus:border-retro-coral font-mono"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="retro-input bg-retro-cream border-2 border-retro-charcoal/20 text-retro-charcoal placeholder-retro-charcoal/60 focus:border-retro-coral font-mono"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your message here..."
                        rows={4}
                        className="retro-input bg-retro-cream border-2 border-retro-charcoal/20 text-retro-charcoal placeholder-retro-charcoal/60 focus:border-retro-coral font-mono resize-none"
                      />
                    </div>
                    <Button className="w-full retro-button bg-retro-coral hover:bg-retro-coral/90 text-retro-cream font-mono font-medium py-3 transition-all duration-300 hover:shadow-retro hover:-translate-y-1">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t-2 border-retro-charcoal/10 bg-retro-charcoal/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-mono text-retro-charcoal/60">
            © 2024 Adithya. Crafted with <span className="text-retro-coral animate-pulse">{"<3"}</span> and lots of
            coffee.
          </p>
        </div>
      </footer>
    </div>
  )
}
