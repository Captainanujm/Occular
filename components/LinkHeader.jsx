"use client";
import React from "react";
import Link from "next/link";

const LinkHeader = ({ path, text }) => {
  return (
    <div className="w-full py-10 bg-gray-900 text-gray-100 flex flex-col items-center justify-center text-center shadow-md border-b border-gray-800">
      {/* Main Title */}
      <h1 className="text-3xl font-semibold text-white tracking-wide mb-3">
        {text}
      </h1>

      {/* Breadcrumb Navigation */}
      <div className="text-sm flex items-center gap-2">
        <Link
          href="/"
          className="text-teal-400 hover:text-white transition-colors duration-200"
        >
          Home
        </Link>
        <span className="text-gray-500">/</span>
        <Link
          href={path}
          className="text-teal-400 hover:text-white transition-colors duration-200"
        >
          {text}
        </Link>
      </div>
    </div>
  );
};

export default LinkHeader;
