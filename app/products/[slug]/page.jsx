// app/products/[slug]/page.jsx
import Image from "next/image";

async function getProduct(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products/${slug}`,
    { cache: "no-store" } // always fetch fresh data
  );

  if (!res.ok) return null; // handle 404 or server error

  const data = await res.json();
  return data;
}


export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product)
    return <div className="p-10 text-center text-red-600">Product not found.</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white shadow-md rounded-xl">
      <h1 className="text-3xl font-bold text-cyan-700 mb-4">{product.name}</h1>

      {product.image && (
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="rounded-lg mb-6"
        />
      )}

      <p className="text-gray-700 mb-4">{product.description}</p>

      {/* Dynamic Headings + Content */}
      {product.details?.map((section, i) => (
        <div key={i} className="mt-6">
          <h2 className="text-xl font-semibold text-cyan-700">
            {section.heading}
          </h2>
          <p className="text-gray-700 mt-2">{section.content}</p>
        </div>
      ))}

      <div className="mt-10 border-t pt-4 text-sm text-gray-500">
        <p>
          <strong>Section:</strong> {product.section}
        </p>
        <p>
          <strong>Classification:</strong> {product.classification}
        </p>
        <p>
          <strong>Packing:</strong> {product.packing}
        </p>
        <p>
          <strong>MRP:</strong> {product.mrp}
        </p>
      </div>
    </div>
  );
}
