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
        <section className="relative h-[400px] flex items-center justify-center text-center overflow-hidden bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]">
            {/* Sol ve Sağ Hareketli Görseller */}
            <motion.img
                src={cylinderImage.src}
                alt="Cylinder"
                className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
                animate={{ translateY: [-30, 30] }}
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
                className="md:absolute md:h-full md:w-auto md:max-w-none md:-right-6 lg:right-0"
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
                <h1 className="text-5xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mb-12">
                    {title}
                </h1>
                <p className="text-xl text-[#010D3E] tracking-tight mt-6 max-w-2xl mx-auto">
                    {description}
                </p>
            </motion.div>
        </section>
    );
}
