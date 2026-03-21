import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 草加自民党・無所属の会",
  description: "草加自民党・無所属の会の個人情報の取り扱いについて定めています。",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-primary-900 -skew-y-3 origin-right transform translate-y-12 scale-110" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
            プライバシーポリシー
          </h1>
          <p className="text-blue-200 font-bold opacity-80">
            個人情報の取り扱いについて
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-8 relative z-10 max-w-3xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-10">

          <section className="space-y-3">
            <h2 className="text-lg font-black text-primary-900 border-l-4 border-accent-500 pl-4">
              1. 収集する情報
            </h2>
            <p className="text-gray-700 font-bold leading-relaxed text-sm">
              後援会入会お申し込みフォームにおいて、以下の情報をご提供いただく場合があります。
            </p>
            <ul className="space-y-1.5 ml-4">
              {["お名前（必須）", "メールアドレス（必須）", "お住まいの地区（任意）", "応援したい議員（任意）", "メッセージ・ご意見（任意）"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-300 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-black text-primary-900 border-l-4 border-accent-500 pl-4">
              2. 利用目的
            </h2>
            <p className="text-gray-700 font-bold leading-relaxed text-sm">
              収集した情報は、以下の目的にのみ使用します。
            </p>
            <ul className="space-y-1.5 ml-4">
              {[
                "後援会入会の受付・ご連絡",
                "会派の活動報告・議会情報のお届け",
                "市政報告会・懇談会等のご案内",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-300 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-black text-primary-900 border-l-4 border-accent-500 pl-4">
              3. 第三者への提供
            </h2>
            <p className="text-gray-700 font-bold leading-relaxed text-sm">
              ご提供いただいた個人情報は、法令に基づく場合を除き、第三者に提供・開示することはありません。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-black text-primary-900 border-l-4 border-accent-500 pl-4">
              4. 情報の管理
            </h2>
            <p className="text-gray-700 font-bold leading-relaxed text-sm">
              収集した情報は、適切なセキュリティ対策を講じたシステム上で管理し、不正アクセス・紛失・漏洩の防止に努めます。後援会活動の目的が達成された後、または会員からの退会申し出があった場合は、速やかに削除いたします。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-black text-primary-900 border-l-4 border-accent-500 pl-4">
              5. お問い合わせ
            </h2>
            <p className="text-gray-700 font-bold leading-relaxed text-sm">
              個人情報の開示・訂正・削除のご依頼、またはプライバシーポリシーに関するお問い合わせは、<a href="/contact" className="text-primary-600 underline underline-offset-4">お問い合わせフォーム</a>よりご連絡ください。
            </p>
          </section>

          <p className="text-xs text-gray-400 font-bold pt-4 border-t border-gray-100">
            草加自民党・無所属の会　制定：令和7年（2025年）
          </p>
        </div>
      </div>
    </div>
  );
}
