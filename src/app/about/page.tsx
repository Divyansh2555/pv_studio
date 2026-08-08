import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import Image from "next/image";

import about1 from "@/src/assets/about/about1.jpg";
import about2 from "@/src/assets/about/about2.jpg";
import about3 from "@/src/assets/about/about3.jpg";

export default function About() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-black text-white">

        {/* ================= HERO ================= */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={about1}
              alt="Photographer"
              fill
              priority
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
                About Us
              </p>

              <h1 className="text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                We Capture
                <span className="block text-yellow-500">
                  Moments & Stories.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
                We are a passionate team of photographers and videographers
                dedicated to turning real moments into beautiful memories.
                From weddings and events to fashion and travel, we create
                visuals that tell your story.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-full bg-yellow-500 px-7 py-3 font-semibold text-black transition hover:bg-yellow-400">
                  View Portfolio
                </button>

                <button className="rounded-full border border-white/30 px-7 py-3 font-semibold transition hover:bg-white hover:text-black">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INTRO ================= */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div className="relative h-[450px] overflow-hidden rounded-2xl">
              <Image
                src={about2}
                alt="Photography team"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
                Who We Are
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                Turning Moments Into Memories
              </h2>

              <p className="mt-6 leading-7 text-gray-400">
                Photography is more than just pressing a button. It is about
                understanding emotions, finding the right perspective and
                capturing a moment that can be remembered forever.
              </p>

              <p className="mt-4 leading-7 text-gray-400">
                Our team combines creativity, modern technology and
                storytelling to create photography and films that feel
                authentic and timeless.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                <div>
                  <h3 className="text-3xl font-bold text-yellow-500">5+</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Years Experience
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-yellow-500">250+</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Projects
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-yellow-500">100+</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Happy Clients
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-yellow-500">20+</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Cities
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= WHAT WE DO ================= */}
        <section className="bg-zinc-950 px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
                What We Do
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                Our Creative Services
              </h2>

              <p className="mt-5 text-gray-400">
                From a single photograph to a complete cinematic film,
                we create visuals that make your memories unforgettable.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {/* Photography */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-yellow-500/50">
                <div className="text-4xl">📸</div>

                <h3 className="mt-5 text-xl font-semibold">
                  Photography
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Professional photography with creative compositions and
                  natural expressions.
                </p>
              </div>

              {/* Videography */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-yellow-500/50">
                <div className="text-4xl">🎥</div>

                <h3 className="mt-5 text-xl font-semibold">
                  Videography
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Cinematic videos designed to tell your story through
                  movement, sound and emotion.
                </p>
              </div>

              {/* Wedding */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-yellow-500/50">
                <div className="text-4xl">💍</div>

                <h3 className="mt-5 text-xl font-semibold">
                  Wedding
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Capturing every emotional, joyful and unforgettable
                  moment of your special day.
                </p>
              </div>

              {/* Events */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-yellow-500/50">
                <div className="text-4xl">🎬</div>

                <h3 className="mt-5 text-xl font-semibold">
                  Events
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Complete photo and video coverage for parties, events,
                  corporate functions and celebrations.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= OUR STYLE ================= */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
                Our Style
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                Simple. Natural. Cinematic.
              </h2>

              <p className="mt-6 leading-7 text-gray-400">
                We believe the best photographs are the ones that feel real.
                Our approach focuses on natural emotions, creative framing
                and cinematic storytelling.
              </p>

              <div className="mt-8 space-y-5">

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-black">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Candid Photography
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">
                      Real emotions without forced poses.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-black">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Cinematic Films
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">
                      Beautiful stories created through cinematic visuals.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-black">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Creative Editing
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">
                      Professional color grading and modern editing.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="relative h-[500px] overflow-hidden rounded-2xl">
              <Image
                src={about3}
                alt="Cinematic photography"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

          </div>
        </section>

        {/* ================= EQUIPMENT ================= */}
        <section className="bg-zinc-950 px-6 py-20">
          <div className="mx-auto max-w-7xl">

            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
                Our Equipment
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                Professional Tools
              </h2>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">

              {[
                "📷 Cameras",
                "🔭 Lenses",
                "🎥 Gimbal",
                "🚁 Drone",
                "💡 Lighting",
                "🎙️ Audio",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-7 text-center transition hover:border-yellow-500/50"
                >
                  <p className="text-lg font-semibold">
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ================= TEAM ================= */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
              Our Team
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              Creative People Behind The Camera
            </h2>

            <p className="mt-5 text-gray-400">
              A small team with a big passion for photography,
              filmmaking and storytelling.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                name: "Rahul Sharma",
                role: "Lead Photographer",
              },
              {
                name: "Aman Verma",
                role: "Cinematic Videographer",
              },
              {
                name: "Priya Singh",
                role: "Creative Editor",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-white/10 bg-zinc-950 p-6 text-center"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-4xl">
                  👤
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm text-yellow-500">
                  {member.role}
                </p>

                <p className="mt-4 text-sm leading-6 text-gray-400">
                  Passionate about creating beautiful visuals and
                  capturing authentic moments.
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-yellow-500 px-6 py-16 text-center text-black sm:px-12">

            <h2 className="text-3xl font-bold sm:text-5xl">
              Let's Create Something Amazing
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-black/70 sm:text-base">
              Have a story to tell? Let's turn your special moments into
              photographs and films that you will remember forever.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="rounded-full bg-black px-7 py-3 font-semibold text-white transition hover:bg-zinc-800">
                Book a Session
              </button>

              <button className="rounded-full border border-black/30 px-7 py-3 font-semibold transition hover:bg-black hover:text-white">
                Contact Us
              </button>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}