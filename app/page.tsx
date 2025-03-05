import Navbar from './components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative h-screen w-screen">
      <Navbar />
      <div className="absolute inset-0">
        <Image 
          src="/hero.jpg" 
          alt="Curry Film AS" 
          layout="fill" 
          objectFit="cover" 
          priority 
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black/50 px-4 md:px-0">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide">
          CURRY FILM AS
        </h1>
        <p className="text-lg md:text-2xl mt-4 max-w-2xl leading-relaxed">
          Vi skaper unike og engasjerende filmproduksjoner med lidenskap og kreativitet.
        </p>
        <a href="/projects" className="mt-6 px-6 py-3 bg-white text-black font-semibold text-lg rounded-md hover:bg-gray-200 transition">
          Se våre prosjekter
        </a>
      </div>
    </main>
  );
}
