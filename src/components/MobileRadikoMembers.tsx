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

export default function MobileRadikoMembers() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // スクロール監視 → 中央に最も近いカードをアクティブに
    useEffect(() => {
        const el = carouselRef.current;
        if (!el) return;
        const onScroll = () => {
            const center = el.getBoundingClientRect().left + el.offsetWidth / 2;
            let closest = 0;
            let minDist = Infinity;
            el.querySelectorAll<HTMLElement>(".rc-item").forEach((item, i) => {
                const rect = item.getBoundingClientRect();
                const dist = Math.abs(center - (rect.left + rect.width / 2));
                if (dist < minDist) { minDist = dist; closest = i; }
            });
            setActiveIndex(closest);
        };
        el.addEventListener("scroll", onScroll, { passive: true });
        setTimeout(onScroll, 100);
        return () => el.removeEventListener("scroll", onScroll);
    }, []);

    const activeMember = slides[activeIndex]?.member;
    const activeType = slides[activeIndex]?.type;

    // 指定インデックスまでスムーズスクロール
    const goTo = (index: number) => {
        const el = carouselRef.current;
        if (!el) return;
        const items = el.querySelectorAll<HTMLElement>(".rc-item");
        if (items[index]) {
            const itemRect = items[index].getBoundingClientRect();
            const containerRect = el.getBoundingClientRect();
            const offset = itemRect.left - containerRect.left - (el.offsetWidth / 2 - items[index].offsetWidth / 2);
            el.scrollBy({ left: offset, behavior: "smooth" });
        }
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
                    {activeIndex > 0 && (
                        <button
                            onClick={() => goTo(activeIndex - 1)}
                            className="absolute left-0 top-0 bottom-0 z-20 flex items-center justify-start pl-2"
                            style={{ width: "28%", background: "transparent" }}
                            aria-label="前の議員へ"
                        />
                    )}
                    {/* 右クリックゾーン：次へ */}
                    {activeIndex < slides.length - 1 && (
                        <button
                            onClick={() => goTo(activeIndex + 1)}
                            className="absolute right-0 top-0 bottom-0 z-20 flex items-center justify-end pr-2"
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

                        {slides.map((slide, i) => {
                            const { member, type } = slide;
                            const isActive = i === activeIndex;
                            const imgSrc = type === "anime" ? member.photoAnime : member.photo;
                            return (
                                <Link
                                    key={`${member.id}-${type}`}
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

                {/* ドットインジケーター */}
                <div className="flex justify-center gap-1.5 mt-2 mb-5">
                    {slides.map((slide, i) => (
                        <div
                            key={i}
                            className="rounded-full transition-all duration-300"
                            style={{
                                width: i === activeIndex ? 20 : 5,
                                height: 5,
                                background: i === activeIndex
                                    ? (slides[i].type === "anime" ? "#f97316" : "#fff")
                                    : "rgba(255,255,255,0.3)",
                            }}
                        />
                    ))}
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
