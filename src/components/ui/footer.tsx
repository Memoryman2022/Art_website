import Mail from "components/mail";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-40 bg-gray-900 opacity-80 text-white flex flex-col items-center justify-around px-4 py-2 z-50">
      {/* Mail Subscription */}
      <Mail />

      {/* Copyright Notice */}
      <p className="text-sm  md:block">© 2024 by Katja Stadel</p>
    </footer>
  );
}
