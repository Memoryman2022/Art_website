"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
} from "components/ui/menubar";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-40 bg-gray-900 opacity-90 text-[hsl(40,90%,95%)] flex flex-col items-center justify-center px-6 py-2 z-50">
      <nav className="flex justify-center w-full mb-4">
        <Link href="/" className="text-3xl ">
          Peas of Art
        </Link>
      </nav>

      <Menubar className="border-none bg-transparent p-6">
        <MenubarMenu>
          <MenubarTrigger asChild>
            <Link href="/" className="flex items-center gap-2">
              <Image
                aria-hidden
                src="/home.png"
                alt="Home icon"
                width={38}
                height={38}
              />
              <span className="hidden md:block">Home</span>
            </Link>
          </MenubarTrigger>
          <MenubarTrigger asChild>
            <Link href="/Gallery" className="flex items-center gap-2">
              <Image
                aria-hidden
                src="/gallery.png"
                alt="Gallery icon"
                width={32}
                height={32}
              />
              <span className="hidden md:block">Gallery</span>
            </Link>
          </MenubarTrigger>
          <MenubarTrigger asChild>
            <Link href="/contact" className="flex items-center gap-2">
              <Image
                aria-hidden
                src="/contact.png"
                alt="Contact icon"
                width={36}
                height={36}
              />
              <span className="hidden md:block">Contact</span>
            </Link>
          </MenubarTrigger>
          <MenubarTrigger asChild>
            <Link href="/legal" className="flex items-center gap-2">
              <Image
                aria-hidden
                src="/legal.png"
                alt="Legal icon"
                width={32}
                height={32}
              />
              <span className="hidden md:block">Legal</span>
            </Link>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </header>
  );
}
