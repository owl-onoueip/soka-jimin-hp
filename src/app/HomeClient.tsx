"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MemberCarousel from "@/components/MemberCarousel";
import { members } from "@/data/members";
import VisualReport from "@/components/VisualReport";
import NewsletterModal from "@/components/NewsletterModal";
import { motion } from "framer-motion";

// お知らせデータ
const news = [
    {
        id: 1,
        date: "2026.01",
        title: "令和8年 新春号 会派ニュースを発行しました",
        category: "会派ニュース",
        image: "https://images.unsplash.com/photo-1575320181282-9afab399332c?q=80&w=2070&auto=format&fit=crop",
        pdf: "/pdf/report_2026_newyear.pdf",
        link: "/reports#r8-newyear",
    },
    {
        id: 2,
        date: "2026.01.09",
        title: "物価高騰対応交付金の全世帯給付型支援への活用を山川市長へ要望",
        category: "要望",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        link: "/reports#r8-newyear",
    },
    {
        id: 3,
        date: "2025.04.21",
        title: "令和7年春号 会派ニュースを発行しました",
        category: "会派ニュース",
        image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2070&auto=format&fit=crop",
        link: "/reports#r7-spring",
    },
    {
        id: 4,
        date: "2023.12.01",
        title: "自動運転技術の活用に向け株式会社マクニカを視察",
        category: "視察",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
        link: "/reports#r6-newyear",
    },
];


