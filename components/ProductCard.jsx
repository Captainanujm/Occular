import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="cursor-pointer bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all group-hover:scale-[1.02]">
      {product.image && (
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      <h2 className="text-lg font-semibold text-cyan-700 group-hover:text-cyan-800">
        {product.name}
      </h2>
      <p className="text-gray-600 text-sm mt-1">{product.classification}</p>
      <p className="text-gray-500 text-sm">{product.packing}</p>
      <p className="text-cyan-600 font-medium mt-2">{product.mrp}</p>
    </div>
  );
}
