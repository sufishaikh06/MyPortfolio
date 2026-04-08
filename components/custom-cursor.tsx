"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches || 'ontouchstart' in window)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    if (isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true)
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true)
      }
    }

    const handleHoverEnd = () => {
      setIsHovering(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseover', handleHoverStart)
    document.addEventListener('mouseout', handleHoverEnd)

    return () => {
      window.removeEventListener('resize', checkMobile)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleHoverStart)
      document.removeEventListener('mouseout', handleHoverEnd)
    }
  }, [isMobile])

  if (isMobile || !isVisible) return null

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="pointer-events-none fixed z-[9999] mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div
          className={`rounded-full bg-electric-blue transition-all duration-200 ease-out ${
            isHovering ? 'h-10 w-10 opacity-50' : 'h-3 w-3 opacity-100'
          }`}
          style={{
            boxShadow: isHovering 
              ? '0 0 30px 10px rgba(59, 130, 246, 0.4)' 
              : '0 0 20px 5px rgba(59, 130, 246, 0.3)',
          }}
        />
      </div>
      
      {/* Trailing cursor ring */}
      <div
        className="pointer-events-none fixed z-[9998]"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.3s ease-out',
        }}
      >
        <div
          className={`rounded-full border border-electric-blue/30 transition-all duration-300 ease-out ${
            isHovering ? 'h-16 w-16 opacity-100' : 'h-8 w-8 opacity-50'
          }`}
        />
      </div>
    </>
  )
}
