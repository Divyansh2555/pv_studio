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

        {/* home*/}

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
          <div className="relative z-10 flex min-h-screen items-center justify-start sm:px-20 px-8   text-white">

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
                className="text-start mb-1 font-bold  text-sm uppercase tracking-[4px] text-[#e8f186d5] sm:text-lg"
              >
                WE CAPTURE
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
                className="text-start font-serif text-4xl  sm:text-5xl md:text-6xl"
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
                className="text-4xl font-serif sm:text-5xl md:text-6xl"
              >
                Not Just Your Photos.
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
                className="text-start mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-200 sm:text-lg sm:leading-8"
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
                className="text-start mx-auto  max-w-2xl text-sm leading-6 text-gray-200 sm:text-lg sm:leading-8"
              >
                and real emotions.
              </motion.p>



              <div className="flex flex-row items-center gap-2 pt-4">
                <motion.button
                  onClick={() => router.push("/portfolio")}
                  className=" flex cursor-pointer items-center justify-center
              bg-[#D4AF37]
            active:bg-white
          active:text-black
           border border-[#d1ef0d]
              px-3 py-2
         text-[10px]
           sm:px-5 sm:py-3 sm:text-sm
         whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  VIEW PORTFOLIO
                </motion.button>

                <motion.button
                  onClick={() => router.push("/book")}
                  className="
      flex cursor-pointer items-center justify-center
      border border-[#f0f0f0]
      px-3 py-2
      text-[10px]
      sm:px-5 sm:py-3 sm:text-sm
      whitespace-nowrap
    "
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  BOOK A CONSULTATION
                </motion.button>
              </div>











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












        <section className="flex h-54 w-full text-center p-2">

          <div className="flex flex-row gap-3 overflow-x-auto">


            <div className="flex flex-col h-50 justify-start items-start pt-5 pl-5 ">
              <div className="text-[#f2de28ee]">WHAT WE DO</div>
              <div className="flex font-bold"> OUR Services</div>



              <div> EXPLORE ALL SERVICES </div>

            </div>

            <div className=" h-47 w-40.5 gap-2 border border-red-200 rounded-md">
              <div className="h-30 w-40 object-cover  ">

                <Image src={p1} alt="Image 1" className="h-30 w-40 object-cover rounded-md" />
              </div>
              <div className="text-[9px] font-bold pt-2">
                <p>
                  WEDDING
                </p>
                <p>
                  PHOTOGRAPHY
                </p>
                <p className="font-medium text-[8px] pt-0.2">
                  Candid, Traditional &
                </p>
                <p className="font-medium text-[8px]">
                  Timeless Moments
                </p>
              </div>

            </div>
            <div className=" h-47 w-40.5 gap-2 border border-red-200 rounded-md">
              <div className="h-30 w-40 object-cover  ">

                <Image src={p2} alt="Image 1" className="h-30 w-40 object-cover rounded-md" />
              </div>
              <div className="text-[9px] font-bold pt-2">
                <p>
                  PRE-WEDDING
                </p>
                <p>
                  SHOOTS
                </p>
                <p className="font-medium text-[8px] pt-0.2">
                  Candid, Traditional &
                </p>
                <p className="font-medium text-[8px]">
                  Timeless Moments
                </p>
              </div>

            </div>

            <div className=" h-47 w-40.5 gap-2 border border-red-200 rounded-md">
              <div className="h-30 w-40 object-cover  ">

                <Image src={p5} alt="Image 1" className="h-30 w-40 object-cover rounded-md" />
              </div>
              <div className="text-[9px] font-bold pt-2">
                <p>
                  WEDDING
                </p>
                <p>
                  FILMS
                </p>
                <p className="font-medium text-[8px] pt-0.2">
                  Chinematic films that bring
                </p>
                <p className="font-medium text-[8px]">
                  your story to life
                </p>
              </div>

            </div>


            <div className=" h-47 w-40.5 gap-2 border border-red-200 rounded-md">
              <div className="h-30 w-40 object-cover  ">

                <Image src={p4} alt="Image 1" className="h-30 w-40 object-cover rounded-md" />
              </div>
              <div className="text-[9px] font-bold pt-2">
                <p>
                  WEDDING
                </p>
                <p>
                  ALBUMS
                </p>
                <p className="font-medium text-[8px] pt-0.2">
                  Chinematic films that bring
                </p>
                <p className="font-medium text-[8px]">
                  your story to life
                </p>
              </div>

            </div>


            <div className=" h-47 w-40.5 gap-2 border border-red-200 rounded-md">
              <div className="h-30 w-40 object-cover  ">

                <Image src={p4} alt="Image 1" className="h-30 w-40 object-cover rounded-md" />
              </div>
              <div className="text-[9px] font-bold pt-2">
                <p>
                  DESTINATION
                </p>
                <p>
                  WEDDINGS
                </p>
                <p className="font-medium text-[8px] pt-0.2">
                  Chinematic films that bring
                </p>
                <p className="font-medium text-[8px]">
                  your story to life
                </p>
              </div>

            </div>


            <div className=" h-47 w-40.5 gap-2 border border-red-200 rounded-md">
              <div className="h-30 w-40 object-cover  ">

                <Image src={p4} alt="Image 1" className="h-30 w-40 object-cover rounded-md" />
              </div>
              <div className="text-[9px] font-bold pt-2">
                <p>
                  DESTINATION
                </p>
                <p>
                  WEDDINGS
                </p>
                <p className="font-medium text-[8px] pt-0.2">
                  Chinematic films that bring
                </p>
                <p className="font-medium text-[8px]">
                  your story to life
                </p>
              </div>

            </div>




          </div>



        </section>








        <section onClick={() => router.push("/services")} className="w-full  bg-[#454748] p-1">


          <div className="w-full overflow-hidden">
            <div
              className="flex w-max gap-4"
              style={{
                animation: "serviceScroll 25s linear infinite",
              }}
            >
              {/* ================= FIRST SET ================= */}

              {/* Photography */}
              <div className="flex items-center w-[220px] min-w-[220px] h-[100px] rounded-lg border  border-[#a9a288] p-3">
                <div className="w-14 h-14 shrink-0 flex items-center justify-center">
                  <Camera className="w-9 h-9 text-[#d4a72c]" />
                </div>

                <div className="ml-3">
                  <p className="text-[#e0b83f] text-sm font-semibold">
                    Photography
                  </p>
                  <p className="text-[#a3a3a3] text-xs">
                    Capturing real moments
                  </p>
                </div>
              </div>

              {/* Videography */}
              <div className="flex items-center w-[220px] min-w-[220px] h-[100px] rounded-lg  border  border-[#a9a288] p-3   cursor-pointer hover:text-blue-500 transition-colors">
                <div className="w-14 h-14 shrink-0 flex items-center justify-center">
                  <Video className="w-9 h-9 text-[#d4a72c]" />
                </div>

                <div className="ml-3">
                  <p className="text-[#e0b83f] text-sm font-semibold">
                    Videography
                  </p>
                  <p className="text-[#a3a3a3] text-xs">
                    Cinematic films that
                  </p>
                  <p className="text-[#a3a3a3] text-xs">
                    tell your story
                  </p>
                </div>
              </div>

              {/* Drone */}
              <div className="flex items-center w-[220px] min-w-[220px] h-[100px] rounded-lg border border-[#a9a288] p-3">
                <div className="w-14 h-14 shrink-0 flex items-center justify-center">
                  <Drone className="w-9 h-9 text-[#d4a72c]" />
                </div>

                <div className="ml-3">
                  <p className="text-[#e0b83f] text-sm font-semibold">
                    Drone Shots
                  </p>
                  <p className="text-[#a3a3a3] text-xs">
                    View from above
                  </p>
                </div>
              </div>

              {/* Editing */}
              <div className="flex items-center w-[220px] min-w-[220px] h-[100px] rounded-lg border  border-[#a9a288] p-3">
                <div className="w-14 h-14 shrink-0 flex items-center justify-center">
                  <Edit className="w-9 h-9 text-[#d4a72c]" />
                </div>

                <div className="ml-3">
                  <p className="text-[#e0b83f] text-sm font-semibold">
                    Editing
                  </p>
                  <p className="text-[#a3a3a3] text-xs">
                    Professional editing
                  </p>
                </div>
              </div>

              {/* Events */}
              <div className="flex items-center w-[220px] min-w-[220px] h-[100px] rounded-lg  border  border-[#a9a288] p-3">
                <div className="w-14 h-14 shrink-0 flex items-center justify-center">
                  <CalendarDays className="w-9 h-9 text-[#d4a72c]" />
                </div>

                <div className="ml-3">
                  <p className="text-[#e0b83f] text-sm font-semibold">
                    Events
                  </p>
                  <p className="text-[#a3a3a3] text-xs">
                    Special moments
                  </p>
                </div>
              </div>

              {/* Travel */}
              <div className="flex items-center w-[220px] min-w-[220px] h-[100px] rounded-lg border  border-[#a9a288] p-3">
                <div className="w-14 h-14 shrink-0 flex items-center justify-center">
                  <Plane className="w-9 h-9 text-[#d4a72c]" />
                </div>

                <div className="ml-3">
                  <p className="text-[#e0b83f] text-sm font-semibold">
                    Travel
                  </p>
                  <p className="text-[#a3a3a3] text-xs">
                    Explore & capture
                  </p>
                </div>
              </div>


              {/* ================= DUPLICATE SET ================= */}

              {/* Photography */}
              <div className="flex items-center w-[220px] min-w-[220px] h-[100px] rounded-lg  border border-[#a9a288] p-3">
                <div className="w-14 h-14 shrink-0 flex items-center justify-center">
                  <Camera className="w-9 h-9 text-[#d4a72c]" />
                </div>

                <div className="ml-3">
                  <p className="text-[#e0b83f] text-sm font-semibold">
                    Photography
                  </p>
                  <p className="text-[#a3a3a3] text-xs">
                    Capturing real moments
                  </p>
                </div>
              </div>

              {/* Videography */}
              <div className="flex items-center w-[220px] min-w-[220px] h-[100px] rounded-lg border  border-[#a9a288] p-3">
                <div className="w-14 h-14 shrink-0 flex items-center justify-center">
                  <Video className="w-9 h-9 text-[#d4a72c]" />
                </div>

                <div className="ml-3">
                  <p className="text-[#e0b83f] text-sm font-semibold">
                    Videography
                  </p>
                  <p className="text-[#a3a3a3] text-xs">
                    Cinematic films that
                  </p>
                  <p className="text-[#a3a3a3] text-xs">
                    tell your story
                  </p>
                </div>
              </div>

              {/* Drone */}
              <div className="flex items-center w-[220px] min-w-[220px] h-[100px] rounded-lg border  border-[#a9a288] p-3">
                <div className="w-14 h-14 shrink-0 flex items-center justify-center">
                  <Drone className="w-9 h-9 text-[#d4a72c]" />
                </div>

                <div className="ml-3">
                  <p className="text-[#e0b83f] text-sm font-semibold">
                    Drone Shots
                  </p>
                  <p className="text-[#a3a3a3] text-xs">
                    View from above
                  </p>
                </div>
              </div>

              {/* Editing */}
              <div className="flex items-center w-[220px] min-w-[220px] h-[100px] rounded-lg  border  border-[#a9a288] p-3">
                <div className="w-14 h-14 shrink-0 flex items-center justify-center">
                  <Edit className="w-9 h-9 text-[#d4a72c]" />
                </div>

                <div className="ml-3">
                  <p className="text-[#e0b83f] text-sm font-semibold">
                    Editing
                  </p>
                  <p className="text-[#a3a3a3] text-xs">
                    Professional editing
                  </p>
                </div>
              </div>

              {/* Events */}
              <div className="flex items-center w-[220px] min-w-[220px] h-[100px] rounded-lg border  border-[#a9a288] p-3">
                <div className="w-14 h-14 shrink-0 flex items-center justify-center">
                  <CalendarDays className="w-9 h-9 text-[#d4a72c]" />
                </div>

                <div className="ml-3">
                  <p className="text-[#e0b83f] text-sm font-semibold">
                    Events
                  </p>
                  <p className="text-[#a3a3a3] text-xs">
                    Special moments
                  </p>
                </div>
              </div>

              {/* Travel */}
              <div className="flex items-center w-[220px] min-w-[220px] h-[100px] rounded-lg  border border-[#a9a288] p-3">
                <div className="w-14 h-14 shrink-0 flex items-center justify-center">
                  <Plane className="w-9 h-9 text-[#d4a72c]" />
                </div>

                <div className="ml-3">
                  <p className="text-[#e0b83f] text-sm font-semibold">
                    Travel
                  </p>
                  <p className="text-[#a3a3a3] text-xs">
                    Explore & capture
                  </p>
                </div>
              </div>

              {/* ================= INLINE ANIMATION ================= */}

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

            </div>
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























        <section className=" bg-[#a2cecb82]">

          <div className="flex pb-1.5 w-full flex-row pt-1.5 gap-2">
            <div className="mt-3 ml-3 mr-3">
              <p className="font-bold text-[#eadb0e]">FOLLOW OUR JOURNEY </p>
              <p className="font-sans font-bold text-[#333130c6]">Instagram </p>

              <p className="text-[12px]"> @innovative.photography</p>

            </div>

            <div>

              <Image src={p1} alt="Image 1" className=" h-25 w-40 object-cover rounded-md" />

            </div>

            <div>

              <Image src={p5} alt="Image 1" className=" h-25 w-40 object-cover rounded-md" />

            </div>

          </div>



        </section>








      </main>


      <Footer />





    </>

  );

}