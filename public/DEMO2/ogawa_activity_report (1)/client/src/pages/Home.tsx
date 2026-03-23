import { Heart, Users, Clock, Vote, Shield, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">小</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">小川敏也</h1>
              <p className="text-sm text-slate-600">草加市議会議員 7期目</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                市民に開かれた、<br className="hidden md:block" />分かりやすい議会へ
              </h2>
              <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed">
                議会改革特別委員会 委員長として、より良い草加市の未来を切り拓く
              </p>
              <div className="flex gap-3">
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-900 px-4 py-2 rounded-full text-sm font-semibold">
                  <CheckCircle size={16} />
                  議会改革進行中
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gratitude Section */}
        <section className="py-16 md:py-20 bg-white border-t border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <Heart className="w-12 h-12 text-orange-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">皆様のご支援に感謝いたします</h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>4年前の選挙での多大なるご支援に、心より感謝申し上げます。本日まで多くの皆様に支えられ、活動を続けてこられました。</p>
                  <p>地域の皆様の声に耳を傾け、市政に届ける使命を全うしてまいります。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Committee Activity Section */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <Users className="w-12 h-12 text-orange-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">議会改革特別委員会の活動</h3>
                <div className="space-y-3 text-slate-700">
                  <p className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <span>昨年3月19日の第1回開催から、現在まで計13回開催</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <span>議会のあり方を根本から見直し、より良い仕組みを構築中</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <span>委員長として、公平かつ活発な議論をリードしています</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reform Purpose Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12">なぜ「議会改革」が必要なのか</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">平等な発言機会の確保</h4>
                <p className="text-slate-700">各議員が委員会でしっかりと発言し、多様な意見を市政に反映させる環境作り</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">議員定数削減への対応</h4>
                <p className="text-slate-700">町会連合会からの要望を真摯に受け止め、時代に即した適正な定数を検討</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">市民に開かれた議会</h4>
                <p className="text-slate-700">活動を可視化し、市民にとって「分かりやすい議会」を構築する</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seat Count Plan Section */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">議員定数の適正化案</h3>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg border border-border">
                <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  明確で分かりやすい基準
                </h4>
                <div className="space-y-3 text-slate-700">
                  <p>「人口1万人に対して議員1人」という明確で分かりやすい基準を提案しています。</p>
                  <p>人口の増減に合わせて、定数が自然に変動する仕組みです。例えば、現在の草加市の人口が25万人なら25人、26万人になれば26人へ変わります。</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg border border-border">
                <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  持続可能な体制づくり
                </h4>
                <div className="space-y-3 text-slate-700">
                  <p>5年後、10年後を見据えた持続可能な議会体制の構築を目指しています。</p>
                  <p>現在、他の会派や議員からの同意形成に注力中です。粘り強く議論を重ね、市民の納得感を得られる結論を目指してまいります。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Time Limit System Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <Clock className="w-12 h-12 text-orange-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">委員会の活性化：持ち時間制の導入</h3>
                <div className="space-y-3 text-slate-700">
                  <p className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <span>特定の議員に偏らず、全員が平等に発言できる環境へ</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <span>限られた時間の中で、より深く、質の高い議論を展開</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <span>26名全員がそれぞれの役割を果たし、市政に貢献する仕組みを作ります</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Election Section */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <Vote className="w-12 h-12 text-orange-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">10月の選挙に向けて</h3>
                <div className="space-y-3 text-slate-700">
                  <p>本年10月には、草加市の未来を決める大切な選挙が控えています。</p>
                  <p>市民の皆様にしっかりと選んでいただける信頼される議会体制を整えます。これまでの実績とこれからのビジョンを正々堂々と訴えてまいります。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disaster Prevention Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <Shield className="w-12 h-12 text-orange-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">震災の教訓と防災への誓い</h3>
                <div className="space-y-4 text-slate-700">
                  <p>3月11日、東日本大震災から15年。犠牲になられた方々に哀悼の意を表します。</p>
                  <p>震災の教訓を風化させず、日々の活動に活かしていく決意です。市民の命と暮らしを守る「災害に強い街づくり」を最優先に取り組んでまいります。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">ご清聴ありがとうございました</h3>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              皆様と共に、より良い草加市の未来を切り拓いてまいります。<br />
              今後とも変わらぬご指導、ご鞭撻をよろしくお願い申し上げます。
            </p>
            <div className="border-t border-slate-700 pt-8 mt-8">
              <p className="text-lg font-semibold text-orange-400">草加市議会議員 小川敏也</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© 2026 小川敏也 議会活動報告. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
