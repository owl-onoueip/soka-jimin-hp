"use client";

import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";

const reports = [
    {
        title: "会派ニュース 2026年 新春号",
        date: "令和8年（2026年）1月",
        file: "/pdf/report_2026_newyear.pdf",
        badge: "最新号",
        badgeColor: "bg-accent-500",
        points: [
            "物価高騰対応交付金を全世帯給付型支援に活用するよう市長へ要望書提出",
            "議会改革特別委員会報告：議員定数・報酬・政務活動費について各会派が意見交換",
            "代表質問の一問一答方式を令和8年2月定例会より導入・議会動画配信を4年に延長",
        ],
    },
    {
        title: "会派ニュース 令和7年春号",
        date: "令和7年（2025年）4月",
        file: "/pdf/2025自民党4.21-02.pdf",
        badge: "会派ニュース",
        badgeColor: "bg-primary-500",
        points: [
            "令和7年度一般会計予算916億7,600万円（過去最大）成立",
            "学校給食費補助金・学校配当予算の補正予算を申し入れ・全会一致で可決",
            "本庁舎1階売店の不透明な減額貸付（月4.5万円）を指摘し第35号議案の取り下げに",
        ],
    },
    {
        title: "会派ニュース 令和7年 新春号",
        date: "令和7年（2025年）1月",
        file: "/pdf/草加自民党・無所属の会202501.pdf",
        badge: "会派ニュース",
        badgeColor: "bg-primary-500",
        points: [
            "令和6年12月定例会：学校給食調理の民間委託について賛成討論を実施",
            "事業総点検の結果報告：対象676件のうち廃止・終了33件・要改善222件",
            "柿木・青柳エリアグランドデザイン策定に向け、スピード感ある開発を要望",
        ],
    },
    {
        title: "会派ニュース Vol.2（令和6年 新春号）",
        date: "令和6年（2024年）1月",
        file: "/pdf/自由市民議員団会派ニュースvol.２.pdf",
        badge: "バックナンバー",
        badgeColor: "bg-gray-400",
        points: [
            "能登半島地震への草加市の支援活動を報告",
            "2024年度予算に向け要望書を提出：市民温水プール等の事業見直しを求める",
            "株式会社マクニカへの会派視察：自動運転技術の草加市導入可能性を研究",
        ],
    },
    {
        title: "会派ニュース Vol.1（令和5年 新春号）",
        date: "令和5年（2023年）1月",
        file: "/pdf/自由市民議員団会派ニュースvol.1 - コピー.pdf",
        badge: "バックナンバー",
        badgeColor: "bg-gray-400",
        points: [
            "令和5年度施策に対する要望書（5部門24項目）を山川市長へ提出",
            "重点要望：交通空白地解消・バス路線延伸・産科再開・18歳まで医療費無償化",
            "令和5年2月定例会にて代表質問を実施・市長の施政方針を追及",
        ],
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

            <div className="container mx-auto px-4 -mt-10 relative z-10 max-w-3xl space-y-4">
                {reports.map((report, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 }}
                        className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6"
                    >
                        {/* ヘッダー行 */}
                        <div className="flex items-start gap-4">
                            <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0 mt-0.5">
                                <FileText size={22} className="text-primary-500" />
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className={`text-[10px] font-black text-white px-2 py-0.5 rounded-full ${report.badgeColor}`}>
                                        {report.badge}
                                    </span>
                                    <span className="text-xs text-gray-400 font-bold">{report.date}</span>
                                </div>
                                <p className="text-sm md:text-base font-black text-gray-900">{report.title}</p>
                            </div>

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
                        </div>

                        {/* トピック一覧 */}
                        <ul className="mt-4 ml-[60px] space-y-1.5">
                            {report.points.map((point, j) => (
                                <li key={j} className="flex items-start gap-2 text-xs text-gray-600 font-bold leading-relaxed">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-300 shrink-0" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}

                <p className="text-center text-xs text-gray-400 font-bold pt-4">
                    ※ PDFファイルが開きます。閲覧にはPDFリーダーが必要です。
                </p>
            </div>
        </div>
    );
}
