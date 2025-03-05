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

        {/* Text over the image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white text-center px-4 py-10 max-w-3xl mx-auto h-full overflow-y-auto">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg mt-4">
            Curry Film AS is an award-winning production company that has 
            produced several successful films and TV series since 2012.
          </p>
          <p className="text-lg mt-4">
          We create documentaries and fiction for TV, cinema and digital channels.
          </p>
          <p className="text-lg mt-4">
          We are based in Oslo, Norway.
          </p>

          {/* 🔥 Link to "Our Team" Page */}
          <Link href="/en/about/team" className="text-lg text-blue-300 hover:underline mt-6">
            → Meet the team behind Curry Film
          </Link>
        </div>
      </div>
    </main>
  );
}
