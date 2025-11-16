"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SearchClient() {
  const api = process.env.NEXT_PUBLIC_API_URL;

  const params = useSearchParams();
  const router = useRouter();
  const query = params.get("query")?.toLowerCase() || "";

  const [all, setAll] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(false);

  // Fetch all products
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${api}/api/products`);
        const data = await res.json();
        setAll(Array.isArray(data) ? data : []);
      } catch {
        setAll([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [api]);

  // Filter Logic (name + desc + category + section + tags)
  useEffect(() => {
    if (!query) {
      setFiltered([]);
      return;
    }

    const q = query.toLowerCase();

    setFiltered(
      all.filter((p) => {
        const name = p?.name?.toLowerCase() || "";
        const desc = p?.description?.toLowerCase() || "";
        const category = p?.category?.toLowerCase() || "";
        const section = p?.section?.toLowerCase() || "";
        const tags = Array.isArray(p?.tags)
          ? p.tags.map((t) => t.toLowerCase())
          : [];

        return (
          name.includes(q) ||
          desc.includes(q) ||
          category.includes(q) ||
          section.includes(q) ||
          tags.some((t) => t.includes(q))
        );
      })
    );
  }, [query, all]);

  // Open Product Page
  const openProduct = (slug, name) => {
    const safeSlug = slug || name?.toLowerCase().replace(/\s+/g, "-");
    setPageLoading(true);
    router.push(`/products/${safeSlug}`);
  };

  // Image Handler
  const getImage = (p) =>
    p?.image || p?.image?.url || p?.images?.[0] || "/placeholder.png";

  return (
    <div className="min-h-screen bg-[#0b1720] text-white p-6 pt-28">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-teal-300 mb-4">
        Search Results for: <span className="text-teal-400">{query}</span>
      </h1>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center mt-20">
          <div className="w-10 h-10 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* No Results */}
      {!loading && filtered.length === 0 && (
        <p className="text-gray-400 text-lg mt-10">
          No products found for "{query}"
        </p>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {filtered.map((p) => (
          <div
            key={p._id}
            className="bg-[#11212d] rounded-xl p-4 border border-[#1c2f3a] hover:border-teal-400 transition group"
          >
            <div className="relative w-full h-48 bg-[#0e1c24] rounded-lg overflow-hidden">
              <Image
                src={getImage(p)}
                alt={p?.name || "Product"}
                fill
                className="object-contain p-2 group-hover:scale-105 transition"
              />
            </div>

            <h2 className="mt-3 text-lg font-medium text-teal-300 group-hover:text-teal-400">
              {p.name}
            </h2>

            <p className="text-gray-400 text-sm mt-1 line-clamp-2">
              {p.description || "High-quality pharmaceutical product"}
            </p>

            <div className="mt-3 flex justify-between items-center">
              <span className="text-sm text-gray-300">
                {p.section || p.category || "General"}
              </span>

              <button
                onClick={() => openProduct(p.slug, p.name)}
                className="px-3 py-1 rounded-lg bg-teal-600 text-sm hover:bg-teal-700 transition"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Page Loading Overlay */}
      {pageLoading && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-12 h-12 border-4 border-teal-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
