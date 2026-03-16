import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: "title",
    title: "草加市議会改革特別委員会のビジョン",
    subtitle: "「市民に開かれた議会」の実現に向けて",
  },
  {
    id: "intro",
    title: "市民に開かれた議会を目指して",
    subtitle: "改革の背景と目的",
    points: [
      "透明性の高い議会運営を実現します",
      "特定の議員に偏ることなく、全議員が議論に参加できる体制を整えます",
      "市民の誰もが理解しやすく、納得感のある制度設計を推進します",
    ],
  },
  {
    id: "quota",
    title: "改革の柱1：人口連動型の議員定数",
    subtitle: "「人口1万人に対して議員1人」という明確な基準",
    points: [
      "現在の人口約25万人を基準とし、定数を設定します",
      "5年・10年スパンで人口増減に合わせて自然と定数が見直される仕組みです",
      "町会連合会などからの定数削減要望も踏まえ、客観的な指標に基づいた定数設定を行います",
    ],
  },
  {
    id: "why_quota",
    title: "なぜ「人口連動型」なのか？",
    subtitle: "分かりやすさと納得感の向上",
    points: [
      "市民への分かりやすさ：「1万人に1人」というシンプルな基準により、誰でも定数の根拠を直感的に理解できます",
      "柔軟な対応と客観性：人口の増減に合わせて自然に定数が調整されるため、政治的な恣意性を排除できます",
      "透明性の確保：統計データに基づいた算出により、議会運営の透明性と市民の納得感が高まります",
    ],
  },
  {
    id: "speaking_time",
    title: "改革の柱2：平等に発言できる仕組み",
    subtitle: "委員会への「持ち時間制」の導入",
    points: [
      "特定の議員だけが偏って多くの質問をする現状を改善し、各議員が自身の持ち時間を使って発言できるようにします",
      "現在26人いる議員全員が、委員会で平等かつしっかりと自分の意見を述べられる仕組みを作ります",
      "限られた時間の中で要点を絞った議論を行うことで、より密度の高い審議を実現します",
    ],
  },
  {
    id: "benefits",
    title: "持ち時間制導入のメリット",
    subtitle: "議論の質の向上と多様な意見の反映",
    points: [
      "発言機会の平等：若手からベテランまで、すべての議員が自身の持ち時間でしっかりと主張できます",
      "効率的な議事進行：時間制限があることで、要点を絞った密度の高い議論が可能になります",
      "多様な視点の確保：多くの議員が発言することで、市民の多様な声を議会に反映しやすくなります",
    ],
  },
  {
    id: "conclusion",
    title: "特別委員会が目指す未来の議会",
    subtitle: "全員参加で市民に開かれた議論の場へ",
    points: [
      "特定の個人に依存せず、システムとして公平性が保たれた議会を作ります",
      "市民にとって「何が決まっているか」だけでなく「どう決まっているか」が分かりやすい議会を目指します",
      "改革を通じて、市民の信頼に応える草加市議会の新しい姿を構築します",
    ],
  },
];

const comicPanels = [
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219155942/XEFRxZJNBT75VbjhNX6aUa/comic_panel_1_5c8e34b9.png",
    caption: "1コマ目：市民の疑問",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219155942/XEFRxZJNBT75VbjhNX6aUa/comic_panel_2_73421045.png",
    caption: "2コマ目：人口連動型の提案",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219155942/XEFRxZJNBT75VbjhNX6aUa/comic_panel_3_550d252e.png",
    caption: "3コマ目：持ち時間制の導入",
  },
  {
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219155942/XEFRxZJNBT75VbjhNX6aUa/comic_panel_4_ae25db96.png",
    caption: "4コマ目：未来の議会",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">議</span>
            </div>
            <h1 className="text-xl font-bold text-slate-900">
              草加市議会改革ビジョン
            </h1>
          </div>
          <p className="text-sm text-slate-600">市民に開かれた議会へ</p>
        </div>
      </header>

      <main className="container py-12">
        {/* Hero Section with Comic */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              議会改革を4コマで理解しよう
            </h2>
            <p className="text-lg text-slate-600">
              市民に開かれた議会を目指す改革の内容を、わかりやすく紹介します
            </p>
          </div>

          {/* 4 Panel Comic */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {comicPanels.map((panel, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={panel.image}
                  alt={panel.caption}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 text-center">
                  <p className="text-sm font-semibold text-slate-700">
                    {panel.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="my-16 border-t-2 border-slate-200"></div>

        {/* Slide Viewer */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            {/* Slide Content */}
            <div className="min-h-96 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-12 flex flex-col justify-center">
              {currentSlideData.id === "title" ? (
                <div className="text-center">
                  <h2 className="text-5xl font-bold mb-6">
                    {currentSlideData.title}
                  </h2>
                  <p className="text-2xl text-red-400 font-semibold">
                    {currentSlideData.subtitle}
                  </p>
                </div>
              ) : (
                <div>
                  <h2 className="text-4xl font-bold mb-3">
                    {currentSlideData.title}
                  </h2>
                  <p className="text-xl text-red-400 font-semibold mb-8">
                    {currentSlideData.subtitle}
                  </p>
                  <ul className="space-y-4">
                    {currentSlideData.points?.map((point, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-lg leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="bg-slate-100 px-12 py-6 flex items-center justify-between">
              <button
                onClick={prevSlide}
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <ChevronLeft size={20} />
                <span>前へ</span>
              </button>

              <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-red-600 w-8"
                        : "bg-slate-400 hover:bg-slate-500"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <span>次へ</span>
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Slide Counter */}
            <div className="bg-white px-12 py-3 text-center text-slate-600 text-sm">
              スライド {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-red-50 to-slate-50 rounded-xl p-12 border border-red-200">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              改革の2つの柱
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  人口連動型の議員定数
                </h4>
                <p className="text-slate-700">
                  「人口1万人に対して議員1人」という分かりやすい基準を設定し、市民にとって理解しやすい議会を実現します。
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  全議員が平等に発言できる仕組み
                </h4>
                <p className="text-slate-700">
                  委員会に「持ち時間制」を導入し、全26議員が平等に意見を述べられる環境を整えます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="mt-16 text-center">
          <div className="bg-slate-900 text-white rounded-xl p-12">
            <h3 className="text-3xl font-bold mb-4">
              市民に開かれた議会へ
            </h3>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              草加市議会改革特別委員会では、市民の皆さんの信頼に応える、透明性が高く、誰もが参加しやすい議会の実現を目指しています。
            </p>
            <p className="text-sm text-slate-400">
              草加市議会改革特別委員会 | 2026年
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
