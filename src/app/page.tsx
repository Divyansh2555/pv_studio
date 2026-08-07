
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  const images = [
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1600",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1600",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=1600",
    "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=1600",
  ];

  const [current, setCurrent] = useState(0);

  // ================= AUTO SLIDER =================
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">

      {/* ================= BACKGROUND SLIDER ================= */}
      <AnimatePresence mode="sync">
        <motion.img
          key={current}
          src={images[current]}
          alt={`Photography ${current + 1}`}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{
            opacity: 0,
            scale: 1.12,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.03,
          }}
          transition={{
            opacity: {
              duration: 1.3,
              ease: "easeInOut",
            },
            scale: {
              duration: 4,
              ease: "easeOut",
            },
          }}
        />
      </AnimatePresence>

      {/* ================= DARK OVERLAY ================= */}
      <motion.div
        className="absolute inset-0 bg-black/55"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">

        {/* Small Heading */}
        <motion.h2
          initial={{
            opacity: 0,
            y: -40,
            letterSpacing: "15px",
          }}
          animate={{
            opacity: 1,
            y: 0,
            letterSpacing: "5px",
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="text-sm font-medium uppercase md:text-xl"
        >
          Stories by INNOVATIVE PHOTOGRAPHY
        </motion.h2>

        {/* Main Heading */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0.25,
            ease: "easeOut",
          }}
          className="mt-5 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
        >
          Because we are all stories.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.55,
            ease: "easeOut",
          }}
          className="mt-6 max-w-3xl text-base leading-7 text-gray-200 md:text-lg md:leading-8"
        >
          Stories by Innovative PhotoGraphy is an international
          award-winning team of photographers who believe in stories;
          stories of love, laughter and happily ever after.
        </motion.p>

        {/* ================= WELCOME BUTTON ================= */}
        <motion.button
          onClick={() => router.push("/homes")}
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.92,
          }}
          className="group relative mt-10 overflow-hidden rounded-[14px] border-2 border-white px-10 py-4 text-lg font-semibold tracking-wide"
        >
          {/* Shine Animation */}
          <motion.span
            className="absolute inset-0 -translate-x-full bg-white/30"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          />

          {/* Button Content */}
          <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-black">
            Welcome

            {/* Arrow */}
            <motion.span
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-xl"
            >
              →
            </motion.span>
          </span>

          {/* Hover Background */}
          <span className="absolute inset-0 -z-0 origin-left scale-x-0 bg-white transition-transform duration-500 group-hover:scale-x-100" />
        </motion.button>

        {/* ================= SLIDER DOTS ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1.2,
          }}
          className="mt-10 flex items-center gap-3"
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="p-1"
            >
              <motion.div
                animate={{
                  width: current === index ? 35 : 8,
                  opacity: current === index ? 1 : 0.45,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="h-2 rounded-full bg-white"
              />
            </button>
          ))}
        </motion.div>

        {/* ================= SCROLL INDICATOR ================= */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.8,
            duration: 1,
          }}
          className="absolute bottom-7 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[4px] text-white/70">
            Explore
          </span>

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-8 w-[1px] bg-white/70"
          />
        </motion.div>

      </div>
    </main>
  );
}

