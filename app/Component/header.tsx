// app/components/Header.tsx (kalau kamu pakai Next.js 13+)
// atau /components/Header.tsx di struktur biasa

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 bg-[#fdf7ef] shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/img/logo.png"
            alt="UntitleD Studio-1 Logo"
            width={100}
            height={100}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-8 text-gray-600 text-base">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <Link href="/about" className="hover:text-black transition">About</Link>
          <Link href="/projects" className="hover:text-black transition">Projects</Link>
          <Link href="/contact" className="hover:text-black transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
