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
                            className="card bg-white p-10 md:p-16 border-none shadow-2xl"
                        >
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center">
                                    <Send size={28} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black text-gray-900 tracking-tight">入会お申し込みフォーム</h2>
                                    <p className="text-sm font-bold text-gray-400 mt-1 uppercase tracking-widest">Support Registration</p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    {/* お名前 */}
                                    <div className="space-y-4">
                                        <label className="block text-sm font-black text-gray-700 tracking-wider">
                                            お名前 <span className="text-accent-500 font-black ml-1">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none font-bold placeholder:text-gray-300"
                                            placeholder="草加 太郎"
                                        />
                                    </div>

                                    {/* メールアドレス */}
                                    <div className="space-y-4">
                                        <label className="block text-sm font-black text-gray-700 tracking-wider">
                                            メールアドレス <span className="text-accent-500 font-black ml-1">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none font-bold placeholder:text-gray-300"
                                            placeholder="example@email.com"
                                        />
                                    </div>
                                </div>

                                {/* お住まいの地域 */}
                                <div className="space-y-4">
                                    <label className="block text-sm font-black text-gray-700 tracking-wider">
                                        お住まいの地域 <span className="text-accent-500 font-black ml-1">*</span>
                                    </label>
                                    <select
                                        name="area"
                                        required
                                        value={formData.area}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary-500 transition-all outline-none font-black appearance-none"
                                    >
                                        <option value="">地域を選択してください</option>
                                        <option value="新田地区">新田地区</option>
                                        <option value="中央地区">中央地区</option>
                                        <option value="谷塚地区">谷塚地区</option>
                                        <option value="松原地区">松原地区</option>
                                        <option value="新栄地区">新栄地区</option>
                                        <option value="草加地区">草加地区</option>
                                        <option value="柳島地区">柳島地区</option>
                                        <option value="その他">その他・市外</option>
                                    </select>
                                </div>

                                {/* 応援する議員 */}
                                <div className="space-y-4">
                                    <label className="block text-sm font-black text-gray-700 tracking-wider">
                                        特に応援したい議員（任意）
                                    </label>
                                    <select
                                        name="supportMember"
                                        value={formData.supportMember}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary-500 transition-all outline-none font-black appearance-none"
                                    >
                                        <option value="">議員を選択してください</option>
                                        <option value="shibano">芝野 勝利</option>
                                        <option value="shiraishi">白石 孝雄</option>
                                        <option value="tanaka">田中 宣光</option>
                                        <option value="ogawa">小川 としや</option>
                                        <option value="yabe">矢部 正平</option>
                                        <option value="kimura">木村 忠義</option>
                                        <option value="matsui">松井 優美子</option>
                                        <option value="all">会派全体を応援</option>
                                    </select>
                                </div>

                                {/* メッセージ */}
                                <div className="space-y-4">
                                    <label className="block text-sm font-black text-gray-700 tracking-wider">
                                        メッセージ・ご意見（任意）
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary-500 outline-none font-bold placeholder:text-gray-300 min-h-[160px]"
                                        placeholder="市政へのご意見やご要望がございましたら、お気軽にお書きください。"
                                    />
                                </div>

                                {/* 同意事項 */}
                                <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                                    <label className="flex items-start gap-4 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            required
                                            className="mt-1 w-6 h-6 text-primary-600 rounded-lg border-gray-300 focus:ring-primary-500 transition-all cursor-pointer"
                                        />
                                        <span className="text-sm text-gray-600 font-bold group-hover:text-gray-900 transition-colors">
                                            <Link href="/privacy" className="text-primary-600 underline underline-offset-4 font-black">プライバシーポリシー</Link>
                                            に同意の上、入会を申し込みます。
                                        </span>
                                    </label>
                                </div>

                                {/* エラーメッセージ */}
                                {error && (
                                    <p className="text-red-500 font-bold text-sm text-center">{error}</p>
                                )}

                                {/* 送信ボタン */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full btn-cta text-xl md:text-2xl py-6 shadow-2xl scale-100 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 size={24} className="animate-spin" />
                                            送信中...
                                        </>
                                    ) : "確認して入会を申し込む"}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
