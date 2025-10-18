// components/HeaderBar.jsx
import React from "react";
import { Search } from "lucide-react"; // npm install lucide-react
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
        padding: "16px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid black", // ✅ Added border here
        boxSizing: "border-box",
      }}
    >
      {/* Left: Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src="/Logo_image.jpg" // Place logo image in public folder
          alt="Occular Logo"
          width="110"
          height="110"
          style={{ objectFit: "contain" }}
        />
        <h1
          className={poppins.className}
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#0074b7",
          }}
        >
          Occular
        </h1>
      </div>

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
            width: "250px",
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
