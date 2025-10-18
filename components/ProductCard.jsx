// components/ProductCard.jsx
"use client";
export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow-sm bg-white p-4 hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-cyan-700">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.section}</p>
      <p className="text-sm">{product.classification}</p>
      <p className="text-xs text-gray-500">Packing: {product.packing}</p>
      <p className="text-sm font-semibold text-green-700 mt-2">
        {product.mrp}
      </p>
    </div>
  );
}
