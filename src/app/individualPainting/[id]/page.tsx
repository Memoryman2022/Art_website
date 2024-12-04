"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function PaintingDetails() {
  const searchParams = useSearchParams();

  const src = searchParams.get("src");
  const alt = searchParams.get("alt");
  const title = searchParams.get("title");
  const category = searchParams.get("category");

  if (!src) {
    return <div>Loading...</div>; // Handle edge cases where query params are not yet available
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
      style={{ paddingTop: "222px" }}
    >
      {/* Title and category container */}
      <div className="w-full max-w-5xl bg-white shadow-md p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <h2 className="text-lg text-gray-600 mb-4">Category: {category}</h2>
      </div>

      {/* Painting container */}
      <div className="relative w-full max-w-5xl h-[70vh] mt-6 bg-white shadow-md">
        <Image
          src={src}
          alt={alt || "Painting"}
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
      </div>
    </div>
  );
}
