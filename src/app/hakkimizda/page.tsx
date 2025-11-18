"use client";

import { motion } from "framer-motion";
import { FaLightbulb, FaHandshake, FaStar } from "react-icons/fa";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Link from "next/link";

export default function HakkimizdaPage() {
    return (
        <main>
            {/* Banner */}
            <section className="relative h-[240px] flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
                {/* Sol ve Sağ Hareketli Görseller */}
                <motion.img
                    src={cylinderImage.src}
                    alt="Cog image"
                    className="hidden md:block md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 opacity-20 blur-sm"
                    animate={{ translateY: [-20, 30] }}
                    transition={{ repeat: Infinity, repeatType: "mirror", duration: 3, ease: "easeInOut" }}
                />
                <motion.img
                    src={noodleImage.src}
                    alt="Cog image"
                    className="hidden md:block md:absolute md:h-full md:w-auto md:max-w-none md:-right-6 lg:right-0 opacity-20 blur-sm"
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
                    <h1 className="text-5xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-white via-gray-200 to-gray-400 text-transparent bg-clip-text mb-12">
                        HAKKIMIZDA
                    </h1>
                    <p className="text-xl text-gray-300 tracking-tight mt-6 max-w-2xl mx-auto">
                        OsianaTech ile markanızı güçlendirin. Modern web tasarım, SEO, SaaS ve danışmanlık hizmetlerimizle işletmenizin dijital dünyada öne çıkmasını sağlayın.
                    </p>
                </motion.div>
            </section>
            {/* MİSYON & VİZYON */}
            <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
                <div className="container grid md:grid-cols-2 gap-12 items-stretch">
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
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative p-10 bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-slate-700/50 hover:border-blue-400/50 flex flex-col justify-between overflow-hidden"
                        >
                            {/* Hover gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />

                            {/* Subtle background shape */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500 rounded-full opacity-10 pointer-events-none"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl font-semibold mb-4 text-white">{item.title}</h2>
                                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* DEĞERLERİMİZ */}
            <section className="py-24 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800">
                <div className="container text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-b from-white via-gray-200 to-gray-400 text-transparent bg-clip-text"
                    >
                        Değerlerimiz
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FaLightbulb className="text-blue-400 text-4xl mb-4" />,
                                title: "Yenilikçilik",
                                desc: "Her zaman en güncel teknolojilerle fark yaratıyoruz.",
                            },
                            {
                                icon: <FaHandshake className="text-cyan-400 text-4xl mb-4" />,
                                title: "Şeffaflık",
                                desc: "Müşterilerimizle güvene dayalı açık iletişim kuruyoruz.",
                            },
                            {
                                icon: <FaStar className="text-indigo-400 text-4xl mb-4" />,
                                title: "Kalite",
                                desc: "Her detayda yüksek standartı ön planda tutuyoruz.",
                            },
                        ].map((val, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8, scale: 1.05 }}
                                className="group p-8 bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-slate-700/50 hover:border-blue-400/50 text-center overflow-hidden"
                            >
                                {/* Hover gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex justify-center mb-4">{val.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{val.title}</h3>
                                    <p className="text-gray-300">{val.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-b from-white via-gray-200 to-gray-400 text-transparent bg-clip-text"
                >
                    Dijital dönüşüm yolculuğuna bizimle çıkın
                </motion.h2>
                <Link href="/iletisim">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="px-6 py-3 bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-lg font-medium hover:from-blue-800 hover:to-slate-800 transition-all duration-300 shadow-lg shadow-blue-900/50 border border-blue-800/50"
                    >
                        İletişime Geçin
                    </motion.button>
                </Link>
            </section>
        </main>
    );
}
