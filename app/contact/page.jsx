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
   <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-gray-200">
      {/* Header */}
      <LinkHeader text="Contact" path="/contact" />

      {/* Map Section */}
      <section className="w-full h-[400px] md:h-[500px]">
        <DirectionsMap storeLat={storeLat} storeLng={storeLng} />
      </section>

      {/* Contact Info & Form */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 px-4 md:px-8 py-12">
        {/* Contact Details */}
        <div className="md:w-1/2 w-full">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 w-full">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Page;
