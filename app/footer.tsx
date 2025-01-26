"use client"

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
            <a href="tel:+1234567890" className="text-sm hover:text-yellow-400">
              (123) 456-7890
            </a>
            <a
              href="mailto:info@swervinsfabhaus.com"
              className="text-sm hover:text-yellow-400"
            >
              info@swervinsfabhaus.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
