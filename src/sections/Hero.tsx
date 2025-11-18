"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import {
  motion,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Typewriter animasyonu için component
const TypewriterText = ({
  text,
  className = "",
  delay = 0,
  speed = 0.03
}: {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}) => {
  const letters = Array.from(text);

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delay: delay + index * speed,
                duration: 0.1,
              },
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Döngülü Typewriter - yazıyor, bekliyor, geriye siliyor, sonraki cümleye geçiyor
const TypewriterLoop = ({
  texts,
  className = "",
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseTime = 2000
}: {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!isMountedRef.current) return;

    const currentText = texts[currentTextIndex];

    if (!isDeleting && currentIndex < currentText.length) {
      // Yazma
      const timeout = setTimeout(() => {
        if (isMountedRef.current) {
          setDisplayedText(currentText.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentIndex === currentText.length) {
      // Bekleme
      const timeout = setTimeout(() => {
        if (isMountedRef.current) {
          setIsDeleting(true);
        }
      }, pauseTime);

      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex > 0) {
      // Silme
      const timeout = setTimeout(() => {
        if (isMountedRef.current) {
          setDisplayedText(currentText.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        }
      }, deletingSpeed);

      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex === 0) {
      // Sonraki cümleye geç
      if (isMountedRef.current) {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [currentTextIndex, currentIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseTime]);

  const cursorRef = useRef<any>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    return () => {
      // Cursor animasyonunu durdur
      if (cursor) {
        try {
          if (typeof cursor.stop === 'function') {
            cursor.stop();
          }
        } catch (e) {
          // Silent fail
        }
      }
    };
  }, []);

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        ref={cursorRef}
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        |
      </motion.span>
    </span>
  );
};

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightOrbsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Pathname değiştiğinde (anasayfadan çıkarken) ScrollTrigger'ı temizle
  useEffect(() => {
    if (pathname !== '/') {
      // Anasayfadan çıkıldı, ScrollTrigger'ı temizle
      if (scrollTriggerRef.current) {
        try {
          scrollTriggerRef.current.disable();
          scrollTriggerRef.current.kill();
          scrollTriggerRef.current = null;
        } catch (e) {
          // Silent fail
        }
      }
      if (timelineRef.current) {
        try {
          timelineRef.current.clear();
          timelineRef.current.kill();
          timelineRef.current = null;
        } catch (e) {
          // Silent fail
        }
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (!heroRef.current || !leftContentRef.current || !rightOrbsRef.current || !formRef.current) return;
    if (pathname !== '/') return; // Sadece anasayfada çalış

    let isMounted = true;

    // Timeline oluştur - scroll ile tetiklenecek
    // Timeline toplam süresi: 1.5s (form) + 0.5s (bekleme) = 2s
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top", // Hero section üstte olduğunda başla
        end: "+=200vh", // 2 ekran yüksekliği scroll - animasyon tamamen bitene kadar pin yap
        scrub: 1, // Smooth scrubbing - scroll ile senkronize
        pin: true, // Hero section'ı sabit tut
        pinSpacing: true, // Pin spacing ekle
        anticipatePin: 1, // Pin'i önceden hesapla
        invalidateOnRefresh: true, // Refresh'te yeniden hesapla
        markers: false, // Debug için false (true yaparsan görebilirsin)
      },
    });

    timelineRef.current = tl;
    scrollTriggerRef.current = tl.scrollTrigger || null;

    // Form animasyonu - İLK BAŞTA başlamalı, scroll'un ilk hareketiyle
    tl.fromTo(formRef.current,
      {
        x: 300,
        y: 100,
        scale: 0,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1.5, // Form daha yavaş gelsin
        ease: "power2.out",
      },
      0 // Hemen başlat - scroll'un ilk anında
    );

    // Sol taraf animasyonu - form ile birlikte başlıyor
    tl.to(leftContentRef.current, {
      y: -200,
      opacity: 0.3,
      scale: 0.9,
      duration: 1.5, // Form ile aynı hızda
      ease: "power2.inOut",
    }, 0); // Form ile aynı anda başla

    // Orb'lar kayboluyor - form gelirken kaybolsun
    tl.to(rightOrbsRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "power2.inOut",
    }, 0.3); // Form başladıktan kısa bir süre sonra

    // Form geldikten sonra biraz bekliyor (son scroll'da sabit kalıyor)
    tl.to({}, {
      duration: 0.5, // Form ortada biraz dursun
    });

    return () => {
      isMounted = false;

      // Önce ScrollTrigger'ı disable et
      if (scrollTriggerRef.current) {
        try {
          scrollTriggerRef.current.disable();
          scrollTriggerRef.current.kill();
          scrollTriggerRef.current = null;
        } catch (e) {
          // Silent fail
        }
      }

      // Timeline'ı temizle
      if (timelineRef.current) {
        try {
          timelineRef.current.clear();
          timelineRef.current.kill();
          timelineRef.current = null;
        } catch (e) {
          // Silent fail
        }
      }

      // Tüm ScrollTrigger'ları temizle - önce disable sonra kill
      try {
        const allTriggers = ScrollTrigger.getAll();
        allTriggers.forEach((trigger) => {
          try {
            trigger.disable();
            trigger.kill();
          } catch (e) {
            // Silent fail
          }
        });
      } catch (e) {
        // Silent fail
      }

      // Pin'i manuel olarak kaldır
      try {
        const heroElement = heroRef.current;
        if (heroElement) {
          const element = heroElement as HTMLElement;
          if (element.style.position === 'fixed' || element.style.position === 'absolute') {
            element.style.position = '';
            element.style.top = '';
            element.style.left = '';
            element.style.width = '';
          }
        }
      } catch (e) {
        // Silent fail
      }

      // ScrollTrigger'ı refresh et
      try {
        ScrollTrigger.refresh();
      } catch (e) {
        // Silent fail
      }
    };
  }, [pathname]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 from-slate-900 via-slate-800 to-slate-900 overflow-x-clip min-h-screen flex items-center"
    >
      <div className="container">
        <div className="md:flex items-center gap-12">
          {/* Sol Taraf - Animasyonlu Metinler */}
          <div
            ref={leftContentRef}
            className="md:w-4/5 lg:w-1/2"
          >
            <motion.div
              className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 border border-blue-700/30 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TypewriterText
                text="Yeni Nesil Web & Mobil Çözümler"
                delay={0.3}
                speed={0.04}
                className="text-sm font-medium text-blue-200"
              />
            </motion.div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white via-gray-200 to-gray-300 text-transparent bg-clip-text mt-6 break-words"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <TypewriterText
                text="Dijital Başarıya Giden Yol"
                delay={1.3}
                speed={0.05}
              />
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 tracking-tight mt-6 break-words min-h-[80px] md:min-h-[60px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.8 }}
            >
              <TypewriterLoop
                texts={[
                  "OsianaTech ile markanızı güçlendirin. Modern web geliştirme, SEO, SaaS ve danışmanlık hizmetlerimizle işletmenizin dijital dünyada öne çıkmasını sağlayın.",
                  "İnovatif çözümlerle dijital dönüşümünüze hız kazandırın. Özel yazılım geliştirme ve teknoloji danışmanlığı hizmetlerimizle yanınızdayız.",
                  "Profesyonel ekibimizle birlikte hayalinizdeki dijital projeleri hayata geçirin. Kaliteli ve güvenilir hizmet anlayışımızla fark yaratın."
                ]}
                typingSpeed={50}
                deletingSpeed={30}
                pauseTime={2000}
                className="text-xl text-gray-300"
              />
            </motion.p>
            <motion.div
              className="flex gap-4 items-center mt-[30px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 5.5 }}
            >
              <Link href="/iletisim">
                <button
                  className="bg-gradient-to-r from-blue-900 to-slate-900 text-white px-4 py-2 rounded-lg font-medium text-sm inline-flex items-center justify-center tracking-tight
               transition-all duration-300 hover:from-blue-800 hover:to-slate-800 hover:scale-105 shadow-lg shadow-blue-900/50 border border-blue-800/50"
                >
                  Hemen Başla!
                </button>
              </Link>
              <Link href="/hizmetler">
                <button className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm text-gray-200 bg-transparent border-2 border-blue-400/50 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/30 backdrop-blur-sm">
                  <span>Hizmetlerimizi İncele</span>
                  <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Sağ Taraf - Animasyonlu Görsel Element */}
          <div className="mt-12 md:mt-0 md:w-2/5 lg:w-1/2 relative h-[500px] md:h-[600px] flex items-center justify-center">
            {/* Scroll ile çıkan İletişim Formu */}
            <div
              ref={formRef}
              className="absolute z-50 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-lg rounded-2xl p-8 md:p-10 shadow-2xl border border-blue-700/30 max-w-md w-full opacity-0"
            >
              <h3 className="text-2xl font-bold text-white mb-2">İletişime Geçin</h3>
              <p className="text-gray-400 mb-6">Bizimle iletişime geçin, projenizi hayata geçirelim.</p>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Adınız"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="E-posta"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Mesajınız"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-900 to-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-800 hover:to-slate-800 transition-all duration-300 shadow-lg shadow-blue-900/50 border border-blue-800/50"
                >
                  Gönder
                </button>
              </form>
            </div>

            {/* Kod ve Yazılım Temalı Animasyonlu Elementler - scroll ile kaybolacak */}
            <div ref={rightOrbsRef} className="relative w-full h-full">
              {/* Merkez Noktası - görünmez */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />

              {/* Halka 3 - Programlama Dilleri */}
              {pathname === '/' && Array.from({ length: 8 }).map((_, i) => {
                const radius = 220;
                const angle = (i * 360) / 8;
                const langs = ["Web Yazılım", "Mobil Uygulama", "E-Ticaret", "Kurumsal Kimlik", "UI & UX", "SaaS", "Web Tasarım", "SEO"];
                const baseX = Math.cos((angle * Math.PI) / 180) * radius - 50;
                const baseY = Math.sin((angle * Math.PI) / 180) * radius - 15;
                return (
                  <motion.div
                    key={`ring3-${i}`}
                    className="absolute text-purple-300/70 font-mono text-base font-semibold bg-purple-500/15 px-4 py-2 rounded-md border border-purple-400/40"
                    style={{
                      left: "50%",
                      top: "50%",
                    }}
                    initial={{
                      x: baseX,
                      y: baseY,
                    }}
                    animate={{
                      x: [
                        baseX,
                        baseX + Math.cos((angle * Math.PI) / 180) * 15,
                        baseX,
                      ],
                      y: [
                        baseY,
                        baseY + Math.sin((angle * Math.PI) / 180) * 15,
                        baseY,
                      ],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 5 + (i % 3) * 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                  >
                    {langs[i]}
                  </motion.div>
                );
              })}

              {/* Merkezde Küçük Kod İkonları */}
              {pathname === '/' && (
                <>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      className="text-4xl text-blue-300/60 font-mono font-bold"
                      style={{ transformOrigin: "center" }}
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        scale: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      {"</>"}
                    </motion.div>
                  </div>
                  <div className="absolute left-1/2 top-1/2" style={{ transform: "translate(calc(-50% - 35px), calc(-50% - 65px))" }}>
                    <motion.div
                      className="text-2xl text-cyan-300/40 font-mono font-bold"
                      style={{ transformOrigin: "center" }}
                      animate={{
                        rotate: [360, 0],
                        scale: [0.8, 1, 0.9],
                      }}
                      transition={{
                        rotate: {
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        scale: {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      {"</>"}
                    </motion.div>
                  </div>
                  <div className="absolute left-1/2 top-1/2" style={{ transform: "translate(calc(-10% + 80px), calc(-30% + 80px))" }}>
                    <motion.div
                      className="text-xl text-purple-300/30 font-mono font-bold"
                      style={{ transformOrigin: "center" }}
                      animate={{
                        rotate: [0, -360],
                        scale: [1, 1, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 12,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        scale: {
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      {"</>"}
                    </motion.div>
                  </div>

                  {/* Floating Kod Parçacıkları */}
                  {Array.from({ length: 11 }).map((_, i) => {
                    const initialY = -20 + (i % 3) * 15;
                    const initialX = Math.sin(i * 1.5) * 20;
                    const codeSnippets = ["const", "function", "return", "import", "export", "class", "async", "await", "let", "if", "for"];
                    return (
                      <motion.div
                        key={`particle-${i}`}
                        className="absolute text-gray-400/40 font-mono text-xs font-medium"
                        style={{
                          left: `${12 + (i % 4) * 22}%`,
                          top: `${18 + Math.floor(i / 4) * 28}%`,
                        }}
                        initial={{ y: initialY, x: initialX, scale: 1, opacity: 0.3 }}
                        animate={{
                          y: [initialY, initialY - 40, initialY],
                          x: [initialX, initialX + Math.sin(i * 1.5) * 20, initialX],
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                          duration: 3 + (i % 4) * 1,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.25,
                        }}
                      >
                        {codeSnippets[i]}
                      </motion.div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
