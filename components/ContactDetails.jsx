"use client";
import React from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactDetails() {
  return (
    <div
      className="
        flex-1 w-full 
        backdrop-blur-xl bg-gray-900/40 
        border border-teal-600/20 
        p-8 rounded-2xl shadow-2xl 
        text-gray-200 transition-all duration-300
        hover:border-teal-500/40 hover:shadow-teal-500/20
      "
    >
      {/* Title */}
      <h2
        className="
          text-3xl font-semibold mb-6 
          text-teal-300 tracking-wide
          border-b border-gray-700/60 pb-3
        "
      >
        Our Address
      </h2>

      <div className="space-y-6">

        {/* Address */}
        <div className="flex items-start gap-4">
          <div className="bg-teal-500/20 p-2 rounded-xl shadow-md">
            <MapPin className="text-teal-300 w-5 h-5" />
          </div>
          <p className="text-[15px] leading-relaxed text-gray-300">
            K-169, Street No. 4, New Usman-pur,  
            Gautam Vihar, Delhi-53
          </p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4">
          <div className="bg-teal-500/20 p-2 rounded-xl shadow-md">
            <Phone className="text-teal-300 w-5 h-5" />
          </div>
          <a
            href="tel:+919935133355"
            className="
              text-gray-300 text-[15px] 
              hover:text-teal-300 transition-all
            "
          >
            +91-9935133355
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4">
          <div className="bg-teal-500/20 p-2 rounded-xl shadow-md">
            <Mail className="text-teal-300 w-5 h-5" />
          </div>
          <a
            href="mailto:occularpharma1982@gmail.com"
            className="
              text-gray-300 text-[15px] break-all
              hover:text-teal-300 transition-all
            "
          >
            occularpharma1982@gmail.com
          </a>
        </div>

        {/* Working Hours */}
        <div className="flex items-start gap-4 border-t border-gray-800/60 pt-5 mt-4">
          <div className="bg-teal-500/20 p-2 rounded-xl shadow-md">
            <Clock className="text-teal-300 w-5 h-5" />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            <strong className="text-gray-300">Working Hours:</strong> <br />
            Mon – Sat, 9:00 AM – 6:00 PM
          </p>
        </div>
      </div>
    </div>
  );
}
