"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Code, Globe, Cloud, Bot, Wrench, Palette } from "lucide-react"

const skillGroups = [
  {
    icon: Code,
    title: "Languages",
    skills: ["C", "C++", "Java", "Python", "Data Structures in C++"],
  },
  {
    icon: Globe,
    title: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Vite"],
  },
  {
    icon: Cloud,
    title: "Cloud & Databases",
    skills: ["Supabase", "Firebase", "AWS Amplify"],
  },
  {
    icon: Bot,
    title: "AI Tools",
    skills: ["Claude", "ChatGPT", "Google Gemini", "Perplexity"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Netlify", "GitHub Pages", "VS Code", "Postman"],
  },
  {
    icon: Palette,
    title: "Design",
    skills: ["Logo Creation", "UI/UX Design"],
  },
]

function SkillCard({ group, index }: { group: typeof skillGroups[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })
  const Icon = group.icon

  return (
    <div
      ref={ref}
      className={`
        group relative p-6 rounded-2xl
        bg-background-alt/50 backdrop-blur-sm
        border border-white/5
        transition-all duration-500 ease-out
        hover:scale-[1.02] hover:border-accent/30
        hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors duration-300">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-heading font-semibold text-foreground">
            {group.title}
          </h3>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <span
              key={skill}
              className="
                px-3 py-1.5 text-sm rounded-full
                bg-white/5 text-muted-foreground
                border border-white/5
                transition-all duration-300
                hover:bg-accent/20 hover:text-accent hover:border-accent/30
                hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]
                cursor-default
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Skills() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation({ threshold: 0.5 })

  return (
    <section id="skills" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            My Tech Stack
          </h2>
          <div className="relative h-1 w-32 mx-auto rounded-full bg-white/10 overflow-hidden">
            <div 
              className={`
                absolute inset-y-0 left-0 rounded-full
                bg-gradient-to-r from-accent to-secondary
                transition-all duration-1000 ease-out
                ${headingVisible ? 'w-full' : 'w-0'}
              `}
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
