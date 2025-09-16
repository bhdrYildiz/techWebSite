"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLightbulb, FaHandshake, FaStar } from "react-icons/fa";

export default function HakkimizdaPage() {
    return (
        <main className="relative">
            {/* HERO */}
            <section className="relative bg-gradient-to-br from-indigo-50 via-white to-pink-50 py-32 text-center overflow-hidden">
                <div className="container mx-auto relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl font-bold tracking-tight mb-6 text-gray-900"
                    >
                        Hakkımızda
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        OsianaTech olarak dijital dünyada markaların büyümesini sağlamak için
                        modern, estetik ve kullanıcı dostu çözümler geliştiriyoruz.
                    </motion.p>
                </div>

                {/* Decorative Illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 0.15, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute right-0 top-10 w-[300px] opacity-20"
                >
                    <Image src="/social.svg" alt="About illustration" width={300} height={300} />
                </motion.div>
            </section>

            {/* MİSYON & VİZYON */}
            <section className="py-24 container grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-semibold mb-4 text-gray-900">Misyonumuz</h2>
                    <p className="text-gray-600 leading-relaxed">
                        İşletmelerin dijital dönüşüm süreçlerinde yanlarında olarak,
                        kullanıcı odaklı ve yenilikçi çözümler sunmak. Teknolojiyi insanlarla
                        buluşturmak ve her ölçekte işin dijitalde güçlü olmasını sağlamak.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-semibold mb-4 text-gray-900">Vizyonumuz</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Dijital dünyada güvenilir, yaratıcı ve sürdürülebilir çözümler
                        üreterek bölgesel ve küresel ölçekte tercih edilen teknoloji
                        partneri olmak.
                    </p>
                </motion.div>
            </section>

            {/* DEĞERLERİMİZ */}
            <section className="py-24 bg-gradient-to-br from-white to-indigo-50">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-12 text-gray-900">Değerlerimiz</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FaLightbulb className="text-yellow-500 text-4xl mb-4" />,
                                title: "Yenilikçilik",
                                desc: "Her zaman en güncel teknolojilerle fark yaratıyoruz.",
                            },
                            {
                                icon: <FaHandshake className="text-green-500 text-4xl mb-4" />,
                                title: "Şeffaflık",
                                desc: "Müşterilerimizle güvene dayalı açık iletişim kuruyoruz.",
                            },
                            {
                                icon: <FaStar className="text-indigo-500 text-4xl mb-4" />,
                                title: "Kalite",
                                desc: "Her detayda yüksek standartı ön planda tutuyoruz.",
                            },
                        ].map((val, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
                            >
                                {val.icon}
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">{val.title}</h3>
                                <p className="text-gray-600">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center bg-gradient-to-r from-pink-100 via-white to-indigo-100">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold mb-6 text-gray-900"
                >
                    Dijital dönüşüm yolculuğuna bizimle çıkın
                </motion.h2>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-black/80 transition"
                >
                    İletişime Geçin
                </motion.button>
            </section>
        </main>
    );
}
