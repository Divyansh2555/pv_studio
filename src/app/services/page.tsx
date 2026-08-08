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
  Check,
  ArrowRight,
} from "lucide-react";

// =====================================================
// SERVICE IMAGES
// =====================================================

import p1 from "../../assets/services/photographys.jpg";
import p2 from "../../assets/services/vg.png";
import p3 from "../../assets/services/dc.png";
import p4 from "../../assets/services/ei.png";
import p5 from "../../assets/services/evi.png";
import p6 from "../../assets/services/ti.png";
import p7 from "../../assets/services/pi.png";
import p8 from "../../assets/services/pii.png";

import p9 from "../../assets/p9.jpg";
import p10 from "../../assets/services/fi.png";

import p11 from "../../assets/p11.jpg";
import p12 from "../../assets/services/fim.png";

import p13 from "../../assets/services/nim.png";
import p14 from "../../assets/services/nighti.png";

import p15 from "../../assets/services/spi.png";
import p16 from "../../assets/services/shadi.png";

// =====================================================
// SERVICES
// =====================================================

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
    title: "Photo Editing",
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

// =====================================================
// PACKAGES
// =====================================================

const packages = [
  {
    title: "Photography",
    subtitle: "Capture every moment",
    features: [
      "Professional Photography",
      "Multiple Locations",
      "Professional Editing",
      "High Resolution Images",
      "Online Gallery",
    ],
  },
  {
    title: "Videography",
    subtitle: "Tell your story",
    features: [
      "Cinematic Videography",
      "Professional Audio",
      "Highlight Film",
      "Color Grading",
      "Full HD / 4K Delivery",
    ],
  },
  {
    title: "Complete",
    subtitle: "Photo + Video",
    features: [
      "Photography",
      "Cinematic Videography",
      "Professional Editing",
      "Highlight Film",
      "Complete Event Coverage",
    ],
    featured: true,
  },
];

// =====================================================
// PROCESS
// =====================================================

const process = [
  {
    number: "01",
    title: "Consultation",
    text: "We understand your ideas, requirements, location and expectations.",
  },
  {
    number: "02",
    title: "Planning",
    text: "We plan the shoot, timeline, locations, equipment and creative direction.",
  },
  {
    number: "03",
    title: "Production",
    text: "Our team captures your moments using professional equipment.",
  },
  {
    number: "04",
    title: "Delivery",
    text: "Your photos and videos are professionally edited and delivered.",
  },
];

// =====================================================
// WHY US
// =====================================================

const whyUs = [
  "Professional Equipment",
  "Creative Storytelling",
  "Experienced Team",
  "High Quality Editing",
  "Personal Attention",
  "Fast Delivery",
];

// =====================================================
// FLOATING HEARTS
// =====================================================

const hearts = [
  { left: "5%", top: "15%", size: 16, delay: 0 },
  { left: "15%", top: "70%", size: 12, delay: 2 },
  { left: "30%", top: "30%", size: 14, delay: 4 },
  { left: "45%", top: "80%", size: 11, delay: 1 },
  { left: "60%", top: "18%", size: 15, delay: 3 },
  { left: "72%", top: "65%", size: 12, delay: 5 },
  { left: "85%", top: "28%", size: 16, delay: 2 },
  { left: "94%", top: "72%", size: 12, delay: 4 },
];

// =====================================================
// SERVICE CARD
// =====================================================

function ServiceCard({
  service,
  index,
  onClick,
}: {
  service: (typeof services)[number];
  index: number;
  onClick: () => void;
}) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.55,
        delay: (index % 4) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -7,
      }}
      onClick={onClick}
      className="
        group
        relative
        h-[145px]
        cursor-pointer
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-zinc-950
        shadow-xl
        transition-colors
        duration-300
        hover:border-orange-400/50
      "
    >
      {/* IMAGE */}

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
          fill
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 50vw,
            33vw
          "
          loading={index < 4 ? "eager" : "lazy"}
          className="
            object-cover
            brightness-75
            transition-all
            duration-500
            group-hover:brightness-100
          "
        />
      </motion.div>

      {/* OVERLAY */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/80
          via-black/45
          to-black/10
        "
      />

      {/* ORANGE GLOW */}

      <div
        className="
          absolute
          inset-0
          bg-orange-500/0
          transition-all
          duration-500
          group-hover:bg-orange-500/10
        "
      />

      {/* CONTENT */}

      <div className="relative z-10 flex h-full flex-col justify-between p-4">
        <div className="flex items-start justify-between">
          <motion.div
            whileHover={{
              rotate: 5,
              scale: 1.1,
            }}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-orange-400/30
              bg-black/50
              text-orange-400
              backdrop-blur-md
            "
          >
            <Icon size={20} strokeWidth={1.8} />
          </motion.div>

          <span
            className="
              text-[10px]
              font-semibold
              tracking-widest
              text-white/50
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">
            {service.title}
          </h3>

          <p className="mt-0.5 text-xs text-gray-300">
            {service.text}
          </p>
        </div>
      </div>

      {/* BOTTOM LINE */}

      <motion.div
        initial={{
          width: "0%",
        }}
        whileHover={{
          width: "100%",
        }}
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          bg-orange-400
        "
      />
    </motion.article>
  );
}

