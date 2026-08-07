"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "@/src/components/footer";
const places = [
  {
    name: "Taj Mahal",
    city: "Agra, India",
    image: "/places/taj.jpg",
  },
  {
    name: "Qutub Minar",
    city: "Delhi, India",
    image: "/places/qutub.jpg",
  },
  {
    name: "Nainital",
    city: "Uttarakhand, India",
    image: "/places/nainital.jpg",
  },
  {
    name: "Hawa Mahal",
    city: "Jaipur, India",
    image: "/places/jaipur.jpg",
  },
  {
    name: "India Gate",
    city: "Delhi, India",
    image: "/places/indiagate.jpg",
  },
  {
    name: "Varanasi Ghats",
    city: "Varanasi, India",
    image: "/places/varanasi.jpg",
  },
  {
    name: "Goa",
    city: "Goa, India",
    image: "/places/goa.jpg",
  },
  {
    name: "Manali",
    city: "Himachal Pradesh, India",
    image: "/places/manali.jpg",
  },
  {
    name: "Rishikesh",
    city: "Uttarakhand, India",
    image: "/places/rishikesh.jpg",
  },
  {
    name: "Udaipur",
    city: "Rajasthan, India",
    image: "/places/udaipur.jpg",
  },
];

export default function Book() {
  const [current, setCurrent] = useState(0);

  /* ================= BACKGROUND SLIDER ================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % places.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen text-white overflow-hidden">

      {/* ================================================= */}
      {/* FULL SCREEN BACKGROUND IMAGE */}
      {/* ================================================= */}

      <div className="fixed inset-0 z-0">

        <AnimatePresence mode="sync">

          <motion.div
            key={places[current].image}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${places[current].image})`,
            }}
            initial={{
              opacity: 0,
              scale: 1.06,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              opacity: {
                duration: 1.5,
              },
              scale: {
                duration: 6,
                ease: "easeOut",
              },
            }}
          />

        </AnimatePresence>

      </div>


      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">

        {/* ================= HEADING ================= */}

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
            duration: 0.9,
          }}
          className="text-center mb-14"
        >

          <motion.p
            animate={{
              letterSpacing: ["2px", "6px", "2px"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-[#C8A96A] uppercase text-sm font-semibold"
          >
            Photography • Videography • Films
          </motion.p>

          <h1 className="text-4xl md:text-6xl font-bold mt-5 drop-shadow-2xl">
            Book Your{" "}
            <span className="text-[#C8A96A]">
              Shoot
            </span>
          </h1>

          <p className="text-white mt-5 max-w-2xl mx-auto font-medium drop-shadow-xl">
            Tell us about your event, wedding, brand or project.
            We will get back to you shortly.
          </p>

        </motion.div>


        {/* ================================================= */}
        {/* BOOKING FORM */}
        {/* ================================================= */}

        <motion.form
          initial={{
            opacity: 0,
            y: 70,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="
            relative
            max-w-4xl
            mx-auto
            bg-black/25
            border border-white/30
            rounded-3xl
            p-6 md:p-10
            backdrop-blur-[2px]
            shadow-2xl
          "
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* NAME */}

            <div>
              

              <input
                type="text"
                placeholder="Enter your name"
                className="
                  w-full
                  bg-black/30
                  border border-white/40
                  rounded-xl
                  px-4 py-4
                  text-white
                  placeholder:text-white/70
                  outline-none
                  focus:border-[#C8A96A]
                  focus:bg-black/40
                  transition
                "
              />
            </div>


            {/* PHONE */}

            <div>
              

              <input
                type="tel"
                placeholder="Enter phone number"
                className="
                  w-full
                  bg-black/30
                  border border-white/40
                  rounded-xl
                  px-4 py-4
                  text-white
                  placeholder:text-white/70
                  outline-none
                  focus:border-[#C8A96A]
                  focus:bg-black/40
                  transition
                "
              />
            </div>


            {/* EMAIL */}

            <div>
              

              <input
                type="email"
                placeholder="Enter email"
                className="
                  w-full
                  bg-black/30
                  border border-white/40
                  rounded-xl
                  px-4 py-4
                  text-white
                  placeholder:text-white/70
                  outline-none
                  focus:border-[#C8A96A]
                  focus:bg-black/40
                  transition
                "
              />
            </div>


            {/* SERVICE */}

            <div>
              

              <select
                defaultValue=""
                className="
                  w-full
                  bg-black/30
                  border border-white/40
                  rounded-xl
                  px-4 py-4
                  text-white
                  outline-none
                  focus:border-[#C8A96A]
                  transition
                "
              >
                <option
                  value=""
                  disabled
                  className="bg-black"
                >
                  Select service
                </option>

                <option value="wedding" className="bg-black">
                  Wedding Photography
                </option>

                <option value="videography" className="bg-black">
                  Wedding Videography
                </option>

                <option value="pre-wedding" className="bg-black">
                  Pre-Wedding Shoot
                </option>

                <option value="event" className="bg-black">
                  Event Photography
                </option>

                <option value="brand" className="bg-black">
                  Brand Photography
                </option>

                <option value="drone" className="bg-black">
                  Drone Shoot
                </option>
              </select>
            </div>


            {/* DATE */}

            <div>
              <label className="block text-white font-medium mb-2">
                Event Date
              </label>

              <input
                type="date"
                className="
                  w-full
                  bg-black/30
                  border border-white/40
                  rounded-xl
                  px-4 py-4
                  text-white
                  outline-none
                  focus:border-[#C8A96A]
                  transition
                "
              />
            </div>


            {/* LOCATION */}

            <div>
              <label className="block text-white font-medium mb-2">
                Event Location
              </label>

              <input
                type="text"
                placeholder="City / Location"
                className="
                  w-full
                  bg-black/30
                  border border-white/40
                  rounded-xl
                  px-4 py-4
                  text-white
                  placeholder:text-white/70
                  outline-none
                  focus:border-[#C8A96A]
                  focus:bg-black/40
                  transition
                "
              />
            </div>

          </div>


          {/* MESSAGE */}

          <div className="mt-6">

            

            <textarea
              rows={5}
              placeholder="Tell us about your event or photography requirements..."
              className="
                w-full
                h-20
                bg-black/30
                border border-white/40
                rounded-xl
                px-4 py-4
                text-white
                placeholder:text-white/70
                outline-none
                focus:border-[#C8A96A]
                focus:bg-black/40
                transition
                resize-none
              "
            />

          </div>


          {/* SUBMIT */}

          <div className="mt-8 text-center">

            <motion.button
              type="submit"
              whileHover={{
                scale: 1.06,
                boxShadow:
                  "0 0 35px rgba(200,169,106,0.6)",
              }}
              whileTap={{
                scale: 0.94,
              }}
              className="
                bg-[#C8A96A]
                text-black
                px-10 py-4
                rounded-full
                font-semibold
              "
            >
              Send Booking Request →
            </motion.button>

          </div>

        </motion.form>


        {/* ================================================= */}
        {/* CURRENT LOCATION */}
        {/* ================================================= */}

        <AnimatePresence mode="wait">

          <motion.div
            key={places[current].name}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-center mt-10"
          >

            <p className="text-[#C8A96A] text-xs uppercase tracking-[4px] font-semibold">
              Capturing Stories In
            </p>

            <p className="text-white text-xl font-bold mt-2 drop-shadow-xl">
              {places[current].name}
            </p>

            <p className="text-white text-sm drop-shadow-lg">
              {places[current].city}
            </p>

          </motion.div>

        </AnimatePresence>


        <p className="text-center text-[#C8A96A] text-md font-bold mt-8 text-sm drop-shadow-lg">
          We usually respond within 1 hours.
        </p>

      </div>
      <Footer />

    </main>


  );
}
