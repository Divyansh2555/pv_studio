"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@DPPRAYAG",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/918604885021",
  },
];

const links = [
  { name: "Home", href: "/homes" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },

  { name: "Contact", href: "/contact" },

];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white">

      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      {/* Main dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080808] to-[#020202]" />

      {/* Golden Glow - Top */}
      <motion.div
        className="
          absolute
          -top-52
          left-1/2
          w-[400px]
          h-[400px]
          sm:w-[600px]
          sm:h-[600px]
          rounded-full
          bg-[#C8A96A]/10
          blur-[100px]
          sm:blur-[140px]
          pointer-events-none
        "
        animate={{
          x: ["-50%", "-35%", "-50%"],
          y: [0, 80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Golden Glow - Left */}
      <motion.div
        className="
          absolute
          top-[35%]
          -left-40
          w-[300px]
          h-[300px]
          sm:w-[450px]
          sm:h-[450px]
          rounded-full
          bg-[#C8A96A]/5
          blur-[100px]
          pointer-events-none
        "
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Golden Glow - Right */}
      <motion.div
        className="
          absolute
          top-[50%]
          -right-40
          w-[300px]
          h-[300px]
          sm:w-[450px]
          sm:h-[450px]
          rounded-full
          bg-[#C8A96A]/5
          blur-[110px]
          pointer-events-none
        "
        animate={{
          x: [0, -80, 0],
          y: [0, 70, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ================================================= */}
      {/* CINEMATIC GRID */}
      {/* ================================================= */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.06]
          pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,169,106,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,169,106,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

      {/* ================================================= */}
      {/* MOVING LIGHT */}
      {/* ================================================= */}

      <motion.div
        className="
          absolute
          top-0
          -left-[30%]
          w-[60%]
          h-full
          bg-gradient-to-r
          from-transparent
          via-[#C8A96A]/[0.035]
          to-transparent
          skew-x-[-15deg]
          pointer-events-none
        "
        animate={{
          x: ["0%", "230%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* ================================================= */}
      {/* FLOATING PARTICLES */}
      {/* ================================================= */}

      {[...Array(12)].map((_, index) => (
        <motion.span
          key={index}
          className="
            absolute
            w-1
            h-1
            rounded-full
            bg-[#C8A96A]/40
            pointer-events-none
          "
          style={{
            left: `${5 + index * 8}%`,
            top: `${15 + ((index * 17) % 70)}%`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: 3 + (index % 4),
            repeat: Infinity,
            delay: index * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          py-16
          sm:py-20
          md:py-24
        "
      >

        {/* ================================================= */}
        {/* TOP SECTION */}
        {/* ================================================= */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="text-center"
        >

          {/* Small Heading */}

          <motion.p
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              show: {
                opacity: 1,
                y: 0,
              },
            }}
            className="
              text-[#C8A96A]
              uppercase
              tracking-[3px]
              sm:tracking-[6px]
              text-[9px]
              sm:text-xs
              md:text-sm
              font-medium
            "
          >
            Photography • Videography • Films
          </motion.p>

          {/* Main Heading */}

          <motion.h2
            variants={{
              hidden: {
                opacity: 0,
                y: 60,
                scale: 0.95,
              },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
              },
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-4
              sm:mt-6
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              leading-[1.05]
              drop-shadow-2xl
            "
          >
            We Capture
            <br />

            <motion.span
              className="
                inline-block
                text-[#C8A96A]
              "
              animate={{
                letterSpacing: ["0px", "3px", "0px"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Your Stories.
            </motion.span>
          </motion.h2>

          {/* Description */}

          <motion.p
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
              },
              show: {
                opacity: 1,
                y: 0,
              },
            }}
            className="
              max-w-2xl
              mx-auto
              mt-5
              sm:mt-7
              text-gray-400
              text-sm
              sm:text-base
              md:text-lg
              leading-6
              sm:leading-7
              px-3
            "
          >
            Real moments. Real emotions. Real stories.
            <br className="hidden sm:block" />
            We turn your memories into timeless photographs and films.
          </motion.p>

          {/* Book Button */}

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                scale: 0.8,
              },
              show: {
                opacity: 1,
                scale: 1,
              },
            }}
            className="mt-7 sm:mt-10"
          >
            <motion.a
              href="/book"
              whileHover={{
                scale: 1.06,
                boxShadow:
                  "0px 0px 40px rgba(200,169,106,0.35)",
              }}
              whileTap={{
                scale: 0.94,
              }}
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                bg-[#C8A96A]
                hover:bg-[#d8bb7e]
                text-black
                px-7
                sm:px-9
                py-3
                sm:py-4
                rounded-full
                text-sm
                sm:text-base
                font-semibold
                transition-all
              "
            >
              Book Us Now

              <motion.span
                animate={{
                  x: [0, 6, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

        </motion.div>

        {/* ================================================= */}
        {/* DIVIDER */}
        {/* ================================================= */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="
            origin-center
            border-t
            border-white/10
            my-14
            sm:my-16
            md:my-20
          "
        />

        {/* ================================================= */}
        {/* COLUMNS */}
        {/* ================================================= */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            gap-10
            sm:gap-12
            md:gap-14
          "
        >

          {/* ================= STUDIO ================= */}

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -50,
              },
              show: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <motion.h3
              whileHover={{
                x: 6,
              }}
              className="
                text-xl
                sm:text-2xl
                font-bold
                inline-block
                cursor-pointer
              "
            >
              INNOVATIVE{" "}
              <span className="text-[#C8A96A]">
                PHOTOGRAPHY
              </span>
            </motion.h3>

            <p
              className="
                text-gray-400
                mt-4
                sm:mt-5
                leading-6
                sm:leading-7
                text-sm
                sm:text-base
                max-w-sm
              "
            >
              Professional photography and cinematic
              videography for weddings, brands, events
              and unforgettable moments.
            </p>

          </motion.div>

          {/* ================= LINKS ================= */}

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 50,
              },
              show: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <h3 className="text-lg font-semibold mb-5">
              Explore
            </h3>

            <div className="flex flex-col gap-3">

              {links.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                >

                  <Link
                    href={link.href}
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      text-gray-400
                      hover:text-[#C8A96A]
                      text-sm
                      sm:text-base
                      transition
                    "
                  >

                    <motion.span
                      className="
                        w-0
                        h-px
                        bg-[#C8A96A]
                        group-hover:w-5
                        transition-all
                        duration-300
                      "
                    />

                    {link.name}

                  </Link>

                </motion.div>
              ))}

            </div>

          </motion.div>

          {/* ================= SOCIAL ================= */}

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 50,
              },
              show: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <h3 className="text-lg font-semibold mb-4">
              Follow Our Work
            </h3>

            <p
              className="
                text-gray-400
                mb-6
                text-sm
                sm:text-base
                leading-6
              "
            >
              Behind every photograph is a story.
              Follow ours.
            </p>

            <div className="flex flex-wrap gap-2.5">

              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                    delay: 0.1 * index,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.92,
                  }}
                  className="
                    border
                    border-white/10
                    bg-white/[0.02]
                    px-4
                    py-2.5
                    rounded-full
                    text-xs
                    sm:text-sm
                    text-gray-400
                    hover:border-[#C8A96A]
                    hover:text-[#C8A96A]
                    hover:bg-[#C8A96A]/5
                    transition-all
                  "
                >
                  {social.name}
                </motion.a>
              ))}

            </div>

          </motion.div>

        </motion.div>

        {/* ================================================= */}
        {/* BOTTOM */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
          }}
          className="
            border-t
            border-white/10
            mt-14
            sm:mt-16
            md:mt-20
            pt-6
            sm:pt-8
          "
        >

          <div
            className="
              flex
              flex-col
              md:flex-row
              justify-between
              items-center
              gap-3
              text-center
              md:text-left
              text-[11px]
              sm:text-sm
              text-gray-500
            "
          >

            <p>
              © 2026 Innovative Studio. All Rights Reserved.
            </p>

            <motion.p
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              Made with{" "}
              <span className="text-red-500">
                ♥
              </span>{" "}
              in India
            </motion.p>

            <p>
              Photography • Videography • Films
            </p>

          </div>

        </motion.div>

      </div>

    </footer>
  );
}
