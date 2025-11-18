"use client";

import { FaWhatsapp, FaFacebook, FaLinkedin } from "react-icons/fa";
import SocialX from "@/assets/social-x.svg";

interface BlogSidebarProps {
    title: string;
    url: string;
}

export default function BlogSidebar({ title, url }: BlogSidebarProps) {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : url;
    const shareText = encodeURIComponent(title);
    const shareUrl = encodeURIComponent(currentUrl);

    const handleShare = (platform: string) => {
        switch (platform) {
            case 'whatsapp':
                window.open(`https://wa.me/?text=${shareText}%20${shareUrl}`, '_blank');
                break;
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank');
                break;
            case 'linkedin':
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank');
                break;
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`, '_blank');
                break;
        }
    };

    const handlePrint = () => {
        window.print();
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(currentUrl);
        alert('Link kopyalandı!');
    };

    return (
        <aside className="hidden md:flex flex-col gap-6 sticky top-24 h-fit ml-4">
            {/* Copy Link */}
            <button
                onClick={handleCopyLink}
                className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 text-white hover:bg-slate-700/50 transition-colors flex items-center justify-center"
                aria-label="Copy link"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
            </button>

            {/* Print */}
            <button
                onClick={handlePrint}
                className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 text-white hover:bg-slate-700/50 transition-colors flex items-center justify-center"
                aria-label="Print"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
            </button>

            {/* Social Share Icons */}
            <div className="flex flex-col gap-3 pt-4 border-t border-slate-700/50">
                <button
                    onClick={() => handleShare('whatsapp')}
                    className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 text-white hover:bg-green-500/20 hover:border-green-500/50 transition-colors flex items-center justify-center"
                    aria-label="Share on WhatsApp"
                >
                    <FaWhatsapp className="w-5 h-5" />
                </button>
                <button
                    onClick={() => handleShare('facebook')}
                    className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 text-white hover:bg-blue-500/20 hover:border-blue-500/50 transition-colors flex items-center justify-center"
                    aria-label="Share on Facebook"
                >
                    <FaFacebook className="w-5 h-5" />
                </button>
                <button
                    onClick={() => handleShare('linkedin')}
                    className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 text-white hover:bg-blue-600/20 hover:border-blue-600/50 transition-colors flex items-center justify-center"
                    aria-label="Share on LinkedIn"
                >
                    <FaLinkedin className="w-5 h-5" />
                </button>
                <button
                    onClick={() => handleShare('twitter')}
                    className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 text-white hover:bg-slate-600/50 transition-colors flex items-center justify-center"
                    aria-label="Share on Twitter"
                >
                    <SocialX className="w-5 h-5 brightness-0 invert" />
                </button>
            </div>
        </aside>
    );
}

