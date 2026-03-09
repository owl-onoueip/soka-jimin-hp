export interface Member {
  id: string;
  name: string;
  nameKana: string;
  photo: string;
  area: string;
  position?: string;
  term: string;
  birthYear: string;
  catchphrase: string;
  message: string;
  policies: string[];
  career: string[];
  sns?: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    website?: string;
  };
  photoAnime?: string; // 2巡目用のアニメ風画像
  videos?: {          // 埋め込み動画（YouTube/Vimeo等）
    title: string;
    url: string;      // iframe src用URL (例: https://player.vimeo.com/video/...)
  }[];
  reports?: {         // 個人活動報告（PDF）
    title: string;
    date: string;
    thumbnail: string;
    pdfUrl: string;
  }[];
}

export const members: Member[] = [
  {
    id: "1",
    name: "芝野 勝利",
    nameKana: "しばの かつとし",
    photo: "/images/members/shibano.jpg",
    photoAnime: "/images/members/shibano2.gif",
    area: "新田地区",
    term: "6期目",
    birthYear: "1960年",
    catchphrase: "目に見える活動を、草加のために。",
    message: `草加市の為にこれまでの経験を活かし、目に見える活動をしていきます。皆様のご支援・ご指導賜れれば幸いです。よろしくお願いいたします。`,
    policies: ["行政改革の推進", "地域経済の活性化", "市民サービスの向上"],
    career: ["草加市議会議員（6期）", "百条委員会委員長", "総務文教委員会"],
    sns: {
      website: "http://shibano.info",
    },
    videos: [
      {
        title: "芝野勝利 活動ビデオメッセージ",
        url: "https://player.vimeo.com/video/519515664?h=2ce58eb0b4" // ※ダミー動画枠
      }
    ],
    reports: [
      {
        title: "芝野勝利 Activity Report",
        date: "2023.10",
        thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2074&auto=format&fit=crop",
        pdfUrl: "/pdf/dummy_report.pdf" // ※ダミーPDF枠
      }
    ]
  },
  {
    id: "2",
    name: "白石 孝雄",
    nameKana: "しらいし たかお",
    photo: "/images/members/shiraishi.jpg",
    photoAnime: "/images/members/shiraishi2.gif",
    area: "中央地区",
    term: "3期目",
    birthYear: "1965年",
    catchphrase: "市民の「声なき声」を市政へ反映",
    message: `「市民の声なき声」にしっかりと耳を傾けて、大きく市政に反映させていくことこそが私の今後の歩みの中での責任であります。その責任を果たすために全力をつくしてまいります。`,
    policies: [
      "4駅周辺に大規模保育施設の設置",
      "保育ステーション設置",
      "保護者緊急時の一時預かりの利便性向上",
      "市立病院の救急体制の見直し",
      "産科医の充実",
      "避難所の見直しとルールの見直し",
      "電線地中化",
      "消防職員の増員",
      "包括支援センターの充実"
    ],
    career: ["草加市議会議員（3期）", "建設環境委員会委員"],
    sns: {
      website: "https://www.soka-jsg.com/shiraishipg"
    },
    videos: [
      {
        title: "白石孝雄 活動ビデオメッセージ",
        url: "https://player.vimeo.com/video/519515664?h=2ce58eb0b4" // ※ダミー動画枠
      }
    ],
    reports: [
      {
        title: "白石孝雄 Activity Report",
        date: "2023.10",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        pdfUrl: "/pdf/dummy_report.pdf" // ※ダミーPDF枠
      }
    ]
  },
  {
    id: "3",
    name: "田中 宣光",
    nameKana: "たなか のぶみつ",
    photo: "/images/members/TANAKA.jpg",
    photoAnime: "/images/members/tanaka2.gif",
    area: "谷塚地区",
    position: "団長",
    term: "3期目",
    birthYear: "1970年",
    catchphrase: "草加に Attack！ 課題解決に率先して行動",
    message: `課題解決に向けて、議員として質問や提案を行い、市民と共に考え、解決に取り組んでまいりました。今後も市民の声に耳を傾け、課題解決に向けて率先して行動してまいります。

課題解決に向けて積極的に取り組み、「草加に Attack」のテーマのもと、地域の課題解決に向けて努力してまいります。

市民サービスの提供において、自治体は独自の施策を考え、実現させる必要があります。議員として、その責任をしっかりと果たしてまいります。`,
    policies: [
      "課題解決への積極的な取り組み",
      "「草加に Attack」",
      "自治体の役割と議員の責任"
    ],
    career: ["草加市議会議員（3期）", "文教委員会委員"],
    sns: {
      website: "https://www.soka-jsg.com/tanakapg"
    },
    videos: [
      {
        title: "田中宣光 活動ビデオメッセージ",
        url: "https://player.vimeo.com/video/519515664?h=2ce58eb0b4" // ※ダミー動画枠
      }
    ],
    reports: [
      {
        title: "田中宣光 Activity Report",
        date: "2023.10",
        thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2074&auto=format&fit=crop",
        pdfUrl: "/pdf/dummy_report.pdf" // ※ダミーPDF枠
      }
    ]
  },
  {
    id: "4",
    name: "小川 としや",
    nameKana: "おがわ としや",
    photo: "/images/members/ogawa.jpg",
    photoAnime: "/images/members/ogawa2.gif",
    area: "松原地区",
    term: "7期目",
    birthYear: "1967年",
    catchphrase: "夢を語り、行動し、実現します！",
    message: `全ては次世代のために

今を知り、将来を見据え、未来に想いを馳せる ことが出来る、それがリーダーであると考えます。

今を知ることは、現状を理解し苦しみや悲しみを取り除くこと
将来を見据えることは、地域が生き残るために方向性を示すこと
未来に想いを馳せることは、次世代に残すものを真剣に探し出すこと

人口減少社会にあって、起こり得る様々な問題や課題を解決するには、政治だけではなく、危機意識を共有できる全ての人たちと、一緒に行動して結果を導いていきたいと考えます。`,
    policies: ["選ばれる街・草加の実現", "教育・医療インフラの整備", "公共施設の充実と地域活性化"],
    career: ["草加市議会議員（7期）", "前草加市議会議長（令和4年-5年）", "総務文教委員会前委員長"],
    sns: {
      website: "https://www.ogawa-team8.com/"
    },
    videos: [
      {
        title: "小川としや 活動ビデオメッセージ",
        url: "https://player.vimeo.com/video/519515664?h=2ce58eb0b4" // ※旧サイトにあるダミーVimeo想定
      }
    ],
    reports: [
      {
        title: "Activity Report 第20号",
        date: "2023.10",
        thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop", // 仮サムネイル
        pdfUrl: "/pdf/ogawa_report_20.pdf" // 実際には配置するPDFへのパス
      },
      {
        title: "Activity Report 第19号",
        date: "2023.04",
        thumbnail: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=2071&auto=format&fit=crop",
        pdfUrl: "/pdf/ogawa_report_19.pdf"
      }
    ]
  },
  {
    id: "5",
    name: "矢部 正平",
    nameKana: "やべ しょうへい",
    photo: "/images/members/YABE.jpg",
    photoAnime: "/images/members/yabe2.gif",
    area: "新栄地区",
    position: "会計",
    term: "2期目",
    birthYear: "1978年",
    catchphrase: "先進的な取り組みで、誰もが住みやすい草加を",
    message: `市民の皆さまに親しまれ、参画しやすい「開かれた議会」を目指し、誠心誠意、努力を重ねてまいります。今後とも、ご指導とご協力をお願い申し上げます。`,
    policies: [
      "子育て世帯の支援",
      "自治体間のサービス格差解消",
      "待機児童問題ゼロ",
      "高齢者の働き場の拡充",
      "18歳までの子供の通院費無料化",
      "地下鉄8号線計画推進 草加に駅誘致"
    ],
    career: ["草加市議会議員（2期）", "総務文教委員会(委員長)", "議会広報委員会(委員長)", "議会運営委員会"],
    sns: {
      website: "https://www.soka-jsg.com/yabepg"
    },
    videos: [
      {
        title: "矢部正平 活動ビデオメッセージ",
        url: "https://player.vimeo.com/video/519515664?h=2ce58eb0b4" // ※ダミー動画枠
      }
    ],
    reports: [
      {
        title: "矢部正平 Activity Report",
        date: "2023.10",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        pdfUrl: "/pdf/dummy_report.pdf" // ※ダミーPDF枠
      }
    ]
  },
  {
    id: "6",
    name: "木村 忠義",
    nameKana: "きむら ただよし",
    photo: "/images/members/kimura.jpg",
    photoAnime: "/images/members/kimura2.gif",
    area: "草加地区",
    position: "幹事長",
    term: "4期目",
    birthYear: "1962年",
    catchphrase: "地域とともに歩む市政を",
    message: `草加生まれ草加育ち「行動力・実行力」で郷土草加のために尽力します。 街を創るためには、「新たな文化を取り入れつつ、守りゆく物は守る」ことが大切です。 これからの時代を築く方々に未来への希望を繋げ、夢を描き実行する機会の構築を目指します。`,
    policies: [
      "安全・安心にいつまでも暮らせる街づくり",
      "教育の充実 子供に やさしい街づくり",
      "障害者・高齢者 にやさしい街づくり"
    ],
    career: ["草加市議会議員（1回）", "建設環境委員会委員", "議会運営委員会"],
    sns: {
      website: "https://soka-kimura.com/"
    },
    videos: [
      {
        title: "木村忠義 活動ビデオメッセージ",
        url: "https://player.vimeo.com/video/519515664?h=2ce58eb0b4" // ※ダミー動画枠
      }
    ],
    reports: [
      {
        title: "木村忠義 Activity Report",
        date: "2023.10",
        thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
        pdfUrl: "/pdf/dummy_report.pdf" // ※ダミーPDF枠
      }
    ]
  },
  {
    id: "7",
    name: "松井 優美子",
    nameKana: "まつい ゆみこ",
    photo: "/images/members/matui.jpg",
    photoAnime: "/images/members/matui2.gif",
    area: "柳島地区",
    term: "3期目",
    birthYear: "1968年",
    catchphrase: "女性の視点で、やさしく力強い市政を",
    message: `将来を見据えた草加市のあるべき姿に向けて、正直かつ実直に、日々の活動を行ってまいります。ご支援よろしくおねがいします。`,
    policies: [
      "単身高齢者の見守り・認知症予防",
      "出張介護講座による健康づくり",
      "孤独・孤立を防ぐ高齢者の居場所づくり",
      "市立病院を基幹とした市内医療体制の整備",
      "庁舎や公共施設のバリアフリー化",
      "親が亡くなった後も安心して暮らせる地域の整備",
      "女性や母親の目線での子育て支援の強化",
      "生活困窮による子どもへの影響原因解消の取り組み"
    ],
    career: ["草加市議会議員（7回）", "福祉子ども委員会委員", "議会運営委員会委員"],
    sns: {
      website: "https://www.soka-jsg.com/matuipg"
    },
    videos: [
      {
        title: "松井優美子 活動ビデオメッセージ",
        url: "https://player.vimeo.com/video/519515664?h=2ce58eb0b4" // ※ダミー動画枠
      }
    ],
    reports: [
      {
        title: "松井優美子 Activity Report",
        date: "2023.10",
        thumbnail: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=2071&auto=format&fit=crop",
        pdfUrl: "/pdf/dummy_report.pdf" // ※ダミーPDF枠
      }
    ]
  },
];
