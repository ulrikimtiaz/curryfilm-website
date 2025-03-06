"use client";
import Navbar from "../../../components/Navbar"; 
import Image from "next/image";

export default function Team() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src="/team-bg.jpg" 
          alt="Team Background" 
          layout="fill" 
          objectFit="cover"
        />
      </div>

      <div className="text-center mt-20 px-6">
        <h1 className="text-4xl font-bold text-white">Our Team</h1>
        <p className="text-lg mt-2 text-white">
          Meet the people behind Curry Film AS.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 max-w-5xl mx-auto">
        
        {/* Ulrik */}
<div className="text-center bg-white p-6 rounded-lg shadow-lg">
  <Image 
    src="/ulrik.jpg" 
    alt="Ulrik Imtiaz Rolfsen" 
    width={600} 
    height={600} 
    className="mx-auto"
  />
  <h2 className="text-2xl font-semibold mt-4">Ulrik Imtiaz Rolfsen</h2>
  <p className="text-lg mt-2">DIRECTOR</p>
  <p className="text-lg mt-2 text-gray-500">
    <a href="mailto:ulrik@curryfilm.no" className="text-blue-500 hover:underline">ulrik@curryfilm.no</a>
  </p>
  <p className="text-lg mt-2 text-gray-500">
    🎬 <a href="https://pro.imdb.com/name/nm1975024" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
      IMDbPro Profil
    </a>
  </p>
</div>

        {/* Kim */}
        <div className="text-center bg-white p-6 rounded-lg shadow-lg">
          <Image 
            src="/kim.jpg" 
            alt="Kim K. Berle" 
            width={600} 
            height={600} 
            className="mx-auto"
          />
          <h2 className="text-2xl font-semibold mt-4 text-black">Kim K. Berle</h2>
          <p className="text-lg mt-2 text-black">CINEMATOGRAPHER</p>
          <p className="text-lg mt-2 text-gray-500">
            <a href="mailto:berle.kim@gmail.com" className="text-blue-500 hover:underline">berle.kim@gmail.com</a>
          </p>
          <p className="text-lg mt-2 text-gray-500">
            📞 <a href="tel:+4792440321" className="text-blue-500 hover:underline">+47 924 40 321</a>
          </p>
        </div>

        {/* Philip */}
        <div className="text-center bg-white p-6 rounded-lg shadow-lg">
          <Image 
            src="/philip.jpg" 
            alt="Philip H. Sivertsen" 
            width={600} 
            height={600} 
            className="mx-auto"
          />
          <h2 className="text-2xl font-semibold mt-4 text-black">Philip H. Sivertsen</h2>
          <p className="text-lg mt-2 text-black">PRODUCTION MANAGER</p>
          <p className="text-lg mt-2 text-gray-500">
            <a href="mailto:philiphallresivertsen@gmail.com" className="text-blue-500 hover:underline">philiphallresivertsen@gmail.com</a>
          </p>
          <p className="text-lg mt-2 text-gray-500">
            📞 <a href="tel:+4791386130" className="text-blue-500 hover:underline">+47 913 86 130</a>
          </p>
        </div>


      </div>
    </main>
  );
}
