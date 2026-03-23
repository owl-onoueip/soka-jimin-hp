import { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSlideText } from '@/components/AnimatedSlideText';
import type { CSSProperties } from 'react';

interface Slide {
  id: number;
  title: string;
  content: string;
  startTime: number;
  endTime: number;
  icon: string;
  animationType: 'pulse' | 'glow' | 'bounce' | 'wave' | 'typewriter';
}

const slides: Slide[] = [
  {
    id: 1,
    title: '人口1万人に対して議員1人',
    content: '我々の案としては、人口1万人に対して議員1人。そのように分かりやすく、例えば5年後、10年後であっても、人口が増減する中で議員の定数が自然と調整されていくという提案です。',
    startTime: 0,
    endTime: 16,
    icon: '📊',
    animationType: 'pulse',
  },
  {
    id: 2,
    title: '現在、草加市は25万人',
    content: '現在、草加市は25万人ですが、もし26万人になったら26人にしていこうとか、そのような形で、誰もが分かりやすい形の議員定数を作り上げていこうということを提案しております。',
    startTime: 16,
    endTime: 34,
    icon: '🏙️',
    animationType: 'glow',
  },
  {
    id: 3,
    title: '他の会派との調整',
    content: 'なかなか他の会派、また他の議員の同意を得ることが、現在まで至ることができておりません。しかし、改革への想いは変わりません。',
    startTime: 34,
    endTime: 46,
    icon: '🤝',
    animationType: 'bounce',
  },
  {
    id: 4,
    title: '委員会の持ち時間制',
    content: '委員会の持ち時間制を今回提案させていただいております。例えば、1人の議員がたくさんいろんな質問をしていくのではなく、議員がそれぞれの持ち時間の中で、自分の持ち時間を使った形で委員会でしっかりとした発言をしていく、そんな提案をさせていただいております。',
    startTime: 46,
    endTime: 75,
    icon: '⏱️',
    animationType: 'wave',
  },
  {
    id: 5,
    title: '26人の議員がしっかりと発言',
    content: '今現在、議員が26人いるわけですが、その議員の中でしっかりとした発言をそれぞれがしていく仕組みを作っていけたらな、そんな活動を現在させていただいております。',
    startTime: 75,
    endTime: 90,
    icon: '🗣️',
    animationType: 'pulse',
  },
  {
    id: 6,
    title: '10月選挙への決意',
    content: '今回10月選挙という年に来るわけですけれども、本当に多くの皆様方にしっかりとしたご支援をいただいて、しっかりとした議員を選んでもらえるような、そんな我々も体制を作っていかなければいけないのではないかと考えております。',
    startTime: 90,
    endTime: 113,
    icon: '🗳️',
    animationType: 'glow',
  },
  {
    id: 7,
    title: '3月11日、15年前の震災',
    content: '結びになりますけれども、本日は3月11日。15年前の震災がありました。本当に多くの人々の命が亡くなったわけですが、この教訓をしっかりと活かした形で、災害に強い街を作っていく、そんな活動も心がけていきたいと思っております。',
    startTime: 113,
    endTime: 136,
    icon: '🙏',
    animationType: 'wave',
  },
];

