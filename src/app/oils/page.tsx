"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Oils() {
  const [paintings, setPaintings] = useState<
    {
      src: string;
      alt: string;
      link: string;
      title: string;
      category: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchPaintings = async () => {
      try {
        const response = await fetch("/api/getPaintings?category=oils");
        if (response.ok) {
          const data = await response.json();
          setPaintings(data); // Set fetched paintings to state
        } else {
          console.error("Failed to fetch paintings");
        }
      } catch (error) {
        console.error("Error fetching paintings:", error);
      }
    };

    fetchPaintings();
  }, []);

  return (
    <div
      className="w-full max-w-4xl mx-auto my-8 relative"
      style={{ paddingTop: "264px" }}
    >
      <div className="grid grid-cols-2 gap-4">
        {paintings.map((painting, index) => (
          <Link
            key={index}
            href={{
              pathname: `/individualPainting/${index}`,
              query: {
                src: painting.src,
                alt: painting.alt,
                title: `Painting ${index + 1}`,
                category: "Oils",
              },
            }}
            className="relative block w-full h-64 overflow-hidden"
          >
            <Image
              src={painting.src}
              alt={painting.alt}
              fill
              className="transition-transform duration-300 ease-out transform hover:scale-110"
              style={{ objectFit: "cover" }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
