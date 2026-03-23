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
  section: 'introduction' | 'reform' | 'closing';
}

// 統合スライドデータ：前半と後半を1つにまとめたもの
// 重複部分を削除し、時間を調整しました
const slides: Slide[] = [
  // ===== 前半：議会改革への想い =====
  {
    id: 1,
    title: '小川敏也です',
    content: '皆さん、こんにちは。小川敏也でございます。',
    startTime: 0,
    endTime: 5,
    icon: '👋',
    animationType: 'bounce',
    section: 'introduction',
  },
  {
    id: 2,
    title: 'ご視聴ありがとうございます',
    content: '本日はこの動画までたどり着いていただきまして、ありがとうございます。',
    startTime: 5,
    endTime: 9,
    icon: '🙏',
    animationType: 'glow',
    section: 'introduction',
  },
  {
    id: 3,
    title: '7期目を務めさせていただいております',
    content: '現在7期目を務めさせていただいております。',
    startTime: 9,
    endTime: 13,
    icon: '📋',
    animationType: 'pulse',
    section: 'introduction',
  },
  {
    id: 4,
    title: 'ご支援に感謝申し上げます',
    content: '4年前の選挙の折には、本当に多くの皆さんにご支援いただき、また、本日までいろんな方に支えていただいたことを、まず感謝申し上げます。',
    startTime: 13,
    endTime: 24,
    icon: '❤️',
    animationType: 'wave',
    section: 'introduction',
  },
  {
    id: 5,
    title: '議会改革特別委員会の委員長',
    content: '現在、私は議会改革特別委員会の委員長を務めさせていただいております。',
    startTime: 26,
    endTime: 33,
    icon: '🏛️',
    animationType: 'bounce',
    section: 'reform',
  },
  {
    id: 6,
    title: '13回の委員会を開催',
    content: '昨年の3月19日に第1回目を開催し、現在まで第13回議会改革の特別委員会を開催しているわけですが、その中身を少し紹介させていただきたいと思います。',
    startTime: 33,
    endTime: 48,
    icon: '📊',
    animationType: 'pulse',
    section: 'reform',
  },
  {
    id: 7,
    title: '改革の目的',
    content: 'まず、なぜこの議会改革特別委員会を作ったかというと、平等に各議員が委員会でしっかりとした発言をしていこうだとか、また、議員定数について、今回、町会連合会から削減していこうという要望も出ております。',
    startTime: 48,
    endTime: 66,
    icon: '🎯',
    animationType: 'glow',
    section: 'reform',
  },
  {
    id: 8,
    title: '市民に開かれた分かりやすい議会へ',
    content: 'そういった形で議員削減をしたらどうだとか、我々が思うことを、この議会改革をすることによって市民に開かれて、また分かりやすい議会を作り上げていこうというような趣旨で、この議会改革特別委員会を現在作らせていただきました。',
    startTime: 66,
    endTime: 83,
    icon: '✨',
    animationType: 'wave',
    section: 'reform',
  },
  // ===== 後半：具体的な改革案と決意 =====
  // 注：後半の時間を調整しました（前半の終了時間110秒から続く）
  {
    id: 9,
    title: '人口1万人に対して議員1人',
    content: '我々の案としては、人口1万人に対して議員1人。そのように分かりやすく、例えば5年後、10年後であっても、人口が増減する中で議員の定数が自然と調整されていくという提案です。',
    startTime: 83,
    endTime: 99,
    icon: '📊',
    animationType: 'pulse',
    section: 'reform',
  },
  {
    id: 10,
    title: '現在、草加市は25万人',
    content: '現在、草加市は25万人ですが、もし26万人になったら26人にしていこうとか、そのような形で、誰もが分かりやすい形の議員定数を作り上げていこうということを提案しております。',
    startTime: 99,
    endTime: 117,
    icon: '🏙️',
    animationType: 'glow',
    section: 'reform',
  },
  {
    id: 11,
    title: '他の会派との調整',
    content: 'なかなか他の会派、また他の議員の同意を得ることが、現在まで至ることができておりません。しかし、改革への想いは変わりません。',
    startTime: 117,
    endTime: 129,
    icon: '🤝',
    animationType: 'bounce',
    section: 'reform',
  },
  {
    id: 12,
    title: '委員会の持ち時間制',
    content: '委員会の持ち時間制を今回提案させていただいております。例えば、1人の議員がたくさんいろんな質問をしていくのではなく、議員がそれぞれの持ち時間の中で、自分の持ち時間を使った形で委員会でしっかりとした発言をしていく、そんな提案をさせていただいております。',
    startTime: 129,
    endTime: 158,
    icon: '⏱️',
    animationType: 'wave',
    section: 'reform',
  },
  {
    id: 13,
    title: '26人の議員がしっかりと発言',
    content: '今現在、議員が26人いるわけですが、その議員の中でしっかりとした発言をそれぞれがしていく仕組みを作っていけたらな、そんな活動を現在させていただいております。',
    startTime: 158,
    endTime: 173,
    icon: '🗣️',
    animationType: 'pulse',
    section: 'reform',
  },
  {
    id: 14,
    title: '10月選挙への決意',
    content: '今回10月選挙という年に来るわけですけれども、本当に多くの皆様方にしっかりとしたご支援をいただいて、しっかりとした議員を選んでもらえるような、そんな我々も体制を作っていかなければいけないのではないかと考えております。',
    startTime: 173,
    endTime: 197,
    icon: '🗳️',
    animationType: 'glow',
    section: 'closing',
  },
  {
    id: 15,
    title: '3月11日、15年前の震災',
    content: '結びになりますけれども、本日は3月11日。15年前の震災がありました。本当に多くの人々の命が亡くなったわけですが、この教訓をしっかりと活かした形で、災害に強い街を作っていく、そんな活動も心がけていきたいと思っております。',
    startTime: 197,
    endTime: 220,
    icon: '🙏',
    animationType: 'wave',
    section: 'closing',
  }
];

