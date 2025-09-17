"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
    FaLaptopCode,
    FaChartLine,
    FaMobileAlt,
    FaSearch,
    FaCloud,
    FaHandshake,
    FaClock,
    FaUsers,
    FaShieldAlt,
} from "react-icons/fa";
import { useRef } from "react";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";

const services = [
    {
        icon: <FaLaptopCode className="h-10 w-10 text-blue-700" />,
        title: "Web & Yazılım Geliştirme",
        desc: "Modern, hızlı ve ölçeklenebilir web siteleri ve yazılım çözümleri geliştiriyoruz. Kullanıcı odaklı arayüzler ve güvenli mimarilerle markanızı dijital dünyada güçlü bir şekilde temsil etmenizi sağlıyoruz.",
    },
    {
        icon: <FaMobileAlt className="h-10 w-10 text-[#001E80]" />,
        title: "Mobil Çözümler",
        desc: "iOS ve Android için kullanıcı dostu mobil uygulamalar ile işinizi her yerde erişilebilir kılıyoruz. Müşteri deneyimini artırarak markanızı mobil dünyada öne çıkarıyoruz.",
    },
    {
        icon: <FaSearch className="h-10 w-10 text-blue-900" />,
        title: "SEO & Dijital Pazarlama",
        desc: "Arama motorlarında daha görünür olmanız için SEO, içerik stratejisi ve dijital pazarlama çözümleri sunuyoruz. Doğru hedef kitleye ulaşarak markanızı büyütüyoruz.",
    },
    {
        icon: <FaChartLine className="h-10 w-10 text-indigo-700" />,
        title: "Veri Analizi & Raporlama",
        desc: "İş süreçlerinizi veriye dayalı kararlarla geliştirin. Detaylı raporlama ve analiz desteğiyle işletmenizin geleceğini daha sağlam planlayın.",
    },
    {
        icon: <FaCloud className="h-10 w-10 text-indigo-800" />,
        title: "SaaS & Bulut Çözümleri",
        desc: "Bulut tabanlı yazılımlar ile iş süreçlerinizi kolaylaştırıyoruz. Güvenli, esnek ve ölçeklenebilir SaaS çözümleriyle her zaman geleceğe hazır olun.",
    },
    {
        icon: <FaHandshake className="h-10 w-10 text-[#001E80]" />,
        title: "Danışmanlık & Destek",
        desc: "Teknoloji yatırımlarınızda doğru kararlar almanız için uzman danışmanlık sağlıyoruz. Projelerinizin her aşamasında yanınızdayız.",
    },
];

const whyUs = [
    {
        icon: <FaUsers className="h-8 w-8 text-blue-600" />,
        title: "Deneyimli Ekip",
        desc: "Alanında uzman geliştiriciler ve tasarımcılarla projelerinizi hayata geçiriyoruz.",
    },
    {
        icon: <FaShieldAlt className="h-8 w-8 text-[#001E80]" />,
        title: "Güvenilir Çözümler",
        desc: "Güvenli altyapılar ve sürdürülebilir teknolojiler ile uzun vadeli başarı sunuyoruz.",
    },
    {
        icon: <FaClock className="h-8 w-8 text-blue-900" />,
        title: "Zamanında Teslimat",
        desc: "Projelerinizi planlanan sürede teslim ederek işinizi aksatmadan ilerlemenizi sağlıyoruz.",
    },
];

export default function HizmetlerPage() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 30]);

    return (
        <main>
            {/* Banner */}
            <section className="relative h-[400px] flex items-center justify-center text-center overflow-hidden bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]">
                {/* Sol ve Sağ Hareketli Görseller */}
                <motion.img
                    src={cylinderImage.src}
                    alt="Cog image"
                    className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
                    animate={{ translateY: [-30, 30] }}
                    transition={{ repeat: Infinity, repeatType: "mirror", duration: 3, ease: "easeInOut" }}
                />
                <motion.img
                    src={noodleImage.src}
                    alt="Cog image"
                    className="md:absolute md:h-full md:w-auto md:max-w-none md:-right-6 lg:right-0"
                    animate={{ translateY: [-30, 30] }}
                    transition={{ repeat: Infinity, repeatType: "mirror", duration: 3, ease: "easeInOut" }}
                />
                {/* Banner İçerik */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 text-white px-4"
                >
                    <h1 className="text-5xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mb-12">
                        HİZMETLERİMİZ
                    </h1>
                    <p className="text-xl text-[#010D3E] tracking-tight mt-6 max-w-2xl mx-auto">
                        OsianaTech ile markanızı güçlendirin. Modern web tasarım, SEO, SaaS ve danışmanlık hizmetlerimizle işletmenizin dijital dünyada öne çıkmasını sağlayın.
                    </p>
                </motion.div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mb-16">
                        Sunduğumuz Çözümler
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
                            >
                                <div className="mb-6">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                ref={sectionRef}
                className="relative bg-[radial-gradient(ellipse_200%_100%_at_top_left,#183EC2,#EAEEFE_100%)] py-32 overflow-hidden text-center"
            >
                {/* Parallax Görseller */}
                <motion.img
                    src="/resim2.svg"
                    alt="Star"
                    className="hidden md:block absolute -left-24 top-20 w-48 opacity-60"
                    style={{ translateY, rotate }}
                />
                <motion.img
                    src="/backend.svg"
                    alt="Wave"
                    className="hidden md:block absolute -right-28 bottom-10 w-64 opacity-70"
                    style={{ translateY }}
                />

                <div className="container relative z-10 px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent"
                    >
                        Dijital Dünyaya Güçlü Bir Adım Atın
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-lg md:text-xl mb-8 max-w-2xl mx-auto mt-4 tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text"
                    >
                        Markanızı geleceğe taşıyacak çözümler için bugün bizimle iletişime geçin.
                        Modern tasarım, güçlü yazılım ve etkili dijital stratejilerle büyüyün.
                    </motion.p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-black/80 transition"
                    >
                        İletişime Geçin
                    </motion.button>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent"
                    >
                        Neden Bizi Tercih Etmelisiniz?
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {whyUs.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-xl bg-gray-50 shadow hover:shadow-md transition"
                            >
                                <div className="flex items-center justify-center mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
