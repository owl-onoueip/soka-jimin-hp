"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Award, Target, Briefcase, Twitter, Facebook, Instagram, Globe, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function MemberDetailClient({ member }: { member: any }) {
    return (
        <div className="min-h-screen bg-gray-50/50 pb-20">
            {/* 戻るリンク */}
            <div className="bg-white/80 backdrop-blur-md border-b sticky top-20 z-40">
                <div className="container mx-auto px-4 py-3">
                    <Link
                        href="/members"
                        className="inline-flex items-center text-gray-500 font-bold hover:text-primary-600 transition-all group"
                    >
                        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        <span>議員一覧に戻る</span>
                    </Link>
                </div>
            </div>

            {/* プロフィールヘッダー */}
            <section className="relative py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-primary-900 -skew-y-2 origin-right transform translate-y-12 scale-110" />
                <div className="relative container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-12"
                    >
                        {/* 写真 */}
                        <div className="relative">
                            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-white border-4 border-white shadow-2xl flex items-center justify-center text-7xl font-black text-primary-900 overflow-hidden">
                                {member.name.charAt(0)}
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-accent-500 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg border-2 border-white uppercase tracking-widest">
                                Official
                            </div>
                        </div>

                        {/* 基本情報 */}
                        <div className="text-center md:text-left flex-1">
                            {member.position && (
                                <span className="inline-block bg-accent-500 text-white text-[10px] font-black tracking-widest px-4 py-1.5 rounded-full mb-4 uppercase drop-shadow-md">
                                    {member.position}
                                </span>
                            )}
                            <h1 className="text-4xl md:text-6xl font-black text-white mb-2 leading-tight drop-shadow-lg">
                                {member.name}
                            </h1>
                            <p className="text-xl md:text-2xl text-blue-200 font-bold mb-6 opacity-80">{member.nameKana}</p>

                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-white/90">
                                <span className="flex items-center gap-2 font-bold bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10">
                                    <MapPin size={18} className="text-accent-400" />
                                    {member.area}担当 議員
                                </span>
                                <span className="flex items-center gap-2 font-bold bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10">
                                    当選 {member.term}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* メインコンテンツ */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* キャッチフレーズ */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="card bg-gradient-to-r from-primary-600 to-primary-800 p-8 md:p-12 text-center border-none shadow-2xl"
                        >
                            <span className="text-accent-400 text-4xl font-serif leading-none opacity-50 block mb-4">“</span>
                            <p className="text-2xl md:text-4xl font-black text-white leading-tight tracking-tight drop-shadow-lg">
                                {member.catchphrase}
                            </p>
                            <span className="text-accent-400 text-4xl font-serif leading-none opacity-50 block mt-4">”</span>
                        </motion.div>

                        {/* メッセージ */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="card p-8 md:p-12 border-none shadow-sm"
                        >
                            <h2 className="section-title text-2xl font-black flex items-center gap-3">
                                <Award className="text-accent-500" size={32} />
                                市民へのメッセージ
                            </h2>
                            <div className="text-gray-700 leading-loose text-lg font-medium whitespace-pre-wrap">
                                {member.message}
                            </div>
                        </motion.div>

                        {/* 政策 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="card p-8 md:p-12 border-none shadow-sm"
                        >
                            <h2 className="section-title text-2xl font-black flex items-center gap-3">
                                <Target className="text-accent-500" size={32} />
                                重点目標・政策
                            </h2>
                            <div className="grid grid-cols-1 gap-4">
                                {member.policies.map((policy: string, i: number) => (
                                    <div key={i} className="flex items-start gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary-200 hover:bg-white transition-all group">
                                        <span className="flex-shrink-0 w-12 h-12 bg-white text-primary-600 rounded-2xl flex items-center justify-center text-xl font-black shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all">
                                            {i + 1}
                                        </span>
                                        <span className="text-gray-800 text-lg font-bold leading-relaxed pt-1">{policy}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* サイドバー */}
                    <div className="space-y-8">
                        {/* 略歴 */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="card p-8 border-none shadow-sm h-full"
                        >
                            <h2 className="section-title text-xl font-black flex items-center gap-3">
                                <Briefcase className="text-accent-500" size={24} />
                                経歴・役職
                            </h2>
                            <div className="space-y-6">
                                {member.career.map((item: string, i: number) => (
                                    <div key={i} className="flex gap-4 relative">
                                        <div className="absolute left-[7px] top-6 bottom-[-24px] w-[2px] bg-gray-100 last:hidden" />
                                        <div className="w-4 h-4 rounded-full bg-primary-200 border-4 border-white shadow-sm mt-1.5 z-10" />
                                        <p className="text-gray-700 font-bold leading-relaxed text-sm">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* SNSリンク */}
                        {member.sns && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="card p-8 border-none shadow-xl bg-primary-900 text-white"
                            >
                                <h3 className="font-black text-lg mb-6 flex items-center gap-2">
                                    <span className="w-2 h-6 bg-accent-500 rounded-full" />
                                    SNS・リンク
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {member.sns.twitter && (
                                        <Link href={member.sns.twitter} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                                            <Twitter size={20} className="text-blue-400" />
                                            <span className="text-sm font-bold">X (Twitter)</span>
                                        </Link>
                                    )}
                                    {member.sns.facebook && (
                                        <Link href={member.sns.facebook} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                                            <Facebook size={20} className="text-blue-600" />
                                            <span className="text-sm font-bold">Facebook</span>
                                        </Link>
                                    )}
                                    {member.sns.instagram && (
                                        <Link href={member.sns.instagram} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                                            <Instagram size={20} className="text-pink-500" />
                                            <span className="text-sm font-bold">Instagram</span>
                                        </Link>
                                    )}
                                    {member.sns.website && (
                                        <Link href={member.sns.website} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                                            <Globe size={20} className="text-accent-500" />
                                            <span className="text-sm font-bold">Official Web</span>
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {/* 後援会入会CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="card bg-accent-500 p-8 text-center border-none shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <h3 className="text-xl font-black text-white mb-2">
                                    {member.name}を<br />応援しませんか？
                                </h3>
                                <p className="text-white/80 text-sm font-bold mb-6 leading-relaxed">
                                    草加市の未来を創る活動に、<br />あなたの力を貸してください。
                                </p>
                                <Link
                                    href="/support"
                                    className="inline-block w-full bg-white text-accent-600 font-extrabold px-6 py-4 rounded-2xl hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1"
                                >
                                    後援会に入会する
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
