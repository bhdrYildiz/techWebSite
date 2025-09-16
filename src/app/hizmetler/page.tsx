"use client";

import { motion } from "framer-motion";
import { FaLaptopCode, FaChartLine, FaMobileAlt, FaSearch, FaCloud, FaHandshake } from "react-icons/fa";

const services = [
    {
        icon: <FaLaptopCode className="h-10 w-10 text-blue-600" />,
        title: "Web & Yazılım Geliştirme",
        desc: "Modern, hızlı ve ölçeklenebilir web siteleri ve yazılım çözümleri geliştiriyoruz.",
    },
    {
        icon: <FaMobileAlt className="h-10 w-10 text-green-600" />,
        title: "Mobil Çözümler",
        desc: "iOS ve Android için kullanıcı dostu mobil uygulamalar ile işinizi her yerde erişilebilir kılıyoruz.",
    },
    {
        icon: <FaSearch className="h-10 w-10 text-purple-600" />,
        title: "SEO & Dijital Pazarlama",
        desc: "Arama motorlarında daha görünür olmanız için stratejik SEO ve dijital pazarlama hizmetleri.",
    },
    {
        icon: <FaChartLine className="h-10 w-10 text-pink-600" />,
        title: "Veri Analizi & Raporlama",
        desc: "İş süreçlerinizi veriye dayalı kararlarla geliştirin. Detaylı raporlama ve analiz desteği sunuyoruz.",
    },
    {
        icon: <FaCloud className="h-10 w-10 text-indigo-600" />,
        title: "SaaS & Bulut Çözümleri",
        desc: "Bulut tabanlı yazılımlar ile iş süreçlerinizi kolaylaştırıyoruz. Güvenli ve esnek SaaS çözümleri.",
    },
    {
        icon: <FaHandshake className="h-10 w-10 text-orange-600" />,
        title: "Danışmanlık & Destek",
        desc: "Teknoloji yatırımlarınızda doğru kararlar almanız için uzman danışmanlık sağlıyoruz.",
    },
];

export default function HizmetlerPage() {
    return (
        <main>
            {/* HERO */}
            <section className="relative bg-gradient-to-br from-blue-50 to-white py-24 text-center">
                <div className="container mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl font-bold tracking-tight mb-6"
                    >
                        Hizmetlerimiz
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        İşletmenizin dijital dünyada öne çıkmasını sağlayacak modern ve
                        yenilikçi çözümler sunuyoruz.
                    </motion.p>
                </div>
            </section>

            {/* GRID */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto">
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
        </main>
    );
}
