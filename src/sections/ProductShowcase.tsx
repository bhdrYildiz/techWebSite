"use client";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export const ProductShowcase = () => {
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
      className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="inline-flex text-sm border border-blue-400/30 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg tracking-tight backdrop-blur-sm">
              Dijital Dünyada Güçlenin
            </div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-white via-gray-200 to-gray-400 text-transparent bg-clip-text mt-5">
            Markanızı Dijitalde Bir Adım Öne Taşıyın
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-gray-300 mt-5 max-w-3xl mx-auto">
            OsianaTech, modern web tasarım, mobil çözümler, SEO, SaaS ve danışmanlık çözümleri ile işletmenizi dijital dünyada daha görünür, erişilebilir ve etkili hale getirir.
          </p>
        </div>
        <div className="relative">
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32 opacity-20 blur-sm"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36 opacity-20 blur-sm"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
