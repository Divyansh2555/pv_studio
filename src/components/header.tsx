"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-red-500">
          Photography
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-lg font-medium text-white">
          <li>
            <Link href="/" className="hover:text-red-500 transition">
              
            </Link>
          </li>

          <li>
            <Link href="/homes" className="hover:text-red-500 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-red-500 transition">
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
          className=" fixed right-2 md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-16 right-2 w-52 h-auto md:hidden bg-black/90 shadow-2xl rounded-2xl border border-gray-700 z-50">
          <ul className="flex flex-col items-center gap-6 py-6 text-white text-lg">

            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                
              </Link>

            </li>

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