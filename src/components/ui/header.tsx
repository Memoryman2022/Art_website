"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-gray-900 opacity-90 text-white flex items-center justify-between px-4 py-2">
      <nav className="flex gap-4">
        <Link href="/">Peas Of Art</Link>
      </nav>

      {/* Burger Menu Icon */}
      <button
        className="text-white flex items-center justify-center p-2"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <Menu className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 right-4 bg-gray-800 p-4 rounded-lg shadow-lg">
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:underline">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/legal" className="hover:underline">
                Legal
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
