"use client";

import Link from "next/link";
import Image from "next/image";
import { Menubar, MenubarMenu, MenubarTrigger } from "components/ui/menubar";

export default function Header() {
  return (
    <header className="font-custom fixed top-0 left-0 w-full bg-[hsl(var(--background))] opacity-90 text-[hsl(40,9%,9%)] flex flex-col items-center py-4 z-50 shadow-md">
      {/* Main Title */}
      <nav className="flex justify-center w-full mb-4">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Peas of Art
        </Link>
      </nav>

      {/* Menubar */}
      <Menubar className="border-none shadow-none bg-transparent flex justify-around w-full max-w-md">
        {/* Menu Items */}
        <MenubarMenu>
          <MenuItem href="/" iconSrc="/home.png" label="Home" />
        </MenubarMenu>
        <MenubarMenu>
          <MenuItem href="/Gallery" iconSrc="/gallery.png" label="Gallery" />
        </MenubarMenu>
        <MenubarMenu>
          <MenuItem href="/contact" iconSrc="/contact.png" label="Contact" />
        </MenubarMenu>
        <MenubarMenu>
          <MenuItem href="/legal" iconSrc="/legal.png" label="Legal" />
        </MenubarMenu>
      </Menubar>
    </header>
  );
}

/* Reusable Menu Item Component */
function MenuItem({
  href,
  iconSrc,
  label,
}: {
  href: string;
  iconSrc: string;
  label: string;
}) {
  return (
    <MenubarTrigger asChild>
      <Link href={href} className="flex flex-col items-center w-16">
        <div className="flex items-center justify-center h-12">
          <Image
            aria-hidden
            src={iconSrc}
            alt={`${label} icon`}
            width={32}
            height={32}
          />
        </div>
        <span className="text-sm mt-2">{label}</span>
      </Link>
    </MenubarTrigger>
  );
}
