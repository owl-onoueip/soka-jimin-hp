"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";

const policies = [
    { title: "安心・安全な街づくり", icon: ShieldCheck, items: ["防災・減災対策の強化", "交通安全環境の整備", "地域防犯ネットワークの構築"] },
    { title: "子育て・健康福祉", icon: Heart, items: ["待機児童ゼロの継続", "病児保育・一時預かりの拡充", "高齢者の健康寿命延伸支援"] },
    { title: "地域経済・街の活性化", icon: TrendingUp, items: ["地元商店街・企業の支援", "草加駅周辺・松原地区の再開発", "観光資源の有効活用"] },
    { title: "行財政改革・教育", icon: Zap, items: ["ICT活用による行政効率化", "学校教育環境のDX推進", "財政の健全化と透明性向上"] },
];

function ShieldCheck(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}

function Heart(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
    );
}

export default function PolicyPage() {
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
                            Our Policy
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
                            政策・実績
                        </h1>
                        <p className="text-lg md:text-xl text-blue-200 font-bold opacity-80 max-w-2xl mx-auto leading-relaxed">
                            私たちは、草加市の今と未来を見据え、<br className="hidden md:block" />
                            着実な政策提言と実行力で街の課題を解決します。
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-10 relative z-10 space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {policies.map((policy, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="card bg-white p-10 border-none shadow-sm h-full flex flex-col"
                        >
                            <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-8">
                                <policy.icon size={32} />
                            </div>
                            <h2 className="text-2xl font-black text-gray-900 mb-6">{policy.title}</h2>
                            <ul className="space-y-4 flex-1">
                                {policy.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-3 text-gray-700 font-medium">
                                        <CheckCircle2 size={20} className="text-accent-500 mt-1 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* 実績セクション */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="card bg-primary-900 text-white p-12 md:p-16 border-none shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                    <div className="relative z-10 space-y-10">
                        <div className="text-center">
                            <h2 className="text-3xl md:text-4xl font-black mb-4">これまでの主な実績</h2>
                            <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <span className="text-accent-400 font-black text-xs uppercase tracking-widest mb-2 block">Achievement 01</span>
                                    <p className="font-bold text-lg">草加駅西口広場の再整備とバリアフリー化の推進</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <span className="text-accent-400 font-black text-xs uppercase tracking-widest mb-2 block">Achievement 02</span>
                                    <p className="font-bold text-lg">全市立小中学校へのエアコン完備とタブレット端末導入</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <span className="text-accent-400 font-black text-xs uppercase tracking-widest mb-2 block">Achievement 03</span>
                                    <p className="font-bold text-lg">防災ハザードマップの全戸配布とデジタル化の実現</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <span className="text-accent-400 font-black text-xs uppercase tracking-widest mb-2 block">Achievement 04</span>
                                    <p className="font-bold text-lg">子ども医療費のさらなる拡充（18歳までの窓口負担無料化）</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
