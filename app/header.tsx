"use client"

import React from "react"

export default function Header() {
  return (
    <header
      id="header"
      className="sticky top-0 z-20 flex h-20 w-full items-center bg-zinc-900 px-5 text-white"
    >
      <div className="mx-auto flex w-full max-w-7xl justify-between">
        <div className="text-2xl font-bold tracking-tight">
          SWERVIN'S FAB HAUS
        </div>
        <nav>
          <ul className="flex gap-8">
            <li>
              <a href="#services" className="hover:text-yellow-400">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
