"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Bus, Heart, Building2, Users, FileText, ChevronRight } from "lucide-react";

// 議会での提案・実現実績
const achievements = [
    {
        no: "01",
        emoji: "🍱",
        title: "学校給食費補助金の復活",
        detail: "令和7年度当初予算で削除されていた学校給食費補助金134,926千円を、会派の強い申し入れにより補正予算として提出・全会一致で可決。保護者の負担軽減を実現。",
        tag: "子育て・教育",
        tagColor: "bg-green-500",
        cardColor: "bg-green-50 border-l-4 border-green-400",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
    },
    {
        no: "02",
        emoji: "🏫",
        title: "学校配当予算の増額",
        detail: "各学校の主体的な学校経営を支える学校配当予算27,358千円の増額補正を実現。消耗品購入や修繕など、現場の裁量で使える予算を確保。",
        tag: "子育て・教育",
        tagColor: "bg-green-500",
        cardColor: "bg-green-50 border-l-4 border-green-400",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
    },
    {
        no: "03",
        emoji: "🏛️",
        title: "議会改革特別委員会の設置",
        detail: "会派が以前より提案していた「議会改革特別委員会」が設置され、会派メンバーの小川としや議員が委員長に就任。議員定数・報酬・政務活動費など7項目を審議中。",
        tag: "議会改革",
        tagColor: "bg-blue-600",
        cardColor: "bg-blue-50 border-l-4 border-blue-400",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
    },
    {
        no: "04",
        emoji: "🎤",
        title: "代表質問・一問一答方式の導入",
        detail: "会派の提案により、令和8年2月定例会から代表質問に一問一答方式を導入。質問時間は往復60分＋会派人数×10分とし、市民に分かりやすい議会運営を実現。",
        tag: "議会改革",
        tagColor: "bg-blue-600",
        cardColor: "bg-blue-50 border-l-4 border-blue-400",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
    },
    {
        no: "05",
        emoji: "📺",
        title: "議会動画の配信期間延長",
        detail: "議会動画の配信期間を従来の約1年から約4年へ延長することを提案・決定。より多くの市民が議会の様子を確認できる環境を整備。",
        tag: "情報公開",
        tagColor: "bg-purple-500",
        cardColor: "bg-purple-50 border-l-4 border-purple-400",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
    },
    {
        no: "06",
        emoji: "🔍",
        title: "不透明な財産貸付の取り下げ",
        detail: "本庁舎1階売店の減額貸付（月4.5万円/実勢価格の約6分の1）について、公平性・透明性の問題を指摘。議会で追及した結果、第35号議案の取り下げに至る。",
        tag: "財政・透明性",
        tagColor: "bg-orange-500",
        cardColor: "bg-orange-50 border-l-4 border-orange-400",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600",
    },
];

// 要望書
const demands = [
    {
        date: "令和8年1月9日",
        title: "物価高騰対応交付金の全世帯給付型支援への活用要望",
        to: "草加市長 山川百合子様",
        summary: "国の臨時交付金（草加市分1,650,789千円）を、スピード感をもって全世帯への給付型支援として活用するよう要望。プレミアム商品券では最短5月発行と遅く、未執行の約11億円の早期活用を求めた。",
    },
    {
        date: "令和4年12月15日",
        title: "令和5年度施策に対する要望書（5部門24項目）",
        to: "草加市長 山川百合子様",
        summary: "交通利便性・市民生活・まちづくり・子育て支援・行政組織の5部門、24項目にわたる要望書を提出。令和5年2月定例会にて代表質問を実施。",
    },
];

