"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, ExternalLink, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface NewsletterModalProps {
    isOpen: boolean;
    onClose: () => void;
    pdfUrl: string;
    title: string;
    date: string;
}

export default function NewsletterModal({ isOpen, onClose, pdfUrl, title, date }: NewsletterModalProps) {
    // モーダル表示時に背景スクロールを固定
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                    {/* 背景オーバーレイ */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                    />

                    {/* モーダルコンテンツ */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-6xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* ヘッダー */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white z-10 shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
                                    <FileText size={20} />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-gray-500 mb-0.5">{date}</div>
                                    <h2 className="text-lg md:text-xl font-black text-gray-900 line-clamp-1">{title}</h2>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X size={24} className="text-gray-500" />
                            </button>
                        </div>

                        {/* コンテンツエリア (ダイジェスト / PDF 切替) */}
                        <div className="flex-1 relative overflow-hidden bg-gray-50">
                            <DigestView pdfUrl={pdfUrl} title={title} />
                        </div>

                        {/* フッター (PDFモード時のみダウンロードボタン等を表示してもよいが、今回は常に表示しない or View内で制御) */}
                        {/* ここではDigestView内に制御を委任するため、共通フッターは削除 */}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

// ダイジェストビューコンポーネント
function DigestView({ pdfUrl, title }: { pdfUrl: string, title: string }) {
    const [mode, setMode] = useState<'digest' | 'pdf'>('digest');
    const [currentStep, setCurrentStep] = useState(0);

    // ダイジェストのシナリオデータ (本来は外部から渡す)
    const digestSteps = [
        {
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop", // 建設・インフラ
            title: "長年の課題、ついに解決。",
            description: "駅前再開発プロジェクトが、皆様の署名により大きく前進しました。予算委員会での承認を経て、来春着工が決定。",
            highlight: "予算 12.5億円 確保"
        },
        {
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop", // 子ども・支援
            title: "子育て世代に、もっと笑顔を。",
            description: "給食費の無償化エリアを拡大。さらに、放課後児童クラブの定員枠を200名増員し、待機児童ゼロを目指します。",
            highlight: "給食費 30% 補助拡大"
        },
        {
            image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop", // 対話・会議
            title: "あなたの声が、市政を動かす。",
            description: "活動報告書の詳細はPDFでご覧いただけます。私たちの活動の記録を、ぜひ隅々までご確認ください。",
            highlight: "Check the Full Report"
        }
    ];

    if (mode === 'pdf') {
        return (
            <div className="relative w-full h-full flex flex-col">
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <button
                        onClick={() => setMode('digest')}
                        className="bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg text-sm font-bold text-gray-700 hover:bg-white transition-all flex items-center gap-2"
                    >
                        ← ダイジェストに戻る
                    </button>
                </div>

                {/* PDFダウンロードボタン (上部右側) */}
                <div className="absolute top-4 right-4 z-20">
                    <a
                        href={pdfUrl}
                        download
                        className="bg-primary-600/90 backdrop-blur px-4 py-2 rounded-full shadow-lg text-sm font-bold text-white hover:bg-primary-600 transition-all flex items-center gap-2"
                    >
                        <Download size={16} />
                        保存する
                    </a>
                </div>

                <iframe
                    src={`${pdfUrl}#view=FitH`}
                    className="w-full h-full border-none"
                    title={title}
                />
                {/* スマホなどでiframeが見にくい場合のフォールバックリンク */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:hidden z-20">
                    <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white/90 backdrop-blur shadow-lg px-6 py-3 rounded-full text-sm font-bold text-primary-600 border border-primary-100"
                    >
                        <ExternalLink size={16} />
                        PDFを直接開く
                    </a>
                </div>
            </div>
        );
    }

    // ダイジェストモード
    return (
        <div className="relative w-full h-full flex flex-col md:flex-row bg-black">
            {/* 背景画像 (全画面) */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${digestSteps[currentStep].image})` }}
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/40 md:bg-black/20 md:bg-gradient-to-r md:from-black/90 md:via-black/50 md:to-transparent" />

            {/* コンテンツ (左側) */}
            <div className="relative z-10 w-full md:w-3/5 h-full flex flex-col justify-center p-8 md:p-16 text-white max-w-3xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="inline-block bg-accent-500 text-white text-xs md:text-sm font-black px-3 py-1 rounded mb-4 shadow-lg tracking-wider">
                            POINT {currentStep + 1}
                        </span>
                        <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight drop-shadow-lg tracking-tight">
                            {digestSteps[currentStep].title}
                        </h3>
                        <p className="text-base md:text-lg font-bold opacity-90 mb-8 leading-relaxed drop-shadow-md">
                            {digestSteps[currentStep].description}
                        </p>
                        <div className="text-xl md:text-3xl font-black text-accent-300 border-l-4 border-accent-500 pl-6 mb-12">
                            {digestSteps[currentStep].highlight}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* ナビゲーション */}
                <div className="flex items-center gap-4 mt-auto md:mt-0">
                    {/* インジケーター */}
                    <div className="flex gap-2">
                        {digestSteps.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentStep ? 'w-10 bg-accent-500' : 'w-2 bg-white/30'}`}
                            />
                        ))}
                    </div>

                    <div className="flex-1" />

                    <div className="flex gap-4">
                        {currentStep > 0 && (
                            <button
                                onClick={() => setCurrentStep(prev => prev - 1)}
                                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur font-bold transition-all border border-white/20"
                            >
                                前へ
                            </button>
                        )}

                        {currentStep < digestSteps.length - 1 ? (
                            <button
                                onClick={() => setCurrentStep(prev => prev + 1)}
                                className="px-8 py-3 rounded-full bg-white text-primary-900 font-black hover:bg-gray-100 transition-all shadow-xl flex items-center gap-2 transform hover:scale-105"
                            >
                                次へ <ArrowRight size={18} />
                            </button>
                        ) : (
                            <button
                                onClick={() => setMode('pdf')}
                                className="px-8 py-3 rounded-full bg-accent-500 text-white font-black hover:bg-accent-600 transition-all shadow-xl flex items-center gap-2 transform hover:scale-105"
                            >
                                <FileText size={18} />
                                PDFで全文を読む
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* 右側 (PCのみ: ここに将来的にAIアバターを配置するスペース) */}
            <div className="hidden md:flex w-2/5 h-full relative items-end justify-center pointer-events-none pb-0">
                {/* アバタープレースホルダー (シルエット) */}
                <div className="w-full h-4/5 relative opacity-50">
                    {/* ここに画像のパスを入れればアバターになる */}
                </div>
            </div>
        </div>
    );
}
