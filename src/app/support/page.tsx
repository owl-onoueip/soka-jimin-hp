"use client";

import { useState } from "react";
import { CheckCircle2, Users, Heart, MessageCircle, Send } from "lucide-react";

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    kana: "",
    email: "",
    phone: "",
    address: "",
    area: "",
    message: "",
    supportMember: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 実際の実装ではここでAPIを呼び出す
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md">
          <CheckCircle2 className="mx-auto text-green-500 mb-4" size={64} />
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            お申し込みありがとうございます
          </h1>
          <p className="text-gray-600 mb-6">
            後援会入会のお申し込みを受け付けました。<br />
            担当者より追ってご連絡いたします。
          </p>
          <a
            href="/"
            className="btn-primary inline-block"
          >
            トップページへ戻る
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ページヘッダー */}
      <div className="bg-gradient-to-br from-accent-500 to-accent-600 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            後援会のご案内
          </h1>
          <p className="opacity-90">
            草加の未来を一緒につくりませんか？<br />
            入会費・年会費は無料です。
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* 後援会とは */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Users className="text-primary-500" />
            後援会とは
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            後援会は、草加自民・無所属の会議員団の政治活動を応援してくださる市民の皆様の会です。
            私たちの政策や活動に共感いただける方のご参加をお待ちしています。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <Heart className="mx-auto text-accent-500 mb-2" size={32} />
              <h3 className="font-bold text-gray-800">入会費無料</h3>
              <p className="text-sm text-gray-600">お金はかかりません</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <MessageCircle className="mx-auto text-accent-500 mb-2" size={32} />
              <h3 className="font-bold text-gray-800">最新情報をお届け</h3>
              <p className="text-sm text-gray-600">活動報告や議会情報</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <Users className="mx-auto text-accent-500 mb-2" size={32} />
              <h3 className="font-bold text-gray-800">イベントご招待</h3>
              <p className="text-sm text-gray-600">市政報告会など</p>
            </div>
          </div>
        </div>

        {/* 入会フォーム */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Send className="text-primary-500" />
            入会お申し込みフォーム
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* お名前 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                お名前 <span className="text-accent-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="草加 太郎"
              />
            </div>

            {/* フリガナ */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                フリガナ <span className="text-accent-500">*</span>
              </label>
              <input
                type="text"
                name="kana"
                required
                value={formData.kana}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="ソウカ タロウ"
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                メールアドレス <span className="text-accent-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="example@email.com"
              />
            </div>

            {/* 電話番号 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                電話番号
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="048-XXX-XXXX"
              />
            </div>

            {/* お住まいの地域 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                お住まいの地域 <span className="text-accent-500">*</span>
              </label>
              <select
                name="area"
                required
                value={formData.area}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">選択してください</option>
                <option value="新田地区">新田地区</option>
                <option value="中央地区">中央地区</option>
                <option value="谷塚地区">谷塚地区</option>
                <option value="松原地区">松原地区</option>
                <option value="新栄地区">新栄地区</option>
                <option value="草加地区">草加地区</option>
                <option value="柳島地区">柳島地区</option>
                <option value="その他">その他・市外</option>
              </select>
            </div>

            {/* 応援する議員 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                特に応援したい議員（任意）
              </label>
              <select
                name="supportMember"
                value={formData.supportMember}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">選択してください</option>
                <option value="shibano">芝野 勝利</option>
                <option value="shiraishi">白石 孝雄</option>
                <option value="tanaka">田中 宣光</option>
                <option value="ogawa">小川 としや</option>
                <option value="yabe">矢部 正平</option>
                <option value="kimura">木村 忠義</option>
                <option value="matsui">松井 優美子</option>
                <option value="all">会派全体を応援</option>
              </select>
            </div>

            {/* メッセージ */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                メッセージ・ご意見（任意）
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="ご意見やご要望がありましたらお書きください"
              />
            </div>

            {/* 同意事項 */}
            <div className="bg-gray-50 rounded-lg p-4">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  className="mt-1 w-5 h-5 text-primary-500 rounded focus:ring-primary-500"
                />
                <span className="text-sm text-gray-600">
                  <a href="/privacy" className="text-primary-500 underline">プライバシーポリシー</a>
                  に同意の上、入会を申し込みます。
                </span>
              </label>
            </div>

            {/* 送信ボタン */}
            <button
              type="submit"
              className="w-full btn-cta text-lg py-4"
            >
              入会を申し込む
            </button>
          </form>
        </div>

        {/* LINE登録案内 */}
        <div className="bg-[#06C755] text-white rounded-xl p-6 mt-8 text-center">
          <MessageCircle className="mx-auto mb-4" size={48} />
          <h3 className="text-xl font-bold mb-2">
            LINE公式アカウント
          </h3>
          <p className="mb-4 opacity-90">
            最新情報をLINEでもお届けしています
          </p>
          <a
            href="https://line.me/R/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#06C755] font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            LINEで友だち追加
          </a>
        </div>
      </div>
    </div>
  );
}
