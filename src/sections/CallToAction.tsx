"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // Pathname değiştiğinde scroll listener'ları temizle
  useEffect(() => {
    return () => {
      scrollYProgress.set(0);
    };
  }, [pathname, scrollYProgress]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-24 overflow-x-clip relative"
    >
      <div className="container relative z-10">
        <div className="section-heading relative text-center">
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-white via-gray-200 to-gray-400 text-transparent bg-clip-text">
            İşletmenizi Hemen Dijitale Taşıyın
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-gray-300 mt-5 max-w-2xl mx-auto">
            OsianaTech ile web, mobil ve dijital pazarlama çözümlerini tek bir
            platformda keşfedin. Markanızı dijital dünyada güçlü bir şekilde
            öne çıkarın.
          </p>
          <motion.img
            src={starImage.src}
            alt="Star Image"
            width={240}
            className="hidden md:block absolute -left-[450px] -top-[100px] opacity-20 blur-sm"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring Image"
            width={240}
            className="hidden md:block absolute -right-[450px] top-[80px] opacity-20 blur-sm"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex gap-4 mt-10 justify-center">
          <Link href="/iletisim" className="flex items-center">
            <button
              className="bg-gradient-to-r from-blue-900 to-slate-900 text-white px-6 py-2.5 rounded-lg font-medium text-sm inline-flex items-center justify-center tracking-tight transition-all duration-300 hover:from-blue-800 hover:to-slate-800 hover:scale-105 shadow-lg shadow-blue-900/50 border border-blue-800/50"
            >
              İletişime Geç!
            </button>
          </Link>
          <Link href="/hizmetler" className="flex items-center">
            <button className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm text-gray-200 bg-transparent border-2 border-blue-400/50 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/30 backdrop-blur-sm">
              <span>Hizmetlerimizi Gör</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
