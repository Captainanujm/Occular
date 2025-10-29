"use client";
import React from "react";
import RecentPosts from "./RecentPosts";
import OurAddress from "./OurAddress";
import ShortLinks from "./ShortLinks";
import ContactForm from "./ContactForm";
import { FaPinterest, FaFacebookF, FaLinkedinIn, FaInstagram, FaPlus } from "react-icons/fa";
import { X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Recent Posts */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
          <RecentPosts />
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Follow Us On</h3>
            <div className="flex space-x-3">
              <a href="#" className="bg-black p-2 rounded-full hover:bg-gray-700 transition"><X size={18} /></a>
              <a href="#" className="bg-[#E60023] p-2 rounded-full hover:opacity-80"><FaPinterest size={18} /></a>
              <a href="#" className="bg-[#1877F2] p-2 rounded-full hover:opacity-80"><FaFacebookF size={18} /></a>
              <a href="#" className="bg-[#0A66C2] p-2 rounded-full hover:opacity-80"><FaLinkedinIn size={18} /></a>
              <a href="#" className="bg-[#E4405F] p-2 rounded-full hover:opacity-80"><FaInstagram size={18} /></a>
              <a href="#" className="bg-green-500 p-2 rounded-full hover:opacity-80"><FaPlus size={18} /></a>
            </div>
          </div>
        </div>

        {/* Our Address */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Address</h2>
          <OurAddress />
        </div>

        {/* Short Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Short Links</h2>
          <ShortLinks />
          <h3 className="text-lg font-semibold mt-8 mb-2">Find Us On Facebook</h3>
          <div className="w-full h-24 bg-gray-700 flex items-center justify-center text-gray-400 text-sm">
            Facebook Embed
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <ContactForm />
        </div>
      </div>

      {/* Bottom logos */}
      <div className="flex flex-wrap justify-center items-center mt-12 space-x-6">
        <img src="/gmp.png" alt="GMP Logo" className="h-16" />
        <img src="/iso9001.png" alt="ISO Logo" className="h-16" />
        <img src="/who.png" alt="WHO Logo" className="h-16" />
        <img src="/satisfaction.png" alt="Satisfaction Logo" className="h-16" />
      </div>
    </footer>
  );
}
