"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronRight, Newspaper } from "lucide-react";
import Link from "next/link";

const allNews = [
    {
        date: "2026.01.09",
        category: "要望",
        title: "物価高騰対応交付金の全世帯給付型支援への活用を山川市長へ要望",
        tagColor: "bg-accent-500",
        link: "/reports#r8-newyear",
        isPdf: false,
    },
    {
        date: "2026.01",
        category: "会派ニュース",
        title: "令和8年 新春号 会派ニュースを発行しました",
        tagColor: "bg-primary-500",
        link: "/reports#r8-newyear",
        isPdf: false,
    },
    {
        date: "2025.04.21",
        category: "会派ニュース",
        title: "令和7年春号 会派ニュースを発行しました",
        tagColor: "bg-primary-500",
        link: "/reports#r7-spring",
        isPdf: false,
    },
    {
        date: "2025.03",
        category: "議会",
        title: "議会改革特別委員会が設置・小川としや議員が委員長に就任",
        tagColor: "bg-blue-500",
        link: "/reports#r7-spring",
        isPdf: false,
    },
    {
        date: "2025.01.13",
        category: "会派ニュース",
        title: "令和7年 新春号 会派ニュースを発行しました",
        tagColor: "bg-primary-500",
        link: "/reports#r7-newyear",
        isPdf: false,
    },
    {
        date: "2024.01",
        category: "会派ニュース",
        title: "令和6年 新春号（Vol.2）会派ニュースを発行しました",
        tagColor: "bg-primary-500",
        link: "/reports#r6-newyear",
        isPdf: false,
    },
    {
        date: "2023.12.01",
        category: "視察",
        title: "自動運転技術の活用に向け株式会社マクニカを視察",
        tagColor: "bg-orange-500",
        link: "/reports#r6-newyear",
        isPdf: false,
    },
    {
        date: "2023.01",
        category: "会派ニュース",
        title: "令和5年 新春号（Vol.1）会派ニュースを発行しました",
        tagColor: "bg-primary-500",
        link: "/reports#r5-newyear",
        isPdf: false,
    },
    {
        date: "2022.12.15",
        category: "要望",
        title: "令和5年度施策に対する要望書（5部門24項目）を市長へ提出",
        tagColor: "bg-accent-500",
        link: "/reports#r5-newyear",
        isPdf: false,
    },
];

export default function NewsPageClient() {
    return (
        <div className="min-h-screen bg-gray-50/50 pb-20">
            {/* ページヘッダー */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary-900 -skew-y-3 origin-right transform translate-y-12 scale-110" />
                <div className="relative container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-accent-500/20 backdrop-blur-md border border-accent-500/30 text-accent-500 text-sm font-black mb-6 uppercase tracking-widest shadow-lg">
                            News & Updates
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
                            お知らせ
                        </h1>
                        <p className="text-lg md:text-xl text-blue-200 font-bold opacity-80 max-w-2xl mx-auto leading-relaxed">
                            会派の最新の活動報告や、草加市政の重要情報を<br className="hidden md:block" />
                            いち早くお届けいたします。
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-10 relative z-10">
                <div className="max-w-4xl mx-auto space-y-3">
                    {allNews.map((item, i) => {
                        const inner = (
                            <div className="card bg-white flex flex-col md:flex-row md:items-center gap-4 p-5 md:p-6">
                                <div className="flex items-center gap-3 min-w-[110px]">
                                    <Calendar size={15} className="text-accent-500 shrink-0" />
                                    <span className="text-xs font-bold text-gray-400">{item.date}</span>
                                </div>
                                <span className={`inline-block ${item.tagColor} text-white px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shrink-0`}>
                                    {item.category}
                                </span>
                                <p className="text-sm md:text-base font-black text-gray-900 flex-1 leading-snug">
                                    {item.title}
                                </p>
                                {item.link && (
                                    <div className="flex items-center gap-1.5 text-primary-500 shrink-0">
                                        <Newspaper size={13} />
                                        <span className="text-xs font-black hidden sm:inline">会派ニュースへ</span>
                                        <ChevronRight size={14} />
                                    </div>
                                )}
                            </div>
                        );

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.07 }}
                            >
                                {item.link ? (
                                    <Link href={item.link} className="block hover:shadow-lg transition-shadow rounded-2xl">
                                        {inner}
                                    </Link>
                                ) : (
                                    <div>{inner}</div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
