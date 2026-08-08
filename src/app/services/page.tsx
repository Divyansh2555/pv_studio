"use client";

import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import {
  Camera,
  Video,
  Drone,
  Pencil,
  CalendarDays,
  MapPin,
  UserRound,
  ShoppingBag,
  Home,
  Utensils,
  Car,
  Shirt,
  Leaf,
  Moon,
  Trophy,
  Heart,
} from "lucide-react";

// =========================================
// SERVICE IMAGES
// =========================================

import p1 from "../../assets/services/photographys.jpg";
import p2 from "../../assets/services/vg.png";
import p3 from "../../assets/services/dc.png";
import p4 from "../../assets/services/ei.png";
import p5 from "../../assets/services/evi.png";
import p6 from "../../assets/services/ti.png";
import p7 from "../../assets/services/pi.png";
import p8 from "../../assets/services/pii.png";

// =========================================
// OTHER IMAGES
// =========================================

import p9 from "../../assets/p9.jpg";
import p10 from "../../assets/services/fi.png";

import p11 from "../../assets/p11.jpg";
import p12 from "../../assets/services/fim.png";

import p13 from "../../assets/services/nim.png";
import p14 from "../../assets/services/nighti.png";

import p15 from "../../assets/services/spi.png";
import p16 from "../../assets/services/shadi.png";


// =========================================
// SERVICES DATA
// =========================================

const services = [
  {
    image: p1,
    title: "Photography",
    text: "Creative moments",
    icon: Camera,
  },
  {
    image: p2,
    title: "Videography",
    text: "Cinematic stories",
    icon: Video,
  },
  {
    image: p3,
    title: "Drone Shots",
    text: "View from above",
    icon: Drone,
  },
  {
    image: p4,
    title: "Editing",
    text: "Professional editing",
    icon: Pencil,
  },
  {
    image: p5,
    title: "Events",
    text: "Special moments",
    icon: CalendarDays,
  },
  {
    image: p6,
    title: "Travel",
    text: "Explore & capture",
    icon: MapPin,
  },
  {
    image: p7,
    title: "Portrait",
    text: "Timeless portraits",
    icon: UserRound,
  },
  {
    image: p8,
    title: "Product",
    text: "Showcase beautifully",
    icon: ShoppingBag,
  },
  {
    image: p9,
    title: "Interior",
    text: "Beautiful spaces",
    icon: Home,
  },
  {
    image: p10,
    title: "Food",
    text: "Delicious moments",
    icon: Utensils,
  },
  {
    image: p11,
    title: "Automotive",
    text: "Power & style",
    icon: Car,
  },
  {
    image: p12,
    title: "Fashion",
    text: "Style & elegance",
    icon: Shirt,
  },
  {
    image: p13,
    title: "Nature",
    text: "Beauty of nature",
    icon: Leaf,
  },
  {
    image: p14,
    title: "Night Photography",
    text: "Light after dark",
    icon: Moon,
  },
  {
    image: p15,
    title: "Sports",
    text: "Action & energy",
    icon: Trophy,
  },
  {
    image: p16,
    title: "Wedding",
    text: "Forever memories",
    icon: Heart,
  },
];

// =========================================
// FLOATING HEARTS
// =========================================

const hearts = [
  { left: "5%", top: "12%", size: 18, delay: 0 },
  { left: "12%", top: "70%", size: 14, delay: 2 },
  { left: "23%", top: "25%", size: 12, delay: 4 },
  { left: "35%", top: "80%", size: 17, delay: 1 },
  { left: "48%", top: "15%", size: 13, delay: 3 },
  { left: "58%", top: "65%", size: 18, delay: 5 },
  { left: "68%", top: "25%", size: 14, delay: 2 },
  { left: "78%", top: "75%", size: 12, delay: 4 },
  { left: "88%", top: "18%", size: 17, delay: 1 },
  { left: "94%", top: "60%", size: 14, delay: 3 },
];

