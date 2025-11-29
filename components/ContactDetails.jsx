"use client";
import React from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactDetails() {
  return (
    <div className="flex-1 w-full bg-gray-900 text-gray-200 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-5 text-white border-b border-gray-700 pb-2">
        Our Address
      </h2>

      <div className="space-y-5">
        {/* Address */}
        <div className="flex items-start gap-3">
          <MapPin className="text-teal-400 w-5 h-5 mt-1 flex-shrink-0" />
          <p className="text-sm leading-relaxed">
            K-169, Street No. 4, New Usman-pur Gautam Vihar, Delhi-53
          </p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <Phone className="text-teal-400 w-5 h-5 flex-shrink-0" />
          <a
            href="tel:+919896713447"
            className="text-gray-300 text-sm hover:text-white transition-all"
          >
            +91-9935133355
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <Mail className="text-teal-400 w-5 h-5 flex-shrink-0" />
          <a
            href="mailto:medlockhealthcare@gmail.com"
            className="text-gray-300 text-sm hover:text-white transition-all break-all"
          >
           occularpharma1982@gmail.com
          </a>
        </div>

        {/* Working Hours */}
        <div className="flex items-center gap-3 border-t border-gray-800 pt-4 mt-3">
          <Clock className="text-teal-400 w-5 h-5 flex-shrink-0" />
          <p className="text-sm text-gray-400">
            <strong className="text-gray-300">Working Hours:</strong>{" "}
            Mon–Sat, 9:00 AM – 6:00 PM
          </p>
        </div>
      </div>
    </div>
  );
}
