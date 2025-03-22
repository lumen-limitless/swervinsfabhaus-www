"use client"

import { EMAIL_ADDRESS, PHONE_NUMBER } from "@/lib/constants"

export default function Footer() {
  return (
    <footer id="footer" className="bg-zinc-900 py-8 text-white">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Swervin's Fab Häus. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="text-sm hover:text-yellow-400"
            >
              {PHONE_NUMBER}
            </a>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="text-sm hover:text-yellow-400"
            >
              {EMAIL_ADDRESS}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
