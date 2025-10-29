import React from "react";

const TopInfoBar = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "linear-gradient(to right, #0f172a, #1e293b)", // dark gradient
        color: "#5eead4", // teal accent
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
        padding: "10px 0",
        fontSize: "0.95rem",
        fontWeight: "500",
        letterSpacing: "0.5px",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        style={{
          display: "inline-block",
          paddingLeft: "100%",
          animation: "scrollText 18s linear infinite",
        }}
      >
        🌿 A WHO-GMP certified company offering laboratory-tested pharmaceutical
        products. We are ISO 9001:2015 certified.
      </div>

      {/* Inline CSS animation */}
      <style>{`
        @keyframes scrollText {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default TopInfoBar;
