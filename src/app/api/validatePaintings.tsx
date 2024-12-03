import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

// Define the Painting type
export interface Painting {
  src: string;
  alt: string;
  category: string;
  link: string;
}

// Function to validate paintings
export function validatePaintings(paintings: Painting[]): Painting[] {
  const validPaintings = paintings.filter((painting) => {
    const filePath = path.join(process.cwd(), "public", painting.src);
    return fs.existsSync(filePath); // Check if the file exists on the server
  });
  return validPaintings;
}

// API handler
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const validatedPaintings = validatePaintings(req.body.paintings);
    res.status(200).json(validatedPaintings);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
