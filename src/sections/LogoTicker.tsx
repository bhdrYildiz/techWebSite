"use client";
import yildizHotel from "@/assets/yildizHotel.png";
import tatilim from "@/assets/tatilim.png";
import psikolog from "@/assets/psikolog.png";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export const LogoTicker = () => {
  const logos = [
    { src: yildizHotel, alt: "Yıldız Hotel Logo" },
    { src: tatilim, alt: "Tatilim Logo" },
    { src: psikolog, alt: "Psikolog Logo" },
  ];

  // Logoları çok kez tekrarla - sürekli akış için
  const allLogos = Array.from({ length: 10 }, () => logos).flat();
  const controls = useAnimation();
  const pathname = usePathname();
  const isMountedRef = useRef(true);

  // Pathname değiştiğinde animasyonu durdur
  useEffect(() => {
    if (pathname !== '/') {
      controls.stop();
      controls.set({ translateX: 0 });
    }
  }, [pathname, controls]);

  // Component unmount olduğunda animasyonu durdur
  useEffect(() => {
    isMountedRef.current = true;

    if (pathname === '/') {
      controls.start({
        translateX: "-50%",
        transition: {
          duration: 32,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        },
      });
    }

    return () => {
      isMountedRef.current = false;
      try {
        controls.stop();
        controls.set({ translateX: 0 });
      } catch (e) {
        // Silent fail
      }
    };
  }, [controls, pathname]);

  return (
    <div className="py-12 md:py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(148,163,184,0.05),transparent_50%)] pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex gap-16 flex-none pr-16"
            animate={controls}
          >
            {allLogos.map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="flex-shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="logo-ticker-image opacity-50 hover:opacity-100 transition-all duration-300 brightness-0 invert grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};