"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    number: "",
    gst: "No",
    drugLicense: "No",
    lookingFor: "PCD Franchise",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill the required fields.");
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.number || "N/A",
        location: formData.location || "N/A",
        gst: formData.gst,
        drugLicense: formData.drugLicense,
        lookingFor: formData.lookingFor,
        message: formData.message,
        time: new Date().toLocaleString(),
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        location: "",
        number: "",
        gst: "No",
        drugLicense: "No",
        lookingFor: "PCD Franchise",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);
      alert("Failed to send message.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        w-full max-w-3xl mx-auto 
        backdrop-blur-xl bg-gray-900/40 
        border border-teal-600/20 
        p-8 rounded-2xl shadow-2xl 
        text-white space-y-6 
        transition-all duration-300
      "
    >
      {/* Title */}
      <h2 className="text-3xl font-semibold text-center text-teal-300 tracking-wide">
        Contact Us
      </h2>
      <p className="text-center text-gray-400 text-sm mb-4">
        Fill the form and our team will reach out to you shortly.
      </p>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {[
          { name: "name", placeholder: "Full Name", required: true },
          { name: "email", placeholder: "Email", required: true },
          { name: "number", placeholder: "Contact Number" },
          { name: "location", placeholder: "Location" },
        ].map((input) => (
          <input
            key={input.name}
            type="text"
            name={input.name}
            placeholder={input.placeholder}
            required={input.required}
            value={formData[input.name]}
            onChange={handleChange}
            className="
              bg-gray-800/60 text-gray-200 
              placeholder-gray-400 
              border border-gray-700 
              rounded-xl p-3 
              focus:ring-2 focus:ring-teal-400 
              shadow-inner
              transition-all duration-200
            "
          />
        ))}
      </div>

      {/* Radio Groups */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* GST */}
        <div>
          <p className="text-sm font-medium text-teal-300 mb-1">GST Number</p>
          <div className="flex items-center gap-4 text-gray-300">
            {["Yes", "No"].map((val) => (
              <label
                key={val}
                className="flex items-center gap-2 cursor-pointer hover:text-teal-300 transition"
              >
                <input
                  type="radio"
                  name="gst"
                  value={val}
                  checked={formData.gst === val}
                  onChange={handleChange}
                  className="accent-teal-400"
                />
                {val}
              </label>
            ))}
          </div>
        </div>

        {/* Drug License */}
        <div>
          <p className="text-sm font-medium text-teal-300 mb-1">Drug License</p>
          <div className="flex items-center gap-4 text-gray-300">
            {["Yes", "No"].map((val) => (
              <label
                key={val}
                className="flex items-center gap-2 cursor-pointer hover:text-teal-300 transition"
              >
                <input
                  type="radio"
                  name="drugLicense"
                  value={val}
                  checked={formData.drugLicense === val}
                  onChange={handleChange}
                  className="accent-teal-400"
                />
                {val}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Dropdown */}
      <div>
        <p className="text-sm font-medium text-teal-300 mb-1">Looking For</p>
        <select
          name="lookingFor"
          value={formData.lookingFor}
          onChange={handleChange}
          className="
            bg-gray-800/60 text-gray-200 
            border border-gray-700 
            rounded-xl p-3 w-full 
            focus:ring-2 focus:ring-teal-400
            transition
          "
        >
          <option value="PCD Franchise">PCD Franchise</option>
          <option value="Third Party Manufacturing">Third Party Manufacturing</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="
          bg-gray-800/60 text-gray-200 placeholder-gray-400 
          border border-gray-700 rounded-xl 
          p-3 w-full h-32 resize-none 
          focus:ring-2 focus:ring-teal-400 
          transition-all duration-200
        "
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="
          w-full bg-teal-500 hover:bg-teal-600 
          text-white font-semibold py-3 rounded-xl 
          shadow-lg shadow-teal-600/30 
          hover:shadow-teal-500/50 
          transition-all duration-300
        "
      >
        Send Message
      </button>
    </form>
  );
}
