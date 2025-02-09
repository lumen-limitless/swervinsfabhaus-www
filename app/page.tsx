import { ServiceCard } from "@/components/service-card"

export const metadata = {
  title: "Swervin's Fab Haus - Custom Welding & Fabrication",
  description:
    "Professional welding and metal fabrication services in Farmington, NY",
}

export default function Page() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero Section */}
      <section className="relative flex h-[600px] items-center justify-center bg-gradient-to-r from-zinc-900 to-zinc-800 px-5 text-white">
        <div className="absolute inset-0 bg-black/50" />
        <div className="z-10 mx-auto max-w-7xl text-center">
          <h1 className="mb-6 text-5xl font-bold">
            PRECISION WELDING & FABRICATION
          </h1>
          <p className="mb-8 text-xl">
            Custom metal fabrication solutions for your unique needs
          </p>
          <a
            href="#contact"
            className="rounded-md bg-yellow-400 px-8 py-3 font-semibold text-black transition hover:bg-yellow-500"
          >
            Get a Quote
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Services</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* <div className="rounded-lg bg-zinc-100 p-6">
              <h3 className="mb-4 text-xl font-semibold">Custom Fabrication</h3>
              <p>
                From concept to creation, we bring your metal fabrication
                projects to life with precision and expertise.
              </p>
            </div> */}
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-zinc-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="mb-12 text-center text-3xl font-bold">About Us</h2>
          <div className="text-center">
            <p className="mb-6 text-lg">
              Located in Farmington, NY, Swervin's Fab Haus is your trusted
              partner for all metal fabrication needs. With years of experience
              and a passion for precision, we deliver quality craftsmanship on
              every project.
            </p>
            <p className="text-lg">
              Our state-of-the-art facility and skilled team ensure that your
              project is completed to the highest standards, on time and within
              budget.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-zinc-100 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="mb-12 text-center text-3xl font-bold">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="transform rounded-lg bg-white p-6 shadow-md transition duration-300 hover:scale-105">
              <p className="mb-4 italic">
                "Outstanding quality and attention to detail. They brought my
                custom project to life exactly as I envisioned."
              </p>
              <p className="font-semibold">- John Smith</p>
            </div>
            <div className="transform rounded-lg bg-white p-6 shadow-md transition duration-300 hover:scale-105">
              <p className="mb-4 italic">
                "Professional, reliable, and exceptional craftsmanship. Highly
                recommend their services!"
              </p>
              <p className="font-semibold">- Sarah Johnson</p>
            </div>
            <div className="transform rounded-lg bg-white p-6 shadow-md transition duration-300 hover:scale-105">
              <p className="mb-4 italic">
                "Fast turnaround without compromising on quality. A pleasure to
                work with from start to finish."
              </p>
              <p className="font-semibold">- Mike Davis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="mb-12 text-center text-3xl font-bold">Contact Us</h2>
          <div className="text-center">
            <p className="mb-6 text-lg">
              Ready to start your project? Contact us today for a free quote.
            </p>
            <div className="space-y-2">
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+1234567890"
                  className="text-yellow-600 hover:underline"
                >
                  (123) 456-7890
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@swervinsfabhaus.com"
                  className="text-yellow-600 hover:underline"
                >
                  info@swervinsfabhaus.com
                </a>
              </p>
              <p>
                <strong>Location:</strong> Farmington, NY
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
