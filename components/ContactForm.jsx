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

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in Name, Email, and Message fields.");
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

      alert("✅ Message sent successfully!");
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
      alert("❌ Failed to send message. Check console for details.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-gray-900 text-white p-6 rounded-xl shadow-lg space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="bg-gray-800 text-gray-200 placeholder-gray-400 border border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-teal-400 focus:outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="bg-gray-800 text-gray-200 placeholder-gray-400 border border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-teal-400 focus:outline-none"
          required
        />
        <input
          type="text"
          name="number"
          placeholder="Number"
          value={formData.number}
          onChange={handleChange}
          className="bg-gray-800 text-gray-200 placeholder-gray-400 border border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-teal-400 focus:outline-none"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="bg-gray-800 text-gray-200 placeholder-gray-400 border border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-teal-400 focus:outline-none"
        />
      </div>

      {/* Radio Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 mt-2">
        <div>
          <p className="text-sm font-medium mb-1">GST Number</p>
          <div className="flex items-center gap-4 text-sm">
            {["Yes", "No"].map((val) => (
              <label key={val} className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gst"
                  value={val}
                  checked={formData.gst === val}
                  onChange={handleChange}
                />
                {val}
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium mb-1">Drug License</p>
          <div className="flex items-center gap-4 text-sm">
            {["Yes", "No"].map((val) => (
              <label key={val} className="flex items-center gap-1">
                <input
                  type="radio"
                  name="drugLicense"
                  value={val}
                  checked={formData.drugLicense === val}
                  onChange={handleChange}
                />
                {val}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Dropdown */}
      <div>
        <p className="text-sm font-medium mb-1">Looking For</p>
        <select
          name="lookingFor"
          value={formData.lookingFor}
          onChange={handleChange}
          className="bg-gray-800 text-gray-200 border border-gray-700 rounded-md p-2 w-full focus:ring-2 focus:ring-teal-400 focus:outline-none"
        >
          <option value="PCD Franchise">PCD Franchise</option>
          <option value="Third Party Manufacturing">Third Party Manufacturing</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="bg-gray-800 text-gray-200 placeholder-gray-400 border border-gray-700 rounded-md p-2 w-full h-24 resize-none focus:ring-2 focus:ring-teal-400 focus:outline-none"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 rounded-md transition-all duration-200"
      >
        Send
      </button>
    </form>
  );
}
