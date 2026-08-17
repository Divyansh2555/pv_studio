"use client";

import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";



import pwa from "@/src/assets/home/pwa.webp";
import pwb from "@/src/assets/home/pwb.jpg";

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
// SAME SIZE: h-[145px]
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
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.5,
        delay: (index % 4) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -5,
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
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:border-orange-300
        hover:shadow-lg
      "
    >
      {/* =================================================
          IMAGE
      ================================================= */}

      <motion.div
        className="absolute inset-0"
        whileHover={{
          scale: 1.06,
        }}
        transition={{
          duration: 0.6,
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
            25vw
          "
          loading={index < 4 ? "eager" : "lazy"}
          className="
            object-cover
            brightness-[0.72]
            transition-all
            duration-500
            group-hover:brightness-[0.82]
          "
        />
      </motion.div>

      {/* =================================================
          DARK GRADIENT
      ================================================= */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/75
          via-black/35
          to-black/10
          transition-all
          duration-300
          group-hover:from-black/65
        "
      />

      {/* =================================================
          ORANGE HOVER
      ================================================= */}

      <div
        className="
          absolute
          inset-0
          bg-orange-500/0
          transition-all
          duration-300
          group-hover:bg-orange-500/10
        "
      />

      {/* =================================================
          TOP ROW
      ================================================= */}

      <div
        className="
          absolute
          left-4
          right-4
          top-4
          flex
          items-start
          justify-between
        "
      >
        {/* ICON */}

        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 4,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-xl
            border
            border-white/30
            bg-white/15
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            group-hover:border-orange-300
            group-hover:bg-orange-500
          "
        >
          <Icon
            size={18}
            strokeWidth={1.8}
          />
        </motion.div>

        {/* NUMBER */}

        <div className="flex items-center gap-2">
          <span
            className="
              h-px
              w-4
              bg-white/40
            "
          />

          <span
            className="
              text-[10px]
              font-semibold
              tracking-[2px]
              text-white/80
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* =================================================
          BOTTOM CONTENT
      ================================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          p-4
        "
      >
        {/* LABEL */}

        <p
          className="
            mb-0.5
            text-[8px]
            font-semibold
            uppercase
            tracking-[2px]
            text-orange-300
          "
        >
          Professional Service
        </p>

        {/* TITLE */}

        <h3
          className="
            text-lg
            font-bold
            leading-tight
            text-white
            transition-transform
            duration-300
            group-hover:-translate-y-0.5
          "
        >
          {service.title}
        </h3>

        {/* DESCRIPTION + ARROW */}

        <div className="mt-0.5 flex items-center justify-between">
          <p
            className="
              text-[11px]
              text-white/70
              transition-colors
              duration-300
              group-hover:text-white
            "
          >
            {service.text}
          </p>

          <ArrowRight
            size={14}
            className="
              text-orange-300
              opacity-0
              -translate-x-2
              transition-all
              duration-300
              group-hover:translate-x-0
              group-hover:opacity-100
            "
          />
        </div>
      </div>

      {/* =================================================
          BOTTOM ORANGE LINE
      ================================================= */}

      <motion.div
        initial={{
          width: "0%",
        }}
        whileHover={{
          width: "100%",
        }}
        transition={{
          duration: 0.35,
        }}
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          bg-orange-500
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

      <main className="relative min-h-screen overflow-hidden bg-white text-gray-900">

        {/* =================================================
            BACKGROUND
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.10),transparent_32%),radial-gradient(circle_at_10%_45%,rgba(236,72,153,0.04),transparent_28%),radial-gradient(circle_at_90%_70%,rgba(249,115,22,0.05),transparent_28%)]
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
            bg-orange-500/5
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

        {/* LEFT GLOW */}

        <motion.div
          className="
            pointer-events-none
            absolute
            left-[-200px]
            top-[35%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-pink-500/5
            blur-[130px]
          "
          animate={{
            x: [0, 100, 0],
            y: [0, 70, 0],
            opacity: [0.15, 0.35, 0.15],
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
            bg-orange-500/5
            blur-[130px]
          "
          animate={{
            x: [0, -70, 0],
            y: [0, -50, 0],
            opacity: [0.15, 0.35, 0.15],
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
              opacity: [0.08, 0.25, 0.08],
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
            PAGE CONTENT
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

                <p className="text-xs font-semibold uppercase tracking-[5px] text-orange-500 sm:text-sm">
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
                  className="text-orange-500"
                  fill="currentColor"
                />
              </motion.div>

              {/* TITLE */}

              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-8xl">
                What We
                <span className="block text-orange-500">
                  Create
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base lg:text-lg">
                Professional photography, cinematic videography and
                creative visual services designed to turn your moments
                into unforgettable stories.
              </p>

              {/* BUTTONS */}

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
                    text-white
                    shadow-lg
                    shadow-orange-500/20
                    transition
                    hover:scale-105
                    hover:bg-orange-600
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
                    border-gray-200
                    bg-white
                    px-7
                    py-3
                    text-sm
                    font-semibold
                    text-gray-800
                    shadow-sm
                    transition
                    hover:border-orange-300
                    hover:bg-orange-50
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

              <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[4px] text-orange-500">
                    What We Offer
                  </p>

                  <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                    Creative Services
                  </h2>
                </div>

                <p className="max-w-md text-sm leading-6 text-gray-500 md:text-right">
                  From intimate portraits to large events, we create
                  visuals that feel authentic, cinematic and timeless.
                </p>

              </div>

              {/* SAME GRID */}

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

          <section className="border-y border-gray-200 bg-gray-50 px-5 py-24 sm:px-6 lg:px-10">
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
                <p className="text-xs font-semibold uppercase tracking-[4px] text-orange-500">
                  Photography
                </p>

                <h2 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                  We Capture
                  <span className="block text-orange-500">
                    The Moment
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
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
                    text-orange-500
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
                  border-gray-200
                  bg-white
                  shadow-xl
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

                  <p className="mt-2 text-2xl font-bold text-white">
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

                <p className="text-xs font-semibold uppercase tracking-[4px] text-orange-500">
                  Packages
                </p>

                <h2 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
                  Choose Your
                  <span className="text-orange-500">
                    {" "}Experience
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-600">
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
                      ${pkg.featured
                        ? "border-orange-500 bg-orange-500 text-white shadow-xl shadow-orange-500/20"
                        : "border-gray-200 bg-white text-gray-900 shadow-sm hover:shadow-xl"
                      }
                    `}
                  >

                    {pkg.featured && (
                      <div className="absolute right-5 top-5 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-orange-500">
                        Popular
                      </div>
                    )}

                    <p
                      className={`
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[2px]
                        ${pkg.featured
                          ? "text-white/70"
                          : "text-orange-500"
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
                        ${pkg.featured
                          ? "bg-white/30"
                          : "bg-gray-200"
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
                              ${pkg.featured
                                ? "bg-white text-orange-500"
                                : "bg-orange-50 text-orange-500"
                              }
                            `}
                          >
                            <Check
                              size={13}
                              strokeWidth={3}
                            />
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
                        ${pkg.featured
                          ? "bg-white text-orange-500 hover:bg-gray-100"
                          : "bg-orange-500 text-white hover:bg-orange-600"
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

          <section className="border-y border-gray-200 bg-gray-50 px-5 py-24 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-7xl">

              <div className="text-center">

                <p className="text-xs font-semibold uppercase tracking-[4px] text-orange-500">
                  Our Process
                </p>

                <h2 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
                  Simple Process.
                  <span className="text-orange-500">
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
                      border-gray-200
                      bg-white
                      p-6
                      shadow-sm
                      transition
                      hover:-translate-y-1
                      hover:border-orange-200
                      hover:shadow-lg
                    "
                  >

                    <span className="text-4xl font-bold text-orange-500">
                      {item.number}
                    </span>

                    <h3 className="mt-6 text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
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

                <p className="text-xs font-semibold uppercase tracking-[4px] text-orange-500">
                  Why Choose Us
                </p>

                <h2 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
                  Your Moments.
                  <span className="block text-orange-500">
                    Our Vision.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
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
                      border-gray-200
                      bg-white
                      p-5
                      shadow-sm
                      transition
                      hover:border-orange-200
                      hover:shadow-md
                    "
                  >

                    <div className="flex items-center gap-3">

                      <span
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-orange-50
                          text-orange-500
                        "
                      >
                        <Check
                          size={15}
                          strokeWidth={3}
                        />
                      </span>

                      <span className="text-sm font-medium text-gray-800">
                        {item}
                      </span>

                    </div>

                  </motion.div>
                ))}

              </div>

            </div>
          </section>

        </div>




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