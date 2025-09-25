"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLightbulb, FaHandshake, FaStar } from "react-icons/fa";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Link from "next/link";

export default function HakkimizdaPage() {
    return (
        <main>
            {/* Banner */}
            <section className="relative h-[400px] flex items-center justify-center text-center overflow-hidden bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]">
                {/* Sol ve Sağ Hareketli Görseller */}
                <motion.img
                    src={cylinderImage.src}
                    alt="Cog image"
                    className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
                    animate={{ translateY: [-20, 30] }}
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
                        HAKKIMIZDA
                    </h1>
                    <p className="text-xl text-[#010D3E] tracking-tight mt-6 max-w-2xl mx-auto">
                        OsianaTech ile markanızı güçlendirin. Modern web tasarım, SEO, SaaS ve danışmanlık hizmetlerimizle işletmenizin dijital dünyada öne çıkmasını sağlayın.
                    </p>
                </motion.div>
            </section>
            {/* MİSYON & VİZYON */}
            {/* MİSYON & VİZYON */}
            <section className="py-24 container grid md:grid-cols-2 gap-12 items-stretch">
                {[
                    {
                        title: "Misyonumuz",
                        desc: "İşletmelerin dijital dönüşüm süreçlerinde yanlarında olarak, kullanıcı odaklı ve yenilikçi çözümler sunmak. Teknolojiyi insanlarla buluşturmak ve her ölçekte işin dijitalde güçlü olmasını sağlamak. Ayrıca müşterilerimizin ihtiyaçlarını analiz ederek, sürdürülebilir ve etkili çözümler geliştirmeyi hedefliyoruz.",
                    },
                    {
                        title: "Vizyonumuz",
                        desc: "Dijital dünyada güvenilir, yaratıcı ve sürdürülebilir çözümler üreterek bölgesel ve küresel ölçekte tercih edilen teknoloji partneri olmak. Hedefimiz, işletmelerin dijitalde güçlü bir şekilde yer almasını sağlamak ve uzun vadeli değer yaratmak.Yeni teknolojileri sürekli takip ederek güncel kalmayı planlıyoruz.",
                    },
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                        className="relative p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 flex flex-col justify-between"
                    >
                        {/* Subtle background shape */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 pointer-events-none"></div>
                        <h2 className="text-3xl font-semibold mb-4 text-gray-900">{item.title}</h2>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </section>

            {/* DEĞERLERİMİZ */}
            <section className="py-24 bg-gradient-to-br from-white to-indigo-50">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-12 text-gray-900">Değerlerimiz</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FaLightbulb className="text-[#001E80] text-4xl mb-4" />,
                                title: "Yenilikçilik",
                                desc: "Her zaman en güncel teknolojilerle fark yaratıyoruz.",
                            },
                            {
                                icon: <FaHandshake className="text-blue-900 text-4xl mb-4" />,
                                title: "Şeffaflık",
                                desc: "Müşterilerimizle güvene dayalı açık iletişim kuruyoruz.",
                            },
                            {
                                icon: <FaStar className="text-indigo-800 text-4xl mb-4" />,
                                title: "Kalite",
                                desc: "Her detayda yüksek standartı ön planda tutuyoruz.",
                            },
                        ].map((val, idx) => (
                            <div key={idx} className="p-6 bg-white rounded-xl shadow text-center">
                                <div className="flex justify-center mb-4">{val.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{val.title}</h3>
                                <p className="text-gray-600">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center tracking-tighter bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold mb-6 text-gray-900"
                >
                    Dijital dönüşüm yolculuğuna bizimle çıkın
                </motion.h2>
                <Link href="/iletisim">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-black/80 transition"
                    >
                        İletişime Geçin
                    </motion.button>
                </Link>
            </section>
        </main>
    );
}
