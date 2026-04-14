"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/sufishaikh06", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sufi-shaikh-b7a60a328", label: "LinkedIn" },
    { icon: Mail, href: "mailto:sufishaikhofficial2@gmail.com", label: "Email" },
  ]

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-background-alt border-t border-border/30">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="inline-block">
              <span className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Sufi Shaikh
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Full-Stack Developer crafting modern web experiences with React, Tailwind CSS, and Supabase.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Back to Top */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-lg bg-card/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 mt-4"
            >
              <span className="p-2 rounded-lg bg-card/50 border border-border/50 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              &copy; {currentYear} Sufi Shaikh. Built with
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              and lots of coffee.
            </p>
            <p className="text-sm text-muted-foreground">
              Designed & Developed by{" "}
              <span className="text-primary font-medium">Sufi Shaikh</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
