import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

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

// API handler (POST method)
export async function POST(req: Request) {
  try {
    const { paintings } = await req.json(); // Parse the JSON body
    const validatedPaintings = validatePaintings(paintings); // Validate paintings
    return NextResponse.json(validatedPaintings); // Return the validated paintings as JSON
  } catch (error: unknown) {
    // Explicitly type the error
    // Type 'error' as an instance of Error to access 'message'
    if (error instanceof Error) {
      return NextResponse.json(
        { message: "Error validating paintings", error: error.message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { message: "Unknown error", error: "An unknown error occurred" },
        { status: 500 }
      );
    }
  }
}
