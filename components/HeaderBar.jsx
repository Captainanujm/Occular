"use client";
import React, { useState } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const HeaderBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`${poppins.className} sticky top-0 z-50 bg-[#0f172a] border-b border-gray-800 shadow-md`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/Logo_image.jpg"
            alt="Occular Logo"
            className="w-14 h-14 rounded-full object-cover border-2 border-teal-400 shadow-teal-400/40 shadow-sm"
          />
          <h1 className="text-2xl font-bold text-teal-400 tracking-tight">
            Occular
          </h1>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center gap-6 text-[15px] font-medium">
          <Link href="/" className="text-teal-400 hover:text-teal-300 transition">
            Home
          </Link>

          <Link href="#" className="flex items-center gap-1 text-gray-300 hover:text-teal-400">
            About Us <ChevronDown size={16} />
          </Link>

          <Link href="#" className="flex items-center gap-1 text-gray-300 hover:text-teal-400">
            Facility <ChevronDown size={16} />
          </Link>

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu(true)}
            onMouseLeave={() => setOpenMenu(false)}
          >
            <span className="flex items-center gap-1 text-gray-300 hover:text-teal-400 cursor-pointer">
              Products <ChevronDown size={16} />
            </span>

            {openMenu && (
              <ul className="absolute top-full left-0 w-48 mt-2 bg-[#1e293b] border border-gray-700 rounded-xl shadow-lg overflow-hidden">
                {[
                  { href: "/products/all-products", label: "All Products" },
                  { href: "/products/sections", label: "Section Wise" },
                  { href: "/products/classifications", label: "Category Wise" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-gray-200 hover:bg-[#0f172a] hover:text-teal-400 transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link href="#" className="text-gray-300 hover:text-teal-400">
            Track Order
          </Link>

          <Link href="/visual-aid" className="text-gray-300 hover:text-teal-400">
            Visual Aid
          </Link>

          <Link href="/contact" className="text-gray-300 hover:text-teal-400">
            Contact
          </Link>
        </nav>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center border border-gray-700 rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 outline-none bg-transparent text-gray-200 placeholder-gray-500 text-sm w-48"
          />
          <button className="bg-teal-500 text-white px-3 py-2 hover:bg-teal-400 transition">
            <Search size={18} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-teal-400"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Slide Down Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0f172a] border-t border-gray-800 px-6 py-4 space-y-4">
          <Link href="/" className="block text-gray-200 hover:text-teal-400">
            Home
          </Link>
          <Link href="#" className="block text-gray-200 hover:text-teal-400">
            About Us
          </Link>
          <Link href="#" className="block text-gray-200 hover:text-teal-400">
            Facility
          </Link>

          <details className="group">
            <summary className="text-gray-200 hover:text-teal-400 cursor-pointer">
              Products
            </summary>
            <div className="pl-4 mt-2 space-y-2">
              <Link href="/products/all-products" className="block text-gray-300 hover:text-teal-400">
                All Products
              </Link>
              <Link href="/products/sections" className="block text-gray-300 hover:text-teal-400">
                Section Wise
              </Link>
              <Link href="/products/classifications" className="block text-gray-300 hover:text-teal-400">
                Category Wise
              </Link>
            </div>
          </details>

          <Link href="#" className="block text-gray-200 hover:text-teal-400">
            Track Order
          </Link>
          <Link href="/visual-aid" className="block text-gray-200 hover:text-teal-400">
            Visual Aid
          </Link>
          <Link href="/contact" className="block text-gray-200 hover:text-teal-400">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default HeaderBar;
