"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { members } from "@/data/members";

export default function MemberCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 自動スクロール
  useEffect(() => {
    if (!isAutoScrolling || !scrollRef.current) return;

    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const cardWidth = 160; // w-36 = 144px + gap
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 10) {
        // 最後まで行ったら最初に戻る
        container.scrollTo({ left: 0, behavior: "smooth" });
        setCurrentIndex(0);
      } else {
        // 次のカードへスクロール
        const newScroll = container.scrollLeft + cardWidth;
        container.scrollTo({ left: newScroll, behavior: "smooth" });
        setCurrentIndex(Math.floor(newScroll / cardWidth));
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  // ユーザーがタッチ/マウス操作したら一時停止
  const handleInteractionStart = () => {
    setIsAutoScrolling(false);
  };

  // 操作終了後3秒で再開
  const handleInteractionEnd = () => {
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  // 手動スクロール
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 160;
    const newScroll =
      direction === "left"
        ? scrollRef.current.scrollLeft - cardWidth
        : scrollRef.current.scrollLeft + cardWidth;
    scrollRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  // 拡張した議員リスト（無限スクロール風に見せるため）
  const extendedMembers = [...members, ...members];

  return (
    <div className="relative">
      {/* 左矢印ボタン */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow-lg rounded-full p-2 hover:bg-white transition-colors hidden md:block"
        aria-label="前へ"
      >
        <ChevronLeft size={24} className="text-primary-500" />
      </button>

      {/* カルーセル本体 */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 px-4 snap-x snap-mandatory scrollbar-hide"
        onMouseEnter={handleInteractionStart}
        onMouseLeave={handleInteractionEnd}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {extendedMembers.map((member, index) => (
          <Link
            key={`${member.id}-${index}`}
            href={`/members/${member.id}`}
            className="flex-shrink-0 w-36 snap-start transform transition-transform hover:scale-105"
          >
            <div className="card text-center p-4 h-full">
              {/* プレースホルダー画像 */}
              <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-2xl font-bold shadow-md">
                {member.name.charAt(0)}
              </div>
              <p className="font-bold text-gray-800 text-sm">{member.name}</p>
              <p className="text-xs text-gray-500 mt-1 flex items-center justify-center gap-1">
                <MapPin size={12} />
                {member.area}
              </p>
              {member.position && (
                <span className="inline-block mt-2 text-xs bg-accent-500 text-white px-2 py-0.5 rounded">
                  {member.position}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* 右矢印ボタン */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow-lg rounded-full p-2 hover:bg-white transition-colors hidden md:block"
        aria-label="次へ"
      >
        <ChevronRight size={24} className="text-primary-500" />
      </button>

      {/* インジケーター */}
      <div className="flex justify-center gap-2 mt-4">
        {members.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!scrollRef.current) return;
              const cardWidth = 160;
              scrollRef.current.scrollTo({
                left: index * cardWidth,
                behavior: "smooth",
              });
              setCurrentIndex(index);
              setIsAutoScrolling(false);
              setTimeout(() => setIsAutoScrolling(true), 5000);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex % members.length === index
                ? "bg-primary-500"
                : "bg-gray-300"
            }`}
            aria-label={`議員 ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
