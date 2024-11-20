import Image from "next/image";
import Link from "next/link";
// components
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
} from "components/ui/menubar";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Main content below the header */}
      <main className="flex flex-col gap-16 mt-40 border-[40px] border-black">
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