export default function VideoSlideUnified() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSlideId, setCurrentSlideId] = useState(1);
  const [audioSource, setAudioSource] = useState<'combined' | 'part1' | 'part2'>('combined');

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

  // セクション情報を取得
  const introductionSlides = slides.filter(s => s.section === 'introduction');
  const reformSlides = slides.filter(s => s.section === 'reform');
  const closingSlides = slides.filter(s => s.section === 'closing');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            小川敏也 活動報告
          </h1>
          <p className="text-lg text-slate-600">
            完全版：議会改革への想いと具体的な改革案（約4分）
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
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663219155942/BJBCs4fPJpj9U2MqNaJLFE/unified_audio_trimmed_8387853f.mp3"
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
            <div className="bg-white rounded-lg shadow-lg p-6 max-h-96 overflow-y-auto">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 sticky top-0 bg-white">
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

            {/* 統合版の説明 */}
            <div className="bg-green-50 rounded-lg shadow-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-3">
                ✅ 統合完全版
              </h3>
              <p className="text-green-800 text-sm leading-relaxed mb-4">
                前編と後編を統合した完全版です。重複部分を削除し、シームレスに再生されます。
              </p>
              
              <div className="bg-white rounded p-4 border border-green-100 space-y-3">
                <div>
                  <h4 className="font-semibold text-green-900 mb-2 text-sm">
                    📍 セクション構成
                  </h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>✓ 自己紹介と感謝（スライド 1-4）</li>
                    <li>✓ 議会改革の背景と具体案（スライド 5-13）</li>
                    <li>✓ 選挙への決意と防災への誓い（スライド 14-15）</li>
                  </ul>
                </div>

                <div className="pt-2 border-t border-green-100">
                  <p className="text-xs text-green-700">
                    <strong>総スライド数：</strong> {slides.length}スライド<br/>
                    <strong>総再生時間：</strong> 約4分（{Math.floor(duration)}秒）
                  </p>
                </div>
              </div>
            </div>

            {/* 使用方法 */}
            <div className="bg-blue-50 rounded-lg shadow-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                💡 使用方法
              </h3>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>🎬 「再生」ボタンで動画を開始</li>
                <li>📍 スライド一覧をクリックして任意の位置へジャンプ</li>
                <li>⏸️ 「一時停止」で停止、「リセット」で最初に戻す</li>
                <li>📊 プログレスバーをクリックしてスクラブ操作も可能</li>
              </ul>
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
