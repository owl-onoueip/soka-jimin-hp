import Link from "next/link";
import { ChevronRight, Users, FileText, CheckCircle2 } from "lucide-react";
import MemberCarousel from "@/components/MemberCarousel";

// お知らせデータ
const news = [
  { id: 1, date: "2025.12.01", title: "12月定例会が開会しました", category: "議会" },
  { id: 2, date: "2025.11.28", title: "市長へ令和8年度予算要望書を提出", category: "活動" },
  { id: 3, date: "2025.11.20", title: "地域防災訓練に参加しました", category: "活動" },
  { id: 4, date: "2025.11.15", title: "会派視察報告を掲載しました", category: "報告" },
];

// 実績データ
const achievements = [
  { number: "42", label: "要望実現件数", unit: "件" },
  { number: "128", label: "議会質問回数", unit: "回" },
  { number: "7", label: "所属議員数", unit: "名" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-12 md:py-20">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              草加の未来を、<br className="md:hidden" />
              <span className="text-accent-500">共に創る。</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              草加自民・無所属の会議員団
            </p>
            
            {/* 3つの約束 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
              {["安心・安全なまち", "子育てしやすいまち", "活力あるまち"].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <CheckCircle2 className="mx-auto mb-2 text-accent-500" size={28} />
                  <p className="font-bold">{item}</p>
                </div>
              ))}
            </div>

            {/* CTAボタン（モバイル用に大きく） */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/policy"
                className="btn-cta inline-flex items-center justify-center gap-2 text-lg"
              >
                <FileText size={20} />
                私たちの政策を見る
              </Link>
              <Link
                href="/members"
                className="btn-primary inline-flex items-center justify-center gap-2 text-lg bg-white/20 hover:bg-white/30"
              >
                <Users size={20} />
                議員を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 実績セクション */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            {achievements.map((item, i) => (
              <div key={i} className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-primary-500">
                  {item.number}
                  <span className="text-lg">{item.unit}</span>
                </div>
                <div className="text-sm text-gray-600 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お知らせセクション */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title">お知らせ</h2>
            <Link
              href="/news"
              className="text-primary-500 text-sm font-medium flex items-center"
            >
              一覧を見る
              <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="space-y-3">
            {news.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xs bg-primary-500 text-white px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-500 mb-1">{item.date}</p>
                    <p className="font-medium text-gray-800 truncate">{item.title}</p>
                  </div>
                  <ChevronRight className="text-gray-400 flex-shrink-0" size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 議員紹介セクション */}
      <section className="py-10 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title">議員紹介</h2>
            <Link
              href="/members"
              className="text-primary-500 text-sm font-medium flex items-center"
            >
              詳しく見る
              <ChevronRight size={16} />
            </Link>
          </div>

          {/* 自動スクロールカルーセル */}
          <MemberCarousel />
        </div>
      </section>

      {/* 後援会入会セクション */}
      <section className="py-12 bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            草加の未来を一緒に<br className="md:hidden" />つくりませんか？
          </h2>
          <p className="mb-6 opacity-90">
            後援会へのご入会をお待ちしています。<br />
            入会費は無料です。
          </p>
          <Link
            href="/support"
            className="inline-block bg-white text-accent-600 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            後援会について詳しく見る
          </Link>
        </div>
      </section>

      {/* 関連リンク */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title">関連リンク</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "草加市公式", url: "https://www.city.soka.saitama.jp/" },
              { name: "草加市議会", url: "https://www.city.soka.saitama.jp/cont/s1301/010/010/010/" },
              { name: "自由民主党", url: "https://www.jimin.jp/" },
              { name: "自民党埼玉県連", url: "https://www.jimin-saitama.net/" },
            ].map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-lg text-center text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
