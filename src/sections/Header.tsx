"use client";

import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Hizmetler", href: "/hizmetler" },
  { name: "Blog", href: "/blog" },
  { name: "İletişim", href: "/iletisim" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Pathname değiştiğinde mobil menüyü kapat
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 backdrop-blur-md z-20 bg-slate-900/95 border-b border-slate-800/50">
      <div className="flex justify-between items-center py-2 bg-black/90 text-white text-xs px-4 md:px-0">
        <p className="text-white/50 hidden md:block md:ml-48 text-xs">
          info@osianatech.com
        </p>
        <div className="flex gap-3 ml-auto md:mr-48">
          <a href="#" className="hover:opacity-100 cursor-pointer transition-all duration-300 hover:scale-110" aria-label="Twitter">
            <SocialX className="brightness-0 invert opacity-80 w-6 h-6" />
          </a>
          <a href="#" className="hover:opacity-100 cursor-pointer transition-all duration-300 hover:scale-110" aria-label="Instagram">
            <SocialInsta className="brightness-0 invert opacity-80 w-6 h-6" />
          </a>
          <a href="#" className="hover:opacity-100 cursor-pointer transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
            <SocialLinkedIn className="brightness-0 invert opacity-80 w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="py-3 bg-slate-900/80">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center justify-center hover:opacity-80 transition-opacity duration-300">
              <Image src="/Logo3.png" alt="OsianaTech Logo" height={50} width={220} className="h-12 md:h-10 w-auto" />
            </Link>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition text-white"
              aria-label="Toggle menu"
            >
              <MenuIcon className="h-5 w-5" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-5 text-white/80 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-white/70 hover:text-white transition text-sm
                  after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                  after:w-0 after:h-[2px] after:bg-blue-400
                  after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/905374945545?text=Merhaba%20size%20ulaşmak%20istiyorum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="bg-gradient-to-r from-blue-900 to-slate-900 text-white px-4 py-1.5 rounded-lg font-medium text-sm inline-flex items-center justify-center tracking-tight
    transition-all duration-300 hover:from-blue-800 hover:to-slate-800 hover:scale-105 shadow-lg shadow-blue-900/50 border border-blue-800/50"
                >
                  Hızlı Arama
                </button>
              </a>
            </nav>
          </div>

          {/* Mobile Navigation */}
          <nav
            className={`md:hidden mt-3 pb-3 border-t border-slate-700 pt-3 transition-all duration-300 ${mobileMenuOpen
              ? 'opacity-100 max-h-96 visible'
              : 'opacity-0 max-h-0 invisible overflow-hidden'
              }`}
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/70 hover:text-white transition py-1.5 px-4 rounded-lg hover:bg-slate-800 text-sm"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/905374945545?text=Merhaba%20size%20ulaşmak%20istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1"
              >
                <button
                  className="w-full bg-gradient-to-r from-blue-900 to-slate-900 text-white px-4 py-1.5 rounded-lg font-medium text-sm inline-flex items-center justify-center tracking-tight
      transition-all duration-300 hover:from-blue-800 hover:to-slate-800 border border-blue-800/50"
                >
                  Hızlı Arama
                </button>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
