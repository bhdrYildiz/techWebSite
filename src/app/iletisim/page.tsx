"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import FAQSection from "./FAQSection";
import { useRef } from "react";

export default function IletisimPage() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 30]);

    return (
        <main className="bg-slate-900">
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
                        İLETİŞİM
                    </h1>
                    <p className="text-xl text-gray-300 tracking-tight mt-6 max-w-2xl mx-auto">
                        OsianaTech ile markanızı güçlendirin. Modern web tasarım, SEO, SaaS ve danışmanlık hizmetlerimizle işletmenizin dijital dünyada öne çıkmasını sağlayın.
                    </p>
                </motion.div>
            </section>
            {/* Contact Info */}
            <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
                <div className="container mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-b from-white via-gray-200 to-gray-400 text-transparent bg-clip-text"
                    >
                        Bize Ulaşın
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8, scale: 1.05 }}
                            className="group flex flex-col items-center gap-4 p-8 bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-slate-700/50 hover:border-blue-400/50"
                        >
                            <div className="p-4 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                                <FaPhoneAlt className="text-blue-400 text-3xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">Telefon</h3>
                            <p className="text-gray-300">+90 537 494 55 45</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8, scale: 1.05 }}
                            className="group flex flex-col items-center gap-4 p-8 bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 border border-slate-700/50 hover:border-cyan-400/50"
                        >
                            <div className="p-4 rounded-xl bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-colors">
                                <FaEnvelope className="text-cyan-400 text-3xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">Email</h3>
                            <p className="text-gray-300">info@osianatech.com</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8, scale: 1.05 }}
                            className="group flex flex-col items-center gap-4 p-8 bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 border border-slate-700/50 hover:border-indigo-400/50"
                        >
                            <div className="p-4 rounded-xl bg-indigo-500/20 group-hover:bg-indigo-500/30 transition-colors">
                                <FaMapMarkerAlt className="text-indigo-400 text-3xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">Adres</h3>
                            <p className="text-gray-300">Esenler, İstanbul</p>
                        </motion.div>
                    </div>
                </div>
                <FAQSection />
            </section>

            {/* Contact Form */}
            <section ref={sectionRef} className="py-24 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 relative">
                {/* Dekoratif Görseller */}
                <motion.img
                    src="/resim2.svg"
                    alt="Star"
                    className="hidden md:block absolute top-0 left-0 w-40 opacity-20 blur-sm"
                    style={{ translateY, rotate }}
                />
                <motion.img
                    src="/google_docs.svg"
                    alt="Wave"
                    className="hidden md:block absolute bottom-4 -right-12 w-52 opacity-20 blur-sm"
                    style={{ translateY }}
                />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-b from-white via-gray-200 to-gray-400 text-transparent bg-clip-text"
                    >
                        Mesaj Gönderin
                    </motion.h2>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto grid gap-5 bg-slate-800/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-lg border border-slate-700/50"
                    >
                        <input
                            type="text"
                            placeholder="Adınız Soyadınız"
                            className="bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition w-full"
                        />
                        <input
                            type="email"
                            placeholder="Email Adresiniz"
                            className="bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition w-full"
                        />
                        <input
                            type="text"
                            placeholder="Konu"
                            className="bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition w-full"
                        />
                        <textarea
                            placeholder="Mesajınız"
                            rows={6}
                            className="bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none w-full"
                        />
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-medium hover:from-blue-500 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-900/50 border border-blue-500/50 mt-2"
                        >
                            Gönder
                        </motion.button>
                    </motion.form>
                </div>
            </section>
        </main>
    );
}
