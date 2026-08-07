
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
    <main className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* ================= BACKGROUND SLIDER ================= */}
      <AnimatePresence mode="sync">
        <motion.img
          key={current}
          src={images[current]}
          alt={`Photography Slide ${current + 1}`}
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
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center text-white sm:px-6">

        {/* ================= SMALL HEADING ================= */}
        <motion.h2
          initial={{
            opacity: 0,
            y: -40,
            letterSpacing: "12px",
          }}
          animate={{
            opacity: 1,
            y: 0,
            letterSpacing: "4px",
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="
            max-w-full
            text-[10px]
            font-medium
            uppercase
            sm:text-xs
            sm:tracking-[5px]
            md:text-xl
          "
        >
          Stories by INNOVATIVE PHOTOGRAPHY
        </motion.h2>

        {/* ================= MAIN HEADING ================= */}
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
          className="
            mt-4
            max-w-5xl
            text-3xl
            font-bold
            leading-tight
            sm:mt-5
            sm:text-4xl
            md:text-6xl
            lg:text-7xl
          "
        >
          Because we are all stories.
        </motion.h1>

        {/* ================= DESCRIPTION ================= */}
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
          className="
            mt-5
            max-w-xs
            text-sm
            leading-6
            text-gray-200
            sm:mt-6
            sm:max-w-xl
            sm:text-base
            sm:leading-7
            md:max-w-3xl
            md:text-lg
            md:leading-8
          "
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
            scale: 1.06,
          }}
          whileTap={{
            scale: 0.94,
          }}
          className="
            group
            relative
            mt-8
            overflow-hidden
            rounded-xl
            border-2
            border-white
            px-7
            py-3
            text-base
            font-semibold
            tracking-wide
            sm:mt-10
            sm:rounded-[14px]
            sm:px-10
            sm:py-4
            sm:text-lg
          "
        >
          {/* Shine */}
          <motion.span
            className="
              absolute
              inset-0
              -translate-x-full
              bg-white/30
            "
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

          {/* Hover Background */}
          <span
            className="
              absolute
              inset-0
              origin-left
              scale-x-0
              bg-white
              transition-transform
              duration-500
              group-hover:scale-x-100
            "
          />

          {/* Button Content */}
          <span
            className="
              relative
              z-10
              flex
              items-center
              gap-2
              transition-colors
              duration-300
              group-hover:text-black
              sm:gap-3
            "
          >
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
              className="text-lg sm:text-xl"
            >
              →
            </motion.span>
          </span>
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
          className="mt-8 flex items-center gap-2 sm:mt-10 sm:gap-3"
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
                  width: current === index ? 30 : 7,
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

        {/* ================= EXPLORE ================= */}
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
          className="
            absolute
            bottom-5
            left-1/2
            flex
            -translate-x-1/2
            flex-col
            items-center
            gap-2
            sm:bottom-7
          "
        >
          <span
            className="
              text-[8px]
              uppercase
              tracking-[3px]
              text-white/70
              sm:text-[10px]
              sm:tracking-[4px]
            "
          >
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
            className="h-6 w-px bg-white/70 sm:h-8"
          />
        </motion.div>
      </div>
    </main>
  );
}

