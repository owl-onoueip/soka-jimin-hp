"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

const allNews = [
    { id: 1, date: "2026.02.14", category: "報告", title: "最新号発行：2026年 活動報告書を公開しました", tagColor: "bg-primary-500" },
    { id: 2, date: "2024.01.20", category: "視察", title: "先進技術の活用：株式会社マクニカへの視察報告", tagColor: "bg-accent-500" },
    { id: 3, date: "2024.01.05", category: "会派", title: "2024年 新年のご挨拶を掲載いたしました", tagColor: "bg-green-500" },
    { id: 4, date: "2023.12.15", category: "要望", title: "令和6年度予算要望書を草加市長へ提出しました", tagColor: "bg-primary-500" },
    { id: 5, date: "2023.12.01", category: "お知らせ", title: "会派公式ホームページをリニューアルしました", tagColor: "bg-blue-500" },
];

export default function NewsPage() {
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
                <div className="max-w-4xl mx-auto space-y-6">
                    {allNews.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link
                                href={`/news/${item.id}`}
                                className="card bg-white hover:shadow-xl transition-all group flex flex-col md:flex-row md:items-center gap-6 p-6 md:p-8"
                            >
                                <div className="flex items-center gap-4 min-w-[120px]">
                                    <Calendar size={18} className="text-accent-500" />
                                    <span className="text-sm font-bold text-gray-400">{item.date}</span>
                                </div>

                                <span className={`inline-block ${item.tagColor} text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest`}>
                                    {item.category}
                                </span>

                                <h2 className="text-lg font-black text-gray-900 flex-1 group-hover:text-primary-600 transition-colors">
                                    {item.title}
                                </h2>

                                <ChevronRight className="text-gray-300 group-hover:text-primary-500 group-hover:translate-x-2 transition-all hidden md:block" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* ページネーション（ダミー） */}
                <div className="mt-12 flex justify-center gap-2">
                    <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-primary-600 border border-primary-100">1</button>
                    <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-gray-400 hover:bg-gray-50 transition-colors">2</button>
                    <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-gray-400 hover:bg-gray-50 transition-colors">3</button>
                </div>
            </div>
        </div>
    );
}
