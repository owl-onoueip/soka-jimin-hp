"use client";

import { useState } from "react";
import { CheckCircle2, Users, Heart, MessageCircle, Send, ChevronRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SupportClient() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        area: "",
        message: "",
        supportMember: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        try {
            const res = await fetch("/api/support", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (!res.ok) throw new Error("送信に失敗しました");
            setIsSubmitted(true);
        } catch {
            setError("送信に失敗しました。時間をおいて再度お試しください。");
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gray-50/50 flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="card bg-white p-12 text-center max-w-xl border-none shadow-2xl"
                >
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                        <CheckCircle2 size={48} />
                    </div>
                    <h1 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">
                        お申し込みありがとうございます
                    </h1>
                    <p className="text-gray-600 mb-10 text-lg leading-relaxed font-medium">
                        後援会入会のお申し込みを受け付けました。<br className="hidden md:block" />
                        担当員より追ってご連絡させていただきます。<br />
                        草加の未来を、共に創っていきましょう。
                    </p>
                    <Link
                        href="/"
                        className="btn-primary inline-flex items-center gap-2 group"
                    >
                        トップページへ戻る
                        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        );
    }

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
                            Join Us
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
                            後援会のご案内
                        </h1>
                        <p className="text-lg md:text-xl text-blue-200 font-bold opacity-80 max-w-2xl mx-auto leading-relaxed">
                            草加の未来を創る活動を、あなたの力で支えてください。<br className="hidden md:block" />
                            入会費・年会費は一切無料です。
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* 左側：案内 */}
                    <div className="lg:col-span-12 xl:col-span-4 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="card bg-white p-10 border-none shadow-sm"
                        >
                            <h2 className="section-title text-2xl font-black flex items-center gap-3">
                                <Users className="text-accent-500" size={32} />
                                後援会とは
                            </h2>
                            <p className="text-gray-700 leading-relaxed font-medium mb-8">
                                後援会は、草加自民党・無所属の会の活動に共感し、応援してくださる市民の皆様のネットワークです。あなたの参加が、より良い草加市を創る大きな力になります。
                            </p>

                            <div className="grid grid-cols-1 gap-6">
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 group hover:bg-primary-50 transition-colors">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-all">
                                        <Heart size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">入会費・年会費無料</h3>
                                        <p className="text-xs text-gray-500 font-medium">どなたでもお気軽にご参加いただけます。</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 group hover:bg-primary-50 transition-colors">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all">
                                        <MessageCircle size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">活動情報をいち早く</h3>
                                        <p className="text-xs text-gray-500 font-medium">議員ニュースや議会報告をお届けします。</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 group hover:bg-primary-50 transition-colors">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">交流イベントへの招待</h3>
                                        <p className="text-xs text-gray-500 font-medium">市政報告会や懇談会へご案内いたします。</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* LINE案内：アカウント準備中のため一時非表示 */}
                    </div>

                    {/* 右側：フォーム */}
                    <div className="lg:col-span-12 xl:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="card bg-white p-10 md:p-16 border-none shadow-2xl flex flex-col items-center justify-center text-center min-h-[400px]"
                        >
                            <div className="text-6xl mb-6">🚧</div>
                            <h2 className="text-2xl font-black text-gray-900 mb-3">準備中</h2>
                            <p className="text-gray-500 font-bold leading-relaxed max-w-sm">
                                後援会入会フォームは現在準備中です。<br />
                                もうしばらくお待ちください。
                            </p>
                            {/* TODO: 準備完了後、このブロックを削除してフォームを復活させる */}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
