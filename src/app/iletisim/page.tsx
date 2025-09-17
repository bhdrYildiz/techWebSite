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
                        İLETİŞİM
                    </h1>
                    <p className="text-xl text-[#010D3E] tracking-tight mt-6 max-w-2xl mx-auto">
                        OsianaTech ile markanızı güçlendirin. Modern web tasarım, SEO, SaaS ve danışmanlık hizmetlerimizle işletmenizin dijital dünyada öne çıkmasını sağlayın.
                    </p>
                </motion.div>
            </section>
            {/* Contact Info */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">Bize Ulaşın</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                            <FaPhoneAlt className="text-blue-700 text-3xl" />
                            <h3 className="text-xl font-semibold">Telefon</h3>
                            <p className="text-gray-600">+90 530 389 7163</p>
                        </div>
                        <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                            <FaEnvelope className="text-blue-900 text-3xl" />
                            <h3 className="text-xl font-semibold">Email</h3>
                            <p className="text-gray-600">info@yildizhotelcappadocia.com</p>
                        </div>
                        <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                            <FaMapMarkerAlt className="text-[#001E80] text-3xl" />
                            <h3 className="text-xl font-semibold">Adres</h3>
                            <p className="text-gray-600">Göreme, Cappadocia, Türkiye</p>
                        </div>
                    </div>
                </div>
                <FAQSection />
            </section>

            {/* Contact Form */}
            <section className="py-24 container mx-auto relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Mesaj Gönderin
                </h2>

                {/* Dekoratif Görseller */}
                <motion.img
                    src="/resim2.svg"
                    alt="Star"
                    className="hidden md:block absolute top-0 left-0 w-40 opacity-60"
                    style={{ translateY, rotate }}
                />
                <motion.img
                    src="/backend.svg"
                    alt="Wave"
                    className="hidden md:block absolute bottom-4 right-0 w-52 opacity-70"
                    style={{ translateY }}
                />

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto grid gap-6 relative z-10 bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow"
                >
                    <input
                        type="text"
                        placeholder="Adınız Soyadınız"
                        className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                    <input
                        type="email"
                        placeholder="Email Adresiniz"
                        className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                    <input
                        type="text"
                        placeholder="Konu"
                        className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                    <textarea
                        placeholder="Mesajınız"
                        rows={6}
                        className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-black/80 transition"
                    >
                        Gönder
                    </motion.button>
                </motion.form>
            </section>
        </main>
    );
}
