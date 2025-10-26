"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
export default function AllProducts() {
  const api = process.env.NEXT_PUBLIC_API_URL;
  const [products, setProducts] = useState([]);
const createSlug = (name) => name.toLowerCase().replace(/\s+/g, "-");
  useEffect(() => {
    fetch(`${api}/api/products`)
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-cyan-700 mb-8">
        All Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <Link
            key={p._id}
            href={`/products/${createSlug(p.name)}`}
            className="block group"
          >
            <ProductCard product={p} />
          </Link>
        ))}
      </div>
    </div>
  );
}
