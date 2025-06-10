// app/components/Footer.tsx (atau mana saja)
import Image from "next/image";
import { FiInstagram } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { robotoMono } from "../Font";

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F4] text-[#4E4536] text-sm font-mono py-10 px-6 md:px-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left side */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-3">
            <Image
              src="/img/logo.png" // ganti ke path logo kamu
              alt="UntitleD Studio-1 Logo"
              width={100}
              height={100}
            />
          </div>
          <p className={`${robotoMono.className} max-w-md leading-relaxed`}>
            passionate about creating design solutions for the major challenges we face today—
            how to build sustainably, how to create environments that are both diverse and delightful,
            and how to incorporate ergonomic principles.
          </p>
          <p className={`${robotoMono.className} text-xs text-gray-500`}>
            <span className="font-bold">untitleDStudio-1</span> © 2025. All rights reserved.
          </p>
        </div>

        {/* Right side */}
        <div className="space-y-4 text-base">
          <div className="flex items-center space-x-2">
           <FiInstagram />
           <span className={`${robotoMono.className}`}>d.untitledstudio1</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdOutlineMailOutline />
            <span className={`${robotoMono.className}`}>d.untitledstudio1@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
