"use client";
import React from "react";
import LinkHeader from "@/components/LinkHeader";
import DirectionsMap from "@/components/DirectionsMap";
import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";

const Page = () => {
  const storeLat = 26.95792;
  const storeLng = 79.7865;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1a23] via-[#0f2d35] to-[#08292d] text-gray-200">
      
      {/* Page Header */}
      <div className="w-full py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-teal-300 drop-shadow-lg">
          Get In Touch
        </h1>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          We're here to help you with queries related to services, franchise, 
          medicines, or partnership opportunities.
        </p>
      </div>

      {/* Header Link */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mb-6">
        <LinkHeader text="Contact" path="/contact" />
      </div>

      {/* Map Section */}
      <section className="w-full px-4 md:px-10 mb-12">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-teal-700/30">
          <DirectionsMap storeLat={storeLat} storeLng={storeLng} />
        </div>
      </section>

      {/* Contact Info + Form */}
      <section
        className="
          max-w-7xl mx-auto 
          flex flex-col md:flex-row 
          gap-10 px-4 md:px-10 py-12
        "
      >
        {/* Contact Details */}
        <div
          className="
            md:w-1/2 w-full 
            backdrop-blur-xl bg-gray-900/30 
            p-8 rounded-2xl shadow-2xl 
            border border-teal-600/20 
            hover:border-teal-500/40 hover:shadow-teal-500/20 
            transition-all duration-300
          "
        >
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div
          className="
            md:w-1/2 w-full
            backdrop-blur-xl bg-gray-900/30 
            p-8 rounded-2xl shadow-2xl 
            border border-teal-600/20 
            hover:border-teal-500/40 hover:shadow-teal-500/20 
            transition-all duration-300
          "
        >
          <ContactForm />
        </div>
      </section>

      {/* Bottom Call-To-Action */}
      <div className="w-full py-16 text-center bg-[#0a1c22]/40 mt-12">
        <h3 className="text-2xl md:text-3xl font-semibold text-teal-300">
          Need Immediate Assistance?
        </h3>
        <p className="text-gray-400 mt-2">
          Our team is available from <strong>9:00 AM – 6:00 PM</strong>, Mon–Sat.
        </p>
        <a
          href="tel:+919935133355"
          className="
            inline-block mt-6 px-8 py-3 
            bg-teal-500 hover:bg-teal-600 
            rounded-xl font-medium 
            text-white shadow-xl 
            hover:shadow-teal-500/40 
            transition-all
          "
        >
          Call Now
        </a>
      </div>

      {/* Footer Space */}
      <div className="h-10" />
    </div>
  );
};

export default Page;
