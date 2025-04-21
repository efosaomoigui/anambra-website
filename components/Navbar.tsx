"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [governmentMenuOpen, setGovernmentMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleGovernmentMenu = () => setGovernmentMenuOpen(!governmentMenuOpen);

  return (
    <nav className="sticky top-0 z-50 font-[Instrument Sans] bg-[#FFF9F2]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Anambra Logo"
            width={54.27}
            height={54.27}
            className="cursor-pointer"
          />
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden text-3xl text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Desktop Nav Centered */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          {navLinks.map((link) =>
            link.label === "GOVERNMENT" ? (
              <div key={link.href} className="relative">
                <button
                  className="text-[#111111] hover:text-black transition flex items-center gap-1"
                  onClick={toggleGovernmentMenu}
                >
                  {link.label}
                  <FaChevronDown className="text-xs mt-1" />
                </button>

                {governmentMenuOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                    <ul>
                      {link.subLinks.map((subLink) => (
                        <li key={subLink.href}>
                          <Link
                            href={subLink.href}
                            className="block text-[#111111] hover:text-black px-4 py-2"
                          >
                            {subLink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#111111] hover:text-black transition"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Search Input at Right with Icon Inside */}
        <div className="hidden md:flex items-center ml-6 relative w-64">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border border-gray-300 rounded-full px-4 py-2 pr-10 text-sm text-[#111111] focus:outline-none focus:ring-1 focus:ring-black"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black"
          >
            <FiSearch size={18} />
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out",
          {
            "translate-x-full": !menuOpen,
            "translate-x-0": menuOpen,
          }
        )}
      >
        <div className="p-6 space-y-4 pt-20">
          {navLinks.map((link) => (
            <div key={link.href}>
              {link.label === "GOVERNMENT" ? (
                <div>
                  <button
                    className="block text-[#111111] hover:text-black transition text-lg font-medium flex items-center gap-1"
                    onClick={toggleGovernmentMenu}
                  >
                    {link.label}
                    <FaChevronDown className="text-xs mt-1" />
                  </button>
                  {governmentMenuOpen && (
                    <div className="pl-4 mt-2">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          className="block text-[#111111] hover:text-black transition text-lg font-medium"
                          onClick={() => setMenuOpen(false)}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-[#111111] hover:text-black transition text-lg font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
}

const navLinks = [
  {
    href: "/government",
    label: "GOVERNMENT",
    subLinks: [
      { href: "/government/about-us", label: "About Us" },
      { href: "/government/our-vision", label: "Our Vision" },
      { href: "/government/leadership", label: "Leadership" },
    ],
  },
  { href: "/services", label: "SERVICES" },
  { href: "/document-library", label: "DOCUMENTS" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/news", label: "NEWS" },
  { href: "/events", label: "EVENTS" },
];
