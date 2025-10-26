"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    number: "",
    gst: "",
    drugLicense: "",
    lookingFor: "PCD Franchise",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("✅ Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        location: "",
        number: "",
        gst: "",
        drugLicense: "",
        lookingFor: "PCD Franchise",
        message: "",
      });
    } else {
      alert("❌ Failed to send message. Try again later.");
    }
  } catch (err) {
    console.error(err);
    alert("⚠️ Server error. Please try again later.");
  }
};


  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-50 to-gray-100 py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-red-400 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-red-400 focus:outline-none"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-red-400 focus:outline-none"
          />
          <input
            type="tel"
            name="number"
            placeholder="Phone Number"
            value={formData.number}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-red-400 focus:outline-none"
          />
        </div>

        {/* Radio Groups */}
        <div className="flex flex-wrap justify-between mt-6 gap-6">
          <div className="flex-1 min-w-[200px]">
            <label className="font-medium text-gray-700 block mb-2">
              GST Number
            </label>
            <div className="flex gap-6 text-gray-700">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gst"
                  value="Yes"
                  onChange={handleChange}
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gst"
                  value="No"
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          <div className="flex-1 min-w-[200px]">
            <label className="font-medium text-gray-700 block mb-2">
              Drug License
            </label>
            <div className="flex gap-6 text-gray-700">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="drugLicense"
                  value="Yes"
                  onChange={handleChange}
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="drugLicense"
                  value="No"
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>
        </div>

        {/* Select Field */}
        <div className="mt-6">
          <label className="font-medium text-gray-700 block mb-2">
            Looking For
          </label>
          <select
            name="lookingFor"
            value={formData.lookingFor}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-red-400 focus:outline-none"
          >
            <option value="PCD Franchise">PCD Franchise</option>
            <option value="Third Party Manufacturing">
              Third Party Manufacturing
            </option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message Field */}
        <div className="mt-6">
          <label className="font-medium text-gray-700 block mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full h-32 resize-none focus:ring-2 focus:ring-red-400 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="mt-8 w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-lg transition-all duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