// =====================================================
// PAGE
// =====================================================

export default function Services() {
  const router = useRouter();

  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

        {/* =================================================
            BACKGROUND
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.14),transparent_32%),radial-gradient(circle_at_10%_45%,rgba(236,72,153,0.07),transparent_28%),radial-gradient(circle_at_90%_70%,rgba(249,115,22,0.08),transparent_28%)]
          "
        />

        {/* TOP GLOW */}

        <motion.div
          className="
            pointer-events-none
            absolute
            -top-40
            left-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-orange-500/10
            blur-[130px]
          "
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* SIDE GLOW */}

        <motion.div
          className="
            pointer-events-none
            absolute
            left-[-200px]
            top-[35%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-pink-500/10
            blur-[130px]
          "
          animate={{
            x: [0, 100, 0],
            y: [0, 70, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* RIGHT GLOW */}

        <motion.div
          className="
            pointer-events-none
            absolute
            right-[-200px]
            top-[60%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-orange-500/10
            blur-[130px]
          "
          animate={{
            x: [0, -70, 0],
            y: [0, -50, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =================================================
            FLOATING HEARTS
        ================================================= */}

        {hearts.map((heart, index) => (
          <motion.div
            key={index}
            className="pointer-events-none absolute z-0"
            style={{
              left: heart.left,
              top: heart.top,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 10, 0],
              rotate: [-7, 7, -7],
              opacity: [0.1, 0.35, 0.1],
            }}
            transition={{
              duration: 5 + index * 0.3,
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

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="relative z-10">

          {/* =================================================
              HERO
          ================================================= */}

          <section className="px-5 pb-14 pt-28 sm:px-6 sm:pt-32 lg:px-10 lg:pt-40">
            <motion.div
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto max-w-5xl text-center"
            >
              {/* LABEL */}

              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-orange-400/50" />

                <p className="text-xs font-semibold uppercase tracking-[5px] text-orange-400 sm:text-sm">
                  Our Services
                </p>

                <span className="h-px w-8 bg-orange-400/50" />
              </div>

              {/* HEART */}

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-4 flex justify-center"
              >
                <Heart
                  size={21}
                  className="text-orange-400"
                  fill="currentColor"
                />
              </motion.div>

              {/* HEADING */}

              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-8xl">
                What We
                <span className="block text-orange-400">
                  Create
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base lg:text-lg">
                Professional photography, cinematic videography and
                creative visual services designed to turn your moments
                into unforgettable stories.
              </p>

              {/* CTA */}

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => router.push("/book")}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-orange-500
                    px-7
                    py-3
                    text-sm
                    font-semibold
                    text-black
                    transition
                    hover:bg-orange-400
                    hover:scale-105
                  "
                >
                  Book Your Session

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <button
                  type="button"
                  onClick={() => router.push("/portfolio")}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-7
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    backdrop-blur
                    transition
                    hover:border-orange-400/40
                    hover:bg-white/10
                  "
                >
                  View Portfolio
                </button>
              </div>
            </motion.div>
          </section>

          {/* =================================================
              SERVICES GRID
          ================================================= */}

          <section className="px-5 pb-24 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-7xl">

              <div className="mb-10 flex items-end justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[4px] text-orange-400">
                    What We Offer
                  </p>

                  <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                    Creative Services
                  </h2>
                </div>

                <p className="hidden max-w-md text-right text-sm leading-6 text-gray-500 md:block">
                  From intimate portraits to large events, we create
                  visuals that feel authentic, cinematic and timeless.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {services.map((service, index) => (
                  <ServiceCard
                    key={service.title}
                    service={service}
                    index={index}
                    onClick={() => router.push("/book")}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* =================================================
              FEATURE SECTION
          ================================================= */}

          <section className="border-y border-white/10 bg-zinc-950/70 px-5 py-24 sm:px-6 lg:px-10">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

              <motion.div
                initial={{
                  opacity: 0,
                  x: -40,
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
                  duration: 0.7,
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-[4px] text-orange-400">
                  Photography
                </p>

                <h2 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
                  We Capture
                  <span className="block text-orange-400">
                    The Moment
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                  Every photograph should tell a story. We focus on
                  genuine emotions, natural expressions, beautiful
                  details and moments that you will want to remember.
                </p>

                <button
                  type="button"
                  onClick={() => router.push("/book")}
                  className="
                    group
                    mt-7
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-orange-400
                  "
                >
                  Explore Photography

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="
                  relative
                  h-[350px]
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  sm:h-[450px]
                "
              >
                <Image
                  src={p1}
                  alt="Photography"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <p className="text-xs uppercase tracking-[3px] text-orange-400">
                    Visual Storytelling
                  </p>

                  <p className="mt-2 text-2xl font-bold">
                    Moments That Matter
                  </p>
                </div>
              </motion.div>

            </div>
          </section>

          {/* =================================================
              PACKAGES
          ================================================= */}

          <section className="px-5 py-24 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-7xl">

              <div className="mx-auto max-w-2xl text-center">
                <p className="text-xs font-semibold uppercase tracking-[4px] text-orange-400">
                  Packages
                </p>

                <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                  Choose Your
                  <span className="text-orange-400">
                    {" "}Experience
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-400">
                  Flexible packages designed for photography,
                  videography and complete event coverage.
                </p>
              </div>

              <div className="mt-14 grid gap-5 md:grid-cols-3">

                {packages.map((pkg, index) => (
                  <motion.div
                    key={pkg.title}
                    initial={{
                      opacity: 0,
                      y: 35,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      y: -8,
                    }}
                    className={`
                      relative
                      rounded-3xl
                      border
                      p-7
                      transition
                      ${
                        pkg.featured
                          ? "border-orange-400 bg-orange-500 text-black"
                          : "border-white/10 bg-zinc-950"
                      }
                    `}
                  >
                    {pkg.featured && (
                      <div className="absolute right-5 top-5 rounded-full bg-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-orange-400">
                        Popular
                      </div>
                    )}

                    <p
                      className={`
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[2px]
                        ${
                          pkg.featured
                            ? "text-black/60"
                            : "text-orange-400"
                        }
                      `}
                    >
                      {pkg.subtitle}
                    </p>

                    <h3 className="mt-3 text-3xl font-bold">
                      {pkg.title}
                    </h3>

                    <div
                      className={`
                        my-7
                        h-px
                        ${
                          pkg.featured
                            ? "bg-black/20"
                            : "bg-white/10"
                        }
                      `}
                    />

                    <div className="space-y-4">
                      {pkg.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3"
                        >
                          <span
                            className={`
                              flex
                              h-6
                              w-6
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              ${
                                pkg.featured
                                  ? "bg-black text-orange-400"
                                  : "bg-orange-500/10 text-orange-400"
                              }
                            `}
                          >
                            <Check size={13} strokeWidth={3} />
                          </span>

                          <span className="text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => router.push("/book")}
                      className={`
                        mt-8
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        px-6
                        py-3
                        text-sm
                        font-semibold
                        transition
                        ${
                          pkg.featured
                            ? "bg-black text-white hover:bg-zinc-800"
                            : "bg-orange-500 text-black hover:bg-orange-400"
                        }
                      `}
                    >
                      Get Started
                      <ArrowRight size={15} />
                    </button>
                  </motion.div>
                ))}

              </div>
            </div>
          </section>

          {/* =================================================
              PROCESS
          ================================================= */}

          <section className="border-y border-white/10 bg-zinc-950/70 px-5 py-24 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-7xl">

              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[4px] text-orange-400">
                  Our Process
                </p>

                <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                  Simple Process.
                  <span className="text-orange-400">
                    {" "}Beautiful Results.
                  </span>
                </h2>
              </div>

              <div className="mt-14 grid gap-4 md:grid-cols-4">

                {process.map((item, index) => (
                  <motion.div
                    key={item.number}
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
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-black
                      p-6
                    "
                  >
                    <span className="text-4xl font-bold text-orange-400">
                      {item.number}
                    </span>

                    <h3 className="mt-6 text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-400">
                      {item.text}
                    </p>
                  </motion.div>
                ))}

              </div>
            </div>
          </section>

          {/* =================================================
              WHY US
          ================================================= */}

          <section className="px-5 py-24 sm:px-6 lg:px-10">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

              <motion.div
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-[4px] text-orange-400">
                  Why Choose Us
                </p>

                <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                  Your Moments.
                  <span className="block text-orange-400">
                    Our Vision.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                  We combine professional equipment, creative direction
                  and genuine storytelling to create visuals that feel
                  personal, natural and timeless.
                </p>
              </motion.div>

              <div className="grid gap-3 sm:grid-cols-2">
                {whyUs.map((item, index) => (
                  <motion.div
                    key={item}
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
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-zinc-950
                      p-5
                    "
                  >
                    <div className="flex items-center gap-3">
                      <span className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-orange-500/10
                        text-orange-400
                      ">
                        <Check size={15} strokeWidth={3} />
                      </span>

                      <span className="text-sm font-medium">
                        {item}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </section>

        

        </div>
      </main>

      <Footer />
    </>
  );
}
