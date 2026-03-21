"use client";

import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";

const reports = [
    {
        title: "会派ニュース 令和8年 新年号",
        date: "令和8年（2026年）1月",
        file: "/pdf/report_2026_newyear.pdf",
        badge: "最新号",
        badgeColor: "bg-accent-500",
    },
    {
        title: "会派ニュース 令和7年4月21日号",
        date: "令和7年（2025年）4月",
        file: "/pdf/2025自民党4.21-02.pdf",
        badge: "会派ニュース",
        badgeColor: "bg-primary-500",
    },
    {
        title: "会派ニュース 令和7年1月13日号",
        date: "令和7年（2025年）1月",
        file: "/pdf/2026自民党2025.1.13-02_compressed (2).pdf",
        badge: "会派ニュース",
        badgeColor: "bg-primary-500",
    },
    {
        title: "会派ニュース 令和7年1月号",
        date: "令和7年（2025年）1月",
        file: "/pdf/草加自民党・無所属の会202501.pdf",
        badge: "会派ニュース",
        badgeColor: "bg-primary-500",
    },
    {
        title: "会派ニュース vol.2",
        date: "旧・自由市民議員団",
        file: "/pdf/自由市民議員団会派ニュースvol.２.pdf",
        badge: "バックナンバー",
        badgeColor: "bg-gray-400",
    },
    {
        title: "会派ニュース vol.1",
        date: "旧・自由市民議員団",
        file: "/pdf/自由市民議員団会派ニュースvol.1 - コピー.pdf",
        badge: "バックナンバー",
        badgeColor: "bg-gray-400",
    },
];

export default function ReportsPage() {
    return (
        <div className="min-h-screen bg-gray-50/50 pb-20">
            {/* ページヘッダー */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary-900 -skew-y-3 origin-right transform translate-y-12 scale-110" />
                <div className="relative container mx-auto px-4 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="inline-block px-4 py-1.5 rounded-full bg-accent-500/20 backdrop-blur-md border border-accent-500/30 text-accent-500 text-sm font-black mb-6 uppercase tracking-widest shadow-lg">
                            Newsletter
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
                            会派ニュース
                        </h1>
                        <p className="text-lg md:text-xl text-blue-200 font-bold opacity-80 max-w-2xl mx-auto leading-relaxed">
                            草加自民党・無所属の会が発行する<br className="hidden md:block" />
                            会派ニュースのバックナンバーをご覧いただけます。
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-10 relative z-10 max-w-3xl space-y-3">
                {reports.map((report, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 }}
                        className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow px-6 py-5 flex items-center gap-5"
                    >
                        {/* アイコン */}
                        <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                            <FileText size={24} className="text-primary-500" />
                        </div>

                        {/* テキスト */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                                <span className={`text-[10px] font-black text-white px-2 py-0.5 rounded-full ${report.badgeColor}`}>
                                    {report.badge}
                                </span>
                                <span className="text-xs text-gray-400 font-bold">{report.date}</span>
                            </div>
                            <p className="text-sm md:text-base font-black text-gray-900 truncate">{report.title}</p>
                        </div>

                        {/* ボタン */}
                        <div className="flex items-center gap-2 shrink-0">
                            <a
                                href={report.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-xs font-black text-gray-600 hover:text-primary-600 bg-gray-100 hover:bg-primary-50 px-3 py-2 rounded-xl transition-all"
                            >
                                <ExternalLink size={13} />
                                <span className="hidden sm:inline">閲覧</span>
                            </a>
                            <a
                                href={report.file}
                                download
                                className="flex items-center gap-1.5 text-xs font-black text-white bg-primary-600 hover:bg-primary-700 px-3 py-2 rounded-xl transition-all"
                            >
                                <Download size={13} />
                                <span className="hidden sm:inline">DL</span>
                            </a>
                        </div>
                    </motion.div>
                ))}

                <p className="text-center text-xs text-gray-400 font-bold pt-4">
                    ※ PDFファイルが開きます。閲覧にはPDFリーダーが必要です。
                </p>
            </div>
        </div>
    );
}
