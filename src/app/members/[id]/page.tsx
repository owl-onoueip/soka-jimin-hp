import Link from "next/link";
import { ArrowLeft, MapPin, Award, Target, Briefcase } from "lucide-react";
import { members } from "@/data/members";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return members.map((member) => ({
    id: member.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const member = members.find((m) => m.id === params.id);
  if (!member) return { title: "議員が見つかりません" };
  
  return {
    title: `${member.name} | 草加自民・無所属の会議員団`,
    description: member.message,
  };
}

export default function MemberDetailPage({ params }: { params: { id: string } }) {
  const member = members.find((m) => m.id === params.id);
  
  if (!member) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 戻るリンク */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <Link
            href="/members"
            className="inline-flex items-center text-gray-600 hover:text-primary-500 transition-colors"
          >
            <ArrowLeft size={20} className="mr-1" />
            <span>議員一覧に戻る</span>
          </Link>
        </div>
      </div>

      {/* プロフィールヘッダー */}
      <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* 写真 */}
            <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center text-5xl font-bold">
              {member.name.charAt(0)}
            </div>
            
            {/* 基本情報 */}
            <div className="text-center md:text-left">
              {member.position && (
                <span className="inline-block bg-accent-500 text-white text-sm px-3 py-1 rounded mb-2">
                  {member.position}
                </span>
              )}
              <h1 className="text-3xl md:text-4xl font-bold">{member.name}</h1>
              <p className="text-lg opacity-90 mt-1">{member.nameKana}</p>
              <div className="flex items-center justify-center md:justify-start gap-4 mt-3">
                <span className="flex items-center gap-1">
                  <MapPin size={16} />
                  {member.area}担当
                </span>
                <span>{member.term}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* キャッチフレーズ */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6 text-center">
          <p className="text-xl md:text-2xl font-bold text-primary-500">
            「{member.catchphrase}」
          </p>
        </div>

        {/* メッセージ */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Award className="text-primary-500" size={24} />
            ごあいさつ
          </h2>
          <p className="text-gray-700 leading-relaxed">{member.message}</p>
        </div>

        {/* 政策 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Target className="text-primary-500" size={24} />
            重点政策
          </h2>
          <ul className="space-y-3">
            {member.policies.map((policy, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                <span className="text-gray-700">{policy}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 経歴 */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Briefcase className="text-primary-500" size={24} />
            主な経歴・役職
          </h2>
          <ul className="space-y-2">
            {member.career.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700">
                <span className="w-2 h-2 bg-primary-500 rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 後援会入会CTA */}
        <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-xl p-6 text-center">
          <h3 className="text-lg font-bold mb-2">
            {member.name}を応援してください
          </h3>
          <p className="mb-4 opacity-90 text-sm">
            後援会へのご入会をお待ちしています
          </p>
          <Link
            href="/support"
            className="inline-block bg-white text-accent-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            後援会に入会する
          </Link>
        </div>
      </div>
    </div>
  );
}
