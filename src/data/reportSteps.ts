export interface ReportStep {
    id: string;
    title: string;
    description: string;
    highlight?: string;
    image?: string;
    avatarMessage?: string;
    stat?: {
        value: string;
        label: string;
    };
}

export const latestReportSteps: ReportStep[] = [
    {
        id: "context",
        title: "物価高騰対策の「遅れ」を懸念",
        description: "令和7年12月にプレミアム商品券事業が可決されましたが、発行は最短でも5月。これでは市民生活の危機に間に合いません。",
        highlight: "支援は「スピード」が命",
        image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=2070&auto=format&fit=crop",
        avatarMessage: "5月まで待てますか？私たちは「今」の支援が必要だと考えました。"
    },
    {
        id: "discovery",
        title: "11億円の未執行予算を発見",
        description: "国の交付金のうち、まだ使われていない約11億2,300万円が存在することが判明。これを眠らせておく手はありません。",
        highlight: "未執行額：約11億2,300万円",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
        avatarMessage: "この予算を使えば、もっと多くの市民を、もっと早く助けられます！",
        stat: {
            value: "1,123,000,000",
            label: "未執行となっている交付金"
        }
    },
    {
        id: "proposal",
        title: "「全世帯への給付」を緊急要望",
        description: "令和8年1月9日、山川市長へ要望書を提出。プレミアム商品券だけでなく、全世帯への現金給付による「即効性のある支援」を強く求めました。",
        highlight: "市長へ直談判",
        image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2070&auto=format&fit=crop",
        avatarMessage: "手続きが簡単で、誰一人取り残さない支援。それが私たちの提案です。"
    },
    {
        id: "future",
        title: "議会改革もリード",
        description: "「人口1万人につき議員1人」の定数目安や、本会議の一問一答方式導入など、市民に分かりやすい議会への改革も主導しています。",
        highlight: "自民党会派が提案",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
        avatarMessage: "身を切る改革も、議会の活性化も。私たちが先頭に立って進めます。"
    }
];
