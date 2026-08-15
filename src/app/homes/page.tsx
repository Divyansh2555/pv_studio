
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


import {
  Camera,
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








        <section
          onClick={() => router.push("/services")}
          className="w-full bg-white py-2 cursor-pointer"
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

















        <section className="p-5">
          <div className="flex gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-amber-200 p-5 rounded-md">

            <div className="bg-red-400 w-40 h-[100px] min-w-[100px] rounded-md">

              <Image src={p1} alt="Image 1" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="bg-blue-400 h-[100px] min-w-[100px] rounded-md"></div>
            <div className="bg-green-400 h-[100px] min-w-[100px] rounded-md"></div>
            <div className="bg-yellow-400 h-[100px] min-w-[100px] rounded-md"></div>
            <div className="bg-purple-400 h-[100px] min-w-[100px] rounded-md"></div>
            <div className="bg-pink-400 h-[100px] min-w-[100px] rounded-md"></div>
            <div className="bg-orange-400 h-[100px] min-w-[100px] rounded-md"></div>
            <div className="bg-cyan-400 h-[100px] min-w-[100px] rounded-md"></div>
            <div className="bg-indigo-400 h-[100px] min-w-[100px] rounded-md"></div>
            <div className="bg-lime-400 h-[100px] min-w-[100px] rounded-md"></div>
            <div className="bg-purple-400 h-[100px] min-w-[100px] rounded-md"></div>
            <div className="bg-pink-400 h-[100px] min-w-[100px] rounded-md"></div>
            <div className="bg-orange-400 h-[100px] min-w-[100px] rounded-md"></div>
            <div className="bg-cyan-400 h-[100px] min-w-[100px] rounded-md"></div>
            <div className="bg-indigo-400 h-[100px] min-w-[100px] rounded-md"></div>
            <div className="bg-lime-400 h-[100px] min-w-[100px] rounded-md"></div>


          </div>
        </section>




























        {/* IMAGE SLIDER — ONLY THIS PART CHANGED */}

        <section className="p-5 bg-amber-100" >
          <div className="relative h-[300px] overflow-hidden rounded-xl">

            {/* Images */}
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${current === index ? "opacity-100" : "opacity-0"
                  }`}
              >
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}

            {/* Left Arrow */}
            <button
              onClick={() =>
                setCurrent(
                  (prev) => (prev - 1 + images.length) % images.length
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10
                 bg-black/50 hover:bg-black/80
                 text-white text-3xl
                 w-12 h-12 rounded-full
                 flex items-center justify-center"
            >
              ‹
            </button>

            {/* Right Arrow */}
            <button
              onClick={() =>
                setCurrent((prev) => (prev + 1) % images.length)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10
                 bg-black/50 hover:bg-black/80
                 text-white text-3xl
                 w-12 h-12 rounded-full
                 flex items-center justify-center"
            >
              ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full ${current === index
                    ? "bg-white"
                    : "bg-white/50"
                    }`}
                />
              ))}
            </div>

          </div>
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





























        <section className="w-full overflow-hidden bg-[#f7f5ef] py-3">

          <motion.div
            className="flex w-max items-center gap-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >

            {/* FIRST SET */}

            {/* Instagram Text */}
            <div className="flex w-40 shrink-0 flex-col justify-center px-2">
              <p className="text-[10px] font-bold tracking-[2px] text-[#C8A96A] sm:text-[11px]">
                FOLLOW OUR JOURNEY
              </p>

              <p className="mt-1 font-serif text-base font-bold text-[#333130] sm:text-lg">
                Instagram
              </p>

              <p className="mt-1 text-[9px] text-gray-500 sm:text-[10px]">
                @innovative.photography
              </p>
            </div>

            {/* Image 1 */}
            <div className="h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={h1}
                alt="Wedding photography"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={p1}
                alt="Photography"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Image 3 */}
            <div className="h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={h5}
                alt="Wedding photography"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Image 4 */}
            <div className="h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={p5}
                alt="Photography"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Image 5 */}
            <div className="h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={h6}
                alt="Wedding photography"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-24 shrink-0 flex-col items-center justify-center px-2"
            >
              <Image
                src={ii}
                alt="Instagram"
                className="h-6 w-6 object-contain"
              />

              <p className="mt-1 text-center text-[9px] font-bold tracking-[1px] text-[#333130]">
                FOLLOW
              </p>

              <p className="text-center text-[9px] font-bold tracking-[1px] text-[#C8A96A]">
                INSTAGRAM
              </p>
            </a>


            {/* SECOND SET — seamless loop */}

            <div className="flex w-40 shrink-0 flex-col justify-center px-2">
              <p className="text-[10px] font-bold tracking-[2px] text-[#C8A96A] sm:text-[11px]">
                FOLLOW OUR JOURNEY
              </p>

              <p className="mt-1 font-serif text-base font-bold text-[#333130] sm:text-lg">
                Instagram
              </p>

              <p className="mt-1 text-[9px] text-gray-500 sm:text-[10px]">
                @innovative.photography
              </p>
            </div>

            <div className="h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={h1}
                alt="Wedding photography"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={p1}
                alt="Photography"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={h5}
                alt="Wedding photography"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={p5}
                alt="Photography"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-25 w-40 shrink-0 overflow-hidden rounded-md">
              <Image
                src={h6}
                alt="Wedding photography"
                className="h-full w-full object-cover"
              />
            </div>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-24 shrink-0 flex-col items-center justify-center px-2"
            >
              <Image
                src={ii}
                alt="Instagram"
                className="h-6 w-6 object-contain"
              />

              <p className="mt-1 text-center text-[9px] font-bold tracking-[1px] text-[#333130]">
                FOLLOW
              </p>

              <p className="text-center text-[9px] font-bold tracking-[1px] text-[#C8A96A]">
                INSTAGRAM
              </p>
            </a>

          </motion.div>

        </section>










      </main>


      <Footer />





    </>

  );

}