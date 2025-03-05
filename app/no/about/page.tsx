"use client";
import Navbar from "../../components/Navbar"; 
import Image from "next/image";
import Link from "next/link"; // 🔥 Sørg for at Link er importert!

export default function About() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Hero Image */}
      <div className="relative w-full h-screen">
        <Image 
          src="/hero.jpg" 
          alt="Curry Film AS" 
          layout="fill" 
          objectFit="cover"
        />

        {/* Tekst oppå bildet */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white text-center px-4 py-10 max-w-3xl mx-auto h-full overflow-y-auto">
          <h1 className="text-4xl font-bold">Om oss</h1>
          <p className="text-lg mt-4">
            Curry Film AS har produsert filmer og TV-serier siden 2012. 
            Vårt fokus er kvalitet og engasjerende historier som berører publikum.
          </p>
          <p className="text-lg mt-4">
            Vi skaper dokumentarer og dramaer for TV, kino og digitale kanaler.
          </p>
          <p className="text-lg mt-4">
            Vi er basert i Oslo.
          </p>

          {/* 🔥 Link til "Om folka våre" */}
          <Link href="/no/about/team" className="text-lg text-blue-300 hover:underline mt-6">
            → Se folka bak Curry Film
          </Link>
        </div>
      </div>
    </main>
  );
}