// 政策5分野
const policies = [
    {
        icon: Bus,
        emoji: "🚌",
        cardBg: "bg-gradient-to-br from-blue-50 to-sky-50",
        borderColor: "border-t-4 border-blue-400",
        iconBg: "bg-blue-500",
        titleColor: "text-blue-800",
        chevronColor: "text-blue-400",
        title: "交通利便性の強化",
        items: [
            "交通空白地の解消と交通インフラ不均衡の是正",
            "バス路線の東川口駅・レイクタウン駅までの延伸",
            "地下鉄8号線・舎人ライナー延伸の積極的な誘致",
        ],
    },
    {
        icon: Heart,
        emoji: "🏥",
        cardBg: "bg-gradient-to-br from-red-50 to-pink-50",
        borderColor: "border-t-4 border-red-400",
        iconBg: "bg-red-500",
        titleColor: "text-red-800",
        chevronColor: "text-red-400",
        title: "快適な市民生活の実現",
        items: [
            "認知症予防・健康づくり施策の充実",
            "地域包括支援センターの機能強化",
            "草加市立病院の救急救命体制の強化",
            "市内における救急救命体制の強化",
        ],
    },
    {
        icon: Building2,
        emoji: "🏘️",
        cardBg: "bg-gradient-to-br from-orange-50 to-amber-50",
        borderColor: "border-t-4 border-orange-400",
        iconBg: "bg-orange-500",
        titleColor: "text-orange-800",
        chevronColor: "text-orange-400",
        title: "現実に即したまちづくり",
        items: [
            "新田駅西口・西部区画整理事業の早期完成",
            "歩道のない市道の安全対策の徹底",
            "柿木・青柳エリアグランドデザインの推進",
            "老朽化施設・学校施設の更新計画策定",
        ],
    },
    {
        icon: Users,
        emoji: "👶",
        cardBg: "bg-gradient-to-br from-green-50 to-emerald-50",
        borderColor: "border-t-4 border-green-400",
        iconBg: "bg-green-500",
        titleColor: "text-green-800",
        chevronColor: "text-green-400",
        title: "子育て支援の充実",
        items: [
            "草加市立病院の産科の早期再開",
            "草加市独自の不妊治療支援制度の創設",
            "保育機能の充実と待機児童対策",
            "18歳までの医療費無償化の検討",
        ],
    },
    {
        icon: TrendingUp,
        emoji: "⚙️",
        cardBg: "bg-gradient-to-br from-purple-50 to-violet-50",
        borderColor: "border-t-4 border-purple-400",
        iconBg: "bg-purple-500",
        titleColor: "text-purple-800",
        chevronColor: "text-purple-400",
        title: "行政組織の再編成",
        items: [
            "女性職員の部課長への積極的な登用",
            "職場環境改善と働き方改革の推進",
            "IT技能を持つ職員の積極的な確保",
            "事業総点検による財政の健全化",
        ],
    },
];

export default function PolicyPage() {
    return (
        <div className="min-h-screen bg-gray-50/50 pb-20">
            {/* ページヘッダー */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary-900 -skew-y-3 origin-right transform translate-y-12 scale-110" />
                <div className="relative container mx-auto px-4 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="inline-block px-4 py-1.5 rounded-full bg-accent-500/20 backdrop-blur-md border border-accent-500/30 text-accent-500 text-sm font-black mb-6 uppercase tracking-widest shadow-lg">
                            Policy &amp; Achievements
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
                            政策・実績
                        </h1>
                        <p className="text-lg md:text-xl text-blue-200 font-bold opacity-80 max-w-2xl mx-auto leading-relaxed">
                            草加市の今と未来を見据え、<br className="hidden md:block" />
                            着実な政策提言と実行力で市民の声を市政に届けます。
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-10 relative z-10 max-w-5xl space-y-16">

                {/* 議会での実績 */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-black text-primary-900 mb-2">議会での提案・実現実績</h2>
                        <div className="w-16 h-1.5 bg-accent-500 rounded-full" />
                    </motion.div>

                    <div className="space-y-4">
                        {achievements.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                className={`rounded-2xl p-6 md:p-8 shadow-sm ${item.cardColor}`}
                            >
                                <div className="flex gap-5 items-start">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-2xl shadow-sm ${item.iconBg}`}>
                                        {item.emoji}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <span className={`text-[10px] font-black text-white px-2.5 py-1 rounded-full ${item.tagColor}`}>
                                                {item.tag}
                                            </span>
                                            <span className="text-xs font-black text-gray-400 uppercase tracking-widest">
                                                Achievement {item.no}
                                            </span>
                                        </div>
                                        <h3 className={`text-lg font-black mb-2 ${item.iconColor}`}>{item.title}</h3>
                                        <p className="text-sm text-gray-700 font-bold leading-relaxed">{item.detail}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 要望書提出実績 */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-black text-primary-900 mb-2">要望書提出実績</h2>
                        <div className="w-16 h-1.5 bg-accent-500 rounded-full" />
                    </motion.div>

                    <div className="space-y-5">
                        {demands.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="rounded-2xl p-6 md:p-8 shadow-sm bg-amber-50 border-l-4 border-amber-400"
                            >
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0 text-2xl">
                                        📄
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-amber-700 mb-1">{item.date}　{item.to}</p>
                                        <h3 className="text-base md:text-lg font-black text-amber-900 mb-2">{item.title}</h3>
                                        <p className="text-sm text-gray-700 font-bold leading-relaxed">{item.summary}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 政策5分野 */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-black text-primary-900 mb-2">会派の政策5分野</h2>
                        <div className="w-16 h-1.5 bg-accent-500 rounded-full" />
                        <p className="text-sm text-gray-500 font-bold mt-3">令和5年度要望書（24項目）をもとにまとめた重点政策分野</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {policies.map((policy, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className={`rounded-2xl p-7 shadow-sm h-full ${policy.cardBg} ${policy.borderColor}`}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-2xl shadow-md ${policy.iconBg}`}>
                                    {policy.emoji}
                                </div>
                                <h3 className={`text-lg font-black mb-4 ${policy.titleColor}`}>{policy.title}</h3>
                                <ul className="space-y-3">
                                    {policy.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-2.5 text-sm text-gray-700 font-bold">
                                            <ChevronRight size={16} className={`mt-0.5 shrink-0 ${policy.chevronColor}`} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
