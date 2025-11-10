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

  console.log("Submitting form with data:", formData);
  console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

  if (!process.env.NEXT_PUBLIC_API_URL) {
    alert("❌ API URL is missing! Set NEXT_PUBLIC_API_URL in Vercel Environment Variables.");
    return;
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    console.log("Response Status:", res.status);
    
    if (!res.ok) {
      alert(`❌ Server returned status ${res.status}. Check backend logs.`);
      return;
    }

    const data = await res.json();
    console.log("Response Data:", data);

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
      alert("❌ Message failed. Server responded but did not confirm success.");
    }

  } catch (err) {
    console.error("Fetch Error:", err);
    alert("⚠️ Network or Server error. Check Console for details.");
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
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="gst"
                value="Yes"
                onChange={handleChange}
              />
              Yes
            </label>
            <label className="flex items-center gap-1">
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

        <div>
          <p className="text-sm font-medium mb-1">Drug License</p>
          <div className="flex items-center gap-4 text-sm">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="drugLicense"
                value="Yes"
                onChange={handleChange}
              />
              Yes
            </label>
            <label className="flex items-center gap-1">
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
          <option value="Third Party Manufacturing">
            Third Party Manufacturing
          </option>
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
