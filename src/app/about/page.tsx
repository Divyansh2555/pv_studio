"use client";

import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

import pgman from "@/src/assets/about/pgman.png";
import gpg from "@/src/assets/about/gpg.png";
import cpg from "@/src/assets/about/cpg.jpeg";
import vpg from "@/src/assets/about/vgp.webp";
import edt from "@/src/assets/about/edt.jpeg";
import ccc from "@/src/assets/about/ccc.jpeg";


import pwa from "@/src/assets/home/pwa.webp";
import pwb from "@/src/assets/home/pwb.jpg";

const team = [
  {
    image: gpg,
    name: "Neha Tiwery",
    role: "Photographer",
  },
  {
    image: ccc,
    name: "Rahul Sharma",
    role: "Cinematographer",
  },
  {
    image: cpg,
    name: "Ananya Singh",
    role: "Photographer",
  },
  {
    image: vpg,
    name: "Arjun Verma",
    role: "Videographer",
  },
  {
    image: edt,
    name: "Priya Kapoor",
    role: "Editor",
  },
  {
    image: cpg,
    name: "Vikash Kumar",
    role: "Creative Director",
  },
];

/* =====================================================
   CONTAINER ANIMATION
===================================================== */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* =====================================================
   ITEM ANIMATION
===================================================== */

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function About() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-white">

        {/* =====================================================
            ABOUT SECTION
        ===================================================== */}

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="px-4 py-8 sm:px-6 sm:py-10 lg:px-12"
        >
          <div className="mx-auto max-w-7xl">

            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">

              {/* =====================================================
                  LEFT CONTENT
              ===================================================== */}

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                className="max-w-xl"
              >

                {/* Small Heading */}

                <motion.p
                  variants={itemVariants}
                  className="mb-2 text-xs font-semibold uppercase tracking-[3px] text-[#d4a72c]"
                >
                  About Us
                </motion.p>

                {/* Main Heading */}

                <motion.h2
                  variants={itemVariants}
                  className="font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
                >
                  We Don't Just{" "}
                  <span className="text-[#0083c4]">
                    Capture Moments,
                  </span>{" "}
                  We Create Memories.
                </motion.h2>

                {/* Description */}

                <motion.p
                  variants={itemVariants}
                  className="mt-4 text-sm leading-6 text-gray-500"
                >
                  We are a passionate team of photographers and filmmakers
                  dedicated to turning your special moments into timeless
                  memories.
                </motion.p>

                {/* Button */}

                <motion.button
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="mt-5 rounded-full bg-[#0083c4] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-shadow hover:shadow-xl"
                >
                  Discover Our Story
                </motion.button>

              </motion.div>

              {/* =====================================================
                  RIGHT IMAGE
              ===================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 80,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                className="relative mx-auto w-full max-w-sm"
              >

                {/* Decorative Border */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: 0.2,
                  }}
                  className="absolute -right-3 -top-3 h-full w-full rounded-3xl border border-[#d4a72c]/50"
                />

                {/* Image Container */}

                <div className="group relative h-72 overflow-hidden rounded-3xl shadow-xl sm:h-80">

                  {/* Image */}

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={pgman}
                      alt="Our photography studio"
                      fill
                      priority
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Image Text */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.5,
                    }}
                    className="absolute bottom-5 left-5 right-5"
                  >
                    <p className="text-xs tracking-[2px] text-white/80">
                      STORIES • EMOTIONS • MEMORIES
                    </p>

                    <h3 className="mt-1 font-serif text-xl font-bold text-white">
                      Every Frame Tells A Story
                    </h3>
                  </motion.div>

                </div>
              </motion.div>

            </div>
          </div>
        </motion.section>

        {/* =====================================================
            TEAM SECTION
        ===================================================== */}

        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-10">

          <div className="w-full">

            {/* =====================================================
                TEAM HEADING
            ===================================================== */}

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
              className="mx-auto mb-10 max-w-2xl text-center"
            >

              <p className="mb-3 text-sm font-semibold tracking-[3px] text-[#d4a72c]">
                MEET MY TEAM
              </p>

              <h2 className="mb-4 font-serif text-3xl font-bold text-[#0083c4] sm:text-4xl">
                The People Behind The Frames
              </h2>

              <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
                A passionate team of creatives, working together to capture
                your most precious moments.
              </p>

            </motion.div>

            {/* =====================================================
                TEAM CARDS
            ===================================================== */}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6"
            >

              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="group relative h-64 overflow-hidden rounded-2xl bg-gray-100 shadow-sm sm:h-72"
                >

                  {/* =====================================================
                      TEAM IMAGE
                  ===================================================== */}

                  <motion.div
                    className="relative h-full w-full"
                    whileHover={{
                      scale: 1.06,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Gradient */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* =====================================================
                      TEAM CONTENT
                  ===================================================== */}

                  <div className="absolute bottom-0 left-0 right-0 p-4">

                    <motion.h3
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                      }}
                      className="text-lg font-semibold text-white"
                    >
                      {member.name}
                    </motion.h3>

                    <p className="text-sm text-white/80">
                      {member.role}
                    </p>

                  </div>

                </motion.div>
              ))}

            </motion.div>

          </div>
        </section>


        {/* ================= Let's================= */}

        <section className=" bg-[#f7f5ef4d] w-full px-2 py-5 sm:px-4 lg:px-6">
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