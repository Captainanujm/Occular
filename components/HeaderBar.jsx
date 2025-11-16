"use client";
import React, { useState } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const HeaderBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [openMenu, setOpenMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [search, setSearch] = useState(""); // NEW STATE

  const isActive = (path) =>
    pathname === path ? "text-teal-400" : "text-gray-300";

  const closeMobileMenu = () => setMobileOpen(false);

  // Redirect to search page
  const handleSearch = () => {
    if (!search.trim()) return;
    router.push(`/search?query=${search}`);
    setSearch("");
  };

  return (
    <header
      className={`${poppins.className} sticky top-0 z-50 bg-[#0f172a] border-b border-gray-800 shadow-md`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 md:py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/Logo_image.jpg"
            alt="Occular Logo"
            className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover border-2 border-teal-400 shadow-teal-400/40 shadow-sm"
          />
          <h1 className="text-xl md:text-2xl font-bold text-teal-400 tracking-tight">
            Occular
          </h1>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center gap-6 text-[15px] font-medium">
          <Link href="/" className={`${isActive("/")} hover:text-teal-300 transition`}>
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

          <Link href="#" className={`${isActive("/track-order")} hover:text-teal-400`}>
            Track Order
          </Link>

          <Link href="/visual-aid" className={`${isActive("/visual-aid")} hover:text-teal-400`}>
            Visual Aid
          </Link>

          <Link href="/contact" className={`${isActive("/contact")} hover:text-teal-400`}>
            Contact
          </Link>
        </nav>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center border border-gray-700 rounded-full overflow-hidden">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="px-4 py-2 outline-none bg-transparent text-gray-200 placeholder-gray-500 text-sm w-48"
          />
          <button
            onClick={handleSearch}
            className="bg-teal-500 text-white px-3 py-2 hover:bg-teal-400 transition"
          >
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0f172a] border-t border-gray-800 px-6 transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen py-3" : "max-h-0 py-0"
        }`}
      >
        <Link href="/" onClick={closeMobileMenu} className={`block py-3 border-b border-gray-800 ${isActive("/")}`}>
          Home
        </Link>

        <Link href="#" className="block py-3 border-b border-gray-800 text-gray-300">
          About Us
        </Link>

        <Link href="#" className="block py-3 border-b border-gray-800 text-gray-300">
          Facility
        </Link>

        <details className="group border-b border-gray-800 py-2">
          <summary className="cursor-pointer text-gray-300 py-2">
            Products
          </summary>
          <div className="pl-4 mt-1 space-y-1">
            <Link href="/products/all-products" onClick={closeMobileMenu} className="block text-gray-400 hover:text-teal-400 py-1">
              All Products
            </Link>
            <Link href="/products/sections" onClick={closeMobileMenu} className="block text-gray-400 hover:text-teal-400 py-1">
              Section Wise
            </Link>
            <Link href="/products/classifications" onClick={closeMobileMenu} className="block text-gray-400 hover:text-teal-400 py-1">
              Category Wise
            </Link>
          </div>
        </details>

        <Link href="#" className="block py-3 border-b border-gray-800 text-gray-300">
          Track Order
        </Link>

        <Link href="/visual-aid" onClick={closeMobileMenu} className={`block py-3 border-b border-gray-800 ${isActive("/visual-aid")}`}>
          Visual Aid
        </Link>

        <Link href="/contact" onClick={closeMobileMenu} className={`block py-3 ${isActive("/contact")}`}>
          Contact
        </Link>

        {/* 🔥 Mobile Search Input */}
        <div className="mt-4 flex items-center border border-gray-700 rounded-full overflow-hidden">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="px-4 py-2 outline-none bg-transparent text-gray-200 placeholder-gray-500 text-sm w-full"
          />
          <button
            onClick={() => {
              handleSearch();
              closeMobileMenu();
            }}
            className="bg-teal-500 text-white px-3 py-2 hover:bg-teal-400 transition"
          >
            <Search size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
