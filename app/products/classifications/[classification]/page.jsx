"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
export default function ProductCategoryPage() {
  const { classification } = useParams(); // e.g. "Antibiotics"
  const api = process.env.NEXT_PUBLIC_API_URL;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
const createSlug = (name) => name.toLowerCase().replace(/\s+/g, "-");
  useEffect(() => {
    if (!classification) return;

    setLoading(true);
    fetch(`${api}/api/products?classification=${decodeURIComponent(classification)}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, [classification]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-cyan-700 mb-8">
        {decodeURIComponent(classification)} Products
      </h1>

      {/* Loading State */}
      {loading ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : products.length > 0 ? (
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
      ) : (
        <p className="text-center text-gray-500">
          No products found for this category.
        </p>
      )}
    </div>
  );
}
