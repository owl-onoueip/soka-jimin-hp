"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { latestReportSteps } from "@/data/reportSteps";

const accentColors = [
    { border: "border-orange-400", badge: "bg-orange-500", tag: "bg-orange-500/20 text-orange-300 border border-orange-500/30" },
    { border: "border-yellow-400", badge: "bg-yellow-500", tag: "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30" },
    { border: "border-sky-400",    badge: "bg-sky-500",    tag: "bg-sky-500/20 text-sky-300 border border-sky-500/30" },
    { border: "border-emerald-400",badge: "bg-emerald-500",tag: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" },
];

export default function VisualReport() {
    return (
        <section className="bg-primary-950 py-16 md:py-24 px-4">
            <div className="container mx-auto max-w-5xl">

                {/* ヘッダー */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 md:mb-14"
                >
                    <span className="text-accent-400 font-black text-xs tracking-widest uppercase">Latest Report</span>
                    <h2 className="text-2xl md:text-4xl font-black text-white mt-2 tracking-tight">
                        会派の最新活動報告
                    </h2>
                    <p className="text-primary-400 text-sm mt-2">草加市民のために、今、動いています。</p>
                </motion.div>

                {/* カードグリッド */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    {latestReportSteps.map((step, index) => {
                        const color = accentColors[index % accentColors.length];
                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className={`bg-white/5 border-l-4 ${color.border} rounded-2xl p-6 md:p-7 flex flex-col gap-4`}
                            >
                                {/* 番号 + タイトル */}
                                <div className="flex items-start gap-3">
                                    <span className={`shrink-0 w-8 h-8 rounded-full ${color.badge} flex items-center justify-center text-white text-xs font-black`}>
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className="text-lg md:text-xl font-black text-white leading-snug">
                                        {step.title}
                                    </h3>
                                </div>

                                {/* 本文 */}
                                <p className="text-primary-200 text-sm md:text-base leading-relaxed font-medium">
                                    {step.description}
                                </p>

                                {/* 数字データ（11億円など） */}
                                {step.stat && (
                                    <div className={`rounded-xl px-4 py-3 ${color.tag.replace("text-", "bg-").replace("border-", "border-").split(" ")[0]} bg-white/5 border border-white/10`}>
                                        <p className="text-primary-400 text-xs font-bold mb-1">{step.stat.label}</p>
                                        <p className="text-white text-2xl md:text-3xl font-black tracking-tight">
                                            ¥{Number(step.stat.value).toLocaleString()}
                                        </p>
                                    </div>
                                )}

                                {/* ハイライトタグ */}
                                {step.highlight && (
                                    <span className={`self-start text-xs font-black px-3 py-1.5 rounded-full ${color.tag}`}>
                                        {step.highlight}
                                    </span>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* 政策ページへのリンク */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-10 text-center"
                >
                    <Link
                        href="/policy"
                        className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-black px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105"
                    >
                        全ての実績を見る <ArrowRight size={16} />
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
