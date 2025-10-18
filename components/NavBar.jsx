"use client";
import React from "react";
import { ChevronDown } from "lucide-react"; // npm install lucide-react
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const Navbar = () => {
  return (
    <nav
      className={poppins.className}
      style={{
        width: "100%",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        padding: "14px 0",
        border: "1px solid black", // black border
        fontSize: "16px",
        fontWeight: "500",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      {/* Menu Links */}
      <a href="#" style={linkStyle} className="active">
        HOME
      </a>

      <div style={dropdownStyle}>
        <a href="#" style={linkStyle}>
          ABOUT US
        </a>
        <ChevronDown size={16} color="#333" />
      </div>

      <div style={dropdownStyle}>
        <a href="#" style={linkStyle}>
          FACILITY
        </a>
        <ChevronDown size={16} color="#333" />
      </div>

      <div style={dropdownStyle}>
        <a href="#" style={linkStyle}>
          PRODUCTS
        </a>
        <ChevronDown size={16} color="#333" />
      </div>

      <a href="#" style={linkStyle}>
        TRACK ORDER
      </a>

      <a href="#" style={linkStyle}>
        VISUAL AID
      </a>

      <a href="#" style={linkStyle}>
        CONTACT
      </a>
    </nav>
  );
};

// 🔹 Styles
const linkStyle = {
  textDecoration: "none",
  color: "#222",
  letterSpacing: "0.5px",
  transition: "color 0.3s ease",
};

const dropdownStyle = {
  display: "flex",
  alignItems: "center",
  gap: "4px",
};

export default Navbar;