export default function HomeClient() {
    // アニメモード（ジブリ風）の状態管理
    const [isAnimeMode, setIsAnimeMode] = useState(false);
    // モーダル用の状態管理
    const [selectedNews, setSelectedNews] = useState<typeof news[0] | null>(null);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* モーダル */}
            <NewsletterModal
                isOpen={!!selectedNews && selectedNews.id === 1} // ID 1 (最新号) のみモーダル表示
                onClose={() => setSelectedNews(null)}
                pdfUrl={news[0].pdf || ""}
                title={news[0].title}
                date={news[0].date}
            />
            {/* ヒーローセクション (高さ短縮・モバイル最適化) */}
            <section className="relative h-[70vh] min-h-[500px] md:h-[80vh] flex items-center justify-center overflow-hidden">
                {/* 通常背景 */}
                <motion.div
                    initial={{ opacity: 1, scale: 1.1 }}
                    animate={{
                        opacity: isAnimeMode ? 0 : 1,
                        scale: isAnimeMode ? 1.1 : 1.0
                    }}
                    transition={{ duration: 5.0, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-bottom"
                    style={{
                        backgroundImage: `url('/images/hero-normal.webp')`,
                        filter: 'brightness(0.4) contrast(1.1)'
                    }}
                />

                {/* アニメ風背景 (ジブリ風の風景) */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{
                        opacity: isAnimeMode ? 1 : 0,
                        scale: isAnimeMode ? 1.0 : 1.1
                    }}
                    transition={{ duration: 5.0, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-bottom"
                    style={{
                        // アニメ風の美しい風景画像
                        backgroundImage: `url('/images/hero-anime.webp')`,
                        filter: 'brightness(0.6) contrast(1.2) saturate(1.5)' // コントラストと彩度を上げてアニメ調に
                    }}
                />

                <div className="relative container mx-auto px-4 text-center z-10 flex flex-col items-center justify-center h-full pb-10">
                    {/* テキスト切り替えエリア */}
                    <div className="relative w-full h-40 md:h-80 mb-4 flex items-center justify-center">
                        {/* 通常テキスト */}
                        <motion.h1
                            initial={{ opacity: 1 }}
                            animate={{ opacity: isAnimeMode ? 0 : 1 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0 flex flex-col items-center justify-center leading-tight drop-shadow-2xl"
                            style={{ fontFamily: '"Hiragino Mincho ProN", "Yu Mincho", serif' }}
                        >
                            <span className="block text-3xl md:text-5xl font-bold text-white mb-2 md:mb-6 tracking-wider">コミュニティと共に、</span>
                            <span className="block text-6xl md:text-9xl font-black text-white tracking-tight">
                                <span className="text-orange-500">未来</span>を創る。
                            </span>
                        </motion.h1>

                        {/* アニメモードテキスト */}
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isAnimeMode ? 1 : 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0 flex flex-col items-center justify-center text-5xl md:text-8xl font-black text-white leading-tight tracking-widest drop-shadow-2xl"
                            style={{ fontFamily: '"Hiragino Mincho ProN", "Yu Mincho", serif' }} // 明朝体で情緒的に
                        >
                            <span className="block text-2xl md:text-4xl mb-4 font-bold opacity-90">守りたい、</span>
                            <span>この街の<span className="text-green-400">風景</span>を。</span>
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-row gap-4 justify-center items-center mt-2 md:hidden"
                    >
                        {/* デスクトップではヘッダーにあるため非表示 */}
                        <Link
                            href="/members"
                            className="bg-accent-500 hover:bg-accent-600 text-white text-sm font-black py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center gap-2"
                        >
                            議員を知る <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 議員紹介セクション (最優先・上に移動) */}
            <section className="py-12 bg-white relative -mt-6 rounded-t-[2.5rem] z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between mb-8 px-2">
                        <div>
                            <h2 className="text-2xl md:text-4xl font-black text-primary-900 tracking-tight">
                                Our Members
                            </h2>
                            <p className="text-gray-500 text-xs md:text-sm font-bold mt-1">草加を変える7人の実行力</p>
                        </div>
                        <Link
                            href="/members"
                            className="text-primary-600 text-xs md:text-sm font-black flex items-center gap-1 hover:gap-2 transition-all"
                        >
                            全員を見る <ArrowRight size={14} />
                        </Link>
                    </div>

                    <div className="pb-4">
                        <MemberCarousel
                            onAnimeModeEnter={() => setIsAnimeMode(true)}
                            onAnimeModeLeave={() => setIsAnimeMode(false)}
                        />
                    </div>
                </div>
            </section>

            {/* 7人の声を聞く */}
            <section className="py-12 bg-gradient-to-b from-primary-950 to-primary-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-2">
                            🎙 7人の声を聞く
                        </h2>
                        <p className="text-primary-300 text-sm">各議員の活動報告をスライドでお届けします</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                        {members.filter(m => m.presentation).map(member => (
                            <a
                                key={member.id}
                                href={`/members/${member.id}/presentation`}
                                className="flex flex-col items-center gap-2 group"
                            >
                                <div
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 group-hover:scale-110 transition-all duration-300 shadow-lg"
                                    style={{ borderColor: member.accentColor || "#f97316" }}
                                >
                                    <div
                                        className="w-full h-full bg-cover bg-center"
                                        style={{ backgroundImage: `url(${member.photo})` }}
                                    />
                                </div>
                                <span className="text-white text-xs font-bold">{member.name.split(" ")[0]}</span>
                                <span
                                    className="text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1"
                                    style={{ backgroundColor: member.accentColor || "#f97316", color: "white" }}
                                >
                                    ▶ 活動報告
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ニュース (マガジン形式) */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between mb-10 px-2">
                        <h2 className="text-2xl md:text-4xl font-black text-primary-900 tracking-tight">
                            Latest News
                        </h2>
                        <Link
                            href="/news"
                            className="text-primary-600 text-xs md:text-sm font-black flex items-center gap-1 hover:gap-2 transition-all"
                        >
                            記事一覧 <ArrowRight size={14} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* メイン記事 (左側大きく) */}
                        <div className="lg:col-span-7">
                            <div
                                onClick={() => setSelectedNews(news[0])}
                                className="group block relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                                    style={{ backgroundImage: `url(${news[0].image})` }} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                                    <span className="inline-block bg-accent-500 text-white text-[10px] font-black px-2 py-1 rounded mb-3">
                                        {news[0].category}
                                    </span>
                                    <h3 className="text-xl md:text-3xl font-black text-white leading-snug mb-2 group-hover:text-accent-300 transition-colors">
                                        {news[0].title}
                                    </h3>
                                    <p className="text-white/70 text-sm font-bold">{news[0].date}</p>
                                </div>
                            </div>
                        </div>

                        {/* サブ記事リスト (右側縦並び) */}
                        <div className="lg:col-span-5 flex flex-col gap-4">
                            {news.slice(1).map((item) => (
                                <Link key={item.id} href={item.link || "/news"} className="group flex gap-4 bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-all h-full">
                                    <div className="w-24 md:w-32 aspect-video rounded-lg bg-gray-200 bg-cover bg-center shrink-0"
                                        style={{ backgroundImage: `url(${item.image})` }} />
                                    <div className="flex flex-col justify-center">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-[10px] font-black text-primary-600 bg-primary-50 px-2 py-0.5 rounded">
                                                {item.category}
                                            </span>
                                            <span className="text-[10px] text-gray-400 font-bold">{item.date}</span>
                                        </div>
                                        <h4 className="text-sm md:text-base font-bold text-gray-900 leading-snug group-hover:text-primary-600 transition-colors line-clamp-2">
                                            {item.title}
                                        </h4>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 実績 (モーション・グラフィックス報告) */}
            <VisualReport />

            {/* 後援会CTA */}
            <section className="py-16 md:py-24 bg-white text-center px-4">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 tracking-tight">
                        あなたの声を、<br />私たちに託してください。
                    </h2>
                    <p className="text-gray-500 font-medium mb-10 leading-relaxed text-sm md:text-base">
                        草加自民党・無所属の会は、市民参加型の政治を目指しています。<br className="hidden md:block" />
                        後援会へのご入会、ご連絡をお待ちしております。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/support"
                            className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-10 rounded-full shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            後援会のご案内
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-white border-2 border-primary-100 text-primary-600 font-bold py-4 px-10 rounded-full hover:bg-primary-50 transition-all flex items-center justify-center gap-2"
                        >
                            お問い合わせ
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
