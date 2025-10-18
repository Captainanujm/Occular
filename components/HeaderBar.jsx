"use client";
import React from "react";
import { Search, ChevronDown } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const HeaderBar = () => {
  return (
    <header
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
      }}
      className={poppins.className}
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
        }}
      >
        <a href="#" style={{ color: "#0074b7", textDecoration: "none" }}>
          Home
        </a>

        <a href="#" style={{ color: "#222", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>
          About Us <ChevronDown size={16} />
        </a>

        <a href="#" style={{ color: "#222", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>
          Facility <ChevronDown size={16} />
        </a>

        <a href="#" style={{ color: "#222", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>
          Products <ChevronDown size={16} />
        </a>

        <a href="#" style={{ color: "#222", textDecoration: "none" }}>
          Track Order
        </a>

        <a href="#" style={{ color: "#222", textDecoration: "none" }}>
          Visual Aid
        </a>

        <a href="#" style={{ color: "#222", textDecoration: "none" }}>
          Contact
        </a>
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
