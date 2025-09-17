"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageBannerProps {
    title: string;
    subtitle?: string;
    background?: string;
    leftImage?: string;
    rightImage?: string;
}

export default function PageBanner({
    title,
    subtitle,
    background,
    leftImage,
    rightImage,
}: PageBannerProps) {
    return (
        <section className="relative h-[400px] flex items-center justify-center text-center overflow-hidden">
            {/* Arka Plan */}
            {background ? (
                <Image
                    src={background}
                    alt={title}
                    fill
                    className="object-cover brightness-75"
                    priority
                />
            ) : (
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]" />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Hareketli Görseller */}
            {leftImage && (
                <motion.img
                    src={leftImage}
                    alt="Left decor"
                    className="hidden md:block absolute left-0 bottom-10 w-48"
                    animate={{ translateY: [-20, 20] }}
                    transition={{ repeat: Infinity, repeatType: "mirror", duration: 3, ease: "easeInOut" }}
                />
            )}
            {rightImage && (
                <motion.img
                    src={rightImage}
                    alt="Right decor"
                    className="hidden md:block absolute right-0 top-10 w-48"
                    animate={{ translateY: [-20, 20] }}
                    transition={{ repeat: Infinity, repeatType: "mirror", duration: 3, ease: "easeInOut" }}
                />
            )}

            {/* İçerik */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 text-white px-4"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                {subtitle && (
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">{subtitle}</p>
                )}
            </motion.div>
        </section>
    );
}
