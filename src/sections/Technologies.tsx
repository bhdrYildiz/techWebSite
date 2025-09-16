"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

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
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 20,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {technologies.map(({ text, imageSrc, name, username }) => (
            <div className="card">
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={100}
                  height={100}
                  className="h-20 w-20 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Technologies = () => {
  return (
    <section className="bg-white/70 py-24">
      <div className="container">
        <div className="section-heading text-center">
          <div className="tag">Kullandığımız Teknolojiler</div>
          <h2 className="section-title mt-5">Modern ve Güçlü Çözümler</h2>
          <p className="section-description mt-5 max-w-2xl mx-auto">
            OsianaTech olarak web, mobil ve dijital çözümlerimizi en güncel
            teknolojilerle sunuyoruz. İşletmenizin dijital dünyadaki başarısını
            artırıyoruz.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TechColumn items={firstColumn} duration={22} />
          <TechColumn items={secondColumn} className="hidden md:block" duration={18} />
          <TechColumn items={thirdColumn} className="hidden lg:block" duration={26} />
        </div>
      </div>
    </section>
  );
};
