"use client"

import { useEffect, useState } from "react"
import { ParticleBackground } from "@/components/particle-background"
import { Typewriter } from "@/components/typewriter"
import { ChevronDown } from "lucide-react"

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "JavaScript", icon: "𝙅𝙎" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Supabase", icon: "⚡" },
  { name: "AWS", icon: "☁️" },
]

const roles = [
  "Full-Stack Web Developer",
  "Freelancer",
  "SY CE Student @ SPPU",
  "React & Supabase Developer",
]

export function Hero() {
  const [nameText, setNameText] = useState("")
  const [showContent, setShowContent] = useState(false)
  const fullName = "Sufi Shaikh"

  useEffect(() => {
    // Type out the name letter by letter on page load
    let currentIndex = 0
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setNameText(fullName.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typeInterval)
        setShowContent(true)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated particle background */}
      <ParticleBackground />

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Availability badge */}
        <div
          className={`mb-8 inline-flex items-center gap-2 rounded-full border border-green/30 bg-green/10 px-4 py-2 transition-all duration-700 ${
            showContent ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <span className="pulse-dot h-2 w-2 rounded-full bg-green" />
          <span className="text-sm font-medium text-green">
            Open to Internships & Freelance Work
          </span>
        </div>

        {/* Main heading */}
        <div className="mb-6">
          <p
            className={`mb-2 text-lg text-muted-foreground transition-all delay-100 duration-700 md:text-xl ${
              showContent ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            {"Hi, I'm"}
          </p>
          <h1 className="font-heading text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="shimmer-text">{nameText}</span>
            <span
              className={`inline-block h-[0.8em] w-[4px] bg-electric-blue transition-opacity ${
                nameText.length === fullName.length ? "opacity-0" : "typewriter-cursor"
              }`}
            />
          </h1>
        </div>

        {/* Subheading with typewriter effect */}
        <div
          className={`mb-6 text-xl text-muted-foreground transition-all delay-200 duration-700 md:text-2xl ${
            showContent ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <Typewriter words={roles} typingSpeed={80} deletingSpeed={40} pauseDuration={2500} />
        </div>

        {/* Bio paragraph */}
        <p
          className={`mx-auto mb-10 max-w-2xl text-base text-muted-foreground transition-all delay-300 duration-700 md:text-lg ${
            showContent ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          I build real-world web apps and client-facing digital products using React, Tailwind CSS,
          and Supabase. From SaaS platforms to NGO websites — I turn ideas into live products.
        </p>

        {/* CTA Buttons */}
        <div
          className={`mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all delay-400 duration-700 ${
            showContent ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <a
            href="#projects"
            className="glow-button group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-electric-blue to-purple px-8 py-3.5 font-semibold text-white transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple to-electric-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
          <a
            href="#contact"
            className="glow-button group relative inline-flex items-center justify-center rounded-lg border-2 border-electric-blue/50 bg-transparent px-8 py-3.5 font-semibold text-electric-blue transition-all duration-300 hover:border-electric-blue hover:bg-electric-blue/10 hover:scale-105"
          >
            Hire Me
          </a>
        </div>

        {/* Tech stack icons */}
        <div
          className={`mb-16 flex flex-wrap items-center justify-center gap-6 transition-all delay-500 duration-700 md:gap-10 ${
            showContent ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              className="icon-bounce group flex flex-col items-center gap-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card text-xl transition-all duration-300 group-hover:border-electric-blue/50 group-hover:bg-electric-blue/10">
                {tech.icon}
              </div>
              <span className="text-xs text-muted-foreground transition-colors group-hover:text-electric-blue">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all delay-700 duration-700 ${
            showContent ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <a
            href="#about"
            className="bounce-arrow flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-electric-blue"
            aria-label="Scroll to About section"
          >
            <span className="text-sm">Scroll</span>
            <ChevronDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
