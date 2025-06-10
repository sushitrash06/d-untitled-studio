// app/components/HeroSection.tsx (atau bisa di folder mana aja)
import Image from "next/image";
import { robotoMono } from "../Font";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src={"/img/pic1.png"} // Ganti dengan path gambar yang sesuai
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay untuk gelap tipis */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Konten */}
      <div className="relative z-10 px-4 py-6 bg-[#c89f75]/80 backdrop-blur-sm rounded-sm max-w-md">
        <p
          className={`${robotoMono.className} text-white text-lg md:text-xl font-mono mb-4 leading-relaxed`}
        >
          Let&apos;s Build thoughtful spaces together - <br />
          start today and see the difference
        </p>
        <button className="bg-[#F9F1DE] text-gray-800 px-6 py-3 rounded-md hover:bg-[#c8ad7d] transition">
          <p
            className={`${robotoMono.className} text-[#4B3B13] text-sm font-mono leading-relaxed`}
          >
            Collaborate with us
          </p>
        </button>
      </div>
    </div>
  );
}
