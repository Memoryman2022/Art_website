import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-gray-900 opacity-80 text-white flex items-center justify-around px-4 py-2">
      <h1>Peas Of Art</h1>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/impressum">Impressum</Link>
      </nav>
    </header>
  );
}
