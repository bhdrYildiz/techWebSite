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
        question: "Sadece Türkiye’de mi hizmet veriyorsunuz?",
        answer:
            "Hayır, global ölçekte çalışıyoruz. Uzaktan iletişim araçları ile dünyanın her yerindeki müşterilerimize hizmet veriyoruz.",
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
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Sık Sorulan Sorular
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="bg-white rounded-xl shadow p-6 cursor-pointer"
                            onClick={() => toggleFAQ(idx)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-medium text-gray-900">
                                    {faq.question}
                                </h3>
                                <FaChevronDown
                                    className={`text-gray-600 transition-transform ${openIndex === idx ? "rotate-180" : ""
                                        }`}
                                />
                            </div>
                            {openIndex === idx && (
                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-4 text-gray-600 leading-relaxed"
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
