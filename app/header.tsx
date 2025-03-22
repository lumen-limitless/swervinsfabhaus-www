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
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <SfaSVG className="h-8" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
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
          <Button className="bg-gradient-to-r from-[#844b9d] to-purple-500 text-white hover:from-cyan-600 hover:to-blue-700">
            Get a Quote
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-b border-zinc-800 bg-zinc-900 md:hidden">
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
            <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
