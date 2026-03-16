"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, Award, Target, Briefcase, Twitter, Facebook, Instagram, Globe, ChevronRight, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MemberDetailClient({ member }: { member: any }) {
    const [likes, setLikes] = useState<Record<number, number>>({});
    const [isLiking, setIsLiking] = useState<Record<number, boolean>>({});

    // 初期いいね数の取得
    useEffect(() => {
        const fetchLikes = async () => {
            try {
                const res = await fetch(`/api/likes?memberId=${member.id}`);
                if (res.ok) {
                    const data = await res.json();
                    setLikes(data);
                }
            } catch (error) {
                console.error("Failed to fetch likes:", error);
            }
        };
        fetchLikes();
    }, [member.id]);

    // いいねボタンの処理
    const handleLike = async (policyIndex: number) => {
        if (isLiking[policyIndex]) return;

        // 楽観的更新
        setLikes(prev => ({
            ...prev,
            [policyIndex]: (prev[policyIndex] || 0) + 1
        }));
        setIsLiking(prev => ({ ...prev, [policyIndex]: true }));

        try {
            const res = await fetch('/api/likes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ memberId: member.id, policyIndex })
            });
            if (res.ok) {
                const data = await res.json();
                setLikes(prev => ({ ...prev, [policyIndex]: data.count }));
            }
        } catch (error) {
            console.error("Failed to send like:", error);
        } finally {
            // 少し待ってから再度押せるようにする
            setTimeout(() => {
                setIsLiking(prev => ({ ...prev, [policyIndex]: false }));
            }, 1000);
        }
    };
    return (
        <div className="min-h-screen bg-black lg:bg-gray-50/50 pb-20 lg:pb-20">
            {/* ───── PC版表示 (hidden lg:block) ───── */}
            <div className="hidden lg:block">
                {/* 戻るリンク (PC) */}
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

                {/* プロフィールヘッダー (PC) */}
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
                                    <div
                                        className="w-full h-full bg-cover bg-center"
                                        style={{ backgroundImage: `url(${member.photo})` }}
                                    />
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
                                        <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary-200 hover:bg-white transition-all group">
                                            <div className="flex items-start gap-6">
                                                <span className="flex-shrink-0 w-12 h-12 bg-white text-primary-600 rounded-2xl flex items-center justify-center text-xl font-black shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all">
                                                    {i + 1}
                                                </span>
                                                <div className="flex flex-col gap-2 pt-1">
                                                    <span className="text-gray-800 text-lg font-bold leading-relaxed">{policy}</span>
                                                    {member.policyUrls?.[i] && (
                                                        <Link 
                                                            href={member.policyUrls[i]}
                                                            className="flex items-center gap-1 text-xs font-black text-accent-500 hover:text-accent-600 transition-colors bg-white px-3 py-1.5 rounded-full border border-gray-100 w-fit shadow-sm"
                                                        >
                                                            詳細レポートを見る <ChevronRight size={14} />
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                            
                                            {/* PC版いいねボタン */}
                                            <button 
                                                onClick={() => handleLike(i)}
                                                disabled={isLiking[i]}
                                                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                                                    likes[i] ? 'text-rose-500 bg-rose-50' : 'text-gray-400 bg-white hover:bg-gray-100'
                                                }`}
                                            >
                                                <motion.div
                                                    animate={isLiking[i] ? { scale: [1, 1.4, 1] } : {}}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <Heart size={20} fill={likes[i] ? "currentColor" : "none"} />
                                                </motion.div>
                                                <span className="font-black text-sm">{likes[i] || 0}</span>
                                            </button>
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

                            {/* [NEW] PC版 ショート動画セクション */}
                            {member.videos && member.videos.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="card p-6 border-none shadow-sm bg-gray-50 mt-8"
                                >
                                    <h3 className="font-black text-lg mb-6 flex items-center gap-2">
                                        <div className="w-2 h-6 bg-red-500 rounded-full" />
                                        ショート動画
                                    </h3>
                                    <div className="space-y-6">
                                        {member.videos.map((video: any, i: number) => (
                                            <div key={i} className="flex flex-col gap-3">
                                                <div className="relative aspect-[9/16] w-full bg-black rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                                                    <iframe
                                                        src={video.url}
                                                        title={video.title}
                                                        className="absolute inset-0 w-full h-full border-0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    />
                                                </div>
                                                <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{video.title}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* ───── スマホ版表示 (Radiko風) (lg:hidden) ───── */}
            <div className="lg:hidden text-white bg-black min-h-screen">
                {/* シンプルなヘッダー */}
                <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg flex items-center justify-between px-4 h-16 border-b border-white/10">
                    <Link href="/members" className="p-2 -ml-2 text-white/70 hover:text-white">
                        <ArrowLeft size={24} />
                    </Link>
                    <span className="text-sm font-black tracking-widest">{member.position || "MEMBER"}</span>
                    <button className="p-2 -mr-2 text-white/70 hover:text-white opacity-0">
                        <ArrowLeft size={24} />
                    </button>
                </div>

                {/* メインビジュアル (デザイン調整: 背景ぼかし + 中央写真) */}
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                    {/* 背景 (ぼかし) */}
                    <div
                        className="absolute inset-0 bg-cover bg-center blur-2xl opacity-40 scale-110"
                        style={{ backgroundImage: `url(${member.photoAnime || member.photo})` }}
                    />
                    
                    {/* コンテンツレイヤー */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
                        {/* 中央写真 (円形) */}
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="relative w-40 h-40 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden z-10"
                        >
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${member.photoAnime || member.photo})` }}
                            />
                        </motion.div>

                        <div className="mt-6 text-center z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <span className="inline-block bg-accent-500 text-white text-[10px] font-black px-3 py-1 rounded-full mb-3 tracking-tighter shadow-lg uppercase">
                                    {member.area}担当・当選{member.term}
                                </span>
                                <h1 className="text-4xl font-black mb-1 tracking-tighter drop-shadow-xl">{member.name}</h1>
                                <p className="text-sm font-bold text-gray-400">{member.nameKana}</p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* キャッチフレーズ & メッセージ */}
                <div className="px-6 py-8 space-y-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="relative"
                    >
                        <div className="absolute -left-2 top-0 text-accent-500 text-6xl font-serif opacity-20">“</div>
                        <p className="text-2xl font-black leading-tight tracking-tight pl-4 pt-4">
                            {member.catchphrase}
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        <h3 className="text-xs font-black text-accent-500 tracking-[0.2em] uppercase">MESSAGE</h3>
                        <p className="text-base text-gray-300 font-bold leading-loose whitespace-pre-wrap">
                            {member.message}
                        </p>
                    </div>

                    {/* [NEW] スマホ版 ショート動画セクション */}
                    {member.videos && member.videos.length > 0 && (
                        <div className="space-y-6">
                            <h3 className="text-xs font-black text-accent-500 tracking-[0.2em] uppercase">SHORTS MOVIE</h3>
                            <div className="flex gap-4 overflow-x-auto pb-6 -mx-6 px-6 no-scrollbar snap-x">
                                {member.videos.map((video: any, i: number) => (
                                    <div key={i} className="flex-shrink-0 w-64 snap-center">
                                        <div className="relative aspect-[9/16] bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                                            <iframe
                                                src={video.url}
                                                title={video.title}
                                                className="absolute inset-0 w-full h-full border-0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                        <p className="mt-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">{video.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 重点政策 (スマホ版) */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-black text-accent-500 tracking-[0.2em] uppercase">POLICIES</h3>
                        <div className="space-y-3">
                            {member.policies.map((policy: string, i: number) => (
                                <div key={i} className="flex flex-col gap-4 bg-white/5 p-5 rounded-xl border border-white/5 group">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <span className="w-8 h-8 rounded-lg bg-accent-500 flex items-center justify-center text-sm font-black shrink-0">
                                                {i + 1}
                                            </span>
                                            <p className="text-sm font-bold text-gray-200">{policy}</p>
                                        </div>

                                        {/* スマホ版いいねボタン */}
                                        <button 
                                            onClick={() => handleLike(i)}
                                            disabled={isLiking[i]}
                                            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all active:scale-90 ${
                                                likes[i] 
                                                ? 'text-rose-500 bg-rose-500/10 border-rose-500/30' 
                                                : 'text-gray-500 bg-white/5 border-white/5'
                                            }`}
                                        >
                                            <motion.div
                                                animate={isLiking[i] ? { scale: [1, 1.4, 1] } : {}}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Heart size={16} fill={likes[i] ? "currentColor" : "none"} />
                                            </motion.div>
                                            <span className="font-black text-xs">{likes[i] || 0}</span>
                                        </button>
                                    </div>
                                    
                                    {/* スマホ版詳細リンクボタン */}
                                    {member.policyUrls?.[i] && (
                                        <Link 
                                            href={member.policyUrls[i]}
                                            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/10 text-white text-xs font-black border border-white/10 active:bg-white/20 transition-all"
                                        >
                                            詳細レポートを読む <ChevronRight size={14} />
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 固定アクションボタン (スマホのみ) */}
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black to-transparent z-50">
                    <div className="flex gap-3">
                        <Link
                            href="/support"
                            className="flex-1 bg-accent-500 text-white py-4 px-6 rounded-2xl font-black text-center shadow-2xl active:scale-95 transition-transform flex items-center justify-center gap-2"
                        >
                            <Award size={20} />
                            後援会に入会する
                        </Link>
                        {member.sns?.website && (
                            <Link
                                href={member.sns.website}
                                className="w-16 h-16 bg-white/10 hover:bg-white/20 text-white rounded-2xl flex items-center justify-center shadow-lg border border-white/10 active:scale-95 transition-transform"
                                target="_blank"
                            >
                                <Globe size={24} />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
