import Image from "next/image";
import { cn } from "app/lib/utils";
import classes from "./myCss.module.css";
//components
import Header from "components/header";
import Footer from "components/footer";
//pages

export default function Home() {
  const isDifferentStyle = true;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <div
          className={cn(
            "bg-red-100 flex flex-row",
            isDifferentStyle && classes.parentContainer2
          )}
        >
          TESTING
        </div>
      </main>
    </div>
  );
}
