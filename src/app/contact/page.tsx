"use client";

import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import Image from "next/image";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Camera,
  Video,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

import pgman from "@/src/assets/about/pgman.png";


export default function Contact() {
  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden bg-white">

        {/* =====================================================
            FIXED BACKGROUND IMAGE
        ===================================================== */}

        <div className="pointer-events-none fixed inset-0 -z-10">

          <Image
            src={pgman}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* White Overlay */}
          <div className="absolute inset-0 bg-white/65" />

          {/* Soft White Fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/80" />

        </div>


        {/* =====================================================
            HERO
        ===================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative overflow-hidden px-6 pb-16 pt-32 sm:pt-36 lg:pb-24"
        >

          <div className="mx-auto max-w-7xl">

            <div className="max-w-3xl">

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#B08D3C]">
                Get In Touch
              </p>

              <h1 className="text-4xl font-bold leading-tight text-zinc-900 sm:text-6xl lg:text-7xl">
                Let&apos;s Capture

                <span className="block text-[#B08D3C]">
                  Your Story.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
                Have a wedding, event, pre-wedding shoot or creative project
                coming up? Tell us about it and let&apos;s create something
                beautiful together.
              </p>

            </div>

          </div>

        </motion.section>


        {/* =====================================================
            CONTACT SECTION
        ===================================================== */}

        <section className="relative px-6 pb-20 lg:pb-28">

          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">


            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="rounded-3xl border border-white/70 bg-white/80 p-7 shadow-xl backdrop-blur-md sm:p-9"
            >

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B08D3C]">
                Contact Information
              </p>

              <h2 className="mt-4 text-3xl font-bold text-zinc-900">
                We&apos;d Love To

                <span className="text-[#B08D3C]">
                  {" "}Hear From You.
                </span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Whether you need photography, videography or a complete
                cinematic experience, our team is ready to discuss your
                project.
              </p>


              {/* Contact Details */}
              <div className="mt-8 space-y-5">


                {/* Location */}
                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C8A96A] text-white shadow-sm">
                    <MapPin size={20} />
                  </div>

                  <div>

                    <p className="font-semibold text-zinc-900">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-zinc-600">
                      Agra, Uttar Pradesh, India
                    </p>

                  </div>

                </div>


                {/* Phone */}
                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C8A96A] text-white shadow-sm">
                    <Phone size={20} />
                  </div>

                  <div>

                    <p className="font-semibold text-zinc-900">
                      Phone
                    </p>

                    <p className="mt-1 text-sm text-zinc-600">
                      +91 98765 43210
                    </p>

                  </div>

                </div>


                {/* Email */}
                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C8A96A] text-white shadow-sm">
                    <Mail size={20} />
                  </div>

                  <div>

                    <p className="font-semibold text-zinc-900">
                      Email
                    </p>

                    <p className="mt-1 text-sm text-zinc-600">
                      hello@yourstudio.com
                    </p>

                  </div>

                </div>


                {/* Working Hours */}
                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C8A96A] text-white shadow-sm">
                    <Clock size={20} />
                  </div>

                  <div>

                    <p className="font-semibold text-zinc-900">
                      Working Hours
                    </p>

                    <p className="mt-1 text-sm text-zinc-600">
                      Monday – Saturday
                    </p>

                    <p className="text-sm text-zinc-600">
                      10:00 AM – 7:00 PM
                    </p>

                  </div>

                </div>

              </div>


              {/* Divider */}
              <div className="my-8 h-px bg-zinc-200" />


              {/* Social */}
              <div>

                <p className="text-sm font-semibold text-zinc-900">
                  Follow Our Work
                </p>

                <div className="mt-4 flex gap-3">

                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition hover:-translate-y-1 hover:border-[#C8A96A] hover:bg-[#C8A96A] hover:text-white"
                  >
                    <Camera size={18} />
                  </a>

                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition hover:-translate-y-1 hover:border-[#C8A96A] hover:bg-[#C8A96A] hover:text-white"
                  >
                    <Video size={18} />
                  </a>

                </div>

              </div>

            </motion.div>


            {/* =================================================
                RIGHT FORM
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="rounded-3xl border border-white/70 bg-white/80 p-7 shadow-xl backdrop-blur-md sm:p-9"
            >

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B08D3C]">
                  Start A Conversation
                </p>

                <h2 className="mt-3 text-3xl font-bold text-zinc-900">
                  Tell Us About Your Project
                </h2>

                <p className="mt-3 text-sm text-zinc-600">
                  Fill out the form and we&apos;ll get back to you as soon
                  as possible.
                </p>

              </div>


              <form className="mt-8 space-y-6">


                {/* Name + Email */}
                <div className="grid gap-6 sm:grid-cols-2">

                  <div>

                    <label className="mb-2 block text-sm font-medium text-zinc-700">
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-zinc-200 bg-white/90 px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 transition focus:border-[#C8A96A] focus:ring-2 focus:ring-[#C8A96A]/20"
                    />

                  </div>


                  <div>

                    <label className="mb-2 block text-sm font-medium text-zinc-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-zinc-200 bg-white/90 px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 transition focus:border-[#C8A96A] focus:ring-2 focus:ring-[#C8A96A]/20"
                    />

                  </div>

                </div>


                {/* Phone + Date */}
                <div className="grid gap-6 sm:grid-cols-2">

                  <div>

                    <label className="mb-2 block text-sm font-medium text-zinc-700">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-zinc-200 bg-white/90 px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 transition focus:border-[#C8A96A] focus:ring-2 focus:ring-[#C8A96A]/20"
                    />

                  </div>


                  <div>

                    <label className="mb-2 flex items-center gap-2 text-sm font-medium text-zinc-700">
                      <CalendarDays size={15} />
                      Event Date
                    </label>

                    <input
                      type="date"
                      className="w-full rounded-xl border border-zinc-200 bg-white/90 px-4 py-3 text-sm text-zinc-600 outline-none transition focus:border-[#C8A96A] focus:ring-2 focus:ring-[#C8A96A]/20"
                    />

                  </div>

                </div>


                {/* Service */}
                <div>

                  <label className="mb-2 block text-sm font-medium text-zinc-700">
                    What Do You Need?
                  </label>

                  <select
                    defaultValue=""
                    className="w-full rounded-xl border border-zinc-200 bg-white/90 px-4 py-3 text-sm text-zinc-600 outline-none transition focus:border-[#C8A96A] focus:ring-2 focus:ring-[#C8A96A]/20"
                  >

                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="photography">
                      Photography
                    </option>

                    <option value="videography">
                      Videography
                    </option>

                    <option value="wedding">
                      Wedding Photography
                    </option>

                    <option value="pre-wedding">
                      Pre-Wedding Shoot
                    </option>

                    <option value="event">
                      Event Coverage
                    </option>

                    <option value="commercial">
                      Commercial Shoot
                    </option>

                  </select>

                </div>


                {/* Message */}
                <div>

                  <label className="mb-2 block text-sm font-medium text-zinc-700">
                    Tell Us About Your Project
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell us about your event, location, requirements..."
                    className="w-full resize-none rounded-xl border border-zinc-200 bg-white/90 px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 transition focus:border-[#C8A96A] focus:ring-2 focus:ring-[#C8A96A]/20"
                  />

                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#C8A96A] px-6 py-4 font-semibold text-white shadow-md transition hover:bg-[#B08D3C] hover:shadow-lg"
                >

                  Send Message

                  <ArrowRight
                    size={19}
                    className="transition-transform group-hover:translate-x-1"
                  />

                </button>

              </form>

            </motion.div>

          </div>

        </section>


        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section className="relative border-y border-white/60 bg-white/70 px-6 py-20 backdrop-blur-sm">

          <div className="mx-auto max-w-7xl">

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
              }}
              className="text-center"
            >

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B08D3C]">
                What We Shoot
              </p>

              <h2 className="mt-4 text-3xl font-bold text-zinc-900 sm:text-5xl">
                Let&apos;s Create Something Beautiful
              </h2>

            </motion.div>


            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">


              {/* Photography */}
              <motion.div
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="rounded-2xl border border-white/80 bg-white/90 p-7 shadow-md backdrop-blur-sm transition hover:border-[#C8A96A]/60 hover:shadow-xl"
              >

                <Camera
                  className="text-[#B08D3C]"
                  size={30}
                />

                <h3 className="mt-5 text-lg font-semibold text-zinc-900">
                  Photography
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Candid, portrait, fashion and professional photography.
                </p>

              </motion.div>


              {/* Videography */}
              <motion.div
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="rounded-2xl border border-white/80 bg-white/90 p-7 shadow-md backdrop-blur-sm transition hover:border-[#C8A96A]/60 hover:shadow-xl"
              >

                <Video
                  className="text-[#B08D3C]"
                  size={30}
                />

                <h3 className="mt-5 text-lg font-semibold text-zinc-900">
                  Videography
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Cinematic films, event videos and creative storytelling.
                </p>

              </motion.div>


              {/* Weddings */}
              <motion.div
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="rounded-2xl border border-white/80 bg-white/90 p-7 shadow-md backdrop-blur-sm transition hover:border-[#C8A96A]/60 hover:shadow-xl"
              >

                <CalendarDays
                  className="text-[#B08D3C]"
                  size={30}
                />

                <h3 className="mt-5 text-lg font-semibold text-zinc-900">
                  Weddings
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Complete wedding photography and cinematic films.
                </p>

              </motion.div>


              {/* Events */}
              <motion.div
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="rounded-2xl border border-white/80 bg-white/90 p-7 shadow-md backdrop-blur-sm transition hover:border-[#C8A96A]/60 hover:shadow-xl"
              >

                <Video
                  className="text-[#B08D3C]"
                  size={30}
                />

                <h3 className="mt-5 text-lg font-semibold text-zinc-900">
                  Events
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Professional coverage for parties, brands and events.
                </p>

              </motion.div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="relative px-6 pb-5 lg:py-28">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
      relative
      mx-auto
      max-w-5xl
      overflow-hidden
      rounded-3xl
      bg-gradient-to-br
      from-[#FFFDF9]
      via-[#FFF8F0]
      to-[#F3FAFF]
      px-6
      py-14
      text-center
      text-[#172033]
      shadow-2xl
      sm:px-12
      border
      border-[#E8DCCF]/70
    "
          >

            {/* ================================================= */}
            {/* SOFT SKIN / PEACH GLOW */}
            {/* ================================================= */}

            <div
              className="
        absolute
        -right-24
        -top-24
        h-64
        w-64
        rounded-full
        bg-[#F6D7C3]/35
        blur-3xl
      "
            />

            <div
              className="
        absolute
        -bottom-24
        -left-24
        h-64
        w-64
        rounded-full
        bg-[#DFF3FF]/50
        blur-3xl
      "
            />

            {/* ================================================= */}
            {/* GOLDEN GLOW */}
            {/* ================================================= */}

            <div
              className="
        absolute
        left-1/2
        top-1/2
        h-72
        w-72
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#C8A96A]/8
        blur-3xl
      "
            />

            <div className="relative z-10">

              {/* ================================================= */}
              {/* STATUS */}
              {/* ================================================= */}

              <div className="mb-5 flex items-center justify-center gap-2">

                <span
                  className="
            h-2.5
            w-2.5
            animate-pulse
            rounded-full
            bg-green-500
            shadow-lg
            shadow-green-500/30
          "
                />

                <span
                  className="
            text-sm
            font-medium
            uppercase
            tracking-[0.2em]
            text-green-700
          "
                >
                  Available For Bookings
                </span>

              </div>

              {/* ================================================= */}
              {/* HEADING */}
              {/* ================================================= */}

              <h2
                className="
          text-3xl
          font-bold
          tracking-tight
          text-[#172033]
          sm:text-5xl
        "
              >
                Have A Story To Tell?
              </h2>

              {/* ================================================= */}
              {/* DESCRIPTION */}
              {/* ================================================= */}

              <p
                className="
          mx-auto
          mt-5
          max-w-2xl
          text-sm
          leading-7
          text-[#64748B]
          sm:text-base
        "
              >
                From intimate moments to grand celebrations, we&apos;re here
                to turn your memories into timeless visuals.
              </p>

              {/* ================================================= */}
              {/* CALL BUTTON */}
              {/* ================================================= */}

              <div className="mt-8 flex justify-center">

                <a
                  href="tel:+918604885021"
                  aria-label="Call us at +91 86048 85021"
                  className="
            group
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-[#22C55E]
            px-7
            py-4
            font-semibold
            text-white
            shadow-xl
            shadow-green-500/25
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#16A34A]
            hover:shadow-2xl
            hover:shadow-green-500/30
            active:scale-95
          "
                >

                  {/* ================================================= */}
                  {/* PHONE ICON */}
                  {/* ================================================= */}

                  <motion.span
                    animate={{
                      x: [0, 12, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#16A34A]
              shadow-md
            "
                  >

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="
                  M22 16.92v3a2 2 0 0 1-2.18 2
                  19.79 19.79 0 0 1-8.63-3.07
                  19.5 19.5 0 0 1-6-6
                  A19.79 19.79 0 0 1 2.12 4.18
                  2 2 0 0 1 4.11 2h3
                  a2 2 0 0 1 2 1.72
                  12.84 12.84 0 0 0 .7 2.81
                  2 2 0 0 1-.45 2.11L8.09 9.91
                  a16 16 0 0 0 6 6l1.27-1.27
                  a2 2 0 0 1 2.11-.45
                  12.84 12.84 0 0 0 2.81.7
                  A2 2 0 0 1 22 16.92z
                "
                      />
                    </svg>

                  </motion.span>

                  {/* ================================================= */}
                  {/* BUTTON TEXT */}
                  {/* ================================================= */}

                  <span className="flex flex-col items-start leading-tight">

                    <span className="text-xs font-medium text-white/80">
                      Call Us Now
                    </span>

                    <span className="text-base font-bold tracking-wide text-white">
                      +91 86048 85021
                    </span>

                  </span>

                </a>

              </div>

              {/* ================================================= */}
              {/* HINT */}
              {/* ================================================= */}

              <p
                className="
          mt-5
          text-xs
          text-[#94A3B8]
        "
              >
                Tap to call us directly
              </p>

            </div>

          </motion.div>

        </section>


      </main>


      <Footer />
    </>
  );
}