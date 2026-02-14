"use client";

import Link from "next/link";
import { MapPin, ChevronRight, Users, ArrowRight } from "lucide-react";
import { members } from "@/data/members";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function MembersClient() {
    return (
        <div className="min-h-screen bg-gray-50/50 pb-20">
            {/* ページヘッダー */}
            <section className="relative py-20 overflow-hidden">
                {/* 背景の装飾 */}
                <div className="absolute inset-0 bg-primary-900 -skew-y-3 origin-right transform translate-y-12 scale-110" />

                <div className="relative container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-accent-500/20 backdrop-blur-md border border-accent-500/30 text-accent-500 text-sm font-black mb-6 uppercase tracking-widest shadow-lg">
                            Our Members
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
                            議員紹介
                        </h1>
                        <p className="text-lg md:text-xl text-blue-200 font-bold opacity-80 max-w-2xl mx-auto leading-relaxed">
                            草加の未来を拓く、7名の情熱。一人一人が市民の皆様の代弁者として、現場の声に徹底してこだわります。
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-10 relative z-10">
                {/* 議員グリッド */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {members.map((member, i) => (
                        <MemberCard key={member.id} member={member} />
                    ))}
                </div>

                {/* 団体紹介セクション */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 card bg-primary-900 text-white p-10 md:p-16 border-none shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <Users size={48} className="text-accent-500" />
                                <h2 className="text-3xl font-black">草加自民党・無所属の会</h2>
                            </div>
                            <p className="text-lg text-blue-100 leading-loose font-bold mb-10">
                                私たちの会派は、草加市議会において市民生活の向上と草加市の発展のために一丸となって活動しています。現場の声を大切にし、実行力のある政策提言を行っています。
                            </p>
                            <Link
                                href="/support"
                                className="btn-cta inline-flex items-center gap-3 px-10 py-5"
                            >
                                会派を応援する
                                <ChevronRight size={20} />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                                <div className="text-accent-500 text-3xl font-black mb-2">7</div>
                                <div className="text-sm font-bold text-blue-200">所属議員数</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                                <div className="text-accent-500 text-3xl font-black mb-2">No.1</div>
                                <div className="text-sm font-bold text-blue-200">最大会派</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

// 議員カードコンポーネント (スライドショー機能付き)
function MemberCard({ member }: { member: typeof members[0] }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // 画像リストを作成 (photoAnimeがない場合はphotoだけになる)
    const images = [member.photo, member.photoAnime].filter(Boolean) as string[];

    // 10秒ごとに画像を切り替える (画像が複数の場合のみ)
    useEffect(() => {
        if (images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 10000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.5 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full"
        >
            {/* 写真エリア (スライドショー) */}
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <AnimatePresence>
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 3.0,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[12000ms]"
                        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
                    />
                </AnimatePresence>

                {/* 役職バッジ */}
                {member.position && (
                    <div className="absolute top-0 right-0 bg-accent-500 text-white text-xs font-bold px-3 py-1.5 rounded-bl-xl shadow-md z-10">
                        {member.position}
                    </div>
                )}

                {/* 地区バッジ */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-primary-800 text-xs font-black px-2 py-1 rounded shadow-sm z-10">
                    {member.area}
                </div>

                {/* グラデーションオーバーレイ */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-60 group-hover:opacity-80 transition-opacity pointer-events-none" />

                {/* 下部情報 (写真上のオーバーレイ) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform group-hover:-translate-y-2 transition-transform duration-500 pointer-events-none">
                    <span className="block text-[10px] font-black tracking-widest uppercase text-accent-400 mb-1">
                        {member.position || "Member of Council"}
                    </span>
                    <h3 className="text-2xl font-black mb-1 group-hover:text-accent-400 transition-colors">
                        {member.name}
                    </h3>
                    <p className="text-xs font-bold opacity-70 tracking-wider">
                        {member.nameKana}
                    </p>
                </div>
            </div>

            {/* 情報エリア */}
            <div className="p-6 flex flex-col flex-grow bg-white border-t border-gray-50">
                <div className="flex items-center gap-2 text-primary-600 mb-4 bg-primary-50 px-3 py-1.5 rounded-lg w-fit">
                    <MapPin size={16} />
                    <span className="text-sm font-black tracking-tight">{member.area}担当</span>
                </div>

                <div className="mb-4 flex-grow">
                    <p className="text-sm text-gray-500 font-bold leading-relaxed line-clamp-2">
                        {member.catchphrase}
                    </p>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100">
                    <Link
                        href={`/members/${member.id}`}
                        className="flex items-center justify-between text-primary-600 font-black text-sm group/btn w-full"
                    >
                        <span>詳細プロフィール</span>
                        <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center group-hover/btn:bg-primary-600 group-hover/btn:text-white transition-all">
                            <ChevronRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
