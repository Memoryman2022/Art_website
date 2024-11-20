"use client";

import Link from "next/link";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
} from "components/ui/menubar"; // Assuming you have this component

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-40 bg-gray-900 opacity-100 text-[hsl(40,90%,95%)] flex flex-col items-center justify-center px-6 py-2 z-50">
      <nav className="flex justify-center w-full mb-4">
        <Link href="/" className="text-3xl font-bold">
          Peas of Art
        </Link>
      </nav>

      <Menubar className=" border-none bg-transparent p-6">
        <MenubarMenu>
          <MenubarTrigger asChild>
            <Link href="/">Home</Link>
          </MenubarTrigger>
          <MenubarTrigger asChild>
            <Link href="/gallery">Gallery</Link>
          </MenubarTrigger>
          <MenubarTrigger asChild>
            <Link href="/contact">Contact</Link>
          </MenubarTrigger>
          <MenubarTrigger asChild>
            <Link href="/legal">Legal</Link>
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
