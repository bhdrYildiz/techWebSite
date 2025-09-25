"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">İşletmenizi Hemen Dijitale Taşıyın</h2>
          <p className="section-description mt-5">
            OsianaTech ile web, mobil ve dijital pazarlama çözümlerini tek bir
            platformda keşfedin. Markanızı dijital dünyada güçlü bir şekilde
            öne çıkarın.
          </p>
          <motion.img
            src={starImage.src}
            alt="Star Image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring Image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <Link href="/iletisim" className="flex items-center">
            <button
              className="bg-black text-white px-4 py-2 rounded-lg font-medium text-sm inline-flex items-center justify-center tracking-tight
             transition-all duration-300 hover:bg-gray-800 hover:scale-105"
            >
              İletişime Geç!
            </button>
          </Link>
          <Link href="/hizmetler" className="flex items-center">
            <button className="btn btn-text gap-1">
              <span>Hizmetlerimizi Gör</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
