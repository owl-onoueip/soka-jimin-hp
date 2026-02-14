"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
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
                            Contact Us
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
                            お問い合わせ
                        </h1>
                        <p className="text-lg md:text-xl text-blue-200 font-bold opacity-80 max-w-2xl mx-auto leading-relaxed">
                            市政へのご意見や、会派へのご質問など、<br className="hidden md:block" />
                            お気軽にお問い合わせください。
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">

                    {/* 連絡先情報 */}
                    <div className="lg:col-span-5 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="card bg-white p-10 border-none shadow-sm"
                        >
                            <h2 className="section-title text-2xl font-black mb-10">会派事務局</h2>

                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center shrink-0">
                                        <MapPin size={28} />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-sm text-gray-400 uppercase tracking-widest mb-1">Address</h3>
                                        <p className="font-bold text-gray-800 leading-relaxed">
                                            〒340-8550<br />
                                            埼玉県草加市高砂1丁目1番1号<br />
                                            草加市役所 本庁舎9階 議員控室
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center shrink-0">
                                        <Phone size={28} />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-sm text-gray-400 uppercase tracking-widest mb-1">Phone</h3>
                                        <p className="font-black text-2xl text-gray-800">048-922-2457</p>
                                        <p className="text-xs text-gray-500 font-bold">(草加市議会事務局 総務係)</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center shrink-0">
                                        <Mail size={28} />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-sm text-gray-400 uppercase tracking-widest mb-1">Email</h3>
                                        <p className="font-bold text-gray-800 text-lg">info@soka-jimin.jp</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="card bg-accent-500 p-10 text-white border-none shadow-2xl"
                        >
                            <h3 className="text-xl font-black mb-4">お急ぎの方へ</h3>
                            <p className="text-white/80 font-bold text-sm leading-relaxed mb-8">
                                各議員へ直接のご要望がある場合は、議員紹介ページに記載の各SNSや公式Webサイトからも受け付けております。
                            </p>
                            <Link href="/members" className="inline-flex items-center gap-2 font-black text-sm bg-white text-accent-600 px-6 py-3 rounded-xl hover:bg-gray-50 transition-all">
                                議員一覧を見る
                                <ChevronRight size={18} />
                            </Link>
                        </motion.div>
                    </div>

                    {/* フォーム */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="card bg-white p-10 md:p-14 border-none shadow-2xl"
                        >
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center">
                                    <Send size={28} />
                                </div>
                                <h2 className="text-2xl font-black text-gray-900">お問い合わせフォーム</h2>
                            </div>

                            <form className="space-y-8">
                                <div className="space-y-3">
                                    <label className="text-sm font-black text-gray-700 tracking-wider">お名前</label>
                                    <input type="text" className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary-500 transition-all outline-none font-bold" placeholder="草加 太郎" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-black text-gray-700 tracking-wider">メールアドレス</label>
                                    <input type="email" className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary-500 transition-all outline-none font-bold" placeholder="example@email.com" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-black text-gray-700 tracking-wider">件名</label>
                                    <select className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary-500 transition-all outline-none font-black appearance-none">
                                        <option>市政へのご意見</option>
                                        <option>会派についてのご質問</option>
                                        <option>その他のお問い合わせ</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-black text-gray-700 tracking-wider">お問い合わせ内容</label>
                                    <textarea rows={6} className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary-500 transition-all outline-none font-bold" placeholder="内容をご入力ください" />
                                </div>
                                <button type="button" className="w-full btn-cta text-xl py-6 shadow-2xl">
                                    メッセージを送信する
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
