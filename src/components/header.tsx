
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Sirf Home page transparent
  const isHome = pathname === "/homes";

  const menuItems = [
    { name: "Home", href: "/homes" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`${isHome
          ? "absolute top-0 left-0 bg-transparent"
          : "relative bg-white shadow-md"
        } z-50 w-full`}
    >
      {/* ================= NAVBAR ================= */}
      <nav className="mx-auto flex min-h-[70px] max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">

        {/* ================= LOGO ================= */}
        <Link
          href="/homes"
          onClick={() => setMenuOpen(false)}
          className="relative z-[60]"
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="flex flex-col "
          >


            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="text-lg font-bold tracking-tight text-[25px] sm:text-[70px] md:text-2xl font-serif"
            >
              <span className={isHome ? "text-white" : "text-slate-900"}>
                INNOVATIVE
              </span>{" "}
             
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.25,
              }}
              className="text-xs  tracking-[2px] text-[#C8A96A] font-bold sm:text-sm"
            >
              PHOTOGRAPHY
            </motion.div>
          </motion.div>
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
          className={`hidden items-center gap-7 text-base font-medium lg:flex xl:gap-9 xl:text-lg ${isHome ? "text-white" : "text-gray-900"
            }`}
        >
          {menuItems.map((item) => {
            const active = pathname === item.href;

            return (
              <motion.li
                key={item.name}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
              >
                <Link
                  href={item.href}
                  className="group relative inline-block py-2 transition-colors duration-300 hover:text-red-500"
                >
                  {item.name}

                  {/* Animated Underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-red-500 transition-all duration-300 ${active
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                      }`}
                  />
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* ================= MOBILE MENU AREA ================= */}
        <div
          className="relative lg:hidden"
          onMouseEnter={() => setMenuOpen(true)}
        >
          {/* Mobile Button */}
          <motion.button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.85 }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className={`relative z-[60] flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 ${isHome
                ? "text-white hover:bg-white/10"
                : "text-gray-900 hover:bg-gray-100"
              }`}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.5,
                  }}
                  transition={{ duration: 0.2 }}
                  className="text-3xl leading-none"
                >
                  ×
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.5,
                  }}
                  transition={{ duration: 0.2 }}
                  className="text-3xl leading-none"
                >
                  ☰
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* ================= MOBILE MENU ================= */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                onMouseLeave={() => setMenuOpen(false)}
                initial={{
                  opacity: 0,
                  y: -15,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="absolute top-[0px] right-0 z-50 w-[230px] overflow-hidden rounded-2xl border border-gray-700 bg-black/95 shadow-2xl"
              >
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.05,
                      },
                    },
                  }}
                  className="flex flex-col py-4"
                >
                  {menuItems.map((item) => (
                    <motion.li
                      key={item.name}
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: 30,
                        },
                        visible: {
                          opacity: 1,
                          x: 0,
                        },
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center px-7 py-3.5 text-base font-medium transition-all duration-300 ${pathname === item.href
                            ? "bg-red-500/10 text-red-500"
                            : "text-white hover:bg-white/10 hover:pl-9 hover:text-red-500"
                          }`}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}

