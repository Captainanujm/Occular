// app/products/[slug]/page.jsx
import Image from "next/image";

async function getProduct(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return await res.json();
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f1d1f] text-red-400 text-lg">
        Product not found.
      </div>
    );

  return (
    <div className="min-h-screen bg-[#0f1d1f] py-14 px-6">
      <div className="max-w-4xl mx-auto bg-[#122728] border border-teal-700/40 shadow-xl shadow-black/30 rounded-2xl p-8 text-gray-200">

        {/* Product Name */}
        <h1 className="text-4xl font-semibold text-teal-300 tracking-wide">
          {product.name}
        </h1>

        {/* Image */}
        {product.image && (
          <div className="mt-6 flex justify-center">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-xl border border-teal-600/40 shadow-lg"
            />
          </div>
        )}

        {/* Description */}
        <p className="text-gray-300 mt-6 leading-relaxed">
          {product.description}
        </p>

        {/* Dynamic Sections */}
        {product.details?.map((section, i) => (
          <div key={i} className="mt-10">
            <h2 className="text-2xl font-medium text-teal-300">
              {section.heading}
            </h2>
            <p className="text-gray-300 mt-3 leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}

        {/* Divider */}
        <div className="mt-12 h-0.5 w-full bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

        {/* Metadata */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <p><span className="text-teal-300 font-medium">Section:</span> {product.section}</p>
          <p><span className="text-teal-300 font-medium">Classification:</span> {product.classification}</p>
          <p><span className="text-teal-300 font-medium">Packing:</span> {product.packing}</p>
          <p><span className="text-teal-300 font-medium">MRP:</span> {product.mrp}</p>
        </div>
      </div>
    </div>
  );
}
