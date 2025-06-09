"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-[#fdf7ef] shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/img/logo.png"
            alt="UntitleD Studio-1 Logo"
            width={100}
            height={100}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-600 text-base">
          <Link href="/" className="hover:text-black transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-black transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-black transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-black transition">
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#fdf7ef] shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-bold">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-2xl"
          >
            &times;
          </button>
        </div>
        <nav className="flex flex-col space-y-6 p-6 text-gray-700 text-base">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-black transition">
            Home
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-black transition">
            About
          </Link>
          <Link href="/projects" onClick={() => setIsOpen(false)} className="hover:text-black transition">
            Projects
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-black transition">
            Contact
          </Link>
        </nav>
      </div>

      {/* Background overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
