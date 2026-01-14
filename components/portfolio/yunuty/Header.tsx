"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative z-50 bg-primary pt-4 pb-0">
      <nav className="container mx-auto px-4 pt-1 pb-0 flex items-center justify-center w-full">
        {/* Logo - Centered */}
        <Link href="/" className="flex items-center group">
          <div className="relative">
            <Image
              src="/logo.png"
              alt="YUNUTY CONNECT Logo"
              width={180}
              height={180}
              className="object-contain w-full h-full"
              priority
            />
          </div>
        </Link>
      </nav>
    </header>
  );
}
