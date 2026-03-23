"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Globe, ChevronRight } from "lucide-react";
import Link from "next/link";

// 議員役職（令和8年新春号・最新）
const memberRoles = [
    { name: "田中 宣光", role: "団長", photo: "/images/members/tanaka.jpg", color: "bg-primary-600", emoji: "👑" },
    { name: "木村 忠義", role: "幹事長", photo: "/images/members/kimura.jpg", color: "bg-blue-600", emoji: "⭐" },
    { name: "矢部 正平", role: "会計", photo: "/images/members/YABE.webp", color: "bg-indigo-600", emoji: "💼" },
    { name: "小川 利八", role: "議会改革特別委員会委員長", photo: "/images/members/ogawa.webp", color: "bg-purple-600", emoji: "🏛️" },
    { name: "芝野 勝利", role: "団員", photo: "/images/members/shibano.webp", color: "bg-green-600", emoji: "🌿" },
    { name: "松井 優美子", role: "団員", photo: "/images/members/matui.webp", color: "bg-pink-500", emoji: "🌸" },
    { name: "白石 孝雄", role: "団員", photo: "/images/members/shiraishi.webp", color: "bg-orange-500", emoji: "🌟" },
];

// 3つの柱
const pillars = [
    {
        emoji: "👂",
        bg: "bg-gradient-to-br from-blue-50 to-sky-50",
        border: "border-t-4 border-blue-400",
        titleColor: "text-blue-800",
        title: "市民の声を聴く",
        text: "お一人おひとりの声を直接受け取り、事業の優先順位に反映させます。市民参加型の政治を目指し、常に現場の声を大切にします。",
    },
    {
        emoji: "💪",
        bg: "bg-gradient-to-br from-green-50 to-emerald-50",
        border: "border-t-4 border-green-400",
        titleColor: "text-green-800",
        title: "着実に実行する",
        text: "7名が一丸となり、温めてきた思いや計画を着実に実行に移します。柔軟な発想と周囲との縁を大切に、スピード感をもって前進します。",
    },
    {
        emoji: "🌸",
        bg: "bg-gradient-to-br from-orange-50 to-amber-50",
        border: "border-t-4 border-orange-400",
        titleColor: "text-orange-800",
        title: "草加の未来を創る",
        text: "「住んでよかった」と心から思える草加市へ。市民の皆様と一緒に歩み、将来にわたって安心して暮らせるまちづくりを進めます。",
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50/50 pb-20">
            {/* ページヘッダー */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary-900 -skew-y-3 origin-right transform translate-y-12 scale-110" />
                <div className="relative container mx-auto px-4 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="inline-block px-4 py-1.5 rounded-full bg-accent-500/20 backdrop-blur-md border border-accent-500/30 text-accent-500 text-sm font-black mb-6 uppercase tracking-widest shadow-lg">
                            About Us
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
                            会派について
                        </h1>
                        <p className="text-lg md:text-xl text-blue-200 font-bold opacity-80 max-w-2xl mx-auto leading-relaxed">
                            草加自民党・無所属の会は、<br className="hidden md:block" />
                            市民お一人おひとりの声を大切に、草加の未来を切り拓きます。
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-10 relative z-10 max-w-5xl space-y-16">

                {/* 団長挨拶 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-l-8 border-primary-600"
                >
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="shrink-0 text-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary-200 mx-auto mb-3 shadow-lg">
                                <div
                                    className="w-full h-full bg-cover bg-center bg-top"
                                    style={{ backgroundImage: `url(/images/members/tanaka.jpg)` }}
                                />
                            </div>
                            <p className="text-xs font-black text-gray-400 tracking-widest">団長</p>
                            <p className="text-base font-black text-primary-900">田中 宣光</p>
                        </div>
                        <div>
                            <div className="inline-block text-xs font-black text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-4">
                                ご挨拶
                            </div>
                            <p className="text-gray-700 font-bold leading-loose text-sm md:text-base">
                                市民の皆様、草加自民党・無所属の会の団長を務めております、田中宣光です。<br /><br />
                                私たちは「市民の声を市政に届ける」をモットーに、日々の議会活動に取り組んでおります。市民生活上、何かお困りのことがあれば、会派の議員にどうぞお気軽にお声がけください。<br /><br />
                                令和7年度も、<span className="text-primary-700 font-black">市民の声を直接聞き、事業の優先順位を見直し、提言</span>していくことを、七名全員一丸となって進めてまいります。引き続き、皆様のご協力・ご理解をよろしくお願いいたします。
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* 3つの柱 */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-black text-primary-900 mb-2">私たちの3つの柱</h2>
                        <div className="w-16 h-1.5 bg-accent-500 rounded-full" />
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {pillars.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`rounded-2xl p-8 text-center shadow-sm ${p.bg} ${p.border}`}
                            >
                                <div className="text-5xl mb-5">{p.emoji}</div>
                                <h3 className={`text-xl font-black mb-4 ${p.titleColor}`}>{p.title}</h3>
                                <p className="text-sm text-gray-700 font-bold leading-relaxed">{p.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 議員役職一覧 */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-black text-primary-900 mb-2">議員役職一覧</h2>
                        <div className="w-16 h-1.5 bg-accent-500 rounded-full" />
                        <p className="text-sm text-gray-500 font-bold mt-2">令和7年 現在</p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {memberRoles.map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                            >
                                <Link href="/members" className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group">
                                    <div className="relative shrink-0">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-gray-100 shadow">
                                            <div
                                                className="w-full h-full bg-cover bg-center bg-top"
                                                style={{ backgroundImage: `url(${m.photo})` }}
                                            />
                                        </div>
                                        <div className={`absolute -bottom-1 -right-1 w-7 h-7 ${m.color} rounded-full flex items-center justify-center text-sm shadow`}>
                                            {m.emoji}
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[11px] font-black text-gray-400 leading-tight whitespace-pre-line mb-1">{m.role}</p>
                                        <p className="text-base font-black text-gray-900 group-hover:text-primary-600 transition-colors">{m.name}</p>
                                    </div>
                                    <ChevronRight size={16} className="text-gray-300 group-hover:text-primary-400 transition-colors shrink-0" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 基本情報 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-primary-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
                >
                    <h2 className="text-2xl font-black mb-8">会派基本情報</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0 text-lg">🏛️</div>
                                <div>
                                    <p className="text-xs font-black text-blue-300 mb-1 uppercase tracking-widest">会派名</p>
                                    <p className="font-black text-lg">草加自民党・無所属の会</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin size={20} className="text-accent-400" />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-blue-300 mb-1 uppercase tracking-widest">所在地</p>
                                    <p className="font-bold text-sm leading-relaxed">
                                        〒340-8550<br />
                                        埼玉県草加市高砂一丁目1番1号<br />
                                        本庁舎9階
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                    <Phone size={20} className="text-accent-400" />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-blue-300 mb-1 uppercase tracking-widest">電話番号</p>
                                    <a href="tel:0489222457" className="font-black text-xl hover:text-accent-300 transition-colors">
                                        048-922-2457
                                    </a>
                                    <p className="text-xs text-blue-300 font-bold">（草加市議会事務局）</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                    <Globe size={20} className="text-accent-400" />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-blue-300 mb-1 uppercase tracking-widest">公式サイト</p>
                                    <a href="https://www.soka-jsg.com" target="_blank" rel="noopener noreferrer"
                                        className="font-bold text-sm hover:text-accent-300 transition-colors underline">
                                        https://www.soka-jsg.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
