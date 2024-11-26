import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      {/* Main content below the header */}
      <main className="flex flex-col  pt-header-height border-black">
        {/* Full-width image with overlay - Oils */}
        <div style={{ position: "relative", width: "100%" }}>
          <Image
            src="/IMG-20220131-WA0003.jpg"
            alt="water_woman"
            layout="responsive"
            width={1920}
            height={1080}
          />
          {/* Overlay Text for Oils */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href="/oils"
              className="text-white text-center text-6xl px-6 py-2 "
            >
              Oils
            </Link>
          </div>
        </div>

        {/* Full-width image with overlay - Water Colours */}
        <div style={{ position: "relative", width: "100%" }}>
          <Image
            src="/IMG_20230415_141404.jpg"
            alt="water_colours"
            layout="responsive"
            width={1920}
            height={1080}
          />
          {/* Overlay Text for Water Colours */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href="/watercolours"
              className="text-white text-center text-6xl px-6 py-2 "
            >
              Water <br />
              Colours
            </Link>
          </div>
        </div>

        {/* Full-width image with overlay - Acrylics */}
        <div style={{ position: "relative", width: "100%" }}>
          <Image
            src="/IMG-20200612-WA0000.jpg"
            alt="acrylics"
            layout="responsive"
            width={1920}
            height={1080}
          />
          {/* Overlay Text for Acrylics */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href="/acrylics"
              className="text-white text-center text-6xl px-6 py-2 "
            >
              Acrylics
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
