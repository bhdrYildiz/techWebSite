"use client";

import { motion } from "framer-motion";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";

export default function PageBanner({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <section className="relative h-[240px] flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
            {/* Sol ve Sağ Hareketli Görseller */}
            <motion.img
                src={cylinderImage.src}
                alt="Cylinder"
                className="hidden md:block md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 opacity-20 blur-sm"
                animate={{ translateY: [-20, 10] }}
                transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 3,
                    ease: "easeInOut",
                }}
            />
            <motion.img
                src={noodleImage.src}
                alt="Noodle"
                className="hidden md:block md:absolute md:h-full md:w-auto md:max-w-none md:-right-6 lg:right-0 opacity-20 blur-sm"
                animate={{ translateY: [-30, 30] }}
                transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 3,
                    ease: "easeInOut",
                }}
            />

            {/* Banner İçerik */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 text-white px-4"
            >
                <h1 className="text-5xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-white via-gray-200 to-gray-400 text-transparent bg-clip-text mb-12">
                    {title}
                </h1>
                <p className="text-xl text-gray-300 tracking-tight mt-6 max-w-2xl mx-auto">
                    {description}
                </p>
            </motion.div>
        </section>
    );
}
