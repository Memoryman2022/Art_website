import Mail from "components/mail";

export default function Footer() {
  return (
    <footer className="left-0 w-full h-40 bg-gray-900 opacity-90 text-white flex flex-col items-center justify-around px-4 py-2 z-50 font-custom">
      {/* Mail Subscription */}
      <Mail />

      {/* Copyright Notice */}
      <p className="text-sm md:block">© 2024 by Katja Stadel</p>
    </footer>
  );
}
