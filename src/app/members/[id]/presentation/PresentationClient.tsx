"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw, ChevronLeft, Volume2 } from "lucide-react";
import Link from "next/link";
import type { Member } from "@/data/members";

export default function PresentationClient({ member }: { member: Member }) {
  const presentation = member.presentation!;
  const slides = presentation.slides;
  const accent = member.accentColor || "#f97316";

  const [introComplete, setIntroComplete] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSlideId, setCurrentSlideId] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!isPlaying && currentTime === 0) return;
    const slide = slides.find(s => currentTime >= s.startTime && currentTime < s.endTime);
    if (slide) setCurrentSlideId(slide.id);
  }, [currentTime, slides, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) { audioRef.current.pause(); } else { audioRef.current.play(); }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.pause();
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    audioRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * duration;
  };

  const currentSlide = slides.find(s => s.id === currentSlideId);
  const progress = duration ? (currentTime / duration) * 100 : 0;
  const formatTime = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ジブリキャラ登場アニメーション */}
      <AnimatePresence>
        {!introComplete && (
          <motion.div
            className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-50"
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            <motion.div
              initial={{ x: -400, opacity: 0, rotate: -10 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.3 }}
              onAnimationComplete={() => setTimeout(() => setIntroComplete(true), 1800)}
              className="flex flex-col items-center gap-6"
            >
              <motion.div
                className="w-52 h-52 rounded-full overflow-hidden border-4 shadow-2xl"
                style={{ borderColor: accent }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <img src={member.photoAnime || member.photo} alt={member.name} className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-center"
              >
                <p className="text-sm font-black tracking-widest uppercase mb-2" style={{ color: accent }}>
                  草加市議会議員 {member.term}
                </p>
                <h1 className="text-4xl font-black text-white mb-4">{member.name}</h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="text-lg font-black leading-relaxed"
                >
                  {member.catchphrase}
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* メインプレイヤー */}
      <AnimatePresence>
        {introComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen flex flex-col"
          >
            {/* ヘッダー */}
            <div className="grid grid-cols-3 items-center px-4 py-4 border-b border-white/10">
              <Link href={`/members/${member.id}`} className="flex items-center gap-1 text-white/60 hover:text-white transition-colors text-sm font-bold">
                <ChevronLeft size={16} />
                戻る
              </Link>
              <div className="text-center">
                <p className="text-xs font-black tracking-widest uppercase" style={{ color: accent }}>Activity Report</p>
                <p className="text-white font-black text-sm">{member.name} 活動報告</p>
              </div>
              <div />
            </div>

            {/* スライドエリア */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 max-w-2xl mx-auto w-full">

              <motion.div
                className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 shadow-lg"
                style={{ borderColor: accent }}
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <img src={member.photoAnime || member.photo} alt={member.name} className="w-full h-full object-cover" />
              </motion.div>

              {/* スライドコンテンツ */}
              <div className="w-full bg-white/5 rounded-3xl border border-white/10 p-8 mb-6 min-h-[220px] flex flex-col items-center justify-center text-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlideId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <span className="text-5xl">{currentSlide?.icon}</span>
                    <h2 className="text-xl md:text-2xl font-black text-white leading-tight">
                      <span className="pb-1" style={{ borderBottom: `2px solid ${accent}` }}>{currentSlide?.title}</span>
                    </h2>
                    <p className="text-white/70 text-sm md:text-base leading-relaxed font-medium">
                      {currentSlide?.content}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <p className="text-white/40 text-xs font-bold mb-4">{currentSlideId} / {slides.length}</p>

              {/* プログレスバー */}
              <div className="w-full h-2 bg-white/10 rounded-full cursor-pointer mb-4 overflow-hidden" onClick={handleProgressClick}>
                <div className="h-full rounded-full transition-all" style={{ width: `${progress}%`, backgroundColor: accent }} />
              </div>

              <div className="flex justify-between w-full text-white/40 text-xs font-bold mb-6">
                <span className="flex items-center gap-1"><Volume2 size={12} />{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>

              {/* コントロール */}
              <div className="flex items-center gap-4 w-full">
                <button onClick={handleReset} className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <RotateCcw size={18} />
                </button>
                <button
                  onClick={togglePlay}
                  className="flex-1 h-14 rounded-2xl font-black text-lg flex items-center justify-center gap-2 shadow-lg transition-colors"
                  style={{ backgroundColor: accent }}
                >
                  {isPlaying ? <><Pause size={20} />一時停止</> : <><Play size={20} />再生</>}
                </button>
              </div>

              <audio
                ref={audioRef}
                src={presentation.audioSrc}
                onTimeUpdate={() => audioRef.current && setCurrentTime(audioRef.current.currentTime)}
                onLoadedMetadata={() => audioRef.current && setDuration(audioRef.current.duration)}
                onEnded={() => setIsPlaying(false)}
              />
            </div>

            {/* スライド一覧 */}
            <div className="border-t border-white/10 px-4 py-6">
              <p className="text-white/40 text-xs font-black tracking-widest uppercase mb-3 text-center">スライド一覧</p>
              <div className="flex gap-2 overflow-x-auto pb-2 max-w-2xl mx-auto">
                {slides.map(slide => (
                  <button
                    key={slide.id}
                    onClick={() => {
                      if (audioRef.current) {
                        audioRef.current.currentTime = slide.startTime;
                        setCurrentTime(slide.startTime);
                        if (isPlaying) audioRef.current.play();
                      }
                    }}
                    className="flex-shrink-0 px-3 py-2 rounded-xl text-xs font-black transition-all"
                    style={currentSlideId === slide.id
                      ? { backgroundColor: accent, color: "white" }
                      : { backgroundColor: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)" }
                    }
                  >
                    {slide.icon} {slide.id}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
