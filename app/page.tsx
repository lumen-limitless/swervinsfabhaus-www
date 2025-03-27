import Contact from "@/components/contact"
import { Marquee3D } from "@/components/marquee3D"
import { MetallicServiceCard } from "@/components/metallic-service-card"
import SupraPNG from "@/public/images/supra.jpeg"
import Image from "next/image"
export const metadata = {
  title: "Swervin's Fab Haus - Custom Welding & Fabrication",
  description:
    "Professional welding and metal fabrication services in Farmington, NY",
}
// AI! confine image to section

export default function Page() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero Section */}
      <section className="relative flex h-[600px] items-center justify-center bg-gradient-to-r from-zinc-900 to-zinc-800 px-5 text-white">
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
            className="rounded-md bg-yellow-400 px-8 py-3 font-semibold text-black transition hover:bg-yellow-500"
          >
            Get a Quote
          </a>
        </div>
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
              imageSrc="/images/custom-fabrication.jpg"
            />

            <MetallicServiceCard
              title="Welding Services"
              description="Professional MIG, TIG, and stick welding for all your projects. Our certified welders ensure strong, clean welds on all types of metals."
              imageSrc="/images/welding.jpg"
            />

            <MetallicServiceCard
              title="Metal Repairs"
              description="Expert repair services for metal structures, equipment, and components. We can fix breaks, cracks, and structural issues in various metals."
              imageSrc="/images/repairs.jpg"
            />

            <MetallicServiceCard
              title="Architectural Metals"
              description="Custom metal elements for architectural applications including railings, staircases, decorative elements, and structural components."
              imageSrc="/images/architectural.jpg"
            />

            <MetallicServiceCard
              title="Industrial Solutions"
              description="Specialized fabrication for industrial applications including equipment modifications, custom parts, and production line components."
              imageSrc="/images/industrial.jpg"
            />

            <MetallicServiceCard
              title="Prototype Development"
              description="Bring your ideas to life with our prototype development services. We help transform concepts into functional metal prototypes."
              imageSrc="/images/prototype.jpg"
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
