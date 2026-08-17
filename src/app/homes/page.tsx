
"use client";

import { useRouter } from "next/navigation";
import Header from "../../components/header";
import Image from "next/image";

import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import p4 from "../../assets/p4.jpg";
import p5 from "../../assets/p5.jpg";

import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import Link from "next/link";

import hbg from "../../assets/home/hbg.png";
import h1 from "../../assets/home/h1.jpg";
import h2 from "../../assets/home/h2.jpg";
import h3 from "../../assets/home/h3.jpg";
import h5 from "../../assets/home/h5.jpg";
import h6 from "../../assets/home/h6.jpg";
import ba from "../../assets/home/ba.jpg";
import ii from "../../assets/home/ii.png";
import pt from "@/src/assets/icons/pt.png";
import yt from "@/src/assets/icons/yt.png";
import fb from "@/src/assets/icons/fb.png";
import ld from "@/src/assets/icons/ld.png";



import pwa from "@/src/assets/home/pwa.webp";
import pwb from "@/src/assets/home/pwb.jpg";








import {
  CalendarHeart,
  Camera,
  Sparkles,
  BookOpen,
  Video,
  Plane,
  Pencil,
  CalendarDays,
  MapPin,
  Drone,
  Edit,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

export default function Homes() {
  const router = useRouter();

  // Website ke dusre sections ke liye
  const images = [
    hbg,
    h1,
    h2,
    h3,
    h5,
    h6,
    p1,
    p2,
    p3,
    p4,
    p5,
    ba,
  ];

  // Sirf Hero Slider ke liye
  const heroImages = [
    hbg,
    h1,
    h2,
    h3,
    h5,
    h6,
  ];

  const [current, setCurrent] = useState(0);

  // Hero Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <>
      <main>

        {/* home*/}
        <section className="relative min-h-screen overflow-hidden bg-black">

          {/* Transparent Header */}
          <div className="absolute left-0 top-0 z-50 w-full">
            <Header />
          </div>

          {/* Background Slider */}
          <AnimatePresence mode="sync">
            <motion.div
              key={current}
              className="absolute inset-0"
              initial={{
                opacity: 0,
                scale: 1.1,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
            >
              <Image
                src={heroImages[current]}
                alt={`Studio image ${current + 1}`}
                fill
                priority={current === 0}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Dark Overlay */}
          <motion.div
            className="absolute inset-0 z-[1] bg-black/55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Hero Content */}
          <div className="relative z-10 flex min-h-screen items-center justify-start px-8 text-white sm:px-20">

            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            >

              {/* WE CAPTURE */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: -30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="mb-1 text-start text-sm font-bold uppercase tracking-[4px] text-[#e8f186d5] sm:text-lg"
              >
                WE CAPTURE
              </motion.p>

              {/* Heading */}
              <motion.h1
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                }}
                className="text-start font-serif text-4xl sm:text-5xl md:text-6xl"
              >
                Your Story,
              </motion.h1>

              <motion.h1
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                }}
                className="text-start font-serif text-4xl sm:text-5xl md:text-6xl"
              >
                Not Just Your Photos.
              </motion.h1>

              {/* Description */}
              <motion.p
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
                  delay: 0.5,
                }}
                className="mx-auto mt-5 max-w-2xl text-start text-sm leading-6 text-gray-200 sm:text-lg sm:leading-8"
              >
                Timeless photographs, cinematic Films
              </motion.p>

              <motion.p
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
                  delay: 0.5,
                }}
                className="mx-auto max-w-2xl text-start text-sm leading-6 text-gray-200 sm:text-lg sm:leading-8"
              >
                and real emotions.
              </motion.p>

              {/* Buttons */}
              <div className="flex flex-row items-center gap-2 pt-4">

                {/* Portfolio Button */}
                <motion.button
                  onClick={() => router.push("/portfolio")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
            flex cursor-pointer items-center justify-center
            whitespace-nowrap
            border border-[#d1ef0d]
            bg-[#D4AF37]
            px-3 py-2
            text-[10px]
            active:bg-white
            active:text-black
            sm:px-5 sm:py-3 sm:text-sm
          "
                >
                  VIEW PORTFOLIO
                </motion.button>

                {/* Book Button */}
                <motion.button
                  onClick={() => router.push("/book")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
            flex cursor-pointer items-center justify-center
            whitespace-nowrap
            border border-white
            px-3 py-2
            text-[10px]
            sm:px-5 sm:py-3 sm:text-sm
          "
                >
                  BOOK A CONSULTATION
                </motion.button>

              </div>

            </motion.div>
          </div>

          {/* Hero Dots */}
          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">

            {/* IMPORTANT: heroImages.map */}
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className="p-1"
                aria-label={`Slide ${index + 1}`}
              >
                <motion.div
                  animate={{
                    width: current === index ? 30 : 8,
                    opacity: current === index ? 1 : 0.5,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="h-2 rounded-full bg-white"
                />
              </button>
            ))}

          </div>

        </section>





        {/*OUR SERVICES */}
        <section className="w-full px-2 py-5">
          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-3 sm:overflow-x-auto sm:pb-2">

            {/* WHAT WE DO */}
            <div className="col-span-2 flex flex-col items-start justify-start px-4 pt-3 sm:w-40 sm:shrink-0 sm:px-0 sm:pt-5">
              <div className="text-[11px] font-semibold tracking-wide text-[#C8A96A]">
                WHAT WE DO
              </div>

              <div className="text-lg font-bold text-gray-800">
                OUR SERVICES
              </div>

              <div className="mt-1 text-[10px] font-medium text-gray-500">
                EXPLORE ALL SERVICES
              </div>
            </div>

            {/* WEDDING PHOTOGRAPHY */}
            <div className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm sm:h-47 sm:w-40.5 sm:shrink-0">
              <Image
                src={h2}
                alt="Wedding Photography"
                className="h-28 w-full object-cover sm:h-30 sm:w-40"
              />

              <div className="px-2 pt-2 text-[9px] font-bold text-gray-800">
                <p>WEDDING</p>
                <p className="text-[#C8A96A]">PHOTOGRAPHY</p>

                <p className="pt-[2px] text-[8px] font-medium text-gray-500">
                  Candid, Traditional &
                </p>

                <p className="text-[8px] font-medium text-gray-500">
                  Timeless Moments
                </p>
              </div>
            </div>

            {/* PRE-WEDDING */}
            <div className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm sm:h-47 sm:w-40.5 sm:shrink-0">
              <Image
                src={h1}
                alt="Pre-Wedding Shoots"
                className="h-28 w-full object-cover sm:h-30 sm:w-40"
              />

              <div className="px-2 pt-2 text-[9px] font-bold text-gray-800">
                <p>PRE-WEDDING</p>
                <p className="text-[#C8A96A]">SHOOTS</p>

                <p className="pt-[2px] text-[8px] font-medium text-gray-500">
                  Candid, Traditional &
                </p>

                <p className="text-[8px] font-medium text-gray-500">
                  Timeless Moments
                </p>
              </div>
            </div>

            {/* WEDDING FILMS */}
            <div className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm sm:h-47 sm:w-40.5 sm:shrink-0">
              <Image
                src={h6}
                alt="Wedding Films"
                className="h-28 w-full object-cover sm:h-30 sm:w-40"
              />

              <div className="px-2 pt-2 text-[9px] font-bold text-gray-800">
                <p>WEDDING</p>
                <p className="text-[#C8A96A]">FILMS</p>

                <p className="pt-[2px] text-[8px] font-medium text-gray-500">
                  Cinematic films that bring
                </p>

                <p className="text-[8px] font-medium text-gray-500">
                  your story to life
                </p>
              </div>
            </div>

            {/* WEDDING ALBUMS */}
            <div className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm sm:h-47 sm:w-40.5 sm:shrink-0">
              <Image
                src={ba}
                alt="Wedding Albums"
                className="h-28 w-full object-cover sm:h-30 sm:w-40"
              />

              <div className="px-2 pt-2 text-[9px] font-bold text-gray-800">
                <p>WEDDING</p>
                <p className="text-[#C8A96A]">ALBUMS</p>

                <p className="pt-[2px] text-[8px] font-medium text-gray-500">
                  Beautifully crafted &
                </p>

                <p className="text-[8px] font-medium text-gray-500">
                  timeless memories
                </p>
              </div>
            </div>

            {/* DESTINATION WEDDINGS */}
            <div className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm sm:h-47 sm:w-40.5 sm:shrink-0">
              <Image
                src={h5}
                alt="Destination Weddings"
                className="h-28 w-full object-cover sm:h-30 sm:w-40"
              />

              <div className="px-2 pt-2 text-[9px] font-bold text-gray-800">
                <p>DESTINATION</p>
                <p className="text-[#C8A96A]">WEDDINGS</p>

                <p className="pt-[2px] text-[8px] font-medium text-gray-500">
                  Cinematic films that bring
                </p>

                <p className="text-[8px] font-medium text-gray-500">
                  your story to life
                </p>
              </div>
            </div>

            {/* DESTINATION WEDDINGS */}
            <div className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm sm:h-47 sm:w-40.5 sm:shrink-0">
              <Image
                src={p4}
                alt="Destination Weddings"
                className="h-28 w-full object-cover sm:h-30 sm:w-40"
              />

              <div className="px-2 pt-2 text-[9px] font-bold text-gray-800">
                <p>DESTINATION</p>
                <p className="text-[#C8A96A]">WEDDINGS</p>

                <p className="pt-[2px] text-[8px] font-medium text-gray-500">
                  Cinematic films that bring
                </p>

                <p className="text-[8px] font-medium text-gray-500">
                  your story to life
                </p>
              </div>
            </div>

          </div>
        </section>







        {/*show slider  */}


        <section
          onClick={() => router.push("/services")}
          className="w-full bg-[#f6f5f29c] py-2 cursor-pointer"
        >
          <div className="w-full overflow-hidden">

            <div
              className="flex w-max gap-4"
              style={{
                animation: "serviceScroll 25s linear infinite",
              }}
            >

              {/* ================= FIRST SET ================= */}

              {/* Photography */}
              <div className="group flex items-center w-[220px] min-w-[220px] h-[80px] rounded-xl border border-gray-200 bg-white px-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-[#d4a72c]/10">
                  <Camera className="w-7 h-7 text-[#d4a72c]" />
                </div>

                <div className="ml-3">
                  <p className="text-gray-900 text-sm font-semibold">
                    Photography
                  </p>
                  <p className="mt-1 text-gray-500 text-xs">
                    Capturing real moments
                  </p>
                </div>
              </div>

              {/* Videography */}
              <div className="group flex items-center w-[220px] min-w-[220px] h-[80px] rounded-xl border border-gray-200 bg-white px-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-[#0083c4]/10">
                  <Video className="w-7 h-7 text-[#0083c4]" />
                </div>

                <div className="ml-3">
                  <p className="text-gray-900 text-sm font-semibold">
                    Videography
                  </p>
                  <p className="mt-1 text-gray-500 text-xs">
                    Cinematic films that
                  </p>
                  <p className="text-gray-500 text-xs">
                    tell your story
                  </p>
                </div>
              </div>

              {/* Drone */}
              <div className="group flex items-center w-[220px] min-w-[220px] h-[80px] rounded-xl border border-gray-200 bg-white px-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-[#d4a72c]/10">
                  <Drone className="w-7 h-7 text-[#d4a72c]" />
                </div>

                <div className="ml-3">
                  <p className="text-gray-900 text-sm font-semibold">
                    Drone Shots
                  </p>
                  <p className="mt-1 text-gray-500 text-xs">
                    View from above
                  </p>
                </div>
              </div>

              {/* Editing */}
              <div className="group flex items-center w-[220px] min-w-[220px] h-[80px] rounded-xl border border-gray-200 bg-white px-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-[#0083c4]/10">
                  <Edit className="w-7 h-7 text-[#0083c4]" />
                </div>

                <div className="ml-3">
                  <p className="text-gray-900 text-sm font-semibold">
                    Editing
                  </p>
                  <p className="mt-1 text-gray-500 text-xs">
                    Professional editing
                  </p>
                </div>
              </div>

              {/* Events */}
              <div className="group flex items-center w-[220px] min-w-[220px] h-[80px] rounded-xl border border-gray-200 bg-white px-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-[#d4a72c]/10">
                  <CalendarDays className="w-7 h-7 text-[#d4a72c]" />
                </div>

                <div className="ml-3">
                  <p className="text-gray-900 text-sm font-semibold">
                    Events
                  </p>
                  <p className="mt-1 text-gray-500 text-xs">
                    Special moments
                  </p>
                </div>
              </div>

              {/* Travel */}
              <div className="group flex items-center w-[220px] min-w-[220px] h-[80px] rounded-xl border border-gray-200 bg-white px-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-[#0083c4]/10">
                  <Plane className="w-7 h-7 text-[#0083c4]" />
                </div>

                <div className="ml-3">
                  <p className="text-gray-900 text-sm font-semibold">
                    Travel
                  </p>
                  <p className="mt-1 text-gray-500 text-xs">
                    Explore & capture
                  </p>
                </div>
              </div>


              {/* ================= DUPLICATE SET ================= */}

              {/* Photography */}
              <div className="flex items-center w-[220px] min-w-[220px] h-[80px] rounded-xl border border-gray-200 bg-white px-3 shadow-sm">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-[#d4a72c]/10">
                  <Camera className="w-7 h-7 text-[#d4a72c]" />
                </div>

                <div className="ml-3">
                  <p className="text-gray-900 text-sm font-semibold">
                    Photography
                  </p>
                  <p className="mt-1 text-gray-500 text-xs">
                    Capturing real moments
                  </p>
                </div>
              </div>

              {/* Videography */}
              <div className="flex items-center w-[220px] min-w-[220px] h-[80px] rounded-xl border border-gray-200 bg-white px-3 shadow-sm">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-[#0083c4]/10">
                  <Video className="w-7 h-7 text-[#0083c4]" />
                </div>

                <div className="ml-3">
                  <p className="text-gray-900 text-sm font-semibold">
                    Videography
                  </p>
                  <p className="mt-1 text-gray-500 text-xs">
                    Cinematic films that
                  </p>
                  <p className="text-gray-500 text-xs">
                    tell your story
                  </p>
                </div>
              </div>

              {/* Drone */}
              <div className="flex items-center w-[220px] min-w-[220px] h-[80px] rounded-xl border border-gray-200 bg-white px-3 shadow-sm">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-[#d4a72c]/10">
                  <Drone className="w-7 h-7 text-[#d4a72c]" />
                </div>

                <div className="ml-3">
                  <p className="text-gray-900 text-sm font-semibold">
                    Drone Shots
                  </p>
                  <p className="mt-1 text-gray-500 text-xs">
                    View from above
                  </p>
                </div>
              </div>

              {/* Editing */}
              <div className="flex items-center w-[220px] min-w-[220px] h-[80px] rounded-xl border border-gray-200 bg-white px-3 shadow-sm">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-[#0083c4]/10">
                  <Edit className="w-7 h-7 text-[#0083c4]" />
                </div>

                <div className="ml-3">
                  <p className="text-gray-900 text-sm font-semibold">
                    Editing
                  </p>
                  <p className="mt-1 text-gray-500 text-xs">
                    Professional editing
                  </p>
                </div>
              </div>

              {/* Events */}
              <div className="flex items-center w-[220px] min-w-[220px] h-[80px] rounded-xl border border-gray-200 bg-white px-3 shadow-sm">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-[#d4a72c]/10">
                  <CalendarDays className="w-7 h-7 text-[#d4a72c]" />
                </div>

                <div className="ml-3">
                  <p className="text-gray-900 text-sm font-semibold">
                    Events
                  </p>
                  <p className="mt-1 text-gray-500 text-xs">
                    Special moments
                  </p>
                </div>
              </div>

              {/* Travel */}
              <div className="flex items-center w-[220px] min-w-[220px] h-[80px] rounded-xl border border-gray-200 bg-white px-3 shadow-sm">
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-[#0083c4]/10">
                  <Plane className="w-7 h-7 text-[#0083c4]" />
                </div>

                <div className="ml-3">
                  <p className="text-gray-900 text-sm font-semibold">
                    Travel
                  </p>
                  <p className="mt-1 text-gray-500 text-xs">
                    Explore & capture
                  </p>
                </div>
              </div>

            </div>
          </div>

          <style jsx>{`
    @keyframes serviceScroll {
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(-50%);
      }
    }

    div[style*="serviceScroll"]:hover {
      animation-play-state: paused !important;
    }
  `}</style>
        </section>



        {/* ================= IMAGE SLIDER ================= */}

        <section className="w-full bg-[#f7f5ef] px-3 py-5 sm:px-5 sm:py-6 lg:px-8">

          <div className="relative mx-auto max-w-7xl">

            {/* Slider */}
            <div className="relative h-[280px] overflow-hidden rounded-2xl shadow-lg sm:h-[360px] lg:h-[430px]">

              {/* Images */}
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${current === index
                    ? "opacity-100"
                    : "opacity-0"
                    }`}
                >

                  <Image
                    src={image}
                    alt={`Photography slide ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                </div>
              ))}


              {/* ================= LEFT ARROW ================= */}

              <button
                onClick={() =>
                  setCurrent(
                    (prev) =>
                      (prev - 1 + images.length) % images.length
                  )
                }
                aria-label="Previous image"
                className="
          absolute left-3 top-1/2 z-10
          flex h-9 w-9
          -translate-y-1/2
          items-center justify-center
          rounded-full
          bg-black/30
          text-2xl text-white
          backdrop-blur-sm
          transition-all duration-300
          hover:bg-black/60
          hover:scale-105
          sm:left-5
          sm:h-11 sm:w-11
          sm:text-3xl
        "
              >
                ‹
              </button>


              {/* ================= RIGHT ARROW ================= */}

              <button
                onClick={() =>
                  setCurrent(
                    (prev) =>
                      (prev + 1) % images.length
                  )
                }
                aria-label="Next image"
                className="
          absolute right-3 top-1/2 z-10
          flex h-9 w-9
          -translate-y-1/2
          items-center justify-center
          rounded-full
          bg-black/30
          text-2xl text-white
          backdrop-blur-sm
          transition-all duration-300
          hover:bg-black/60
          hover:scale-105
          sm:right-5
          sm:h-11 sm:w-11
          sm:text-3xl
        "
              >
                ›
              </button>


              {/* ================= DOTS ================= */}

              <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">

                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`
              h-1.5
              rounded-full
              transition-all
              duration-300
              ${current === index
                        ? "w-6 bg-white"
                        : "w-1.5 bg-white/50 hover:bg-white/80"
                      }
            `}
                  />
                ))}

              </div>

            </div>

          </div>

        </section>








        {/* */}


        <section className="w-full bg-[#f7f5ef] px-4 py-6 sm:px-6 sm:py-7 lg:px-12">

          <div className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4">

            {/* ================= 10+ YEARS ================= */}
            <div className="flex flex-col items-center justify-center px-3 py-3 text-center sm:border-r sm:border-[#d4a72c]/25">

              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#C8A96A]/10">
                <CalendarHeart className="h-4.5 w-4.5 text-[#C8A96A]" />
              </div>

              <p className="font-serif text-2xl font-bold leading-none text-[#0083c4] sm:text-3xl">
                10+
              </p>

              <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-[1.5px] text-[#333130] sm:text-[10px]">
                Years Experience
              </p>

              <p className="mt-0.5 text-[8px] leading-4 text-gray-500 sm:text-[9px]">
                Capturing stories with passion
              </p>

            </div>


            {/* ================= 500+ WEDDINGS ================= */}
            <div className="flex flex-col items-center justify-center px-3 py-3 text-center sm:border-r sm:border-[#d4a72c]/25">

              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#C8A96A]/10">
                <Camera className="h-4.5 w-4.5 text-[#C8A96A]" />
              </div>

              <p className="font-serif text-2xl font-bold leading-none text-[#0083c4] sm:text-3xl">
                500+
              </p>

              <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-[1.5px] text-[#333130] sm:text-[10px]">
                Weddings Captured
              </p>

              <p className="mt-0.5 text-[8px] leading-4 text-gray-500 sm:text-[9px]">
                Beautiful moments preserved
              </p>

            </div>


            {/* ================= PREMIUM EDITING ================= */}
            <div className="flex flex-col items-center justify-center px-3 py-3 text-center sm:border-r sm:border-[#d4a72c]/25">

              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#C8A96A]/10">
                <Sparkles className="h-4.5 w-4.5 text-[#C8A96A]" />
              </div>

              <p className="font-serif text-2xl font-bold leading-none text-[#0083c4] sm:text-3xl">
                HD
              </p>

              <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-[1.5px] text-[#333130] sm:text-[10px]">
                Premium Editing
              </p>

              <p className="mt-0.5 text-[8px] leading-4 text-gray-500 sm:text-[9px]">
                High-end cinematic quality
              </p>

            </div>


            {/* ================= PREMIUM ALBUMS ================= */}
            <div className="flex flex-col items-center justify-center px-3 py-3 text-center">

              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#C8A96A]/10">
                <BookOpen className="h-4.5 w-4.5 text-[#C8A96A]" />
              </div>

              <p className="font-serif text-2xl font-bold leading-none text-[#0083c4] sm:text-3xl">
                4K
              </p>

              <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-[1.5px] text-[#333130] sm:text-[10px]">
                Premium Albums
              </p>

              <p className="mt-0.5 text-[8px] leading-4 text-gray-500 sm:text-[9px]">
                Crafted with premium quality
              </p>

            </div>

          </div>


          {/* ================= DESTINATION ================= */}
          <div className="mx-auto mt-4 max-w-6xl border-t border-[#d4a72c]/20 pt-3 text-center">

            <div className="flex items-center justify-center gap-1.5">

              <MapPin className="h-3.5 w-3.5 shrink-0 text-[#C8A96A]" />

              <p className="text-[8px] font-semibold uppercase tracking-[1.5px] text-[#C8A96A] sm:text-[10px]">
                Covering India & Destination Weddings
              </p>

            </div>

            <p className="mt-0.5 text-[8px] text-gray-500 sm:text-[9px]">
              From intimate celebrations to unforgettable destination stories.
            </p>

          </div>

        </section>



























        {/* ================= Let's================= */}

        <section className=" bg-[#f7f5ef] w-full px-2 py-5 sm:px-4 lg:px-6">
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






















        {/* ================= Follow ================= */}


        <section className="w-full overflow-hidden bg-[#f7f5ef] py-3">

          <motion.div
            className="flex w-max items-center gap-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          >

            {/* =====================================================
        FIRST SET
    ===================================================== */}

            {/* INTRO */}
            <div className="flex w-40 shrink-0 flex-col justify-center px-2">
              <p className="text-[10px] font-bold tracking-[2px] text-[#C8A96A] sm:text-[11px]">
                FOLLOW OUR JOURNEY
              </p>

              <p className="mt-1 font-serif text-base font-bold text-[#333130] sm:text-lg">
                Social Media
              </p>

              <p className="mt-1 text-[9px] text-gray-500 sm:text-[10px]">
                @innovative.photography
              </p>
            </div>


            {/* IMAGE 1 */}
            <div className="group h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={h1}
                alt="Wedding photography"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>


            {/* IMAGE 2 */}
            <div className="group h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={p1}
                alt="Photography"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>


            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-25 w-24 shrink-0 flex-col items-center justify-center px-2 transition duration-300 hover:scale-105"
            >
              <Image
                src={ii}
                alt="Instagram"
                className="h-7 w-7 object-contain"
              />

              <p className="mt-1 text-center text-[9px] font-bold tracking-[1px] text-[#333130]">
                FOLLOW
              </p>

              <p className="text-center text-[9px] font-bold tracking-[1px] text-[#C8A96A]">
                INSTAGRAM
              </p>
            </a>


            {/* IMAGE 3 */}
            <div className="group h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={h5}
                alt="Wedding photography"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>


            {/* IMAGE 4 */}
            <div className="group h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={p5}
                alt="Photography"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>


            {/* YOUTUBE */}
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-25 w-24 shrink-0 flex-col items-center justify-center px-2 transition duration-300 hover:scale-105"
            >
              <Image
                src={yt}
                alt="YouTube"
                className="h-7 w-7 object-contain"
              />

              <p className="mt-1 text-center text-[9px] font-bold tracking-[1px] text-[#333130]">
                FOLLOW
              </p>

              <p className="text-center text-[9px] font-bold tracking-[1px] text-[#C8A96A]">
                YOUTUBE
              </p>
            </a>


            {/* IMAGE 5 */}
            <div className="group h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={h6}
                alt="Wedding photography"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>


            {/* IMAGE 6 */}
            <div className="group h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={p1}
                alt="Photography"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>


            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-25 w-24 shrink-0 flex-col items-center justify-center px-2 transition duration-300 hover:scale-105"
            >
              <Image
                src={fb}
                alt="Facebook"
                className="h-7 w-7 object-contain"
              />

              <p className="mt-1 text-center text-[9px] font-bold tracking-[1px] text-[#333130]">
                FOLLOW
              </p>

              <p className="text-center text-[9px] font-bold tracking-[1px] text-[#C8A96A]">
                FACEBOOK
              </p>
            </a>


            {/* IMAGE 7 */}
            <div className="group h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={h5}
                alt="Wedding photography"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>


            {/* IMAGE 8 */}
            <div className="group h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={p5}
                alt="Photography"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>


            {/* PINTEREST */}
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-25 w-24 shrink-0 flex-col items-center justify-center px-2 transition duration-300 hover:scale-105"
            >
              <Image
                src={pt}
                alt="Pinterest"
                className="h-7 w-7 object-contain"
              />

              <p className="mt-1 text-center text-[9px] font-bold tracking-[1px] text-[#333130]">
                FOLLOW
              </p>

              <p className="text-center text-[9px] font-bold tracking-[1px] text-[#C8A96A]">
                PINTEREST
              </p>
            </a>


            {/* IMAGE 9 */}
            <div className="group h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={h6}
                alt="Wedding photography"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>


            {/* IMAGE 10 */}
            <div className="group h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={h1}
                alt="Wedding photography"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>


            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-25 w-24 shrink-0 flex-col items-center justify-center px-2 transition duration-300 hover:scale-105"
            >
              <Image
                src={ld}
                alt="LinkedIn"
                className="h-7 w-7 object-contain"
              />

              <p className="mt-1 text-center text-[9px] font-bold tracking-[1px] text-[#333130]">
                FOLLOW
              </p>

              <p className="text-center text-[9px] font-bold tracking-[1px] text-[#C8A96A]">
                LINKEDIN
              </p>
            </a>


            {/* IMAGE 11 */}
            <div className="group h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={p1}
                alt="Photography"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>


            {/* IMAGE 12 */}
            <div className="group h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={h5}
                alt="Wedding photography"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>


            {/* =====================================================
        SECOND SET
        EXACT SAME ORDER FOR SEAMLESS LOOP
    ===================================================== */}

            {/* INTRO */}
            {/* INTRO */}
            <div className="flex w-40 shrink-0 flex-col items-center justify-center px-2 text-center">

              <p className="text-[10px] font-bold tracking-[2px] text-[#C8A96A] sm:text-[11px]">
                FOLLOW OUR JOURNEY
              </p>

              <p className="mt-1 font-serif text-base font-bold text-[#333130] sm:text-lg">
                Social Media
              </p>

              <p className="mt-1 text-[9px] text-gray-500 sm:text-[10px]">
                @innovative.photography
              </p>

            </div>


            {/* IMAGE 1 */}
            <div className="h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={h1}
                alt="Wedding photography"
                className="h-full w-full object-cover"
              />
            </div>


            {/* IMAGE 2 */}
            <div className="h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={p1}
                alt="Photography"
                className="h-full w-full object-cover"
              />
            </div>


            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-25 w-24 shrink-0 flex-col items-center justify-center px-2"
            >
              <Image
                src={ii}
                alt="Instagram"
                className="h-7 w-7 object-contain"
              />

              <p className="mt-1 text-center text-[9px] font-bold tracking-[1px] text-[#333130]">
                FOLLOW
              </p>

              <p className="text-center text-[9px] font-bold tracking-[1px] text-[#C8A96A]">
                INSTAGRAM
              </p>
            </a>


            {/* IMAGE 3 */}
            <div className="h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={h5}
                alt="Wedding photography"
                className="h-full w-full object-cover"
              />
            </div>


            {/* IMAGE 4 */}
            <div className="h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={p5}
                alt="Photography"
                className="h-full w-full object-cover"
              />
            </div>


            {/* YOUTUBE */}
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-25 w-24 shrink-0 flex-col items-center justify-center px-2"
            >
              <Image
                src={yt}
                alt="YouTube"
                className="h-7 w-7 object-contain"
              />

              <p className="mt-1 text-center text-[9px] font-bold tracking-[1px] text-[#333130]">
                FOLLOW
              </p>

              <p className="text-center text-[9px] font-bold tracking-[1px] text-[#C8A96A]">
                YOUTUBE
              </p>
            </a>


            {/* IMAGE 5 */}
            <div className="h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={h6}
                alt="Wedding photography"
                className="h-full w-full object-cover"
              />
            </div>


            {/* IMAGE 6 */}
            <div className="h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={p1}
                alt="Photography"
                className="h-full w-full object-cover"
              />
            </div>


            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-25 w-24 shrink-0 flex-col items-center justify-center px-2"
            >
              <Image
                src={fb}
                alt="Facebook"
                className="h-7 w-7 object-contain"
              />

              <p className="mt-1 text-center text-[9px] font-bold tracking-[1px] text-[#333130]">
                FOLLOW
              </p>

              <p className="text-center text-[9px] font-bold tracking-[1px] text-[#C8A96A]">
                FACEBOOK
              </p>
            </a>


            {/* IMAGE 7 */}
            <div className="h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={h5}
                alt="Wedding photography"
                className="h-full w-full object-cover"
              />
            </div>


            {/* IMAGE 8 */}
            <div className="h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={p5}
                alt="Photography"
                className="h-full w-full object-cover"
              />
            </div>


            {/* PINTEREST */}
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-25 w-24 shrink-0 flex-col items-center justify-center px-2"
            >
              <Image
                src={pt}
                alt="Pinterest"
                className="h-7 w-7 object-contain"
              />

              <p className="mt-1 text-center text-[9px] font-bold tracking-[1px] text-[#333130]">
                FOLLOW
              </p>

              <p className="text-center text-[9px] font-bold tracking-[1px] text-[#C8A96A]">
                PINTEREST
              </p>
            </a>


            {/* IMAGE 9 */}
            <div className="h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={h6}
                alt="Wedding photography"
                className="h-full w-full object-cover"
              />
            </div>


            {/* IMAGE 10 */}
            <div className="h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={h1}
                alt="Wedding photography"
                className="h-full w-full object-cover"
              />
            </div>


            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-25 w-24 shrink-0 flex-col items-center justify-center px-2"
            >
              <Image
                src={ld}
                alt="LinkedIn"
                className="h-7 w-7 object-contain"
              />

              <p className="mt-1 text-center text-[9px] font-bold tracking-[1px] text-[#333130]">
                FOLLOW
              </p>

              <p className="text-center text-[9px] font-bold tracking-[1px] text-[#C8A96A]">
                LINKEDIN
              </p>
            </a>


            {/* IMAGE 11 */}
            <div className="h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={p1}
                alt="Photography"
                className="h-full w-full object-cover"
              />
            </div>


            {/* IMAGE 12 */}
            <div className="h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={h5}
                alt="Wedding photography"
                className="h-full w-full object-cover"
              />
            </div>

          </motion.div>

        </section>















        <section className="w-full pt-2 pb-2">
          <div className="w-full max-w-7xl mx-auto sm:px-4 px-1">
            <div className="
        w-full h-[190px]
        overflow-hidden
        rounded-2xl
        border-2 border-blue-500
        shadow-[0_0_15px_rgba(59,130,246,0.5)] ">
              <iframe
                src="https://www.google.com/maps?q=Prayagraj,Uttar+Pradesh,India&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>






































      </main>


      <Footer />





    </>

  );

}