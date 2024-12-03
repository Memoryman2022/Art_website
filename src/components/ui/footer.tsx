import Mail from "components/mail";
import { FaInstagram } from "react-icons/fa"; // If you're using react-icons for Instagram

export default function Footer() {
  return (
    <footer className="relative left-0 w-full h-40 bg-gray-900 opacity-90 text-white flex flex-col items-center justify-around px-4 py-2 z-50 font-custom">
      {/* Mail Subscription */}
      <Mail />

      {/* Copyright Notice and Instagram Icon */}
      <div className="flex justify-between items-center w-full">
        <p className="text-sm md:block mx-auto">© 2024 by Katja Stadel</p>

        {/* Instagram Link */}
        <a
          href="https://www.instagram.com/art_by_katja_hh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition-colors px-4" // Added padding to the icon
        ></a>
        <FaInstagram size={24} />
      </div>
    </footer>
  );
}
