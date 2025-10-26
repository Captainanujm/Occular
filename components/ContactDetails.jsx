"use client";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactDetails() {
  return (
    <div className="flex-1 w-full bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center md:text-left">
        Contact Details
      </h2>

      <div className="space-y-6 text-gray-700">
        {/* Address */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <MapPin className="text-red-500 w-6 h-6 mt-1" />
          </div>
          <p className="leading-relaxed">
            Plot No 203, 2nd Floor, Industrial Area, Phase 2, Panchkula, Haryana
            134113, India
          </p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4">
          <Phone className="text-red-500 w-6 h-6" />
          <a
            href="tel:+919896713447"
            className="text-gray-800 font-medium hover:text-red-600 transition-all"
          >
            +91-9896713447
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4">
          <Mail className="text-red-500 w-6 h-6" />
          <a
            href="mailto:medlockhealthcare@gmail.com"
            className="text-gray-800 font-medium hover:text-red-600 transition-all"
          >
            medlockhealthcare@gmail.com
          </a>
        </div>

        {/* Optional: Working Hours */}
        <div className="pt-2 border-t border-gray-100 mt-4">
          <p className="text-gray-600 text-sm">
            <strong>Working Hours:</strong> Mon–Sat, 9:00 AM – 6:00 PM
          </p>
        </div>
      </div>
    </div>
  );
}
