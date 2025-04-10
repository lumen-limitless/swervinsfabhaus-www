"use client"

import { Button } from "@/components/ui/button"
import SfaSVG from "@/public/logo-purple.svg"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 right-0 left-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-md">
      <div className="relative container mx-auto flex items-center px-4 py-4">
        {/* Logo - Centered */}
        <div className="absolute left-1/2 -translate-x-1/2 transform">
          <Link href="/" className="flex items-center gap-2">
            <SfaSVG className="h-8" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden items-center gap-6 md:flex">
          <Link
            href="#services"
            className="text-zinc-300 transition-colors hover:text-white"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="text-zinc-300 transition-colors hover:text-white"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-zinc-300 transition-colors hover:text-white"
          >
            Contact
          </Link>
          <Link passHref legacyBehavior href="#contact">
            <Button className="from-accent bg-linear-to-r to-[#61367a] text-white hover:brightness-90">
              Get a Quote
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button - Right Side */}
        <div className="ml-auto md:hidden">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Animated Dropdown */}
      <div
        className={`mobile-nav-container overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="border-t border-zinc-800">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <Link
              href="#services"
              className="py-2 text-zinc-300 transition-colors hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="py-2 text-zinc-300 transition-colors hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="py-2 text-zinc-300 transition-colors hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link passHref legacyBehavior href="#contact">
              <Button className="w-full bg-linear-to-r from-[#844b9d] to-[#61367a] text-white hover:brightness-90">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
