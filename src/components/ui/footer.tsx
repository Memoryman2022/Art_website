import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-20 bg-gray-900 opacity-80 text-white flex items-center justify-around px-4 py-2">
      <nav className="flex gap-4">
        <Image
          aria-hidden
          src="/contact.png"
          alt="Globe icon"
          width={28}
          height={28}
        />
        <Link href="/contact">Contact</Link>
      </nav>
      <nav className="flex gap-4">
        <Image
          aria-hidden
          src="/legal.png"
          alt="Globe icon"
          width={28}
          height={28}
        />
        <Link href="/legal">legal</Link>
      </nav>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Go to nextjs.org →
      </a>
    </footer>
  );
}
