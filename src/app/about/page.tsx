import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import Image from "next/image";

import about1 from "@/src/assets/about/about1.jpg";
import about2 from "@/src/assets/about/about2.jpg";
import about3 from "@/src/assets/about/about3.jpg";
import pgman from "@/src/assets/about/pgman.png"
import gpg from "@/src/assets/about/gpg.png"
import cpg from "@/src/assets/about/cpg.jpeg"
import vpg from "@/src/assets/about/vgp.webp"
import edt from "@/src/assets/about/edt.jpeg"
import ccc from "@/src/assets/about/ccc.jpeg"






export default function About() {
  return (
    <>
      <Header />
      <main>




        <section className="px-4 sm:px-6 lg:px-12 py-8">
          <div className="mx-auto max-w-7xl h-80">

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 h-full">

              {/* Left Content */}
              <div className="max-w-xl">

                <p className="mb-2 text-xs font-semibold tracking-[3px] text-[#d4a72c] uppercase">
                  About Us
                </p>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight text-gray-900">
                  We Don't Just{" "}
                  <span className="text-[#0083c4]">
                    Capture Moments,
                  </span>{" "}
                  We Create Memories.
                </h2>

                <p className="mt-4 text-sm text-gray-500 leading-6">
                  We are a passionate team of photographers and filmmakers
                  dedicated to turning your special moments into timeless
                  memories.
                </p>

                <button className="mt-5 rounded-full bg-[#0083c4] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#006d9f] hover:shadow-lg">
                  Discover Our Story
                </button>

              </div>

              {/* Right Image */}
              <div className="relative mx-auto w-full max-w-sm h-72">

                <div className="absolute -right-3 -top-3 h-full w-full rounded-3xl border border-[#d4a72c]/50" />

                <div className="relative h-full overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src={pgman}
                    alt="Our photography studio"
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <p className="text-xs tracking-[2px] text-white/80">
                      STORIES • EMOTIONS • MEMORIES
                    </p>

                    <h3 className="mt-1 font-serif text-xl font-bold text-white">
                      Every Frame Tells A Story
                    </h3>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>




        <section className="px-4 sm:px-6 lg:px-10 py-12">
          <div className="w-full">

            {/* Section Heading */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-[#f1cd04] font-semibold tracking-[3px] text-sm mb-3">
                MEET MY TEAM
              </p>

              <h2 className="text-[#0083c4] font-serif font-bold text-3xl sm:text-4xl mb-4">
                The People Behind The Frames
              </h2>

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                A passionate team of creatives, working together to capture
                your most precious moments.
              </p>
            </div>

            {/* Team Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">

              {/* Card 1 */}
              <div className="group relative h-64 sm:h-72 overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                <Image
                  src={gpg}
                  alt="Neha Tiwery"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white">
                    Neha Tiwery
                  </h3>
                  <p className="text-sm text-white/80">
                    Photographer
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative h-64 sm:h-72 overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                <Image
                  src={ccc}
                  alt="Rahul Sharma"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white">
                    Rahul Sharma
                  </h3>
                  <p className="text-sm text-white/80">
                    Cinematographer
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative h-64 sm:h-72 overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                <Image
                  src={cpg}
                  alt="Ananya Singh"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white">
                    Ananya Singh
                  </h3>
                  <p className="text-sm text-white/80">
                    Photographer
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group relative h-64 sm:h-72 overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                <Image
                  src={vpg}
                  alt="Arjun Verma"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white">
                    Arjun Verma
                  </h3>
                  <p className="text-sm text-white/80">
                    Videographer
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="group relative h-64 sm:h-72 overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                <Image
                  src={edt}
                  alt="Priya Kapoor"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white">
                    Priya Kapoor
                  </h3>
                  <p className="text-sm text-white/80">
                    Editor
                  </p>
                </div>
              </div>

              {/* Card 6 */}
              <div className="group relative h-64 sm:h-72 overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                <Image
                  src={cpg}
                  alt="Vikash Kumar"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white">
                    Vikash Kumar
                  </h3>
                  <p className="text-sm text-white/80">
                    Creative Director
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>





      </main>



      <Footer />
    </>
  );
}