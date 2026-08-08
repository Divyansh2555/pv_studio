"use client";

import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";

import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import p4 from "../../assets/p4.jpg";
import p5 from "../../assets/p5.jpg";
import p6 from "../../assets/p6.jpg";
import p7 from "../../assets/p7.jpg";
import p8 from "../../assets/p8.jpg";
import p9 from "../../assets/p9.jpg";
import p10 from "../../assets/p10.jpg";
import p11 from "../../assets/p11.jpg";
import p12 from "../../assets/p12.jpg";
import p13 from "../../assets/p13.jpg";
import p14 from "../../assets/p14.jpg";
import p15 from "../../assets/p15.jpg";

const images = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
];

const services = [
  {
    title: "Photography",
    description:
      "Professional photography that captures real emotions, details and unforgettable moments.",
    image: p1,
  },
  {
    title: "Videography",
    description:
      "Cinematic videos created to turn your special moments into beautiful stories.",
    image: p2,
  },
  {
    title: "Wedding Photography",
    description:
      "Complete wedding coverage focused on emotions, traditions, family and celebrations.",
    image: p3,
  },
  {
    title: "Pre-Wedding",
    description:
      "Creative pre-wedding sessions with beautiful locations, natural poses and storytelling.",
    image: p4,
  },
  {
    title: "Event Coverage",
    description:
      "Professional photo and video coverage for parties, events, celebrations and occasions.",
    image: p5,
  },
  {
    title: "Travel Photography",
    description:
      "Beautiful travel photography covering destinations, landscapes and unforgettable experiences.",
    image: p6,
  },
  {
    title: "Fashion Photography",
    description:
      "Creative photography for models, designers, portfolios, campaigns and fashion brands.",
    image: p7,
  },
  {
    title: "Commercial Photography",
    description:
      "Professional visual content for businesses, products, brands and marketing campaigns.",
    image: p8,
  },
  {
    title: "Drone Photography",
    description:
      "Aerial photography and cinematic drone footage for events, locations and creative projects.",
    image: p9,
  },
];

