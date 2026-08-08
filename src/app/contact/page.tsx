import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Camera,
  Video,
  CalendarDays,
  
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  return (
    <>
      {/* Header */}
      <Header />

      <main className="min-h-screen bg-black text-white">

        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden px-6 pb-16 pt-32 sm:pt-36 lg:pb-24">
          {/* Background Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-yellow-500">
                Get In Touch
              </p>

              <h1 className="text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                Let&apos;s Capture
                <span className="block text-yellow-500">
                  Your Story.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
                Have a wedding, event, pre-wedding shoot or creative project
                coming up? Tell us about it and let&apos;s create something
                beautiful together.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CONTACT SECTION ================= */}
        <section className="px-6 pb-20 lg:pb-28">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">

            {/* ================= LEFT SIDE ================= */}
            <div className="rounded-3xl border border-white/10 bg-zinc-950 p-7 sm:p-9">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-500">
                Contact Information
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                We&apos;d Love To
                <span className="text-yellow-500"> Hear From You.</span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                Whether you need photography, videography or a complete
                cinematic experience, our team is ready to discuss your
                project.
              </p>

              {/* Contact Details */}
              <div className="mt-8 space-y-5">

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-500 text-black">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="mt-1 text-sm text-gray-400">
                      Agra, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-500 text-black">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="mt-1 text-sm text-gray-400">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-500 text-black">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="mt-1 text-sm text-gray-400">
                      hello@yourstudio.com
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-500 text-black">
                    <Clock size={20} />
                  </div>

                  <div>
                    <p className="font-semibold">Working Hours</p>
                    <p className="mt-1 text-sm text-gray-400">
                      Monday – Saturday
                    </p>
                    <p className="text-sm text-gray-400">
                      10:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>

              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-white/10" />

              {/* Social */}
              <div>
                <p className="text-sm font-semibold">
                  Follow Our Work
                </p>

                <div className="mt-4 flex gap-3">

                  

                  

                </div>
              </div>
            </div>

            {/* ================= RIGHT SIDE FORM ================= */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-500">
                  Start A Conversation
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  Tell Us About Your Project
                </h2>

                <p className="mt-3 text-sm text-gray-400">
                  Fill out the form and we&apos;ll get back to you as soon
                  as possible.
                </p>
              </div>

              <form className="mt-8 space-y-6">

                {/* Name + Email */}
                <div className="grid gap-6 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-yellow-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-yellow-500"
                    />
                  </div>

                </div>

                {/* Phone + Date */}
                <div className="grid gap-6 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-yellow-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
                      <CalendarDays size={15} />
                      Event Date
                    </label>

                    <input
                      type="date"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-gray-400 outline-none transition focus:border-yellow-500"
                    />
                  </div>

                </div>

                {/* Service */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    What Do You Need?
                  </label>

                  <select
                    defaultValue=""
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-gray-400 outline-none transition focus:border-yellow-500"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="photography">
                      Photography
                    </option>
                    <option value="videography">
                      Videography
                    </option>
                    <option value="wedding">
                      Wedding Photography
                    </option>
                    <option value="pre-wedding">
                      Pre-Wedding Shoot
                    </option>
                    <option value="event">
                      Event Coverage
                    </option>
                    <option value="commercial">
                      Commercial Shoot
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Tell Us About Your Project
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell us about your event, location, requirements..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-yellow-500"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-yellow-500 px-6 py-4 font-semibold text-black transition hover:bg-yellow-400"
                >
                  Send Message

                  <ArrowRight
                    size={19}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

              </form>
            </div>

          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="border-y border-white/10 bg-zinc-950 px-6 py-20">
          <div className="mx-auto max-w-7xl">

            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
                What We Shoot
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                Let&apos;s Create Something Beautiful
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-yellow-500/50">
                <Camera className="text-yellow-500" size={30} />

                <h3 className="mt-5 text-lg font-semibold">
                  Photography
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Candid, portrait, fashion and professional photography.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-yellow-500/50">
                <Video className="text-yellow-500" size={30} />

                <h3 className="mt-5 text-lg font-semibold">
                  Videography
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Cinematic films, event videos and creative storytelling.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-yellow-500/50">
                <CalendarDays className="text-yellow-500" size={30} />

                <h3 className="mt-5 text-lg font-semibold">
                  Weddings
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Complete wedding photography and cinematic films.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-yellow-500/50">
                <Video className="text-yellow-500" size={30} />

                <h3 className="mt-5 text-lg font-semibold">
                  Events
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Professional coverage for parties, brands and events.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="px-6 py-20 lg:py-28">
          <div className="mx-auto max-w-5xl rounded-3xl bg-yellow-500 px-6 py-14 text-center text-black sm:px-12">

            <h2 className="text-3xl font-bold sm:text-5xl">
              Have A Story To Tell?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-black/70 sm:text-base">
              From intimate moments to grand celebrations, we&apos;re here
              to turn your memories into timeless visuals.
            </p>

            <a
              href="mailto:hello@yourstudio.com"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 font-semibold text-white transition hover:bg-zinc-800"
            >
              Let&apos;s Talk

              <ArrowRight size={18} />
            </a>

          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
