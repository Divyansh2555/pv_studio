"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* Background Slider */}
      <img
        src={images[current]}
        alt="Slider"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h2 className="text-xl uppercase tracking-[6px]">
          Stories by Joseph Radhik
        </h2>

        <h1 className="mt-4 text-5xl font-bold md:text-6xl">
          Because we are all stories.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200">
          Stories by Joseph Radhik is an international award-winning team of
          photographers who believe in stories; stories of love, laughter and
          happily ever after.
        </p>

        <button
          onClick={() => router.push("/homes")}
          className="mt-10 rounded-full border-2 border-white px-10 py-4 text-lg font-semibold transition hover:bg-white hover:text-black"
        >
          Welcome
        </button>
      </div>
    </main>
  );
}