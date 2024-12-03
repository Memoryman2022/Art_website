"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Utility function to get a random painting from the fetched list
const getRandomPainting = (
  paintings: { src: string; alt: string; link: string }[]
) => {
  if (paintings.length === 0) return ""; // If no paintings, return an empty string
  const randomImage = paintings[Math.floor(Math.random() * paintings.length)];
  return randomImage.src; // Return the src of the randomly selected painting
};

export default function Home() {
  const [oilPaintings, setOilPaintings] = useState<
    { src: string; alt: string; link: string }[]
  >([]);
  const [watercolourPaintings, setWatercolourPaintings] = useState<
    { src: string; alt: string; link: string }[]
  >([]);
  const [acrylicPaintings, setAcrylicPaintings] = useState<
    { src: string; alt: string; link: string }[]
  >([]);

  const [oilImage, setOilImage] = useState<string>("");
  const [watercolourImage, setWatercolourImage] = useState<string>("");
  const [acrylicImage, setAcrylicImage] = useState<string>("");

  useEffect(() => {
    // Fetch paintings for each category
    const fetchPaintings = async (category: string) => {
      try {
        const response = await fetch(`/api/getPaintings?category=${category}`);
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          console.error("Failed to fetch paintings for category:", category);
          return [];
        }
      } catch (error) {
        console.error(
          "Error fetching paintings for category:",
          category,
          error
        );
        return [];
      }
    };

    const loadImages = async () => {
      const oilData = await fetchPaintings("oils");
      const watercolourData = await fetchPaintings("watercolours");
      const acrylicData = await fetchPaintings("acrylics");

      setOilPaintings(oilData);
      setWatercolourPaintings(watercolourData);
      setAcrylicPaintings(acrylicData);

      // Set the random image for each category
      setOilImage(getRandomPainting(oilData));
      setWatercolourImage(getRandomPainting(watercolourData));
      setAcrylicImage(getRandomPainting(acrylicData));
    };

    loadImages();
  }, []);

  return (
    <div
      className="min-h-screen font-[family-name:var(--font-geist-sans)]"
      style={{ paddingTop: "164px" }}
    >
      {/* Main content below the header */}
      <main className="flex flex-col pt-header-height border-black">
        {/* Full-width image with overlay - Oils */}
        {oilImage && (
          <div className="relative w-full h-[500px] overflow-hidden">
            <Image
              src={oilImage}
              alt="Oil Painting"
              fill
              className="object-cover transition-transform duration-300 ease-out transform hover:scale-110"
            />
            {/* Overlay Text for Oils */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Link
                href="/oils"
                className="text-white text-center text-6xl px-6 py-2"
              >
                Oils
              </Link>
            </div>
          </div>
        )}

        {/* Full-width image with overlay - Water Colours */}
        {watercolourImage && (
          <div className="relative w-full h-[500px] overflow-hidden">
            <Image
              src={watercolourImage}
              alt="Water Colours"
              fill
              className="object-cover transition-transform duration-300 ease-out transform hover:scale-110"
            />
            {/* Overlay Text for Water Colours */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Link
                href="/watercolours"
                className="text-white text-center text-6xl px-6 py-2"
              >
                Water <br />
                Colours
              </Link>
            </div>
          </div>
        )}

        {/* Full-width image with overlay - Acrylics */}
        {acrylicImage && (
          <div className="relative w-full h-[500px] overflow-hidden">
            <Image
              src={acrylicImage}
              alt="Acrylic Painting"
              fill
              className="object-cover transition-transform duration-300 ease-out transform hover:scale-110"
            />
            {/* Overlay Text for Acrylics */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Link
                href="/acrylics"
                className="text-white text-center text-6xl px-6 py-2"
              >
                Acrylics
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
