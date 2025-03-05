"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const pathname = usePathname();

  // Finn språket fra URL-en
  const currentLocale = pathname.startsWith("/en") ? "en" : "no";

  // Tekster for navigasjonsmenyen
  const navText = {
    no: { about: "Om oss" },
    en: { about: "About Us" },
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center p-6 z-50 transition-all duration-300 ${
        scroll ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {/* Logo / Hjem-lenke */}
      <span className="text-white text-2xl font-bold">
        Curry Film
        </span>

      {/* Navigasjonslenker */}
      <div className="space-x-6">
        <Link href={`/${currentLocale}/about`} className="text-white hover:underline">
          {navText[currentLocale].about}
        </Link>
      </div>

      {/* Språkvalg */}
      <div className="space-x-4">
        <Link href="/no/about" className="text-white hover:underline">🇳🇴 NO</Link>
        <Link href="/en/about" className="text-white hover:underline">🇬🇧 EN</Link>
      </div>
    </nav>
  );
}
