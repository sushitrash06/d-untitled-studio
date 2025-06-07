// app/components/Hero.tsx (atau /components/Hero.tsx)
import Link from 'next/link';
import { nokora, robotoMono } from '../Font';


export default function Hero() {
  return (
    <section className="w-full bg-[#fdf7ef] py-16 mt-16">
      <div className="max-w-7xl mx-auto px-4 ">
        {/* Tagline */}
        <h1 className={`${nokora.className} text-4xl md:text-5xl font-normal text-gray-900 leading-tight`}>
          Beyond <span className="text-[#7c3619]">expectations</span>. Beyond <br />
          <span className="text-[#a65230]">imagination</span>.
        </h1>

        {/* Description */}
        <p className={`${robotoMono.className} mt-6 max-w-2xl text-gray-600 text-base md:text-lg leading-relaxed italic`}>
            <i>
          creating design solutions for the major challenges we face today—how to build sustainably, 
          how to create environments that are both diverse and delightful, 
          and how to incorporate ergonomic principles.</i>
        </p>

        {/* Button */}
        <div className="mt-8">
          <Link href="#learn-more">
            <button className="bg-[#d7be8d] text-gray-800 px-6 py-3 rounded-md hover:bg-[#c8ad7d] transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