// =========================================
// SERVICES PAGE
// =========================================

export default function Services() {
  const router = useRouter();

  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden bg-[#050505]">

        {/* =====================================
            BACKGROUND
        ====================================== */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.13),transparent_35%),radial-gradient(circle_at_10%_50%,rgba(236,72,153,0.08),transparent_30%),radial-gradient(circle_at_90%_70%,rgba(249,115,22,0.08),transparent_30%)]
          "
        />

        {/* =====================================
            ORANGE GLOW
        ====================================== */}

        <motion.div
          className="
            absolute
            -top-40
            left-1/2
            -translate-x-1/2
            w-[500px]
            h-[500px]
            rounded-full
            bg-orange-500/10
            blur-[120px]
          "
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.35, 0.6, 0.35],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =====================================
            PINK GLOW
        ====================================== */}

        <motion.div
          className="
            absolute
            top-[35%]
            -left-40
            w-[400px]
            h-[400px]
            rounded-full
            bg-pink-500/10
            blur-[120px]
          "
          animate={{
            x: [0, 100, 0],
            y: [0, 80, 0],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =====================================
            RIGHT GLOW
        ====================================== */}

        <motion.div
          className="
            absolute
            top-[60%]
            -right-40
            w-[450px]
            h-[450px]
            rounded-full
            bg-orange-500/10
            blur-[130px]
          "
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =====================================
            FLOATING HEARTS
        ====================================== */}

        {hearts.map((heart, index) => (
          <motion.div
            key={index}
            className="
              absolute
              pointer-events-none
              z-0
            "
            style={{
              left: heart.left,
              top: heart.top,
            }}
            animate={{
              y: [0, -35, 0],
              x: [0, 12, 0],
              rotate: [-8, 8, -8],
              opacity: [0.15, 0.5, 0.15],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 5 + index * 0.4,
              delay: heart.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart
              size={heart.size}
              strokeWidth={1}
              className="text-orange-400/30"
              fill="currentColor"
            />
          </motion.div>
        ))}

        {/* =====================================
            PARTICLES
        ====================================== */}

        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 35 }).map((_, index) => (
            <motion.span
              key={index}
              className="
                absolute
                w-1
                h-1
                rounded-full
                bg-orange-300/30
              "
              style={{
                left: `${(index * 37) % 100}%`,
                top: `${(index * 61) % 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.7, 0.1],
                scale: [0.5, 1.4, 0.5],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3 + (index % 4),
                delay: index * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* =====================================
            MAIN CONTENT
        ====================================== */}

        <div className="relative z-10">

          {/* =================================
              INTRO
          ================================= */}

          <section
            className="
              w-full
              px-4
              sm:px-6
              lg:px-10
              pt-24
              pb-12
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
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
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-4xl mx-auto text-center"
            >

              {/* Small Title */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  mb-4
                "
              >
                <span className="h-px w-8 bg-orange-400/50" />

                <p
                  className="
                    text-orange-400
                    text-xs
                    sm:text-sm
                    font-semibold
                    tracking-[5px]
                    uppercase
                  "
                >
                  Our Services
                </p>

                <span className="h-px w-8 bg-orange-400/50" />
              </motion.div>

              {/* Heart */}

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex justify-center mb-3"
              >
                <Heart
                  size={20}
                  className="text-orange-400"
                  fill="currentColor"
                />
              </motion.div>

              {/* Heading */}

              <motion.h1
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
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                }}
                className="
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  font-bold
                  text-white
                "
              >
                What We Do
              </motion.h1>

              {/* Description */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 25,
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
                  delay: 0.25,
                }}
                className="
                  mt-5
                  text-sm
                  sm:text-base
                  lg:text-lg
                  text-gray-400
                  max-w-2xl
                  mx-auto
                  leading-relaxed
                "
              >
                Professional photography, videography and creative
                services to capture your most memorable moments.
              </motion.p>

            </motion.div>
          </section>

          {/* =================================
              SERVICES CARDS
          ================================= */}

          <section
            className="
              w-full
              px-4
              sm:px-6
              lg:px-10
              pb-20
            "
          >
            <div className="max-w-7xl mx-auto">

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-3
                  xl:grid-cols-4
                  gap-4
                "
              >

                {services.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <motion.div
                      key={service.title}
                      onClick={() => router.push("/book")}

                      initial={{
                        opacity: 0,
                        y: 45,
                        scale: 0.95,
                      }}

                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}

                      viewport={{
                        once: true,
                        amount: 0.08,
                      }}

                      whileHover={{
                        y: -8,
                        scale: 1.02,
                      }}

                      whileTap={{
                        scale: 0.97,
                      }}

                      transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}

                      className="
                        group
                        relative
                        w-full
                        h-[135px]
                        rounded-xl
                        overflow-hidden
                        border
                        border-white/10
                        bg-[#111]
                        shadow-lg
                        hover:border-orange-400/50
                        cursor-pointer
                      "
                    >

                      {/* =================================
                          IMAGE
                      ================================== */}

                      <motion.div
                        className="absolute inset-0"
                        whileHover={{
                          scale: 1.08,
                        }}
                        transition={{
                          duration: 0.7,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={500}
                          height={300}
                          loading={index < 4 ? "eager" : "lazy"}
                          sizes="
                            (max-width: 640px) 100vw,
                            (max-width: 1024px) 50vw,
                            (max-width: 1280px) 33vw,
                            25vw
                          "
                          className="
                            w-full
                            h-full
                            object-cover
                            brightness-90
                            group-hover:brightness-100
                            transition-all
                            duration-500
                          "
                        />
                      </motion.div>

                      {/* =================================
                          DARK OVERLAY
                      ================================== */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-r
                          from-black/55
                          via-black/25
                          to-black/5
                        "
                      />

                      {/* =================================
                          ORANGE HOVER
                      ================================== */}

                      <motion.div
                        className="
                          absolute
                          inset-0
                          bg-orange-500/0
                        "
                        whileHover={{
                          backgroundColor: "rgba(249,115,22,0.10)",
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      />

                      {/* =================================
                          CARD CONTENT
                      ================================== */}

                      <div
                        className="
                          absolute
                          inset-0
                          flex
                          flex-col
                          items-start
                          px-4
                          pt-2
                          gap-1
                        "
                      >

                        {/* ICON */}

                        <motion.div
                          whileHover={{
                            scale: 1.12,
                            rotate: 5,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 15,
                          }}
                          className="
                            flex
                            items-center
                            justify-center
                            shrink-0
                            w-11
                            h-11
                            rounded-lg
                            border
                            border-orange-400/30
                            bg-black/50
                            backdrop-blur-sm
                            mr-4
                          "
                        >
                          <Icon
                            size={22}
                            strokeWidth={1.8}
                            className="
                              text-orange-400
                              group-hover:text-white
                              transition-colors
                              duration-300
                            "
                          />
                        </motion.div>

                        {/* TEXT */}

                        <div className="min-w-0 flex-1">

                          <h2
                            className="
                              text-white
                              text-base
                              sm:text-lg
                              font-bold
                              truncate
                            "
                          >
                            {service.title}
                          </h2>

                          <p
                            className="
                              text-gray-300
                              text-xs
                              sm:text-sm
                              mt-1
                              truncate
                            "
                          >
                            {service.text}
                          </p>

                        </div>
                      </div>

                      {/* =================================
                          BOTTOM ORANGE LINE
                      ================================== */}

                      <motion.div
                        className="
                          absolute
                          bottom-0
                          left-0
                          h-[2px]
                          bg-orange-400
                        "
                        initial={{
                          width: "0%",
                        }}
                        whileHover={{
                          width: "100%",
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                      />

                    </motion.div>
                  );
                })}

              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
