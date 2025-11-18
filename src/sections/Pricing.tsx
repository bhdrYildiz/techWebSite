"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export const Pricing = () => {
  const sectionRef = useRef(null);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Pathname değiştiğinde scroll listener'ları temizle
  useEffect(() => {
    return () => {
      // Scroll listener'ları temizlemek için
      scrollYProgress.set(0);
    };
  }, [pathname, scrollYProgress]);

  const services = [
    {
      image: "/resim1.svg",
      title: "Kurumsal Web Çözümleri",
      description: "Modern, hızlı ve kullanıcı dostu web siteleri geliştiriyoruz. Markanızın ihtiyaçlarına özel çözümler sunarak, dijital kimliğinizi güçlü bir şekilde yansıtıyoruz.",
      imageSize: 200,
    },
    {
      image: "/resimMobil.svg",
      title: "SEO & Dijital Danışmanlık",
      description: "Arama motoru optimizasyonu (SEO) ve stratejik danışmanlık hizmetlerimiz ile işletmenizin dijital dünyada daha görünür ve erişilebilir olmasını sağlıyoruz.",
      imageSize: 200,
    },
    {
      image: "/resimWeb.svg",
      title: "Mobil Uygulama Geliştirme",
      description: "iOS ve Android için kullanıcı dostu, hızlı ve modern mobil uygulamalar geliştiriyoruz. İşletmenizin müşterilerle her an bağlantıda olmasını sağlıyoruz.",
      imageSize: 150,
    },
    {
      image: "/resim2.svg",
      title: "Dijital Pazarlama & Sosyal Medya",
      description: "Sosyal medya yönetimi, reklam kampanyaları ve içerik üretimi ile markanızı doğru hedef kitleye ulaştırıyoruz. Dijital pazarlama stratejilerimizle işletmenizin büyümesine katkı sağlıyoruz.",
      imageSize: 200,
    },
    {
      image: "/resim1.svg",
      title: "E-Ticaret Çözümleri",
      description: "Güvenli ve kullanıcı dostu e-ticaret platformları geliştiriyoruz. Ödeme sistemleri entegrasyonu, stok yönetimi ve müşteri deneyimi odaklı çözümlerle online satışlarınızı artırıyoruz.",
      imageSize: 200,
    },
    {
      image: "/resimMobil.svg",
      title: "Bulut & SaaS Çözümleri",
      description: "Bulut tabanlı yazılım çözümleri ile iş süreçlerinizi dijitalleştiriyoruz. Ölçeklenebilir, güvenli ve erişilebilir SaaS platformları ile işletmenizin verimliliğini artırıyoruz.",
      imageSize: 200,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-24 overflow-x-clip"
    >
      <div className="container relative z-10">
        {/* Section heading */}
        <motion.div
          className="section-heading text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-white via-gray-200 to-gray-400 text-transparent bg-clip-text">
            Hizmetlerimiz
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-gray-300 mt-5 max-w-2xl mx-auto">
            OsianaTech olarak modern web tasarım, mobil uygulamalar, SEO ve
            dijital pazarlama çözümleri ile markanızı dijital dünyada öne
            çıkarıyoruz.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-slate-700/50 hover:border-blue-400/50 overflow-hidden"
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  className="mb-6 flex justify-center"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={160}
                    height={160}
                    className="w-32 h-32 md:w-40 md:h-40 transition-transform duration-300 group-hover:scale-110 brightness-110 object-contain"
                  />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 text-center text-white group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-center group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative shapes */}
      <motion.div
        className="hidden md:block absolute -left-40 top-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"
        style={{ translateY }}
      />
      <motion.div
        className="hidden md:block absolute -right-40 bottom-20 w-72 h-72 bg-indigo-500 rounded-full blur-3xl opacity-20"
        style={{ translateY }}
      />
    </section>
  );
};
