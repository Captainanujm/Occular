"use client";
import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const HeaderBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header
      className={poppins.className}
      style={{
        width: "100%",
        backgroundColor: "#fff",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        padding: "10px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid #ddd",
        boxSizing: "border-box",
        height: "90px",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      {/* Left: Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src="/Logo_image.jpg"
          alt="Occular Logo"
          width="90"
          height="90"
          style={{ objectFit: "contain" }}
        />
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "700",
            color: "#0074b7",
            marginLeft: "8px",
          }}
        >
          Occular
        </h1>
      </div>

      {/* Center: Navigation Menu */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          fontSize: "15px",
          fontWeight: "500",
          textTransform: "uppercase",
          position: "relative",
        }}
      >
        <Link href="/" style={{ color: "#0074b7", textDecoration: "none" }}>
          Home
        </Link>

        <Link
          href="#"
          style={{
            color: "#222",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          About Us <ChevronDown size={16} />
        </Link>

        <Link
          href="#"
          style={{
            color: "#222",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          Facility <ChevronDown size={16} />
        </Link>

        {/* PRODUCTS MENU WITH DROPDOWN */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          onMouseEnter={() => setOpenMenu(true)}
          onMouseLeave={() => setOpenMenu(false)}
        >
          <span
            style={{
              color: "#222",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              textDecoration: "none",
            }}
          >
            Products <ChevronDown size={16} />
          </span>

          {/* Dropdown */}
          {openMenu && (
            <ul
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "6px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                listStyle: "none",
                margin: 0,
                padding: "10px 0",
                width: "200px",
                zIndex: 1000,
              }}
            >
              <li style={{ padding: "8px 16px" }}>
                <Link
                  href="/products/all-products"
                  style={{
                    color: "#333",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  All Products
                </Link>
              </li>
              <li style={{ padding: "8px 16px" }}>
                <Link
                  href="/products/sections"
                  style={{
                    color: "#333",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  Section Wise
                </Link>
              </li>
              <li style={{ padding: "8px 16px" }}>
                <Link
                  href="/products/classifications"
                  style={{
                    color: "#333",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  Category Wise
                </Link>
              </li>
            </ul>
          )}
        </div>

        <Link href="#" style={{ color: "#222", textDecoration: "none" }}>
          Track Order
        </Link>

        <Link href="#" style={{ color: "#222", textDecoration: "none" }}>
          Visual Aid
        </Link>

        <Link href="/contact" style={{ color: "#222", textDecoration: "none" }}>
          Contact
        </Link>
      </nav>

      {/* Right: Search */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          style={{
            padding: "8px 12px",
            border: "none",
            outline: "none",
            width: "200px",
            fontFamily: "inherit",
          }}
        />
        <button
          style={{
            backgroundColor: "#000",
            color: "white",
            padding: "8px 10px",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Search size={18} />
        </button>
      </div>
    </header>
  );
};

export default HeaderBar;
