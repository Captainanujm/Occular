// components/TopInfoBar.jsx
import React from "react";

const TopInfoBar = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#0074b7",
        color: "white",
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
        padding: "8px 0",
      }}
    >
      <div
        style={{
          display: "inline-block",
          paddingLeft: "100%",
          animation: "scrollText 18s linear infinite",
        }}
      >
        A WHO-GMP certified Company offering laboratory tested pharmaceuticals
        products. We are ISO 9001:2015 certified Company.
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
