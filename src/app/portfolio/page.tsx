"use client";

import { useRouter } from "next/navigation";

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



import pwa from "@/src/assets/home/pwa.webp";
import pwb from "@/src/assets/home/pwb.jpg";

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
  {
    title: "Drone Photography",
    description:
      "Aerial photography and cinematic drone footage for events, locations and creative projects.",
    image: p10,
  },

];

export default function Services() {
  const router = useRouter();
  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed left-0 top-0 z-50 w-full bg-transparent">
        <Header />
      </header>

      <main className="min-h-screen w-full overflow-hidden bg-black text-white pt-20.5 sm:pt-18.5 ">

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


        <section className="border-y border-slate-200 bg-gradient-to-b from-sky-50 via-white to-slate-50 px-4 py-5 sm:px-6 sm:py-20 lg:py-24">

          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={`service-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -5 }}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg sm:rounded-2xl"
              >
                <div className="relative h-[150px] overflow-hidden sm:h-[220px] lg:h-[260px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />

                  <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-[10px] font-bold text-sky-600 shadow-sm sm:left-5 sm:top-5 sm:h-9 sm:w-9 sm:text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5">
                    <h3 className="text-base font-bold text-white sm:text-2xl">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-3 sm:p-6">
                  <p className="line-clamp-2 text-[10px] leading-4 text-slate-500 sm:text-sm sm:leading-6">
                    {service.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => router.push("/services")}
                    className="mt-3 cursor-pointer text-[10px] font-semibold text-sky-600 transition hover:text-sky-700 sm:mt-5 sm:text-sm"
                  >
                    Explore Service
                    <span className="ml-1 transition-all duration-300 group-hover:ml-2 sm:ml-2">
                      →
                    </span>
                  </button>
                </div>
              </motion.article>
            ))}


          </div>

        </section>


        {/* =====================================================
            OUR PROCESS
        ===================================================== */}
        <section className="border-y border-slate-200 bg-gradient-to-b from-sky-50 via-white to-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:py-24">

          <div className="mx-auto max-w-7xl">

            {/* Heading */}
            <div className="text-center">

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600 sm:text-sm sm:tracking-[0.3em]">
                Our Process
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:mt-4 sm:text-5xl">
                From Idea To{" "}
                <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                  Final Frame
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-5 sm:leading-7">
                A simple process that helps us understand your vision and
                turn it into beautiful photographs and films.
              </p>

            </div>


            {/* Process Cards */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 md:grid-cols-4">

              {[
                {
                  number: "01",
                  title: "Consultation",
                  text: "We understand your requirements, ideas, location and expectations.",
                  numberColor: "bg-sky-50 text-sky-600 border-sky-200",
                  lineColor: "bg-sky-500",
                },
                {
                  number: "02",
                  title: "Planning",
                  text: "We plan the shoot, timeline, locations, equipment and creative direction.",
                  numberColor: "bg-violet-50 text-violet-600 border-violet-200",
                  lineColor: "bg-violet-500",
                },
                {
                  number: "03",
                  title: "Shoot",
                  text: "Our team captures every important moment with professional equipment.",
                  numberColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
                  lineColor: "bg-emerald-500",
                },
                {
                  number: "04",
                  title: "Delivery",
                  text: "Your photos and videos are professionally edited and delivered in high quality.",
                  numberColor: "bg-orange-50 text-orange-600 border-orange-200",
                  lineColor: "bg-orange-500",
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
                  whileHover={{ y: -5 }}
                  className="group flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-lg sm:rounded-2xl sm:p-6 lg:p-7"
                >

                  {/* Number */}
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xs font-bold sm:h-11 sm:w-11 sm:text-sm ${step.numberColor}`}
                  >
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-sm font-semibold leading-5 text-slate-900 sm:mt-5 sm:text-lg lg:text-xl">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-[11px] leading-5 text-slate-500 sm:mt-3 sm:text-sm sm:leading-6">
                    {step.text}
                  </p>

                  {/* Accent */}
                  <div
                    className={`mt-4 h-1 w-8 rounded-full ${step.lineColor} transition-all duration-300 group-hover:w-full sm:mt-5 sm:w-10`}
                  />

                </motion.div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            WHY CHOOSE US
        ===================================================== */}



        <section className="bg-gradient-to-br from-slate-50 via-white to-sky-50 px-4 py-8 sm:px-6 lg:px-8">

          <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-12">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600 sm:text-sm">
                Why Choose Us
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:mt-4 sm:text-5xl">
                More Than
                <span className="block bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  Just A Camera.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:mt-6 sm:text-base sm:leading-7">
                Photography is not only about pressing the shutter. It is
                about understanding people, emotions, light and stories.
                We focus on creating images and films that feel natural,
                emotional and timeless.
              </p>

              {/* Accent */}
              <div className="mt-5 flex items-center gap-2 sm:mt-7">
                <div className="h-1 w-10 rounded-full bg-sky-500 sm:w-12" />
                <div className="h-1 w-6 rounded-full bg-blue-500 sm:w-7" />
                <div className="h-1 w-4 rounded-full bg-indigo-500" />
              </div>

            </motion.div>


            {/* Right */}
            <div className="grid grid-cols-2 gap-3 sm:gap-5">

              {[
                {
                  title: "Professional Quality",
                  text: "Professional cameras, lenses, lighting and production equipment.",
                  number: "bg-sky-100 text-sky-600 border-sky-200",
                  line: "bg-sky-500",
                },
                {
                  title: "Creative Approach",
                  text: "Fresh ideas and creative storytelling for every project.",
                  number: "bg-violet-100 text-violet-600 border-violet-200",
                  line: "bg-violet-500",
                },
                {
                  title: "Experienced Team",
                  text: "Skilled photographers, videographers and editors working together.",
                  number: "bg-emerald-100 text-emerald-600 border-emerald-200",
                  line: "bg-emerald-500",
                },
                {
                  title: "Personal Service",
                  text: "Every project gets personal attention from planning to delivery.",
                  number: "bg-orange-100 text-orange-600 border-orange-200",
                  line: "bg-orange-500",
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
                  className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-2xl sm:p-6"
                >

                  {/* Number */}
                  <div
                    className={`mb-3 flex h-9 w-9 items-center justify-center rounded-full border text-xs font-bold sm:mb-5 sm:h-11 sm:w-11 sm:text-sm ${item.number}`}
                  >
                    0{index + 1}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold leading-5 text-slate-900 sm:text-lg">
                    {item.title}
                  </h3>

                  {/* Text */}
                  <p className="mt-2 text-[11px] leading-5 text-slate-500 sm:text-sm sm:leading-6">
                    {item.text}
                  </p>

                  {/* Accent Line */}
                  <div
                    className={`mt-4 h-1 w-8 rounded-full ${item.line} transition-all duration-300 group-hover:w-12 sm:mt-5 sm:w-10`}
                  />

                </motion.div>

              ))}

            </div>

          </div>

        </section>




        {/* =====================================================
            STATS
        ===================================================== */}


        <section className="w-full bg-gradient-to-b from-sky-50 via-white to-slate-50 px-2 py-2">

          <div className="mx-auto grid w-full max-w-5xl grid-cols-4 gap-1 text-center sm:gap-3">

            {[
              ["250+", "Projects"],
              ["100+", "Happy Clients"],
              ["50+", "Weddings"],
              ["20+", "Cities"],
            ].map(([number, title], index) => (

              <motion.div
                key={title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -3 }}
                className="mx-auto flex h-[70px] w-full min-w-0 flex-col items-center justify-center rounded-lg border border-slate-200 bg-white px-1 shadow-sm transition-shadow duration-300 hover:shadow-md sm:h-[85px] sm:rounded-xl sm:px-2"
              >

                {/* Number */}
                <h3 className="text-base font-bold leading-none text-sky-600 sm:text-3xl">
                  {number}
                </h3>

                {/* Title */}
                <p className="mt-1 w-full truncate text-[8px] font-medium leading-none text-slate-500 sm:text-sm">
                  {title}
                </p>

                {/* Small Line */}
                <div className="mt-1.5 h-1 w-5 rounded-full bg-sky-500 sm:mt-2 sm:w-7" />

              </motion.div>

            ))}

          </div>

        </section>
    

         {/* =====================================================
            Let us
        ===================================================== */}

        <section className=" bg-white w-full px-2 py-5 sm:px-4 lg:px-6">
          <div
            className="
              relative mx-auto
              h-[190px] w-full max-w-7xl
              overflow-hidden
              border-y border-[#C8A96A]/30
              sm:h-[220px]
              rounded-2xl
            "
          >

            {/* ================= LEFT IMAGE ================= */}
            <div className="absolute inset-y-0 left-0 w-[50%]">
              <Image
                src={pwa}
                alt="Wedding photography"
                fill
                sizes="50vw"
                className="object-cover"
              />

              {/* Left side → SAME PURE BLACK */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-black/10
                  via-black/40
                  to-black
                "
              />
            </div>


            {/* ================= RIGHT IMAGE ================= */}
            <div className="absolute inset-y-0 right-0 w-[50%]">
              <Image
                src={pwb}
                alt="Wedding photography"
                fill
                sizes="50vw"
                className="object-cover"
              />

              {/* Right side → SAME PURE BLACK */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-l
                  from-black/10
                  via-black/40
                  to-black
                "
              />
            </div>


            {/* =================================================
                CENTER BLACK BLEND
                No separate strip — only smooth fade
            ================================================== */}
            <div
              className="
                pointer-events-none
                absolute inset-y-0 left-1/2
                z-[2]
                w-[24%]
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-black
                to-transparent
              "
            />


            {/* ================= OVERALL DARKNESS ================= */}
            <div
              className="
                pointer-events-none
                absolute inset-0
                z-[3]
                bg-black/15
              "
            />


            {/* ================= CENTER CONTENT ================= */}
            <div
              className="
                relative z-10
                flex h-full
                flex-col
                items-center
                justify-center
                px-4
                text-center
              "
            >

              {/* Small Heading */}
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[2.5px]
                  text-[#C8A96A]
                  sm:text-[10px]
                  sm:tracking-[3px]
                "
              >
                Your Moments Deserve To Be Timeless
              </p>


              {/* Main Heading */}
              <h2
                className="
                  mt-1
                  font-serif
                  text-2xl
                  font-semibold
                  leading-tight
                  text-white
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                Let's Capture Your Story
              </h2>


              {/* Description */}
              <p
                className="
                  mt-1.5
                  text-[9px]
                  text-white/75
                  sm:text-[11px]
                "
              >
                Now booking for 2025 & 2026 weddings.
              </p>


              {/* ================= BUTTONS ================= */}
              <div className="mt-4 flex items-center gap-2 sm:gap-3">

                {/* Check Availability */}
                <button
                  className="
                    flex items-center justify-center
                    rounded-sm
                    border border-[#C8A96A]
                    bg-[#C8A96A]
                    px-4 py-2
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[1px]
                    text-white
                    transition-all duration-300
                    hover:bg-[#b49354]
                    sm:px-6 sm:py-2.5
                    sm:text-[10px]
                  "
                >
                  Check Availability
                </button>


                {/* WhatsApp */}
                {/* WhatsApp */}
                <button
                  type="button"
                  onClick={() => {
                    window.open(
                      "https://wa.me/918604885021?text=Hello%20Innovative%20Photography%2C%20I%20would%20like%20to%20know%20more%20about%20your%20wedding%20photography%20services.",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                  className="
            flex items-center justify-center gap-1.5
            rounded-sm
            border border-white/50
            bg-black/30
            px-4 py-2
            text-[8px]
            font-bold
            uppercase
            tracking-[1px]
            text-white
            backdrop-blur-sm
            transition-all duration-300
            hover:border-[#C8A96A]
            hover:text-[#C8A96A]
            sm:px-6 sm:py-2.5
            sm:text-[10px]
          "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.075-.792.372-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />

                    <path d="M12.004 2a9.94 9.94 0 0 0-8.514 15.18L2 22l4.973-1.461A9.94 9.94 0 1 0 12.004 2zm0 18.1a8.14 8.14 0 0 1-4.15-1.135l-.298-.177-2.95.867.787-2.876-.194-.307A8.1 8.1 0 1 1 12.004 20.1z" />
                  </svg>

                  WhatsApp Us
                </button>


              </div>
            </div>

          </div>
        </section>



      </main>

      <Footer />
    </>
  );
}
