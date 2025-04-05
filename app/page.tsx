import Contact from "@/components/contact"
import { Marquee } from "@/components/magicui/marquee"
import { Marquee3D } from "@/components/marquee3D"
import { MetallicServiceCard } from "@/components/metallic-service-card"
import SupraPNG from "@/public/images/supra.jpeg"
import Image from "next/image"

export const metadata = {
  title: "Swervin's Fab Haus - Custom Welding & Fabrication",
  description:
    "Professional welding and metal fabrication services in Farmington, NY",
}

export default function Page() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero Section */}
      <section className="relative flex h-[600px] items-center justify-center bg-linear-to-r from-zinc-900 to-zinc-800 px-5 text-white">
        <Image
          src={SupraPNG}
          alt="Custom car fabrication"
          className="absolute inset-0 h-full w-full object-cover"
          priority
        />
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
            className="from-accent rounded-md bg-linear-to-r to-[#61367a] px-8 py-3 font-semibold text-white transition hover:brightness-90"
          >
            Get a Quote
          </a>
        </div>
      </section>

      {/* Animated Marquee */}
      <section className="bg-accent py-2 text-white">
        <Marquee className="py-2" reverse>
          <span className="mx-6 text-xl font-bold tracking-wider">
            QUALITY CRAFTSMANSHIP
          </span>
          <span className="mx-6 text-xl font-bold tracking-wider">
            CUSTOM FABRICATION
          </span>
          <span className="mx-6 text-xl font-bold tracking-wider">
            PRECISION WELDING
          </span>
          <span className="mx-6 text-xl font-bold tracking-wider">
            METAL EXPERTS
          </span>
          <span className="mx-6 text-xl font-bold tracking-wider">
            FARMINGTON, NY
          </span>
          <span className="mx-6 text-xl font-bold tracking-wider">
            SATISFACTION GUARANTEED
          </span>
        </Marquee>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container">
          <h2 className="mb-4 text-center text-4xl font-bold">Our Services</h2>
          <p className="text-muted-foreground mx-auto mb-16 max-w-2xl text-center text-lg">
            Professional metal fabrication and welding services tailored to your
            specific needs
          </p>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <MetallicServiceCard
              title="Welding & Repair Services"
              description="Professional MIG, TIG, and stick welding combined with expert repair capabilities. From small components to large structures, no task is short of our highest standards and quality control."
              imageSrc="/images/welding.mov"
            />

            <MetallicServiceCard
              title="Custom Fabrication"
              description="Home to all your welding needs and requests! Specializing in high detail, quality and efficiency - ranging from automotive jewlery to general fabrication!"
              imageSrc="/images/exhaust.webp"
            />

            <MetallicServiceCard
              title="Prototype Development"
              description="Transform your concepts into reality with our prototype development services—we help bring innovative ideas to tangible market-ready solutions.
"
              imageSrc="/images/prototype.mov"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-zinc-900 py-20 text-white">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">About Us</h2>
          <div className="text-center">
            <p className="mb-6 text-lg">
              At Swervin's Fab Häus, we're a family-owned small business in
              Farmington, NY specializing in automotive fabrication and
              precision metalwork. Our passion for custom vehicle components and
              automotive solutions drives our commitment to excellence in every
              project we undertake. We believe that personalized attention to
              details and meticulous craftsmanship are essential for creating
              superior custom parts and vehicle modifications.
            </p>

            <p className="mb-6 text-lg">
              Building trusted, long-term relationships with our clients forms
              the cornerstone of our business philosophy. We take pride in
              understanding each client's unique vision and working
              collaboratively to bring their automotive dreams to reality. This
              client-focused approach has earned us a reputation for reliability
              and integrity throughout the Western NY region.
            </p>
            <p className="text-lg">
              As your dedicated local partner for automotive metal fabrication,
              we bring years of specialized experience to every project,
              ensuring exceptional results while maintaining the values of a
              family business. Our mission is simple: to transform your
              automotive concepts into handcrafted, precision-engineered
              realities that enhance your vehicle's capabilities and
              appearance—all with the attentive service only a specialized small
              business can provide.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-background py-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10">
            <div className="mb-10 lg:mb-0 lg:w-1/3">
              <h2 className="mb-4 text-3xl font-bold">What Our Clients Say</h2>
              <p className="text-muted-foreground text-lg">
                Don't just take our word for it. See what our satisfied
                customers have to say about our craftsmanship and service.
              </p>
            </div>
            <div className="lg:w-2/3">
              <Marquee3D />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  )
}
