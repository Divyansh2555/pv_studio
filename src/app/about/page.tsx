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

      </main>

      <Footer />
    </>
  );
}