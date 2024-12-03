"use client";

import { useState, useEffect } from "react";
import { Painting } from "../lib/types"; // Import the Painting type
import paintings from "../../paintingPaths/paintingPaths"; // Import the paintings array

export default function Gallery() {
  const [validPaintings, setValidPaintings] = useState<Painting[]>([]);
  const [showImages, setShowImages] = useState(false);

  // Validate paintings client-side on component mount
  useEffect(() => {
    const validatePaintingsAsync = async () => {
      try {
        const response = await fetch("/api/validatePaintings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ paintings }), // Send paintings data in the request body
        });

        if (response.ok) {
          const data = await response.json();
          setValidPaintings(data); // Set validated paintings
        } else {
          console.error("Failed to validate paintings");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    validatePaintingsAsync();

    // Delay to show the images
    const timer = setTimeout(() => {
      setShowImages(true);
    }, 500); // Delay of 1 second

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  // Shuffle paintings for random display
  const shuffledPaintings = [...validPaintings].sort(() => Math.random() - 0.5);

  return (
    <div
      className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      style={{ paddingTop: "264px" }}
    >
      <main>
        <div className="grid grid-cols-2 gap-4">
          {showImages ? (
            shuffledPaintings.map((painting, index) => (
              <div
                key={index}
                className="relative block w-full h-64 overflow-hidden"
              >
                <img
                  src={painting.src}
                  alt={painting.alt}
                  className="transition-transform duration-300 ease-out transform hover:scale-110 object-cover w-full h-full"
                />
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center h-64">
              <span>Loading...</span>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
