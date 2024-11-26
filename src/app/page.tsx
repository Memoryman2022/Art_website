import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen pb-20  font-[family-name:var(--font-geist-sans)]">
      {/* Main content below the header */}
      <main className="flex flex-col gap-16 mt-40  border-black">
        {" "}
        {/* Added margin-top of 40px */} {/* Full-width image */}
        <div style={{ position: "relative", width: "100%" }}>
          <Image
            src="/IMG-20220131-WA0003.jpg"
            alt="water_woman"
            layout="responsive"
            width={1920}
            height={1080}
          />
        </div>
      </main>
    </div>
  );
}
