import { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Slide {
  id: number;
  title: string;
  content: string;
  startTime: number;
  endTime: number;
  icon: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: '小川敏也です',
    content: '皆さん、こんにちは。小川敏也でございます。',
    startTime: 0,
    endTime: 5,
    icon: '👋',
  },
  {
    id: 2,
    title: 'ご視聴ありがとうございます',
    content: '本日はこの動画までたどり着いていただきまして、ありがとうございます。',
    startTime: 5,
    endTime: 9,
    icon: '🙏',
  },
  {
    id: 3,
    title: '7期目を務めさせていただいております',
    content: '現在7期目を務めさせていただいております。',
    startTime: 9,
    endTime: 13,
    icon: '📋',
  },
  {
    id: 4,
    title: 'ご支援に感謝申し上げます',
    content: '4年前の選挙の折には、本当に多くの皆さんにご支援いただき、また、本日までいろんな方に支えていただいたことを、まず感謝申し上げます。',
    startTime: 13,
    endTime: 24,
    icon: '❤️',
  },
  {
    id: 5,
    title: '議会改革特別委員会の委員長',
    content: '現在、私は議会改革特別委員会の委員長を務めさせていただいております。',
    startTime: 26,
    endTime: 33,
    icon: '🏛️',
  },
  {
    id: 6,
    title: '13回の委員会を開催',
    content: '昨年の3月19日に第1回目を開催し、現在まで第13回議会改革の特別委員会を開催しているわけですが、その中身を少し紹介させていただきたいと思います。',
    startTime: 33,
    endTime: 48,
    icon: '📊',
  },
  {
    id: 7,
    title: '改革の目的',
    content: 'まず、なぜこの議会改革特別委員会を作ったかというと、平等に各議員が委員会でしっかりとした発言をしていこうだとか、また、議員定数について、今回、町会連合会から削減していこうという要望も出ております。',
    startTime: 48,
    endTime: 66,
    icon: '🎯',
  },
  {
    id: 8,
    title: '市民に開かれた分かりやすい議会へ',
    content: 'そういった形で議員削減をしたらどうだとか、我々が思うことを、この議会改革をすることによって市民に開かれて、また分かりやすい議会を作り上げていこうというような趣旨で、この議会改革特別委員会を現在作らせていただきました。',
    startTime: 66,
    endTime: 70,
    icon: '✨',
  },
];

export default function VideoSlideSection1() {
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
      <div className="max-w-4xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            小川敏也 活動報告
          </h1>
          <p className="text-lg text-slate-600">
            セクション1：挨拶と背景（1分10秒）
          </p>
        </div>

        {/* メインコンテナ */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* スライド表示エリア */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-12 min-h-80 flex flex-col justify-center items-center text-center">
            <div className="text-6xl mb-6">{currentSlide?.icon}</div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {currentSlide?.title}
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed max-w-2xl">
              {currentSlide?.content}
            </p>
            <div className="mt-8 text-sm text-slate-500">
              スライド {currentSlideId} / {slides.length}
            </div>
          </div>

          {/* オーディオプレイヤー */}
          <div className="p-8 bg-white border-t border-slate-200">
            {/* 隠しオーディオ要素 */}
            <audio
              ref={audioRef}
              src="/audio/section1_audio.mp3"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={handleEnded}
            />

            {/* 再生ボタン */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <Button
                onClick={togglePlayPause}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white gap-2"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-5 h-5" />
                    一時停止
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    再生
                  </>
                )}
              </Button>

              <Button
                onClick={handleReset}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                リセット
              </Button>
            </div>

            {/* プログレスバー */}
            <div className="mb-4">
              <div
                className="w-full h-2 bg-slate-200 rounded-full cursor-pointer hover:h-3 transition-all"
                onClick={handleProgressClick}
              >
                <div
                  className="h-full bg-orange-500 rounded-full transition-all"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* 時間表示 */}
            <div className="flex justify-between items-center text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4" />
                <span>
                  {Math.floor(currentTime)}秒 / {Math.floor(duration)}秒
                </span>
              </div>
              <span className="text-xs text-slate-500">
                {Math.round(progressPercent)}%
              </span>
            </div>
          </div>

          {/* スライド一覧 */}
          <div className="p-8 bg-slate-50 border-t border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              スライド一覧
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {slides.map((slide) => (
                <button
                  key={slide.id}
                  onClick={() => {
                    if (audioRef.current) {
                      audioRef.current.currentTime = slide.startTime;
                      setCurrentTime(slide.startTime);
                    }
                  }}
                  className={`p-4 rounded-lg text-left transition-all ${
                    currentSlideId === slide.id
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'bg-white text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <div className="font-semibold text-sm">
                    {slide.icon} {slide.title}
                  </div>
                  <div className="text-xs opacity-75 mt-1">
                    {slide.startTime}秒 - {slide.endTime}秒
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 説明 */}
          <div className="p-8 bg-blue-50 border-t border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              💡 このセクションについて
            </h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              このセクションでは、小川敏也議員が自己紹介と感謝のメッセージを述べ、議会改革特別委員会の背景を説明しています。13回開催された委員会の活動内容を紹介する導入部分です。
            </p>
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
