// components/GridCard.jsx
"use client";
import Link from "next/link";

export default function GridCard({ title, link }) {
  return (
    <Link href={link}>
      <div className="border p-6 rounded-lg bg-white hover:shadow-lg hover:scale-[1.02] transition">
        <h3 className="text-xl font-semibold text-center text-cyan-800">
          {title}
        </h3>
      </div>
    </Link>
  );
}
