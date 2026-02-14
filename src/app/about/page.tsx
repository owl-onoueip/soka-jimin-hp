"use client";

import { motion } from "framer-motion";
import { Users, Target, ShieldCheck, Heart } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50/50 pb-20">
            {/* ページヘッダー */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary-900 -skew-y-3 origin-right transform translate-y-12 scale-110" />
                <div className="relative container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-accent-500/20 backdrop-blur-md border border-accent-500/30 text-accent-500 text-sm font-black mb-6 uppercase tracking-widest shadow-lg">
                            Our Vision
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
                            会派について
                        </h1>
                        <p className="text-lg md:text-xl text-blue-200 font-bold opacity-80 max-w-2xl mx-auto leading-relaxed">
                            草加自民党・無所属の会は、<br className="hidden md:block" />
                            市民お一人おひとりの声を大切に、草加の未来を切り拓きます。
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-10 relative z-10 space-y-12">
                {/* 会派の理念 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="card p-10 md:p-16 border-none shadow-sm"
                >
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="section-title text-3xl font-black mb-10">私たちの理念</h2>
                        <p className="text-xl text-gray-700 leading-loose font-medium mb-12">
                            「草加に住んでよかった」と心から思える街へ。<br />
                            私たちは、自由民主党の精神である「自由と民主主義」を基軸に、<br className="hidden md:block" />
                            無所属議員の柔軟な視点を融合させ、草加市の発展に全力で取り組みます。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-gray-50 text-center hover:bg-white hover:shadow-xl transition-all group">
                            <ShieldCheck className="mx-auto text-accent-500 mb-6 group-hover:scale-110 transition-transform" size={48} />
                            <h3 className="text-xl font-black mb-4">安心・安全の追求</h3>
                            <p className="text-sm text-gray-500 font-bold leading-relaxed">
                                防災体制の強化と、犯罪のない街づくりを推進し、市民の命と暮らしを守ります。
                            </p>
                        </div>
                        <div className="p-8 rounded-3xl bg-gray-50 text-center hover:bg-white hover:shadow-xl transition-all group">
                            <Heart className="mx-auto text-accent-500 mb-6 group-hover:scale-110 transition-transform" size={48} />
                            <h3 className="text-xl font-black mb-4">子育て・福祉の充実</h3>
                            <p className="text-sm text-gray-500 font-bold leading-relaxed">
                                次世代を担う子供たちの育成環境と、高齢者が安心して暮らせる仕組みを構築します。
                            </p>
                        </div>
                        <div className="p-8 rounded-3xl bg-gray-50 text-center hover:bg-white hover:shadow-xl transition-all group">
                            <Target className="mx-auto text-accent-500 mb-6 group-hover:scale-110 transition-transform" size={48} />
                            <h3 className="text-xl font-black mb-4">持続可能な経済</h3>
                            <p className="text-sm text-gray-500 font-bold leading-relaxed">
                                地場産業の活性化と、効率的な財政運営により、草加市の未来への基盤を築きます。
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
