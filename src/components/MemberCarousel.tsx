"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { members } from "@/data/members";

export default function MemberCarousel({
  onAnimeModeEnter,
  onAnimeModeLeave
}: {
  onAnimeModeEnter?: () => void;
  onAnimeModeLeave?: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasPausedRef = useRef(false); // 2巡目で一度停止したかを管理

  // カードの幅を取得する関数（レスポンシブ対応）
  const getCardWidth = () => {
    // モバイル: w-20 (80px) + gap-2 (8px) = 88px
    // PC: w-24 (96px) + gap-2 (8px) = 104px (さらに縮小して1ページにより多く表示)
    if (typeof window === "undefined") return 104;
    return window.innerWidth < 768 ? 88 : 104;
  };

  // 自動スクロール
  useEffect(() => {
    if (!isAutoScrolling || !scrollRef.current) return;

    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const cardWidth = getCardWidth();
      const maxScroll = container.scrollWidth - container.clientWidth;

      // 現在のインデックスがアニメモード（2巡目）に入ったか判定
      // members.length (7) 以上なら2巡目
      // かつ、まだ停止していない場合のみ停止を実行
      // ただし、バッファゾーン（2巡目終了後）に入ったら停止しない
      const bufferStartIndex = members.length * 2;

      // ループ処理判定
      // バッファゾーンに入り込んでいたら、先頭に瞬間移動してループさせる
      if (container.scrollLeft >= members.length * 2 * cardWidth - 10) {
        // 瞬間移動 (これは視覚的に変化なし)
        container.scrollTo({ left: 0, behavior: "auto" });
        setCurrentIndex(0);
        hasPausedRef.current = false;

        // 次のスクロールまで待つ
        return;
      }

      // 2巡目突入時の一時停止ロジック
      if (currentIndex === members.length && !hasPausedRef.current) {
        hasPausedRef.current = true; // 停止済みフラグON
        if (onAnimeModeEnter) onAnimeModeEnter();
        setIsAutoScrolling(false); // アニメモードに入ったら自動スクロール停止

        // 8秒後に再開（そのまま左へ進む）
        setTimeout(() => {
          setIsAutoScrolling(true);
        }, 8000);

        return;
      }

      // 通常スクロール（左へ）
      const newScroll = container.scrollLeft + cardWidth;
      container.scrollTo({ left: newScroll, behavior: "smooth" });
      const nextIndex = Math.floor(newScroll / cardWidth);
      setCurrentIndex(nextIndex);

      // バッファゾーン（1巡目のコピー）に入ったら、即座にアニメモード解除
      // これにより「通常メンバー＋アニメ背景」の時間をなくす
      if (nextIndex === members.length * 2) {
        if (onAnimeModeLeave) onAnimeModeLeave();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoScrolling, currentIndex, onAnimeModeEnter, onAnimeModeLeave]);

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
    const cardWidth = getCardWidth();
    const newScroll =
      direction === "left"
        ? scrollRef.current.scrollLeft - cardWidth
        : scrollRef.current.scrollLeft + cardWidth;
    scrollRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  // 拡張した議員リスト（無限スクロール風に見せるため）
  // 1巡目は通常写真、2巡目はアニメ風写真（あれば）を表示
  // さらに、無限ループのつなぎ目を滑らかにするために先頭の数名を末尾に追加（バッファ）
  // ワイドスクリーン対応のため、全メンバー分をバッファとして追加
  const extendedMembers = [
    ...members.map(m => ({ ...m, displayPhoto: m.photo, isAnime: false })),
    ...members.map(m => ({ ...m, displayPhoto: m.photoAnime || m.photo, isAnime: true })),
    ...members.map(m => ({ ...m, displayPhoto: m.photo, isAnime: false }))
  ];

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
        className="flex gap-2 md:gap-2 overflow-x-auto pb-4 px-2 md:px-2 snap-x snap-mandatory scrollbar-hide"
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
            className="flex-shrink-0 w-20 md:w-24 snap-start transform transition-all duration-300 hover:scale-105"
          >
            <div className="card text-center p-2 md:p-3 h-full flex flex-col items-center border-none shadow-sm hover:shadow-lg bg-gray-50 md:bg-white rounded-xl">
              {/* 写真（アニメ切替対応） */}
              <div className={`w-12 h-12 md:w-12 md:h-12 mb-2 md:mb-2 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-inner border-2 md:border-2 border-white overflow-hidden relative ${member.isAnime ? 'bg-accent-100' : 'bg-gradient-to-br from-primary-400 to-primary-600'
                }`}>
                {/* 画像があれば表示、なければイニシャル */}
                {/* 注: 実際の運用では next/image を使うべきですが、動的パスのため一旦 img タグまたは背景画像で対応 */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                  style={{ backgroundImage: `url(${member.displayPhoto})` }}
                  role="img"
                  aria-label={member.name}
                />
                {/* フォールバック用イニシャル（画像読み込み前やエラー時用） */}
                <span className="relative z-[-1]">{member.name.charAt(0)}</span>
              </div>

              <p className="font-bold text-gray-900 text-xs md:text-sm mb-1 leading-tight">{member.name}</p>
              <p className="text-[10px] md:text-[11px] text-gray-500 flex items-center justify-center gap-1 mb-1 md:mb-2 text-center">
                <MapPin size={10} className="md:w-3 md:h-3" />
                {member.area}
              </p>
              {member.position && (
                <span className="inline-block mt-auto text-[8px] md:text-[9px] font-black tracking-widest uppercase bg-accent-500 text-white px-1.5 py-0.5 md:px-2 md:py-0.5 rounded-full whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                  {member.position.replace("地区幹事長", "幹事長")}
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

      {/* インジケーター (モバイル非表示) */}
      <div className="hidden md:flex justify-center gap-2 mt-4">
        {members.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!scrollRef.current) return;
              const cardWidth = 104; // PC幅に合わせる (w-24=96 + gap-2=8)
              scrollRef.current.scrollTo({
                left: index * cardWidth,
                behavior: "smooth",
              });
              setCurrentIndex(index);
              setIsAutoScrolling(false);
              setTimeout(() => setIsAutoScrolling(true), 5000);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${currentIndex % members.length === index
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
