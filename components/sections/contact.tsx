"use client"

import { useRef, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Mail, Send, Github, Linkedin, Twitter, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react"

export function Contact() {
  const headingRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isHeadingVisible = useScrollAnimation(headingRef)
  const isFormVisible = useScrollAnimation(formRef)
  
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setFormState('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset after 3 seconds
    setTimeout(() => setFormState('idle'), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/sufishaikh", label: "GitHub", color: "hover:text-white" },
    { icon: Linkedin, href: "https://linkedin.com/in/sufishaikh", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Twitter, href: "https://twitter.com/sufishaikh", label: "Twitter", color: "hover:text-sky-400" },
    { icon: Mail, href: "mailto:sufi@example.com", label: "Email", color: "hover:text-primary" },
  ]

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Get In Touch
          </h2>
          <div className="relative inline-block">
            <div 
              className="h-1 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
              style={{ width: isHeadingVisible ? '100%' : '0%' }}
            />
            <div className="w-48 h-1 bg-muted/20 rounded-full absolute top-0 left-0 -z-10" />
          </div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. 
            Let&apos;s build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Info Cards */}
            <div className="space-y-4">
              <div className="group p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Pune, India</p>
                  </div>
                </div>
              </div>

              <div className="group p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Response Time</p>
                    <p className="font-medium">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="group p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Availability</p>
                    <p className="font-medium text-emerald-400">Open for Work</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`p-3 rounded-xl bg-card/50 border border-border/50 text-muted-foreground ${social.color} hover:border-primary/50 hover:scale-110 transition-all duration-300`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className={`lg:col-span-3 p-6 md:p-8 rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm transition-all duration-700 ${
              isFormVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2 mt-5">
              <label htmlFor="subject" className="text-sm font-medium text-foreground">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 appearance-none cursor-pointer"
              >
                <option value="" disabled>Select a topic</option>
                <option value="freelance">Freelance Project</option>
                <option value="fulltime">Full-time Opportunity</option>
                <option value="internship">Internship</option>
                <option value="collaboration">Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-2 mt-5">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project or idea..."
                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={formState === 'submitting' || formState === 'success'}
              className={`mt-6 w-full py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                formState === 'success'
                  ? 'bg-emerald-500 text-white'
                  : formState === 'error'
                  ? 'bg-red-500 text-white'
                  : 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02]'
              } disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {formState === 'submitting' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : formState === 'success' ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Message Sent!
                </>
              ) : formState === 'error' ? (
                <>
                  <AlertCircle className="w-5 h-5" />
                  Failed to Send
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
