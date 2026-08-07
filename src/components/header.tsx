"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <nav className="w-full h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex flex-col">
          <div className="text-2xl font-bold text-gray-900">
            INNOVATIVE PHOTOGRAPHY
          </div>

          <div className="text-red-500 font-medium">
            PHOTOGRAPHY & FILMS
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-900">
          <li>
            <Link href="/homes" className="hover:text-red-500 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-red-500 transition bg-transparent">
              About
            </Link>
          </li>

          <li>
            <Link href="/portfolio" className="hover:text-red-500 transition">
              Portfolio
            </Link>
          </li>

          <li>
            <Link href="/services" className="hover:text-red-500 transition">
              Services
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-red-500 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="fixed top-5 right-3.5 md:hidden text-gray-900 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-20 right-2 w-52 md:hidden bg-black/90 shadow-2xl rounded-2xl border border-gray-700 z-50">
          <ul className="flex flex-col items-center gap-6 py-6 text-white text-lg">
            <li>
              <Link href="/homes" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>

            <li>
              <Link href="/portfolio" onClick={() => setMenuOpen(false)}>
                Portfolio
              </Link>
            </li>

            <li>
              <Link href="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>

            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}