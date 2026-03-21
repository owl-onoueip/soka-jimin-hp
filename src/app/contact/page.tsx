"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, ExternalLink, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const PREFECTURES = [
    "北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県",
    "茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県",
    "新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県",
    "静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県",
    "奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県",
    "徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県",
    "熊本県","大分県","宮崎県","鹿児島県","沖縄県",
];

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [categories, setCategories] = useState<string[]>([]);
    const [form, setForm] = useState({
        name: "", email: "", emailConfirm: "",
        tel1: "", tel2: "", tel3: "",
        zip1: "", zip2: "", prefecture: "", city: "", street: "", building: "",
        message: "",
    });

    const toggleCategory = (cat: string) => {
        setCategories(prev =>
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );
    };

    const [sending, setSending] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (categories.length === 0) {
            setError("お問い合わせの種別を選択してください");
            return;
        }
        if (form.email !== form.emailConfirm) {
            setError("メールアドレスが一致しません");
            return;
        }
        setSending(true);
        setError("");
        try {
            const tel = [form.tel1, form.tel2, form.tel3].filter(Boolean).join("-");
            const address = [
                form.zip1 && form.zip2 ? `〒${form.zip1}-${form.zip2}` : "",
                form.prefecture, form.city, form.street, form.building
            ].filter(Boolean).join(" ");

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, tel, address, categories }),
            });
            const data = await res.json() as { success?: boolean; error?: string };
            if (!res.ok) throw new Error(data.error || "送信に失敗しました");
            setSubmitted(true);
        } catch (e: any) {
            setError(e.message || "送信に失敗しました。時間をおいて再度お試しください。");
        } finally {
            setSending(false);
        }
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-gray-50/50 pb-20 flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="card bg-white p-12 text-center max-w-md w-full border-none shadow-2xl"
                >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={40} className="text-green-500" />
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 mb-3">送信完了</h2>
                    <p className="text-gray-500 font-bold leading-relaxed mb-8">
                        お問い合わせありがとうございます。<br />
                        内容を確認の上、担当者よりご連絡いたします。
                    </p>
                    <a href="/" className="btn-primary inline-block">トップページへ戻る</a>
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
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
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

            <div className="container mx-auto px-4 -mt-10 relative z-10 max-w-5xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* 左：連絡先情報 */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="card bg-white p-8 border-none shadow-xl"
                        >
                            <h2 className="section-title text-lg font-black mb-8">問い合わせ先</h2>
                            <div className="space-y-7">
                                <div>
                                    <p className="text-base font-black text-primary-900 mb-5">草加市議会事務局</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-11 h-11 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center shrink-0">
                                        <MapPin size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">住所</p>
                                        <p className="font-bold text-gray-800 text-sm leading-relaxed">
                                            〒340-8550<br />
                                            埼玉県草加市高砂一丁目1番1号<br />
                                            本庁舎9階
                                        </p>
                                        <a
                                            href="https://www.city.soka.saitama.jp/category/6-5-0-0-0-0-0-0-0-0.html"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 mt-2 text-primary-600 font-bold text-xs hover:underline"
                                        >
                                            アクセスを見る <ExternalLink size={12} />
                                        </a>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-11 h-11 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center shrink-0">
                                        <Phone size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">電話番号</p>
                                        <div className="space-y-2">
                                            <div>
                                                <p className="text-[10px] text-gray-500 font-bold">総務係</p>
                                                <a href="tel:0489222457" className="font-black text-lg text-gray-800 hover:text-primary-600 transition-colors">
                                                    048-922-2457
                                                </a>
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-gray-500 font-bold">議事調査係</p>
                                                <a href="tel:0489222489" className="font-black text-lg text-gray-800 hover:text-primary-600 transition-colors">
                                                    048-922-2489
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="card bg-accent-500 p-8 text-white border-none shadow-xl"
                        >
                            <h3 className="text-base font-black mb-2">各議員への直接連絡</h3>
                            <p className="text-white/80 font-bold text-xs leading-relaxed mb-5">
                                各議員のSNSや公式サイトからも受け付けております。
                            </p>
                            <a href="/members" className="inline-flex items-center gap-2 font-black text-xs bg-white text-accent-600 px-5 py-2.5 rounded-xl hover:bg-gray-50 transition-all">
                                議員一覧を見る
                            </a>
                        </motion.div>
                    </div>

                    {/* 右：フォーム */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="lg:col-span-2 card bg-white p-8 md:p-10 border-none shadow-2xl"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-11 h-11 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center">
                                <Send size={22} />
                            </div>
                            <h2 className="text-xl font-black text-gray-900">お問い合わせフォーム</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-7">

                            {/* お問い合わせの種別 */}
                            <div>
                                <label className="block text-sm font-black text-gray-700 mb-3">
                                    お問い合わせの種別
                                    <span className="ml-2 text-[10px] text-red-500 font-black bg-red-50 px-2 py-0.5 rounded-full">必須</span>
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    {["ご意見", "ご質問", "ご要望", "その他"].map((cat) => (
                                        <button
                                            key={cat}
                                            type="button"
                                            onClick={() => toggleCategory(cat)}
                                            className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 font-bold text-sm transition-all ${
                                                categories.includes(cat)
                                                    ? "border-primary-500 bg-primary-50 text-primary-700"
                                                    : "border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300"
                                            }`}
                                        >
                                            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-all ${
                                                categories.includes(cat)
                                                    ? "border-primary-500 bg-primary-500"
                                                    : "border-gray-300"
                                            }`}>
                                                {categories.includes(cat) && (
                                                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </div>
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* お問い合わせ内容 */}
                            <div>
                                <label className="block text-sm font-black text-gray-700 mb-2">
                                    お問い合わせ内容
                                    <span className="ml-2 text-[10px] text-red-500 font-black bg-red-50 px-2 py-0.5 rounded-full">必須</span>
                                </label>
                                <textarea
                                    required
                                    rows={5}
                                    value={form.message}
                                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                                    className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary-500 transition-all outline-none font-bold text-sm resize-none"
                                    placeholder="内容をご入力ください"
                                />
                            </div>

                            {/* お名前 */}
                            <div>
                                <label className="block text-sm font-black text-gray-700 mb-2">
                                    お名前
                                    <span className="ml-2 text-[10px] text-red-500 font-black bg-red-50 px-2 py-0.5 rounded-full">必須</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                                    className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary-500 transition-all outline-none font-bold text-sm"
                                    placeholder="草加 太郎"
                                />
                            </div>

                            {/* メールアドレス */}
                            <div className="space-y-3">
                                <label className="block text-sm font-black text-gray-700">
                                    メールアドレス
                                    <span className="ml-2 text-[10px] text-red-500 font-black bg-red-50 px-2 py-0.5 rounded-full">必須</span>
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                                    className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary-500 transition-all outline-none font-bold text-sm"
                                    placeholder="example@email.com"
                                />
                                <input
                                    type="email"
                                    required
                                    value={form.emailConfirm}
                                    onChange={e => setForm(f => ({ ...f, emailConfirm: e.target.value }))}
                                    className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary-500 transition-all outline-none font-bold text-sm"
                                    placeholder="確認用（もう一度入力）"
                                />
                            </div>

                            {/* 電話番号 */}
                            <div>
                                <label className="block text-sm font-black text-gray-700 mb-2">電話番号</label>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="tel"
                                        maxLength={4}
                                        value={form.tel1}
                                        onChange={e => setForm(f => ({ ...f, tel1: e.target.value }))}
                                        className="w-24 px-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary-500 transition-all outline-none font-bold text-sm text-center"
                                        placeholder="048"
                                    />
                                    <span className="font-black text-gray-400">-</span>
                                    <input
                                        type="tel"
                                        maxLength={4}
                                        value={form.tel2}
                                        onChange={e => setForm(f => ({ ...f, tel2: e.target.value }))}
                                        className="w-24 px-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary-500 transition-all outline-none font-bold text-sm text-center"
                                        placeholder="922"
                                    />
                                    <span className="font-black text-gray-400">-</span>
                                    <input
                                        type="tel"
                                        maxLength={4}
                                        value={form.tel3}
                                        onChange={e => setForm(f => ({ ...f, tel3: e.target.value }))}
                                        className="w-24 px-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary-500 transition-all outline-none font-bold text-sm text-center"
                                        placeholder="2457"
                                    />
                                </div>
                            </div>

                            {/* 住所 */}
                            <div>
                                <label className="block text-sm font-black text-gray-700 mb-3">住所</label>
                                <div className="space-y-3">
                                    {/* 郵便番号 */}
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-black text-gray-500">〒</span>
                                        <input
                                            type="tel"
                                            maxLength={3}
                                            value={form.zip1}
                                            onChange={e => setForm(f => ({ ...f, zip1: e.target.value }))}
                                            className="w-20 px-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-primary-500 transition-all outline-none font-bold text-sm text-center"
                                            placeholder="340"
                                        />
                                        <span className="font-black text-gray-400">-</span>
                                        <input
                                            type="tel"
                                            maxLength={4}
                                            value={form.zip2}
                                            onChange={e => setForm(f => ({ ...f, zip2: e.target.value }))}
                                            className="w-24 px-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-primary-500 transition-all outline-none font-bold text-sm text-center"
                                            placeholder="8550"
                                        />
                                    </div>
                                    {/* 都道府県 */}
                                    <select
                                        value={form.prefecture}
                                        onChange={e => setForm(f => ({ ...f, prefecture: e.target.value }))}
                                        className="w-full px-5 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-primary-500 transition-all outline-none font-bold text-sm appearance-none"
                                    >
                                        <option value="">都道府県</option>
                                        {PREFECTURES.map(p => <option key={p} value={p}>{p}</option>)}
                                    </select>
                                    {/* 市区町村 */}
                                    <input
                                        type="text"
                                        value={form.city}
                                        onChange={e => setForm(f => ({ ...f, city: e.target.value }))}
                                        className="w-full px-5 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-primary-500 transition-all outline-none font-bold text-sm"
                                        placeholder="市区町村"
                                    />
                                    {/* 町名番地 */}
                                    <input
                                        type="text"
                                        value={form.street}
                                        onChange={e => setForm(f => ({ ...f, street: e.target.value }))}
                                        className="w-full px-5 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-primary-500 transition-all outline-none font-bold text-sm"
                                        placeholder="町名・番地"
                                    />
                                    {/* 建物名 */}
                                    <input
                                        type="text"
                                        value={form.building}
                                        onChange={e => setForm(f => ({ ...f, building: e.target.value }))}
                                        className="w-full px-5 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-primary-500 transition-all outline-none font-bold text-sm"
                                        placeholder="建物名・部屋番号（任意）"
                                    />
                                </div>
                            </div>

                            {/* エラーメッセージ */}
                            {error && (
                                <div className="bg-red-50 border-2 border-red-200 text-red-700 font-bold text-sm px-5 py-4 rounded-2xl">
                                    {error}
                                </div>
                            )}

                            {/* 送信ボタン */}
                            <button
                                type="submit"
                                disabled={sending}
                                className="w-full btn-cta text-lg py-5 shadow-2xl flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                <Send size={18} />
                                {sending ? "送信中..." : "送信する"}
                            </button>

                            <p className="text-center text-xs text-gray-400 font-bold">
                                送信内容は草加市議会事務局へ届きます
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
