"use client";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function AddressSection() {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-2xl w-full max-w-sm">
      <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
        Our Address
      </h2>

      <div className="space-y-4 text-gray-300 text-sm">
        <div className="flex items-start gap-3">
          <FaMapMarkerAlt className="text-blue-400 mt-1" />
          <p>
            Plot No 203, 2nd Floor, Industrial Area, Phase 2, Panchkula Haryana, Panchkula, Haryana 134113, India
          </p>
        </div>

        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-blue-400" />
          <a href="tel:+919896713447" className="hover:text-blue-400">
            +91-9896713447
          </a>
        </div>

        <div className="flex items-center gap-3">
          <FaEnvelope className="text-blue-400" />
          <a
            href="mailto:medlockhealthcare@gmail.com"
            className="hover:text-blue-400"
          >
            medlockhealthcare@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
