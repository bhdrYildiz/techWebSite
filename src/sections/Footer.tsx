import Image from "next/image";
import Logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <Link href="/" className="flex items-center justify-center">
          <Image src={Logo} alt="Saas Logo" height={40} width={40} />
        </Link>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="/">AnaSayfa</a>
          <a href="/hakkimizda">Hakkımızda</a>
          <a href="/hizmetler">Hizmetler</a>
          <a href="/blog">Blog</a>
          <a href="/iletisim">İletişim</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6 cursor-pointer">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
        </div>
        <p className="mt-6">
          &copy; 2025 OsianaTech, Tüm Hakları Saklıdır.
        </p>
      </div>
    </footer>
  );
};
