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
            className="rounded-md bg-linear-to-r from-accent to-[#61367a] px-8 py-3 font-semibold text-white transition hover:brightness-90"
          >
            Get a Quote
          </a>
        </div>
      </section>

      {/* Animated Marquee */}
      <section className="bg-accent py-2 text-white">
        <Marquee className="py-2" pauseOnHover>
          <span className="mx-6 text-xl font-bold tracking-wider">QUALITY CRAFTSMANSHIP</span>
          <span className="mx-6 text-xl font-bold tracking-wider">CUSTOM FABRICATION</span>
          <span className="mx-6 text-xl font-bold tracking-wider">PRECISION WELDING</span>
          <span className="mx-6 text-xl font-bold tracking-wider">METAL EXPERTS</span>
          <span className="mx-6 text-xl font-bold tracking-wider">FARMINGTON, NY</span>
          <span className="mx-6 text-xl font-bold tracking-wider">SATISFACTION GUARANTEED</span>
        </Marquee>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="mb-4 text-center text-4xl font-bold">Our Services</h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-muted-foreground">
            Professional metal fabrication and welding services tailored to your
            specific needs
          </p>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <MetallicServiceCard
              title="Custom Fabrication"
              description="From concept to creation, we bring your metal fabrication projects to life with precision and expertise. We work with various metals to create custom solutions."
              imageSrc="/images/exhaust.webp"
            />

            <MetallicServiceCard
              title="Welding & Repair Services"
              description="Professional MIG, TIG, and stick welding combined with expert repair capabilities. We fix and strengthen metal structures, equipment, and components with precision and quality craftsmanship."
              imageSrc="/images/welding.mov"
            />

            {/* <MetallicServiceCard
              title="Architectural Metals"
              description="Custom metal elements for architectural applications including railings, staircases, decorative elements, and structural components."
              imageSrc="/images/architectural.jpg"
            /> */}

            {/* <MetallicServiceCard
              title="Industrial Solutions"
              description="Specialized fabrication for industrial applications including equipment modifications, custom parts, and production line components."
              imageSrc="/images/industrial.jpg"
            /> */}

            <MetallicServiceCard
              title="Prototype Development"
              description="Bring your ideas to life with our prototype development services. We help transform concepts into functional metal prototypes."
              imageSrc="/images/prototype.mov"
            />
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
      <section className="bg-background py-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10">
            <div className="mb-10 lg:mb-0 lg:w-1/3">
              <h2 className="mb-4 text-3xl font-bold">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground">
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
