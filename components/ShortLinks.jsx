"use client";
import Link from "next/link";

export default function ShortLinks() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Third Party Manufacturing", href: "/third-party-manufacturing" },
    { name: "PHARMA FRANCHISE OPPORTUNITY", href: "/pharma-franchise-opportunity" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="bg-gray-800 text-white p-6 rounded-2xl w-full max-w-sm">
      <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
        Short Links
      </h2>

      <ul className="space-y-3">
        {links.map((link, index) => (
          <li
            key={index}
            className="border-b border-gray-700 pb-2 hover:translate-x-1 transition-transform"
          >
            <Link
              href={link.href}
              className="text-gray-300 hover:text-blue-400 text-sm flex items-start"
            >
              <span className="mr-2 text-blue-400">›</span>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6 border-b border-gray-700 pb-2">
        Find Us On Facebook
      </h2>
      <div className="mt-3">
        <Link
          href="https://www.facebook.com"
          target="_blank"
          className="text-blue-500 hover:text-blue-400 underline text-sm"
        >
          Visit our Facebook page →
        </Link>
      </div>
    </div>
  );
}
