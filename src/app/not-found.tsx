"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ChevronLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50/50 flex items-center justify-center px-4">
            <div className="relative max-w-2xl w-full text-center">
                {/* 背景の大きな404数字 */}
                <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-[0.03] pointer-events-none select-none">
                    <span className="text-[20rem] font-black text-primary-900">404</span>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="card bg-white/80 backdrop-blur-xl p-12 md:p-16 border-none shadow-2xl"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-accent-500/10 text-accent-600 text-sm font-black mb-8 uppercase tracking-widest border border-accent-500/20">
                        Page Not Found
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        ページが見つかりません
                    </h1>

                    <p className="text-gray-500 font-bold mb-12 leading-relaxed">
                        お探しのページは、移動または削除された可能性があります。<br />
                        下記のボタンよりトップページへ戻り、再度お探しください。
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="btn-primary inline-flex items-center gap-2 group"
                        >
                            <Home size={20} />
                            ホームに戻る
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="btn-outline inline-flex items-center gap-2"
                        >
                            <ChevronLeft size={20} />
                            前のページに戻る
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
