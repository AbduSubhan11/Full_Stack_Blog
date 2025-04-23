"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Profile } from "./profile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const route = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blogs", href: "/blogs" },
    { name: "Create", href: "/create" },
  ];

  return (
    <nav className="bg-[#191919] sticky top-0 z-50 ">
      <div className="2xl:max-w-[1400px] w-[90%] mx-auto ">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-white flex items-center">
                <svg
                  className="h-8 w-8 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" stroke="#FFD700" />
                  <path
                    d="M12 2a10 10 0 0 1 10 10h-5v-5a5 5 0 0 0-5-5z"
                    fill="#FFD700"
                  />
                </svg>
                FutureTech
              </span>
            </Link>
          </div>

          {/* Desktop Links */}

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[#807f7f] hover:text-white transition ${
                  route === link.href
                    ? "px-3 py-1 rounded-lg border border-neutral-700 text-white bg-[#141414] "
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/contact"
              className="bg-yellow-500 text-black  py-2 px-4 rounded hover:bg-yellow-600 transition"
            >
              Contact Us
            </Link>

            {/* LOGIN BUTTON*/}

            {localStorage.getItem("token") === null && (
              <Link
                href="/login"
                className="bg-yellow-500 text-black  py-2 px-4 rounded hover:bg-yellow-600 transition"
              >
                Login
              </Link>
            )}

            <div className="relative">
              {/* PROFILE PAGE */}
              <Profile />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-gray-300 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block px-3 py-2 text-[#141414] bg-yellow-500 hover:bg-yellow-600"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
                <Link
                  href="/login"
                  className="block px-3 py-2 text-[#141414] bg-yellow-500 hover:bg-yellow-600"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
