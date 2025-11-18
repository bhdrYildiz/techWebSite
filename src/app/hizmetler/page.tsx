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
import Link from "next/link";

const services = [
    {
        icon: <FaLaptopCode className="h-10 w-10 text-blue-400" />,
        title: "Web & Yazılım Geliştirme",
        desc: "Modern, hızlı ve ölçeklenebilir web siteleri ve yazılım çözümleri geliştiriyoruz. Kullanıcı odaklı arayüzler ve güvenli mimarilerle markanızı dijital dünyada güçlü bir şekilde temsil etmenizi sağlıyoruz.",
    },
    {
        icon: <FaMobileAlt className="h-10 w-10 text-cyan-400" />,
        title: "Mobil Çözümler",
        desc: "iOS ve Android için kullanıcı dostu mobil uygulamalar ile işinizi her yerde erişilebilir kılıyoruz. Müşteri deneyimini artırarak markanızı mobil dünyada öne çıkarıyoruz.",
    },
    {
        icon: <FaSearch className="h-10 w-10 text-indigo-400" />,
        title: "SEO & Dijital Pazarlama",
        desc: "Arama motorlarında daha görünür olmanız için SEO, içerik stratejisi ve dijital pazarlama çözümleri sunuyoruz. Doğru hedef kitleye ulaşarak markanızı büyütüyoruz.",
    },
    {
        icon: <FaChartLine className="h-10 w-10 text-blue-300" />,
        title: "Veri Analizi & Raporlama",
        desc: "İş süreçlerinizi veriye dayalı kararlarla geliştirin. Detaylı raporlama ve analiz desteğiyle işletmenizin geleceğini daha sağlam planlayın.",
    },
    {
        icon: <FaCloud className="h-10 w-10 text-indigo-300" />,
        title: "SaaS & Bulut Çözümleri",
        desc: "Bulut tabanlı yazılımlar ile iş süreçlerinizi kolaylaştırıyoruz. Güvenli, esnek ve ölçeklenebilir SaaS çözümleriyle her zaman geleceğe hazır olun.",
    },
    {
        icon: <FaHandshake className="h-10 w-10 text-cyan-300" />,
        title: "Danışmanlık & Destek",
        desc: "Teknoloji yatırımlarınızda doğru kararlar almanız için uzman danışmanlık sağlıyoruz. Projelerinizin her aşamasında yanınızdayız.",
    },
];

const whyUs = [
    {
        icon: <FaUsers className="h-8 w-8 text-blue-400" />,
        title: "Deneyimli Ekip",
        desc: "Alanında uzman geliştiriciler ve tasarımcılarla projelerinizi hayata geçiriyoruz.",
    },
    {
        icon: <FaShieldAlt className="h-8 w-8 text-cyan-400" />,
        title: "Güvenilir Çözümler",
        desc: "Güvenli altyapılar ve sürdürülebilir teknolojiler ile uzun vadeli başarı sunuyoruz.",
    },
    {
        icon: <FaClock className="h-8 w-8 text-indigo-400" />,
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
            <section className="relative h-[240px] flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
                {/* Sol ve Sağ Hareketli Görseller */}
                <motion.img
                    src={cylinderImage.src}
                    alt="Cog image"
                    className="hidden md:block md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 opacity-20 blur-sm"
                    animate={{ translateY: [-30, 30] }}
                    transition={{ repeat: Infinity, repeatType: "mirror", duration: 3, ease: "easeInOut" }}
                />
                <motion.img
                    src={noodleImage.src}
                    alt="Cog image"
                    className="hidden md:block md:absolute md:h-full md:w-auto md:max-w-none md:-right-6 lg:right-0 opacity-20 blur-sm"
                    animate={{ translateY: [-10, 70] }}
                    transition={{ repeat: Infinity, repeatType: "mirror", duration: 3, ease: "easeInOut" }}
                />
                {/* Banner İçerik */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 text-white px-4"
                >
                    <h1 className="text-5xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-white via-gray-200 to-gray-400 text-transparent bg-clip-text mb-12">
                        HİZMETLERİMİZ
                    </h1>
                    <p className="text-xl text-gray-300 tracking-tight mt-6 max-w-2xl mx-auto">
                        OsianaTech ile markanızı güçlendirin. Modern web tasarım, SEO, SaaS ve danışmanlık hizmetlerimizle işletmenizin dijital dünyada öne çıkmasını sağlayın.
                    </p>
                </motion.div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
                <div className="container mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-white via-gray-200 to-gray-400 text-transparent bg-clip-text mb-16"
                    >
                        Sunduğumuz Çözümler
                    </motion.h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                        className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 group-hover:from-blue-500/30 group-hover:to-indigo-500/30 transition-all duration-300"
                                        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {service.icon}
                                    </motion.div>
                                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                        {service.desc}
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
            </section>

            {/* CTA Section */}
            <section
                ref={sectionRef}
                className="relative bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 py-32 overflow-hidden text-center"
            >
                {/* Parallax Görseller */}
                <motion.img
                    src="/resim2.svg"
                    alt="Star"
                    className="hidden md:block absolute -left-24 top-20 w-48 opacity-20 blur-sm"
                    style={{ translateY, rotate }}
                />
                <motion.img
                    src="/backend.svg"
                    alt="Wave"
                    className="hidden md:block absolute -right-28 bottom-10 w-64 opacity-20 blur-sm"
                    style={{ translateY }}
                />

                <div className="container relative z-10 px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-white via-gray-200 to-gray-400 text-transparent bg-clip-text"
                    >
                        Dijital Dünyaya Güçlü Bir Adım Atın
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl mb-8 max-w-2xl mx-auto mt-4 tracking-tighter text-gray-300"
                    >
                        Markanızı geleceğe taşıyacak çözümler için bugün bizimle iletişime geçin.
                        Modern tasarım, güçlü yazılım ve etkili dijital stratejilerle büyüyün.
                    </motion.p>
                    <Link href="/iletisim">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-6 py-3 bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-lg font-medium hover:from-blue-800 hover:to-slate-800 transition-all duration-300 shadow-lg shadow-blue-900/50 border border-blue-800/50"
                        >
                            İletişime Geçin
                        </motion.button>
                    </Link>

                </div>
            </section >

            {/* Why Us Section */}
            <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
                <div className="container mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-b from-white via-gray-200 to-gray-400 text-transparent bg-clip-text"
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
                                whileHover={{ y: -8, scale: 1.05 }}
                                className="group relative p-8 rounded-xl bg-slate-800/50 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-slate-700/50 hover:border-blue-400/50 overflow-hidden"
                            >
                                {/* Hover gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-center mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">{item.title}</h3>
                                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main >
    );
}
