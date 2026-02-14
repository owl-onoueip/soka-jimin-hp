"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { latestReportSteps } from "@/data/reportSteps";

export default function VisualReport() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-primary-900">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                {/* 背景画像・エフェクト */}
                <div className="absolute inset-0 z-0">
                    {latestReportSteps.map((step, index) => {
                        // index 0 (最初のスライド) は最初から表示 (opacity 1)
                        // それ以降はスクロールに応じてフェードイン
                        const start = index === 0 ? 0 : index / 3;
                        const end = (index + 1) / 3;

                        const opacity = useTransform(
                            scrollYProgress,
                            [start, (start + end) / 2, end],
                            [index === 0 ? 1 : 0, 1, 0]
                        );
                        return (
                            <motion.div
                                key={step.id}
                                style={{ opacity }}
                                className="absolute inset-0 bg-cover bg-center"
                            // 実際はstep.imageを使用するが、ここではプレースホルダー
                            >
                                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                            </motion.div>
                        );
                    })}
                </div>

                {/* コンテンツエリア */}
                <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        {latestReportSteps.map((step, index) => {
                            const start = index === 0 ? 0 : index / 3;
                            const end = (index + 0.8) / 3;

                            const opacity = useTransform(
                                scrollYProgress,
                                [start, (start + end) / 2, end],
                                [index === 0 ? 1 : 0, 1, 0]
                            );
                            // 最初のアイテムは初期位置0, それ以外は下から出現
                            const y = useTransform(
                                scrollYProgress,
                                [start, (start + end) / 2, end],
                                [index === 0 ? 0 : 40, 0, -40]
                            );

                            return (
                                <motion.div
                                    key={step.id}
                                    style={{ opacity, y, position: "absolute" }}
                                    className="max-w-xl"
                                >
                                    <span className="text-accent-400 font-black text-sm tracking-widest uppercase mb-4 block">
                                        Latest Report 0{index + 1}
                                    </span>
                                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                        {step.title}
                                    </h2>
                                    <p className="text-xl text-white/80 font-bold leading-relaxed mb-8">
                                        {step.description}
                                    </p>

                                    {/* 統計データの強調表示 */}
                                    {step.stat && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.2, type: "spring" }}
                                            className="mb-8 p-6 bg-gradient-to-r from-accent-600/20 to-transparent border-l-4 border-accent-500 backdrop-blur-sm"
                                        >
                                            <div className="text-accent-300 text-sm font-bold mb-1 tracking-wider">{step.stat.label}</div>
                                            <div className="text-4xl md:text-6xl font-black text-white tracking-tight flex items-baseline gap-2">
                                                <span className="text-accent-400 text-3xl">¥</span>
                                                {step.stat.value}
                                            </div>
                                        </motion.div>
                                    )}

                                    {step.highlight && (
                                        <motion.div
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            className="inline-block bg-white/10 border border-white/20 p-4 rounded-xl text-accent-300 font-black backdrop-blur-md"
                                        >
                                            {step.highlight}
                                        </motion.div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* アバター・メッセージエリア (提供待ち枠) */}
                    <div className="hidden lg:flex justify-center items-end h-[500px] relative">
                        {latestReportSteps.map((step, index) => {
                            const start = index === 0 ? 0 : index / 3;
                            const end = (index + 0.8) / 3;

                            const opacity = useTransform(
                                scrollYProgress,
                                [start, (start + end) / 2, end],
                                [index === 0 ? 1 : 0, 1, 0]
                            );
                            const scale = useTransform(
                                scrollYProgress,
                                [start, (start + end) / 2, end],
                                [index === 0 ? 1 : 0.8, 1, 0.8]
                            );

                            return (
                                <motion.div
                                    key={step.id + "-avatar"}
                                    style={{ opacity, scale, position: "absolute" }}
                                    className="flex flex-col items-center"
                                >
                                    {/* アバタープレースホルダー */}
                                    <div className="w-64 h-64 bg-accent-500/20 rounded-full border-4 border-accent-500/30 flex items-center justify-center mb-8 relative group overflow-hidden">
                                        <div className="text-accent-500 font-black text-lg animate-pulse">AVATAR</div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-accent-500/20 to-transparent" />
                                    </div>

                                    {/* 吹き出し風台詞 */}
                                    <div className="relative bg-white p-6 rounded-3xl shadow-2xl max-w-sm">
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 border-8 border-transparent border-b-white" />
                                        <p className="text-gray-900 font-black text-center leading-relaxed italic">
                                            「{step.avatarMessage}」
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* スクロールダウン誘導 (初期表示のみ) */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2 pointer-events-none"
                >
                    <span className="text-xs font-bold tracking-widest uppercase">Scroll to Watch Report</span>
                    <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
                </motion.div>
            </div>

            {/* 進行状況インジケーター */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
                {latestReportSteps.map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-1.5 h-12 bg-white/20 rounded-full overflow-hidden"
                    >
                        <motion.div
                            style={{
                                height: "100%",
                                background: "rgb(249, 115, 22)", // accent-500
                                scaleY: useTransform(
                                    scrollYProgress,
                                    [i / 3, (i + 1) / 3],
                                    [0, 1]
                                ),
                                originY: 0
                            }}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
