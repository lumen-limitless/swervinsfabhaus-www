"use client"

import { Button } from "@/components/ui/button"
import SfaSVG from "@/public/sfa.svg"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky left-0 right-0 top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center px-4 py-4">
        {/* Desktop Navigation  */}
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
            <Button className="bg-gradient-to-r from-accent to-[#61367a] text-white hover:brightness-90">
              Get a Quote
            </Button>
          </Link>
        </nav>

        {/* Logo - Centered */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <Link href="/" className="flex items-center gap-2">
            <SfaSVG className="h-8" />
          </Link>
        </div>

        {/* Mobile Menu Button - Right Side */}
        <button
          className="ml-auto text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-b border-zinc-800 md:hidden">
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
              <Button className="w-full bg-gradient-to-r from-[#844b9d] to-[#61367a] text-white hover:brightness-90">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