export default function VideoSlidePart2() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSlideId, setCurrentSlideId] = useState(1);

  // 音声の再生時間に基づいて現在のスライドを更新
  useEffect(() => {
    const currentSlide = slides.find(
      (slide) => currentTime >= slide.startTime && currentTime < slide.endTime
    );
    if (currentSlide) {
      setCurrentSlideId(currentSlide.id);
    }
  }, [currentTime]);

  // 音声の時間更新をリッスン
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // 音声の長さを取得
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // 再生/一時停止
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // リセット
  const handleReset = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      setIsPlaying(false);
      audioRef.current.pause();
    }
  };

  // 音声の再生終了
  const handleEnded = () => {
    setIsPlaying(false);
  };

  // プログレスバーのクリック
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      audioRef.current.currentTime = percent * duration;
    }
  };

  const currentSlide = slides.find((s) => s.id === currentSlideId);
  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            小川敏也 活動報告
          </h1>
          <p className="text-lg text-slate-600">
            後編：具体的な改革案と決意（2分16秒）
          </p>
        </div>

        {/* メインコンテナ - 横長レイアウト */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左側：スライド表示エリア */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* スライド表示 */}
              <div 
                className="bg-white flex items-center relative overflow-hidden border border-slate-200"
                style={{ aspectRatio: '16 / 9', minHeight: '400px' }}
              >
                {/* 右側中央：議員の写真（1/6サイズ、アイコンとタイトルの中間地点） */}
                <div className="absolute right-6 top-1/3 w-24 h-24 rounded-lg overflow-hidden shadow-lg border-2 border-white">
                  <img
                    src="/images/ogawa_portrait.jpg"
                    alt="小川敏也議員"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* メインコンテンツ */}
                <div className="w-full h-full flex flex-col justify-center items-center p-12 bg-gradient-to-r from-slate-50 to-white pr-40">
                  {currentSlide && (
                    <AnimatedSlideText
                      title={currentSlide.title}
                      content={currentSlide.content}
                      icon={currentSlide.icon}
                      animationType={currentSlide.animationType}
                      isActive={true}
                    />
                  )}
                </div>
              </div>

              {/* スライド番号 */}
              <div className="p-3 bg-slate-50 text-center text-sm text-slate-600 border-t border-slate-200">
                スライド {currentSlideId} / {slides.length}
              </div>

              {/* オーディオプレイヤー */}
              <div className="p-4 bg-white border-t border-slate-200">
                {/* 隠しオーディオ要素 */}
                <audio
                  ref={audioRef}
                  src="/audio/part2_audio.mp3"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={handleEnded}
                />

                {/* 再生ボタン */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Button
                    onClick={togglePlayPause}
                    size="sm"
                    className="bg-orange-500 hover:bg-orange-600 text-white flex-1 gap-2"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-4 h-4" />
                        一時停止
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        再生
                      </>
                    )}
                  </Button>

                  <Button
                    onClick={handleReset}
                    variant="outline"
                    size="sm"
                    className="gap-1"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>

                {/* プログレスバー */}
                <div className="mb-3">
                  <div
                    className="w-full h-1.5 bg-slate-200 rounded-full cursor-pointer hover:h-2 transition-all"
                    onClick={handleProgressClick}
                  >
                    <div
                      className="h-full bg-orange-500 rounded-full transition-all"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* 時間表示 */}
                <div className="flex justify-between items-center text-xs text-slate-600">
                  <div className="flex items-center gap-1">
                    <Volume2 className="w-3 h-3" />
                    <span>
                      {Math.floor(currentTime)}秒 / {Math.floor(duration)}秒
                    </span>
                  </div>
                  <span className="text-slate-500">
                    {Math.round(progressPercent)}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 右側：スライド一覧と説明 */}
          <div className="lg:col-span-1 space-y-6">
            {/* スライド一覧 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                📋 スライド一覧
              </h3>
              <div className="space-y-2">
                {slides.map((slide) => (
                  <button
                    key={slide.id}
                    onClick={() => {
                      if (audioRef.current) {
                        audioRef.current.currentTime = slide.startTime;
                        setCurrentTime(slide.startTime);
                      }
                    }}
                    className={`w-full p-3 rounded-lg text-left transition-all text-sm ${
                      currentSlideId === slide.id
                        ? 'bg-orange-500 text-white shadow-md'
                        : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <div className="font-semibold">
                      {slide.icon} {slide.title}
                    </div>
                    <div className="text-xs opacity-75 mt-1">
                      {slide.startTime}秒 - {slide.endTime}秒
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 後編の説明 */}
            <div className="bg-blue-50 rounded-lg shadow-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                💡 後編について
              </h3>
              <p className="text-blue-800 text-sm leading-relaxed mb-4">
                このセクションでは、議会改革の具体的な改革案と、10月選挙への決意、防災への誓いが述べられています。
              </p>
              
              <div className="bg-white rounded p-4 border border-blue-100">
                <h4 className="font-semibold text-blue-900 mb-2 text-sm">
                  🎯 主なテーマ
                </h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>✓ 議員定数の適正化案</li>
                  <li>✓ 持ち時間制の提案</li>
                  <li>✓ 10月選挙への決意</li>
                  <li>✓ 防災への誓い</li>
                </ul>
              </div>
            </div>

            {/* 前編へのリンク */}
            <div className="bg-orange-50 rounded-lg shadow-lg p-6 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-900 mb-3">
                ⬅️ 前編をご覧ください
              </h3>
              <p className="text-sm text-orange-800 mb-4">
                まだ前編をご視聴されていない場合は、前編から始めることをお勧めします。
              </p>
              <a
                href="/video-part-1"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-sm"
              >
                ← 前編を見る
              </a>
            </div>
          </div>
        </div>

        {/* フッター */}
        <div className="mt-12 text-center text-slate-600">
          <p className="text-sm">
            📹 音声に合わせてスライドが自動で切り替わります
          </p>
          <p className="text-xs mt-2 text-slate-500">
            スライド一覧をクリックすると、そのシーンにジャンプできます
          </p>
        </div>
      </div>
    </div>
  );
}
