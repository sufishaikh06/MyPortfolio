"use client"

import { useEffect, useRef, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

function CountUpNumber({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [hasStarted, end, duration])

  return <span ref={ref}>{count}</span>
}

export function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-background-secondary"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left - Glowing Avatar */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Rotating gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-accent-secondary to-accent animate-spin-slow" 
                   style={{ padding: "4px", animationDuration: "8s" }}>
                <div className="w-full h-full rounded-full bg-background-secondary" />
              </div>
              
              {/* Avatar container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-accent/20 to-accent-secondary/20">
                {/* Gradient overlay for placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-accent-secondary/30" />
                
                {/* Avatar placeholder with initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl md:text-7xl font-heading font-bold bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                    SS
                  </span>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full shadow-[0_0_60px_rgba(59,130,246,0.4),0_0_100px_rgba(139,92,246,0.2)]" />
              </div>

              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent/20 to-accent-secondary/20 blur-xl -z-10" />
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="space-y-8">
            {/* Heading with animated underline */}
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                About Me
              </h2>
              <div 
                className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-accent to-accent-secondary rounded-full transition-all duration-1000 delay-300 ${
                  isVisible ? "w-full" : "w-0"
                }`}
              />
            </div>

            {/* Bio text */}
            <p className="text-lg text-muted leading-relaxed">
              I&apos;m a Second Year Computer Engineering student at Savitribai Phule Pune University (SPPU), 
              passionate about turning real problems into polished digital products. I&apos;ve worked with real clients, 
              built production-ready apps, and actively use AI tools like Claude, ChatGPT, and Gemini to build 
              smarter and faster.
            </p>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="group relative p-6 rounded-2xl bg-background border border-white/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                <div className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                  <CountUpNumber end={6} />+
                </div>
                <div className="text-muted mt-2 font-medium">Projects Built</div>
              </div>
              
              <div className="group relative p-6 rounded-2xl bg-background border border-white/5 hover:border-accent-secondary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                <div className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-accent-secondary to-accent bg-clip-text text-transparent">
                  <CountUpNumber end={2} />+
                </div>
                <div className="text-muted mt-2 font-medium">Real Clients</div>
              </div>
            </div>

            {/* Currently Learning */}
            <div className="space-y-3">
              <span className="text-sm uppercase tracking-wider text-muted font-medium">
                Currently Learning
              </span>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium hover:bg-accent/20 transition-colors cursor-default">
                  DSA in C++
                </span>
                <span className="px-4 py-2 rounded-full bg-accent-secondary/10 border border-accent-secondary/20 text-accent-secondary text-sm font-medium hover:bg-accent-secondary/20 transition-colors cursor-default">
                  Web Dev — Apna College
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
