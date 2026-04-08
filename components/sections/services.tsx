"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Code, Palette, Rocket, Zap, Check } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "End-to-end web applications built with modern technologies and best practices.",
    features: [
      "React & Next.js frontends",
      "Node.js & Supabase backends",
      "Database design & integration",
      "API development",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description: "Pixel-perfect interfaces that bring designs to life with smooth interactions.",
    features: [
      "Responsive design",
      "Tailwind CSS styling",
      "Animation & micro-interactions",
      "Cross-browser compatibility",
    ],
    gradient: "from-purple-500 to-pink-500",
    featured: true,
  },
  {
    icon: Rocket,
    title: "Landing Pages & MVPs",
    description: "Fast turnaround on landing pages and minimum viable products for startups.",
    features: [
      "Quick prototyping",
      "SEO optimization",
      "Performance focused",
      "Analytics integration",
    ],
    gradient: "from-orange-500 to-red-500",
  },
]

export function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()

  return (
    <section id="services" className="relative py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            What I Offer
          </h2>
          <div className="relative inline-block">
            <div 
              className={`h-1 bg-gradient-to-r from-accent to-accent-secondary rounded-full transition-all duration-1000 ease-out ${
                headerVisible ? 'w-32 md:w-48' : 'w-0'
              }`}
            />
          </div>
          <p className="mt-6 text-muted max-w-2xl mx-auto text-lg">
            From concept to deployment, I deliver quality work that helps businesses grow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted mb-6">Have a project in mind?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-secondary text-white font-semibold rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            <Zap className="w-5 h-5" />
            Let&apos;s Work Together
          </a>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ 
  service, 
  index 
}: { 
  service: typeof services[0]
  index: number 
}) {
  const { ref, isVisible } = useScrollAnimation()
  const Icon = service.icon

  return (
    <div
      ref={ref}
      className={`relative group transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Featured badge */}
      {service.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="px-4 py-1 text-xs font-semibold bg-gradient-to-r from-accent to-accent-secondary text-white rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div
        className={`relative h-full p-6 lg:p-8 rounded-2xl border transition-all duration-300 ${
          service.featured
            ? 'border-accent/50 bg-accent/5'
            : 'border-border bg-background-alt/50'
        } hover:border-accent/50 hover:shadow-glow group-hover:-translate-y-2`}
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Icon */}
        <div
          className={`relative inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>

        {/* Content */}
        <div className="relative">
          <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
          <p className="text-muted mb-6">{service.description}</p>

          {/* Features list */}
          <ul className="space-y-3">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                  <Check className="w-3 h-3 text-white" />
                </span>
                <span className="text-foreground/80">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
