"use client";

import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";

const reports = [
    {
        title: "会派ニュース 令和8年 新年号",
        date: "令和8年（2026年）1月",
        file: "/pdf/report_2026_newyear.pdf",
        color: "border-t-4 border-primary-500",
        bg: "bg-gradient-to-br from-blue-50 to-sky-50",
        badgeColor: "bg-primary-500",
        iconColor: "text-primary-600",
        iconBg: "bg-primary-100",
    },
    {
        title: "会派ニュース 令和7年4月21日号",
        date: "令和7年（2025年）4月",
        file: "/pdf/2025自民党4.21-02.pdf",
        color: "border-t-4 border-green-500",
        bg: "bg-gradient-to-br from-green-50 to-emerald-50",
        badgeColor: "bg-green-500",
        iconColor: "text-green-600",
        iconBg: "bg-green-100",
    },
    {
        title: "会派ニュース 令和7年1月13日号",
        date: "令和7年（2025年）1月",
        file: "/pdf/2026自民党2025.1.13-02_compressed (2).pdf",
        color: "border-t-4 border-orange-500",
        bg: "bg-gradient-to-br from-orange-50 to-amber-50",
        badgeColor: "bg-orange-500",
        iconColor: "text-orange-600",
        iconBg: "bg-orange-100",
    },
    {
        title: "会派ニュース 令和7年1月号",
        date: "令和7年（2025年）1月",
        file: "/pdf/草加自民党・無所属の会202501.pdf",
        color: "border-t-4 border-purple-500",
        bg: "bg-gradient-to-br from-purple-50 to-violet-50",
        badgeColor: "bg-purple-500",
        iconColor: "text-purple-600",
        iconBg: "bg-purple-100",
    },
    {
        title: "会派ニュース vol.2",
        date: "旧・自由市民議員団",
        file: "/pdf/自由市民議員団会派ニュースvol.２.pdf",
        color: "border-t-4 border-teal-500",
        bg: "bg-gradient-to-br from-teal-50 to-cyan-50",
        badgeColor: "bg-teal-500",
        iconColor: "text-teal-600",
        iconBg: "bg-teal-100",
    },
    {
        title: "会派ニュース vol.1",
        date: "旧・自由市民議員団",
        file: "/pdf/自由市民議員団会派ニュースvol.1 - コピー.pdf",
        color: "border-t-4 border-gray-400",
        bg: "bg-gradient-to-br from-gray-50 to-slate-50",
        badgeColor: "bg-gray-500",
        iconColor: "text-gray-600",
        iconBg: "bg-gray-100",
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

            <div className="container mx-auto px-4 -mt-10 relative z-10 max-w-4xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {reports.map((report, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`rounded-2xl p-7 shadow-sm ${report.bg} ${report.color}`}
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${report.iconBg}`}>
                                <FileText size={28} className={report.iconColor} />
                            </div>

                            <span className={`inline-block text-[10px] font-black text-white px-2.5 py-1 rounded-full mb-3 ${report.badgeColor}`}>
                                会派ニュース
                            </span>

                            <h2 className="text-base font-black text-gray-900 mb-1 leading-snug">
                                {report.title}
                            </h2>
                            <p className="text-xs font-bold text-gray-400 mb-6">{report.date}</p>

                            <div className="flex gap-3">
                                <a
                                    href={report.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-primary-400 hover:text-primary-600 text-gray-700 font-black text-sm py-3 rounded-xl transition-all shadow-sm hover:shadow-md"
                                >
                                    <ExternalLink size={15} />
                                    閲覧
                                </a>
                                <a
                                    href={report.file}
                                    download
                                    className="flex-1 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-black text-sm py-3 rounded-xl transition-all shadow-sm hover:shadow-md"
                                >
                                    <Download size={15} />
                                    ダウンロード
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-sm text-gray-400 font-bold mt-10"
                >
                    ※ PDFファイルが開きます。閲覧にはPDFリーダーが必要です。
                </motion.p>
            </div>
        </div>
    );
}
