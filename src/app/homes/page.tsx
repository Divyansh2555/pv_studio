"use client";

import Header from "../../components/header";
import Image from "next/image";
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import p4 from "../../assets/p4.jpg";
import p5 from "../../assets/p5.jpg";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

export default function Homes() {


  const images = [
    p1,
    p2,
    p3,
    p4,
    p5,
  ];

  const [current, setCurrent] = useState(0);




  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [images.length]);


  return (
    <>
      <main>

        <section className="relative min-h-screen overflow-hidden bg-black">

          {/* Transparent Header */}
          <div className="absolute top-0 left-0 z-50 w-full">
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
                src={images[current]}
                alt="Studio"
                fill
                priority
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
          <div className="relative z-10 flex min-h-screen items-center justify-center px-5 text-center text-white">

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
                className="mb-4 text-sm uppercase tracking-[4px] text-gray-200 sm:text-lg"
              >
                Innovative Photography
              </motion.p>

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
                className="text-4xl font-bold sm:text-5xl md:text-7xl"
              >
                Welcome to Our Studio
              </motion.h1>

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
                className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-200 sm:text-lg sm:leading-8"
              >
                We capture your beautiful moments and turn them
                into unforgettable stories.
              </motion.p>

            </motion.div>
          </div>

          {/* Hero Dots */}
          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
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

        <section className="p-5 bg-amber-100">
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

        <section>

        </section>

        




     


      
















      </main>


      <Footer />





    </>

  );

}