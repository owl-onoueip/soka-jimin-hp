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
}

export const members: Member[] = [
  {
    id: "shibano",
    name: "芝野 勝利",
    nameKana: "しばの かつとし",
    photo: "/images/members/shibano.jpg",
    photoAnime: "/images/members/shibano2.gif",
    area: "新田地区",
    term: "6期目",
    birthYear: "1960年",
    catchphrase: "目に見える活動を、草加のために。",
    message: "これまでの6期にわたる経験を活かし、草加市の発展に全力で取り組んでまいります。皆様のご支援・ご指導を賜りますようお願い申し上げます。",
    policies: ["行政改革の推進", "地域経済の活性化", "市民サービスの向上"],
    career: ["草加市議会議員（6期）", "百条委員会委員長", "総務文教委員会"],
    sns: {
      website: "http://shibano.info",
    }
  },
  {
    id: "shiraishi",
    name: "白石 孝雄",
    nameKana: "しらいし たかお",
    photo: "/images/members/shiraishi.jpg",
    photoAnime: "/images/members/shiraishi2.gif",
    area: "中央地区",
    position: "副代表",
    term: "3期目",
    birthYear: "1965年",
    catchphrase: "市民の「声なき声」を市政へ反映",
    message: "市民の皆様の小さな声に耳を傾け、それを大きく市政に反映させることが私の責任です。安心・安全な草加を目指します。",
    policies: ["4駅周辺への大規模保育施設設置", "市立病院の救急体制見直し", "電線地中化と防災対策強化", "包括支援センターの充実"],
    career: ["草加市議会議員（3期）", "建設環境委員会委員"],
  },
  {
    id: "tanaka",
    name: "田中 宣光",
    nameKana: "たなか のぶみつ",
    photo: "/images/members/TANAKA.jpg",
    photoAnime: "/images/members/tanaka2.gif",
    area: "谷塚地区",
    position: "会派代表",
    term: "3期目",
    birthYear: "1970年",
    catchphrase: "草加に Attack！ 課題解決に率先して行動",
    message: "「草加に Attack」をテーマに、地域の課題解決に向けて積極的に取り組んでいます。自治体の役割と議員の責任を全うします。",
    policies: ["防災・防犯対策の強化", "子育て環境の充実と女性活躍推進", "生涯現役！健康増進と地域活動支援", "市立病院の改革"],
    career: ["草加市議会議員（3期）", "文教委員会委員"],
  },
  {
    id: "ogawa",
    name: "小川 としや",
    nameKana: "おがわ としや",
    photo: "/images/members/ogawa.jpg",
    photoAnime: "/images/members/ogawa2.gif",
    area: "松原地区",
    term: "7期目",
    birthYear: "1967年",
    catchphrase: "夢を語り、行動し、実現します！",
    message: "草加を「選ばれる街」にするために。7期の経験を活かし、防災・教育・医療の基盤整備に全力で活動しています。",
    policies: ["選ばれる街・草加の実現", "教育・医療インフラの整備", "公共施設の充実と地域活性化"],
    career: ["草加市議会議員（7期）", "前草加市議会議長（令和4年-5年）", "総務文教委員会前委員長"],
  },
  {
    id: "yabe",
    name: "矢部 正平",
    nameKana: "やべ しょうへい",
    photo: "/images/members/YABE.jpg",
    photoAnime: "/images/members/yabe2.gif",
    area: "新栄地区",
    term: "2期目",
    birthYear: "1978年",
    catchphrase: "先進的な取り組みで、誰もが住みやすい草加を",
    message: "LGBTQパートナーシップ制度の実現など、多様性を認める社会づくりに取り組んでいます。デジタルと福祉の融合を目指します。",
    policies: ["LGBTQパートナーシップ制度の推進", "ゾーン30による交通安全確保", "防災士資格の補助制度実現", "学校給食の無料化提案"],
    career: ["草加市議会議員（2期）", "総務委員会委員", "情報政策審議会委員"],
  },
  {
    id: "kimura",
    name: "木村 忠義",
    nameKana: "きむら ただよし",
    photo: "/images/members/kimura.jpg",
    photoAnime: "/images/members/kimura2.gif",
    area: "草加地区",
    term: "4期目",
    birthYear: "1962年",
    catchphrase: "地域とともに歩む市政を",
    message: "町会・自治会活動との連携を大切にし、地域コミュニティの活性化に努めています。現場の声を大切にします。",
    policies: ["自治会支援の強化", "公園・緑地の整備推進", "伝統文化の継承と支援"],
    career: ["草加市議会議員（4期）", "市民生活委員会委員長", "町会連合会顧問"],
  },
  {
    id: "matsui",
    name: "松井 優美子",
    nameKana: "まつい ゆみこ",
    photo: "/images/members/matui.jpg",
    photoAnime: "/images/members/matui2.gif",
    area: "柳島地区",
    term: "3期目",
    birthYear: "1968年",
    catchphrase: "女性の視点で、やさしく力強い市政を",
    message: "福祉・医療・子育て支援。女性ならではの視点で市民に寄り添い、草加の未来を明るく照らします。",
    policies: ["女性活躍と子育て支援の強化", "医療・介護サービスの充実", "誰もが安心できる地域福祉"],
    career: ["草加市議会議員（3期）", "福祉子ども委員会委員長", "男女共同参画審議会委員"],
  },
];
