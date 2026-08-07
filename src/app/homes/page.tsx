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
        <div className="relative w-full min-h-screen">
          {/* Background Image */}
          <Image
            src={p1}
            alt="Background"
            fill
            className="object-cover -z-10"
            priority
          />

          <Header />

          <div className="flex items-center justify-center min-h-screen">
            <p className="text-white text-5xl font-bold">
              Welcome to Our Studio
            </p>
          </div>
        </div>











        


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




        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-4xl font-bold text-center mb-12">
              Our Services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="bg-gray-100 p-8 rounded-xl text-center shadow-lg hover:shadow-2xl transition">
                <h3 className="text-2xl font-semibold mb-3">📸 Photography</h3>
                <p>Professional photography for every occasion.</p>
              </div>

              <div className="bg-gray-100 p-8 rounded-xl text-center shadow-lg hover:shadow-2xl transition">
                <h3 className="text-2xl font-semibold mb-3">🎥 Videography</h3>
                <p>High-quality cinematic video production.</p>
              </div>

              <div className="bg-gray-100 p-8 rounded-xl text-center shadow-lg hover:shadow-2xl transition">
                <h3 className="text-2xl font-semibold mb-3">🚁 Drone Shoot</h3>
                <p>Beautiful aerial photography and videos.</p>
              </div>

              <div className="bg-gray-100 p-8 rounded-xl text-center shadow-lg hover:shadow-2xl transition">
                <h3 className="text-2xl font-semibold mb-3">💍 Wedding</h3>
                <p>Capture your special moments forever.</p>
              </div>

            </div>

          </div>
        </section>



        


        









      </main>


      <Footer />
  




    </>

  );

}