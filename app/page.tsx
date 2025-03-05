"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full h-screen">
      {/* Full-page Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src="/hero.jpg" 
          alt="Curry Film" 
          fill
          className="object-cover"
        />
      </div>

      {/* Top Navigation Link */}
      <nav className="absolute top-6 left-6 z-50">
  <Link href="/no/about" className="text-white text-lg hover:underline cursor-pointer">
    Om oss / About us
  </Link>
</nav>

      {/* Centered "Curry Film" Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-6xl font-bold">Curry Film</h1>
      </div>
    </main>
  );
}
