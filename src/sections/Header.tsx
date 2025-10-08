"use client";

import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import { useState } from "react";

const navItems = [
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Hizmetler", href: "/hizmetler" },
  { name: "Blog", href: "/blog" },
  { name: "İletişim", href: "/iletisim" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 backdrop-blur-md z-20">
      <div className="flex justify-between items-center py-3 bg-black text-white text-sm px-4 md:px-0">
        <p className="text-white/60 hidden md:block md:ml-48">
          info@osianatech.com
        </p>
        <div className="flex gap-2 ml-auto md:mr-48">
          <div className="hover:text-gray-500/80 cursor-pointer">
            <SocialX />
          </div>
          <div className="hover:text-gray-500/80 cursor-pointer">
            <SocialInsta />
          </div>
          <div className="hover:text-gray-500/80 cursor-pointer">
            <SocialLinkedIn />
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            </Link>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
              aria-label="Toggle menu"
            >
              <MenuIcon className="h-5 w-5" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 text-black/80 items-center">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="relative text-black/70 hover:text-black transition
                  after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                  after:w-0 after:h-[2px] after:bg-black
                  after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/905374945544?text=Merhaba%20size%20ulaşmak%20istiyorum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="bg-black text-white px-4 py-2 rounded-lg font-medium text-sm inline-flex items-center justify-center tracking-tight
    transition-all duration-300 hover:bg-gray-800 hover:scale-105"
                >
                  Hızlı Arama
                </button>
              </a>
            </nav>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4 animate-in slide-in-from-top">
              <div className="flex flex-col gap-4">
                {navItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-black/70 hover:text-black transition py-2 px-4 rounded-lg hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="https://wa.me/905374945544?text=Merhaba%20size%20ulaşmak%20istiyorum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2"
                >
                  <button
                    className="w-full bg-black text-white px-4 py-2 rounded-lg font-medium text-sm inline-flex items-center justify-center tracking-tight
      transition-all duration-300 hover:bg-gray-800"
                  >
                    Hızlı Arama
                  </button>
                </a>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};
