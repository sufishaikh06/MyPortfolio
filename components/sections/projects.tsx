"use client"

import { useRef } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ExternalLink, Github, Globe, Calendar, Sparkles } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Marathwada Kalagram",
    description: "Designed and developed a bilingual (Marathi + English) informational website and integrated online store for a women's handicraft NGO in Parbhani, Maharashtra. Implemented WhatsApp-based ordering and UPI payment flow across 5 product categories with zero hosting cost via GitHub Pages.",
    status: "live",
    gradient: "from-orange-500 to-amber-500",
    techStack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    liveUrl: "https://sufishaikh06.github.io/marathwada-kalagram/",
    githubUrl: "https://github.com/sufishaikh06",
    date: "2024",
  },
  {
    title: "Shree Jewellery",
    description: "Developed and deployed a responsive e-catalog website for a local jewelry business. Features a modern, mobile-first UI, an interactive product showcase, and dynamic WhatsApp API integration to streamline direct customer inquiries.",
    status: "live",
    gradient: "from-yellow-500 to-pink-500",
    techStack: ["HTML5", "Tailwind CSS", "JavaScript", "Netlify"],
    liveUrl: "https://shreejewellery.netlify.app/",
    githubUrl: "https://github.com/sufishaikh06",
    date: "2024",
  },
  {
    title: "Forex In Future",
    description: "A premium, high-conversion landing page for a financial education and forex consulting brand. Features a dark-themed glassmorphism UI, a custom interactive particle background via Canvas API, an infinite-scrolling live currency ticker, and scroll-triggered animations using the Intersection Observer API.",
    status: "live",
    gradient: "from-emerald-500 to-cyan-500",
    techStack: ["HTML5", "CSS3", "Vanilla JavaScript", "Netlify"],
    liveUrl: "https://forexinfuture.netlify.app/",
    githubUrl: "https://github.com/sufishaikh06",
    date: "2024",
  },
  {
    title: "Zynqro — Restaurant QR Ordering",
    description: "A full-stack SaaS product that digitalizes the restaurant dining experience. Customers scan a table QR code to browse the menu and place orders — no app needed. Features a real-time manager dashboard, menu admin panel with image uploads, live order tracking, and dual payment support.",
    status: "live",
    gradient: "from-violet-500 to-purple-500",
    techStack: ["React", "Vite", "Tailwind CSS", "Supabase", "Netlify"],
    liveUrl: "https://zynqro.netlify.app/",
    githubUrl: "https://github.com/sufishaikh06",
    date: "2025",
  },
]

function ProjectCard({ 
  project, 
  index 
}: { 
  project: typeof projects[0]
  index: number 
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isVisible = useScrollAnimation(cardRef, { threshold: 0.1 })

  return (
    <div
      ref={cardRef}
      className={`group relative rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Gradient Banner */}
      <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-4 left-4 w-20 h-20 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-white/10 blur-3xl" />
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          {project.status === "live" ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/90 text-white text-xs font-medium backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              Live
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/90 text-white text-xs font-medium backdrop-blur-sm">
              <Sparkles className="h-3 w-3" />
              In Progress
            </span>
          )}
        </div>

        {/* Date */}
        <div className="absolute bottom-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/30 text-white/90 text-xs font-medium backdrop-blur-sm">
            <Calendar className="h-3 w-3" />
            {project.date}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-muted/50 text-muted-foreground text-xs font-medium border border-border/50 hover:border-primary/50 hover:text-primary transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Globe className="h-4 w-4" />
              Live Demo
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-muted-foreground text-sm font-medium hover:border-primary hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4" />
              Code
            </Link>
          )}
          {!project.liveUrl && !project.githubUrl && (
            <span className="text-muted-foreground/60 text-sm italic">
              Coming soon...
            </span>
          )}
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5" />
      </div>
    </div>
  )
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const isHeadingVisible = useScrollAnimation(headingRef, { threshold: 0.5 })

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 md:py-32 bg-background"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-alt/50 via-transparent to-background-alt/50 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="relative inline-block">
            <div
              className={`h-1 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-700 ease-out ${
                isHeadingVisible ? "w-32 md:w-48" : "w-0"
              }`}
            />
          </div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I&apos;ve built for clients, personal learning, and fun. 
            Each one taught me something new.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link
            href="https://github.com/sufishaikh06"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span>View all projects on GitHub</span>
            <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
