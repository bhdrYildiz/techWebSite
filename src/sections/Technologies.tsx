"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const technologies = [
  {
    text: "Modern ve performanslı arayüzler geliştiriyoruz.",
    imageSrc: "/react.svg",
    name: "React.js",
    username: "Frontend",
  },
  {
    text: "SEO dostu, hızlı ve güvenli web uygulamaları.",
    imageSrc: "/next.svg",
    name: "Next.js",
    username: "Fullstack",
  },
  {
    text: "Esnek ve modern UI tasarımları için.",
    imageSrc: "/tailwindcss.svg",
    name: "Tailwind CSS",
    username: "Styling",
  },
  {
    text: "Animasyon ve etkileşimlerde fark yaratıyoruz.",
    imageSrc: "/social.svg",
    name: "Framer Motion",
    username: "Animations",
  },
  {
    text: "Güçlü ve ölçeklenebilir backend çözümleri.",
    imageSrc: "/backend.svg",
    name: "Node.js",
    username: "Backend",
  },
  {
    text: "Verilerinizi güvenli ve hızlı yönetiyoruz.",
    imageSrc: "/cloud.svg",
    name: "SQL",
    username: "Database",
  },
  {
    text: "Güçlü ve estetik mobil arayüzler...",
    imageSrc: "/android.svg",
    name: "Mobil Çözümler",
    username: "Android & IOS",
  },
  {
    text: "Google analytic ve search console yönetimi ile satışlarınızı arttırın!",
    imageSrc: "/google_docs.svg",
    name: "Google",
    username: "Analytic & Search Console",
  },
];


const firstColumn = technologies.slice(0, 3);
const secondColumn = technologies.slice(3, 6);
const thirdColumn = technologies.slice(6, 9);

const TechColumn = (props: {
  className?: string;
  items: typeof technologies;
  duration?: number;
}) => {
  const controls = useAnimation();
  const isMountedRef = useRef(true);
  const animationRef = useRef<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    isMountedRef.current = true;

    // Sadece anasayfada animasyonu başlat
    if (pathname !== '/') {
      controls.stop();
      controls.set({ translateY: 0 });
      return;
    }

    const startAnimation = async () => {
      if (!isMountedRef.current) return;

      try {
        animationRef.current = await controls.start({
          translateY: "-50%",
          transition: {
            duration: props.duration || 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        });
      } catch (e) {
        // Silent fail
      }
    };

    startAnimation();

    return () => {
      isMountedRef.current = false;
      try {
        controls.stop();
        controls.set({ translateY: 0 });
      } catch (e) {
        // Silent fail
      }
    };
  }, [controls, props.duration, pathname]);

  return (
    <div className={props.className}>
      <motion.div
        animate={controls}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.items.map(({ text, imageSrc, name, username }, itemIndex) => (
              <div
                className="p-10 border border-slate-700/50 rounded-3xl shadow-lg bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 hover:border-blue-400/50 transition-all duration-300"
                key={`${name}-${itemIndex}`}
              >
                <div className="text-gray-300">{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image
                    src={imageSrc}
                    alt={name}
                    width={100}
                    height={100}
                    className="h-20 w-20 rounded-full brightness-110"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5 text-white">
                      {name}
                    </div>
                    <div className="leading-5 tracking-tight text-gray-400">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export const Technologies = () => {
  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-24">
      <div className="container">
        <div className="section-heading text-center">
          <div className="inline-flex text-sm border border-blue-400/30 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg tracking-tight backdrop-blur-sm">
            Kullandığımız Teknolojiler
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-white via-gray-200 to-gray-400 text-transparent bg-clip-text mt-5">
            Modern ve Güçlü Çözümler
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-gray-300 mt-5 max-w-2xl mx-auto">
            OsianaTech olarak web, mobil ve dijital çözümlerimizi en güncel
            teknolojilerle sunuyoruz. İşletmenizin dijital dünyadaki başarısını
            artırıyoruz.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TechColumn items={firstColumn} duration={16} />
          <TechColumn items={secondColumn} className="hidden md:block" duration={12} />
          <TechColumn items={thirdColumn} className="hidden lg:block" duration={20} />
        </div>
      </div>
    </section>
  );
};
