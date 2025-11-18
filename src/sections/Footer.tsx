import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black/90 border-slate-700/50 text-gray-300 text-base py-6 text-center">
      <div className="container">
        <Link href="/" className="flex items-center justify-center hover:opacity-80 transition-opacity duration-300">
          <Image src="/Logo2.png" alt="OsianaTech Logo" height={50} width={150} />
        </Link>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-4 text-base">
          <Link href="/" className="hover:text-blue-400 transition-colors duration-300">
            AnaSayfa
          </Link>
          <Link href="/hakkimizda" className="hover:text-blue-400 transition-colors duration-300">
            Hakkımızda
          </Link>
          <Link href="/hizmetler" className="hover:text-blue-400 transition-colors duration-300">
            Hizmetler
          </Link>
          <Link href="/blog" className="hover:text-blue-400 transition-colors duration-300">
            Blog
          </Link>
          <Link href="/iletisim" className="hover:text-blue-400 transition-colors duration-300">
            İletişim
          </Link>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="#"
            className="hover:opacity-70 hover:scale-110 transition-all duration-300 cursor-pointer"
            aria-label="Twitter"
          >
            <SocialX className="brightness-0 invert opacity-60 hover:opacity-100" />
          </a>
          <a
            href="#"
            className="hover:opacity-70 hover:scale-110 transition-all duration-300 cursor-pointer"
            aria-label="Instagram"
          >
            <SocialInsta className="brightness-0 invert opacity-60 hover:opacity-100" />
          </a>
          <a
            href="#"
            className="hover:opacity-70 hover:scale-110 transition-all duration-300 cursor-pointer"
            aria-label="LinkedIn"
          >
            <SocialLinkedIn className="brightness-0 invert opacity-60 hover:opacity-100" />
          </a>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700/50">
          <p className="text-gray-400 text-base">
            &copy; {new Date().getFullYear()} OsianaTech. Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};
