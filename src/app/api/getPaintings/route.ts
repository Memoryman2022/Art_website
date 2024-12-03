import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // Extract the category parameter from the URL
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  if (!category) {
    return NextResponse.json(
      { error: "Category is required" },
      { status: 400 }
    );
  }

  try {
    // Define the base path to paintings categories
    const paintingsBaseDir = path.join(
      process.cwd(),
      "public",
      "images",
      "paintings"
    );

    // Check if the category exists
    const categoryDir = path.join(paintingsBaseDir, category);
    if (!fs.existsSync(categoryDir)) {
      return NextResponse.json(
        { error: `Category "${category}" not found` },
        { status: 404 }
      );
    }

    // Read files from the selected category
    const files = fs.readdirSync(categoryDir);

    // Filter out non-image files (adjust extensions if necessary)
    const paintings = files
      .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))
      .map((file) => ({
        src: `/images/paintings/${category}/${file}`,
        alt: `${
          category.charAt(0).toUpperCase() + category.slice(1)
        } Painting ${file}`,
        link: `/paintings/${file.replace(/\.[^/.]+$/, "")}`, // Adjust this to point to individual painting pages
      }));

    return NextResponse.json(paintings);
  } catch (error) {
    console.error("Error reading paintings directory:", error);
    return NextResponse.json(
      { error: "Failed to fetch paintings" },
      { status: 500 }
    );
  }
}
