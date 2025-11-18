"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
    {
        question: "Web sitem için nasıl teklif alabilirim?",
        answer:
            "İletişim formunu doldurarak veya e-posta yoluyla bizimle iletişime geçebilirsiniz. Projenizin detaylarını aldıktan sonra size en kısa sürede özel bir teklif sunuyoruz.",
    },
    {
        question: "Projelerinizin teslim süresi ne kadar?",
        answer:
            "Teslim süresi projenin kapsamına göre değişiklik gösterir. Genellikle küçük projeler 2-3 hafta, daha kapsamlı projeler ise 1-2 ay sürebilir.",
    },
    {
        question: "Hangi teknolojileri kullanıyorsunuz?",
        answer:
            "Modern ve güncel teknolojiler kullanıyoruz. React, Next.js, Node.js, TypeScript, Golang gibi popüler framework ve dillerin yanı sıra, projenizin ihtiyacına göre en uygun teknoloji stack'ini belirliyoruz.",
    },
    {
        question: "Teknik destek sağlıyor musunuz?",
        answer:
            "Evet, projelerimizin tesliminden sonra da teknik destek ve bakım hizmeti sunuyoruz.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24">
            <div className="container mx-auto max-w-3xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-b from-white via-gray-200 to-gray-400 text-transparent bg-clip-text"
                >
                    Sık Sorulan Sorular
                </motion.h2>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="group bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-slate-700/50 hover:border-blue-400/50 p-6 cursor-pointer overflow-hidden"
                            onClick={() => toggleFAQ(idx)}
                        >
                            {/* Hover gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />

                            <div className="flex justify-between items-center relative z-10">
                                <h3 className="text-lg font-medium text-white group-hover:text-blue-300 transition-colors">
                                    {faq.question}
                                </h3>
                                <FaChevronDown
                                    className={`text-gray-400 transition-transform duration-300 ${openIndex === idx ? "rotate-180 text-blue-400" : ""
                                        }`}
                                />
                            </div>
                            {openIndex === idx && (
                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-4 text-gray-300 leading-relaxed relative z-10"
                                >
                                    {faq.answer}
                                </motion.p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
