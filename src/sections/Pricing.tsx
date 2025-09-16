"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Pricing = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-white to-[#F0F4FF] py-24 overflow-x-clip"
    >
      <div className="container relative z-10">
        {/* Section heading */}
        <div className="section-heading text-center">
          <h2 className="section-title">Hizmetlerimiz</h2>
          <p className="section-description mt-5 max-w-2xl mx-auto">
            OsianaTech olarak modern web tasarım, mobil uygulamalar, SEO ve
            dijital pazarlama çözümleri ile markanızı dijital dünyada öne
            çıkarıyoruz.
          </p>
        </div>

        {/* Content blocks */}
        <div className="mt-20 flex flex-col gap-24">
          {/* Box 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-10"
          >
            <Image
              src="/resim1.svg"
              alt="Web Çözümleri"
              width={320}
              height={320}
              className="flex-shrink-0"
            />
            <div className="md:text-left text-center max-w-lg">
              <h3 className="text-2xl font-semibold">Kurumsal Web Çözümleri</h3>
              <p className="text-gray-600 mt-4">
                Modern, hızlı ve kullanıcı dostu web siteleri geliştiriyoruz.
                Markanızın ihtiyaçlarına özel çözümler sunarak, dijital kimliğinizi
                güçlü bir şekilde yansıtıyoruz.
              </p>
            </div>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row-reverse items-center gap-10"
          >
            <Image
              src="/resimmobil.svg"
              alt="SEO ve Danışmanlık"
              width={320}
              height={320}
              className="flex-shrink-0"
            />
            <div className="md:text-left text-center max-w-lg">
              <h3 className="text-2xl font-semibold">SEO & Dijital Danışmanlık</h3>
              <p className="text-gray-600 mt-4">
                Arama motoru optimizasyonu (SEO) ve stratejik danışmanlık
                hizmetlerimiz ile işletmenizin dijital dünyada daha görünür ve
                erişilebilir olmasını sağlıyoruz.
              </p>
            </div>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-10"
          >
            <Image
              src="/resimWeb.svg"
              alt="Mobil Uygulama"
              width={320}
              height={320}
              className="flex-shrink-0"
            />
            <div className="md:text-left text-center max-w-lg">
              <h3 className="text-2xl font-semibold">Mobil Uygulama Geliştirme</h3>
              <p className="text-gray-600 mt-4">
                iOS ve Android için kullanıcı dostu, hızlı ve modern mobil
                uygulamalar geliştiriyoruz. İşletmenizin müşterilerle her an
                bağlantıda olmasını sağlıyoruz.
              </p>
            </div>
          </motion.div>

          {/* Box 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row-reverse items-center gap-10"
          >
            <Image
              src="/resim2.svg"
              alt="Dijital Pazarlama"
              width={320}
              height={320}
              className="flex-shrink-0"
            />
            <div className="md:text-left text-center max-w-lg">
              <h3 className="text-2xl font-semibold">
                Dijital Pazarlama & Sosyal Medya
              </h3>
              <p className="text-gray-600 mt-4">
                Sosyal medya yönetimi, reklam kampanyaları ve içerik üretimi ile
                markanızı doğru hedef kitleye ulaştırıyoruz. Dijital pazarlama
                stratejilerimizle işletmenizin büyümesine katkı sağlıyoruz.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative shapes */}
      <motion.div
        className="hidden md:block absolute -left-40 top-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30"
        style={{ translateY }}
      />
      <motion.div
        className="hidden md:block absolute -right-40 bottom-20 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30"
        style={{ translateY }}
      />
    </section>
  );
};
