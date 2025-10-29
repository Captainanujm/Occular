"use client";
import Link from "next/link";
import { FaPinterest, FaFacebook, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";

export default function RecentPosts() {
  const posts = [
    {
      title: "Top 10 Pharma Brands in India",
      link: "/top-10-pharma-brands-in-india",
    },
    {
      title: "How to Secure Monopoly Rights for A Pharma Franchise: An Essential Guide for Indian Entrepreneurs",
      link: "/secure-monopoly-rights-pharma-franchise",
    },
    {
      title: "How to Launch a Successful Pharma Franchise Business in India",
      link: "/launch-successful-pharma-franchise-business",
    },
    {
      title: "Top Pantoprazole Tablets in India",
      link: "/top-pantoprazole-tablets-in-india",
    },
    {
      title: "Top 10 Deflazacort Tablets Brands in India",
      link: "/top-10-deflazacort-tablets-brands-in-india",
    },
  ];

  return (
    <div className="bg-gray-800 text-white p-6 rounded-2xl w-full max-w-sm">
      <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
        Recent Posts
      </h2>
      <ul className="space-y-3">
        {posts.map((post, index) => (
          <li key={index} className="border-b border-gray-700 pb-2 hover:translate-x-1 transition-transform">
            <Link
              href={post.link}
              className="text-gray-300 hover:text-blue-400 text-sm flex items-start"
            >
              <span className="mr-2 text-blue-400">›</span>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