export default function Services() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed left-0 top-0 z-50 w-full bg-transparent">
        <Header />
      </header>

      <main className="min-h-screen w-full overflow-hidden bg-black text-white pt-18">

        {/* =====================================================
            HERO
        ===================================================== */}
     


        {/* =====================================================
            MOVING IMAGE STRIP
        ===================================================== */}
        <section className="overflow-hidden border-y border-white/10 bg-zinc-950 py-2">

          {/* ROW 1 */}
          <div className="w-full overflow-hidden">

            <motion.div
              className="flex w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 55,
                repeat: Infinity,
                ease: "linear",
              }}
            >

              {[...images, ...images].map((image, index) => (
                <div
                  key={`row1-${index}`}
                  className="relative h-[100px] w-[170px] min-w-[170px] overflow-hidden border-r border-black sm:h-[120px] sm:w-[200px] sm:min-w-[200px]"
                >
                  <Image
                    src={image}
                    alt={`Photography ${index + 1}`}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              ))}

            </motion.div>

          </div>


          {/* ROW 2 */}
          <div className="w-full overflow-hidden">

            <motion.div
              className="flex w-max"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                duration: 65,
                repeat: Infinity,
                ease: "linear",
              }}
            >

              {[...images, ...images].map((image, index) => (
                <div
                  key={`row2-${index}`}
                  className="relative h-[100px] w-[170px] min-w-[170px] overflow-hidden border-r border-black sm:h-[120px] sm:w-[200px] sm:min-w-[200px]"
                >
                  <Image
                    src={image}
                    alt={`Photography ${index + 1}`}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              ))}

            </motion.div>

          </div>


          {/* ROW 3 */}
          <div className="w-full overflow-hidden">

            <motion.div
              className="flex w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 55,
                repeat: Infinity,
                ease: "linear",
              }}
            >

              {[...images, ...images].map((image, index) => (
                <div
                  key={`row1-${index}`}
                  className="relative h-[100px] w-[170px] min-w-[170px] overflow-hidden border-r border-black sm:h-[120px] sm:w-[200px] sm:min-w-[200px]"
                >
                  <Image
                    src={image}
                    alt={`Photography ${index + 1}`}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              ))}

            </motion.div>

          </div>


        {/* ROW 1 */}
          <div className="w-full overflow-hidden">

            <motion.div
              className="flex w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 55,
                repeat: Infinity,
                ease: "linear",
              }}
            >

              {[...images, ...images].map((image, index) => (
                <div
                  key={`row1-${index}`}
                  className="relative h-[100px] w-[170px] min-w-[170px] overflow-hidden border-r border-black sm:h-[120px] sm:w-[200px] sm:min-w-[200px]"
                >
                  <Image
                    src={image}
                    alt={`Photography ${index + 1}`}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              ))}

            </motion.div>

          </div>





          {/* ROW 1 */}
          <div className="w-full overflow-hidden">

            <motion.div
              className="flex w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 55,
                repeat: Infinity,
                ease: "linear",
              }}
            >

              {[...images, ...images].map((image, index) => (
                <div
                  key={`row1-${index}`}
                  className="relative h-[100px] w-[170px] min-w-[170px] overflow-hidden border-r border-black sm:h-[120px] sm:w-[200px] sm:min-w-[200px]"
                >
                  <Image
                    src={image}
                    alt={`Photography ${index + 1}`}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              ))}

            </motion.div>

          </div>

        </section>


        {/* =====================================================
            SERVICES
        ===================================================== */}
        <section className="px-6 py-20 sm:py-24 lg:py-32">

          <div className="mx-auto max-w-7xl">

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-14 max-w-3xl"
            >

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
                Our Services
              </p>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
                Everything You Need
                <span className="block text-yellow-500">
                  To Tell Your Story
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                From intimate portraits to large celebrations, we provide
                professional photography and videography services for every
                kind of occasion.
              </p>

            </motion.div>


            {/* Service Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {services.map((service, index) => (

                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                  }}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950"
                >

                  {/* Image */}
                  <div className="relative h-[260px] overflow-hidden">

                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    {/* Number */}
                    <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-xs font-semibold text-yellow-500 backdrop-blur-sm">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-5 left-5 right-5">

                      <h3 className="text-2xl font-bold">
                        {service.title}
                      </h3>

                    </div>

                  </div>


                  {/* Content */}
                  <div className="p-6">

                    <p className="text-sm leading-6 text-gray-400">
                      {service.description}
                    </p>

                    <button
                      type="button"
                      className="mt-5 text-sm font-semibold text-yellow-500 transition hover:text-yellow-400"
                    >
                      Explore Service
                      <span className="ml-2 transition group-hover:ml-3">
                        →
                      </span>
                    </button>

                  </div>

                </motion.article>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            OUR PROCESS
        ===================================================== */}
        <section className="border-y border-white/10 bg-zinc-950 px-6 py-20 sm:py-24 lg:py-28">

          <div className="mx-auto max-w-7xl">

            <div className="text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
                Our Process
              </p>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                From Idea To
                <span className="text-yellow-500">
                  {" "}Final Frame
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400">
                A simple process that helps us understand your vision and
                turn it into beautiful photographs and films.
              </p>

            </div>


            <div className="mt-14 grid gap-5 md:grid-cols-4">

              {[
                {
                  number: "01",
                  title: "Consultation",
                  text: "We understand your requirements, ideas, location and expectations.",
                },
                {
                  number: "02",
                  title: "Planning",
                  text: "We plan the shoot, timeline, locations, equipment and creative direction.",
                },
                {
                  number: "03",
                  title: "Shoot",
                  text: "Our team captures every important moment with professional equipment.",
                },
                {
                  number: "04",
                  title: "Delivery",
                  text: "Your photos and videos are professionally edited and delivered in high quality.",
                },
              ].map((step, index) => (

                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="rounded-2xl border border-white/10 bg-black p-7"
                >

                  <span className="text-4xl font-bold text-yellow-500">
                    {step.number}
                  </span>

                  <h3 className="mt-6 text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {step.text}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            WHY CHOOSE US
        ===================================================== */}
        <section className="px-6 py-20 sm:py-24 lg:py-32">

          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
                Why Choose Us
              </p>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                More Than
                <span className="block text-yellow-500">
                  Just A Camera.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                Photography is not only about pressing the shutter. It is
                about understanding people, emotions, light and stories.
                We focus on creating images and films that feel natural,
                emotional and timeless.
              </p>

            </motion.div>


            {/* Right */}
            <div className="grid gap-4 sm:grid-cols-2">

              {[
                {
                  title: "Professional Quality",
                  text: "Professional cameras, lenses, lighting and production equipment.",
                },
                {
                  title: "Creative Approach",
                  text: "Fresh ideas and creative storytelling for every project.",
                },
                {
                  title: "Experienced Team",
                  text: "Skilled photographers, videographers and editors working together.",
                },
                {
                  title: "Personal Service",
                  text: "Every project gets personal attention from planning to delivery.",
                },
              ].map((item, index) => (

                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="rounded-2xl border border-white/10 bg-zinc-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-500/40"
                >

                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/10 text-sm font-bold text-yellow-500">
                    0{index + 1}
                  </div>

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {item.text}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            STATS
        ===================================================== */}
        <section className="border-y border-white/10 bg-zinc-950 px-6 py-16">

          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 text-center md:grid-cols-4">

            {[
              ["250+", "Projects"],
              ["100+", "Happy Clients"],
              ["50+", "Weddings"],
              ["20+", "Cities"],
            ].map(([number, title]) => (

              <motion.div
                key={title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >

                <h3 className="text-4xl font-bold text-yellow-500 sm:text-5xl">
                  {number}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  {title}
                </p>

              </motion.div>

            ))}

          </div>

        </section>


       

      </main>

      <Footer />
    </>
  );
}
