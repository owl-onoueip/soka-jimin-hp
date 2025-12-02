import Link from "next/link";
import { MapPin, ChevronRight } from "lucide-react";
import { members } from "@/data/members";

export const metadata = {
  title: "議員紹介 | 草加自民・無所属の会議員団",
  description: "草加自民・無所属の会議員団所属の7名の議員をご紹介します。",
};

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ページヘッダー */}
      <div className="bg-primary-500 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold">議員紹介</h1>
          <p className="mt-2 opacity-90">7名の議員が草加市政に取り組んでいます</p>
        </div>
      </div>

      {/* 議員一覧 */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <Link
              key={member.id}
              href={`/members/${member.id}`}
              className="card group"
            >
              <div className="p-6">
                {/* 写真とバッジ */}
                <div className="relative mb-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-3xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  {member.position && (
                    <span className="absolute top-0 right-1/4 bg-accent-500 text-white text-xs px-2 py-1 rounded">
                      {member.position}
                    </span>
                  )}
                </div>

                {/* 名前 */}
                <div className="text-center mb-4">
                  <h2 className="text-xl font-bold text-gray-800">{member.name}</h2>
                  <p className="text-sm text-gray-500">{member.nameKana}</p>
                </div>

                {/* 担当地域 */}
                <div className="flex items-center justify-center gap-1 text-gray-600 mb-4">
                  <MapPin size={16} />
                  <span className="text-sm">{member.area}担当</span>
                </div>

                {/* キャッチフレーズ */}
                <p className="text-center text-primary-500 font-medium mb-4">
                  「{member.catchphrase}」
                </p>

                {/* 政策タグ */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.policies.slice(0, 3).map((policy, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      {policy}
                    </span>
                  ))}
                </div>

                {/* 詳細リンク */}
                <div className="flex items-center justify-center text-primary-500 group-hover:text-primary-600 transition-colors">
                  <span className="text-sm font-medium">詳しく見る</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 会派紹介バナー */}
      <div className="bg-primary-500 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            草加自民・無所属の会とは
          </h2>
          <p className="mb-6 opacity-90">
            私たちは「安心・安全」「子育て支援」「地域活性化」を<br className="hidden md:block" />
            3本柱として草加市政に取り組んでいます。
          </p>
          <Link
            href="/about"
            className="inline-block bg-white text-primary-500 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            会派について詳しく見る
          </Link>
        </div>
      </div>
    </div>
  );
}
