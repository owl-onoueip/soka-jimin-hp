"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { members } from "@/data/members";

const themeColors = [
    "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)",
    "linear-gradient(135deg, #1a5c38 0%, #27ae60 100%)",
    "linear-gradient(135deg, #b7410e 0%, #e67e22 100%)",
    "linear-gradient(135deg, #4a235a 0%, #8e44ad 100%)",
    "linear-gradient(135deg, #0e6655 0%, #1abc9c 100%)",
    "linear-gradient(135deg, #78281f 0%, #c0392b 100%)",
];

const CARD_W = 220;

// 1周目: 全員の通常写真 → 2周目: 全員のジブリアニメ
const slides = [
    ...members.map((member) => ({ member, type: "photo" as const })),
    ...members.filter((m) => m.photoAnime).map((member) => ({ member, type: "anime" as const })),
];

// slidesを3倍複製して無限スクロール用のトリプルリストを作成
const SLIDE_LEN = slides.length;
const tripleSlides = [...slides, ...slides, ...slides];
const TRIPLE_START = SLIDE_LEN; // 中間の1/3から開始

// カード1枚あたりの水平占有幅（幅 + 左右マージン各8px）
const CARD_STEP = CARD_W + 16;

export default function MobileRadikoMembers() {
    const carouselRef = useRef<HTMLDivElement>(null);
    // tripleSlides上のインデックス（中間からスタート）
    const [tripleIndex, setTripleIndex] = useState(TRIPLE_START);
    const tripleIndexRef = useRef(TRIPLE_START); // インターバル内のステールクロージャ対策
    const [isPaused, setIsPaused] = useState(false);
    const isPausedRef = useRef(false);
    const isProgrammaticScrollRef = useRef(false); // プログラム的スクロール中フラグ
    const programmaticScrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // 表示上のアクティブ議員はtripleIndexをSLIDE_LENで割った余りで判定
    const activeIndex = tripleIndex % SLIDE_LEN;
    const activeMember = slides[activeIndex]?.member;
    const activeType = slides[activeIndex]?.type;

    // 指定インデックスまでスクロール（BoundingClientRect不使用・数学計算で確定位置へ）
    const scrollToIndex = (index: number, smooth = true) => {
        const el = carouselRef.current;
        if (!el) return;
        // scrollLeft = index * CARD_STEP + 左マージン8px
        // （左スペーサーはちょうど50vw-CARD_W/2なので打ち消される）
        const targetLeft = index * CARD_STEP + 8;

        isProgrammaticScrollRef.current = true;
        if (programmaticScrollTimerRef.current) clearTimeout(programmaticScrollTimerRef.current);

        if (!smooth) {
            el.style.scrollBehavior = "auto";
            el.scrollLeft = targetLeft;
            requestAnimationFrame(() => { el.style.scrollBehavior = ""; });
            isProgrammaticScrollRef.current = false;
        } else {
            el.scrollTo({ left: targetLeft, behavior: "smooth" });
            // スムーズスクロール完了後（約400ms）にフラグ解除
            programmaticScrollTimerRef.current = setTimeout(() => {
                isProgrammaticScrollRef.current = false;
            }, 450);
        }
    };

    // インデックスを更新してスクロール（ref・state両方を同期）
    const goToIndex = (index: number, smooth = true) => {
        tripleIndexRef.current = index;
        setTripleIndex(index);
        scrollToIndex(index, smooth);
    };

    // スクロール監視 → 手動スワイプ時のみ中央カードを特定してインデックス更新
    useEffect(() => {
        const el = carouselRef.current;
        if (!el) return;
        const onScroll = () => {
            // プログラム的スクロール中は無視（飛び越しの原因になるため）
            if (isProgrammaticScrollRef.current) return;
            const scrollLeft = el.scrollLeft;
            const closest = Math.round((scrollLeft - 8) / CARD_STEP);
            const clamped = Math.max(0, Math.min(tripleSlides.length - 1, closest));
            if (clamped !== tripleIndexRef.current) {
                tripleIndexRef.current = clamped;
                setTripleIndex(clamped);
            }
        };
        el.addEventListener("scroll", onScroll, { passive: true });
        // 初期表示：中間の1/3に移動（瞬時）
        setTimeout(() => scrollToIndex(TRIPLE_START, false), 50);
        return () => el.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 端に近づいたら瞬時に中間の対応位置へリセット
    useEffect(() => {
        if (tripleIndex <= 2 || tripleIndex >= SLIDE_LEN * 2 + SLIDE_LEN - 3) {
            const resetIndex = TRIPLE_START + (tripleIndex % SLIDE_LEN);
            setTimeout(() => {
                goToIndex(resetIndex, false);
            }, 420);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tripleIndex]);

    // 自動スクロール（6秒ごとに次へ）
    const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const startAutoScroll = () => {
        if (autoScrollRef.current) clearInterval(autoScrollRef.current);
        if (isPausedRef.current) return;
        autoScrollRef.current = setInterval(() => {
            if (isPausedRef.current) return;
            const next = tripleIndexRef.current + 1; // refで最新値を参照
            goToIndex(next);
        }, 6000);
    };

    useEffect(() => {
        startAutoScroll();
        const el = carouselRef.current;
        const onUserTouch = () => startAutoScroll();
        el?.addEventListener("touchstart", onUserTouch, { passive: true });
        el?.addEventListener("mousedown", onUserTouch, { passive: true });
        return () => {
            if (autoScrollRef.current) clearInterval(autoScrollRef.current);
            el?.removeEventListener("touchstart", onUserTouch);
            el?.removeEventListener("mousedown", onUserTouch);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 手動クリックで移動
    const goTo = (index: number) => {
        goToIndex(index);
    };

    return (
        <div className="relative w-full overflow-hidden text-white" style={{ minHeight: "100dvh", background: "#0a0a0a" }}>

            {/* ぼかし背景（アクティブ議員のカラー） */}
            <div
                className="absolute inset-0 z-0 opacity-50 blur-3xl scale-125 transition-all duration-700"
                style={{ background: themeColors[activeIndex] }}
            />
            <div className="absolute inset-0 z-0 bg-black/50" />

            <div className="relative z-10 flex flex-col" style={{ minHeight: "100dvh" }}>
                {/* ヘッダー */}
                <div className="text-center pt-5 pb-2 text-xs font-black tracking-[0.2em] opacity-60 uppercase">
                    Soka Jimin · Members
                </div>

                {/* ────── カルーセル ────── */}
                <div className="relative flex items-center" style={{ height: 280 }}>
                    {/* 左クリックゾーン：前へ */}
                    {tripleIndex > 0 && (
                        <button
                            onClick={() => goToIndex(tripleIndex - 1)}
                            className="absolute left-0 top-0 bottom-0 z-20"
                            style={{ width: "28%", background: "transparent" }}
                            aria-label="前の議員へ"
                        />
                    )}
                    {/* 右クリックゾーン：次へ */}
                    {tripleIndex < tripleSlides.length - 1 && (
                        <button
                            onClick={() => goToIndex(tripleIndex + 1)}
                            className="absolute right-0 top-0 bottom-0 z-20"
                            style={{ width: "28%", background: "transparent" }}
                            aria-label="次の議員へ"
                        />
                    )}
                    <div
                        ref={carouselRef}
                        className="flex items-center w-full overflow-x-auto"
                        style={{
                            scrollSnapType: "x mandatory",
                            scrollBehavior: "smooth",
                            WebkitOverflowScrolling: "touch",
                            msOverflowStyle: "none",
                            scrollbarWidth: "none",
                            paddingBottom: 8,
                        }}
                    >
                        {/* 左スペーサー: 最初のカードを中央に */}
                        <div style={{ flexShrink: 0, width: `calc(50vw - ${CARD_W / 2}px)` }} />

                        {tripleSlides.map((slide, i) => {
                            const { member, type } = slide;
                            const isActive = i === tripleIndex;
                            const imgSrc = type === "anime" ? member.photoAnime : member.photo;
                            return (
                                <Link
                                    key={`${i}-${member.id}-${type}`}
                                    href={`/members/${member.id}`}
                                    className="rc-item flex-shrink-0 relative cursor-pointer"
                                    style={{
                                        width: CARD_W,
                                        height: CARD_W,
                                        margin: "0 8px",
                                        scrollSnapAlign: "center",
                                        transform: isActive ? "scale(1.08)" : "scale(0.82)",
                                        opacity: isActive ? 1 : 0.45,
                                        transition: "transform 0.3s cubic-bezier(0.25,0.8,0.25,1), opacity 0.3s",
                                        borderRadius: 16,
                                        overflow: "hidden",
                                        boxShadow: isActive ? "0 16px 48px rgba(0,0,0,0.6)" : "0 4px 16px rgba(0,0,0,0.3)",
                                        zIndex: isActive ? 10 : 1,
                                    }}
                                >
                                    {/* 写真 or アニメ画像 */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-top"
                                        style={{ backgroundImage: `url(${imgSrc})` }}
                                    />
                                    {/* 上部：名前 */}
                                    <div
                                        className="absolute top-0 left-0 right-0 text-center font-bold text-base"
                                        style={{
                                            background: "linear-gradient(rgba(0,0,0,0.7), transparent)",
                                            padding: "10px 10px 20px",
                                        }}
                                    >
                                        {member.name}
                                    </div>
                                    {/* アニメバッジ */}
                                    {type === "anime" && (
                                        <div
                                            className="absolute bottom-2 right-2 text-[10px] font-black px-2 py-0.5 rounded-full"
                                            style={{ background: "rgba(255,140,0,0.85)", backdropFilter: "blur(4px)" }}
                                        >
                                            ✦ ANIME
                                        </div>
                                    )}
                                </Link>
                            );
                        })}

                        {/* 右スペーサー */}
                        <div style={{ flexShrink: 0, width: `calc(50vw - ${CARD_W / 2}px)` }} />
                    </div>
                </div>

                {/* ドットインジケーター ＋ STOP/再生ボタン */}
                <div className="flex items-center justify-center gap-3 mt-2 mb-5">
                    <div className="flex gap-1.5 items-center">
                        {slides.map((slide, i) => (
                            <div
                                key={i}
                                className="rounded-full transition-all duration-300"
                                style={{
                                    width: i === activeIndex ? 20 : 5,
                                    height: 5,
                                    background: i === activeIndex
                                        ? (slides[activeIndex].type === "anime" ? "#f97316" : "#fff")
                                        : "rgba(255,255,255,0.3)",
                                }}
                            />
                        ))}
                    </div>
                    {/* STOP / 再稼働ボタン */}
                    <button
                        onClick={() => {
                            const next = !isPaused;
                            isPausedRef.current = next;
                            setIsPaused(next);
                            if (!next) startAutoScroll(); // 再稼働
                            else if (autoScrollRef.current) clearInterval(autoScrollRef.current); // 停止
                        }}
                        className="h-8 px-3 rounded-full flex items-center gap-2 text-[10px] font-black tracking-tighter transition-all active:scale-95 shadow-lg overflow-hidden group"
                        style={{
                            background: isPaused ? "rgba(239, 68, 68, 0.25)" : "rgba(34, 197, 94, 0.25)",
                            border: `1px solid ${isPaused ? "rgba(239, 68, 68, 0.4)" : "rgba(34, 197, 94, 0.4)"}`,
                            backdropFilter: "blur(8px)",
                        }}
                        aria-label={isPaused ? "自動スクロール再開" : "自動スクロール停止"}
                    >
                        <div className={`w-2 h-2 rounded-full animate-pulse ${isPaused ? "bg-red-500" : "bg-green-500"}`} />
                        <span className={isPaused ? "text-red-400" : "text-green-400"}>
                            {isPaused ? "STOP" : "MOVE"}
                        </span>
                        <span className="text-white/40 ml-0.5">
                            {isPaused ? "▶" : "⏸"}
                        </span>
                    </button>
                </div>

                {/* ────── 下部情報パネル ────── */}
                <div
                    className="flex-1 flex flex-col px-6 pb-24 overflow-y-auto"
                    style={{
                        background: "rgba(255,255,255,0.07)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        borderTopLeftRadius: 28,
                        borderTopRightRadius: 28,
                    }}
                >
                    {/* 議員名・地区 */}
                    <div className="flex items-end justify-between pt-6 pb-4"
                        style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                        <div>
                            <p className="text-xl font-black">{activeMember?.name} の政策</p>
                            <p className="text-xs opacity-60 mt-0.5">{activeMember?.area} 担当 · {activeMember?.term}</p>
                        </div>
                        <Link
                            href={`/members/${activeMember?.id}`}
                            className="text-xs font-black px-4 py-2 rounded-full"
                            style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
                        >
                            詳細 →
                        </Link>
                    </div>

                    {/* キャッチフレーズ */}
                    <p className="text-sm font-black italic leading-snug pt-4 pb-3 opacity-90">
                        &ldquo;{activeMember?.catchphrase}&rdquo;
                    </p>

                    {/* 政策3件 */}
                    <div className="space-y-2">
                        {activeMember?.policies.slice(0, 3).map((p, i) => (
                            <div key={i} className="flex items-center gap-3"
                                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 8 }}>
                                <span className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black shrink-0"
                                    style={{ background: "rgba(255,255,255,0.12)" }}>{i + 1}</span>
                                <p className="text-sm font-bold opacity-90">{p}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 固定CTAボタン */}
            <div className="fixed bottom-0 left-0 right-0 z-30 px-5 pb-6 pt-3"
                style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.8))" }}>
                <Link
                    href="/support"
                    className="block w-full text-center font-black text-base py-4 rounded-2xl shadow-2xl active:scale-95 transition-transform"
                    style={{ background: themeColors[activeIndex], border: "1px solid rgba(255,255,255,0.15)" }}
                >
                    後援会に入会する
                </Link>
            </div>
        </div>
    );
}
