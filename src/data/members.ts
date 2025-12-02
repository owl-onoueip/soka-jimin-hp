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
}

export const members: Member[] = [
  {
    id: "shibano",
    name: "芝野 勝利",
    nameKana: "しばの かつとし",
    photo: "/images/members/shibano.jpg",
    area: "新田地区",
    position: "幹事長",
    term: "5期目",
    birthYear: "1960年",
    catchphrase: "市民の声を市政へ",
    message: "長年の経験を活かし、草加市の発展に全力で取り組んでまいります。皆様の声をしっかりと受け止め、住みやすいまちづくりを進めます。",
    policies: ["子育て支援の充実", "高齢者福祉の向上", "地域経済の活性化"],
    career: ["草加市議会議長", "総務文教委員会委員長", "自民党草加支部長"],
  },
  {
    id: "shiraishi",
    name: "白石 孝雄",
    nameKana: "しらいし たかお",
    photo: "/images/members/shiraishi.jpg",
    area: "中央地区",
    term: "4期目",
    birthYear: "1965年",
    catchphrase: "安心・安全なまちづくり",
    message: "防災・防犯に力を入れ、市民の皆様が安心して暮らせるまちづくりに取り組んでいます。",
    policies: ["防災対策の強化", "防犯カメラの設置推進", "道路インフラの整備"],
    career: ["建設環境委員会委員長", "防災会議委員"],
  },
  {
    id: "tanaka",
    name: "田中 宣光",
    nameKana: "たなか のぶみつ",
    photo: "/images/members/tanaka.jpg",
    area: "谷塚地区",
    term: "3期目",
    birthYear: "1970年",
    catchphrase: "子どもたちの未来のために",
    message: "教育環境の充実に注力し、草加の子どもたちが夢を持って成長できる環境を整備します。",
    policies: ["学校施設の改善", "教育支援の拡充", "スポーツ振興"],
    career: ["文教委員会委員", "青少年問題協議会委員"],
  },
  {
    id: "ogawa",
    name: "小川 としや",
    nameKana: "おがわ としや",
    photo: "/images/members/ogawa.jpg",
    area: "松原地区",
    term: "2期目",
    birthYear: "1975年",
    catchphrase: "働く世代の声を市政へ",
    message: "子育てと仕事の両立支援、働きやすい環境づくりに取り組んでいます。現役世代の視点で草加を元気にします。",
    policies: ["保育所の整備", "ワークライフバランス推進", "商店街活性化"],
    career: ["福祉子ども委員会委員", "商工振興審議会委員"],
  },
  {
    id: "yabe",
    name: "矢部 正平",
    nameKana: "やべ しょうへい",
    photo: "/images/members/yabe.jpg",
    area: "新栄地区",
    term: "2期目",
    birthYear: "1978年",
    catchphrase: "若い力で草加を変える",
    message: "デジタル化の推進や新しい行政サービスの導入など、時代に合った市政改革に挑戦しています。",
    policies: ["DX推進", "行政手続きのオンライン化", "若者の政治参加促進"],
    career: ["総務委員会委員", "情報政策審議会委員"],
  },
  {
    id: "kimura",
    name: "木村 忠義",
    nameKana: "きむら ただよし",
    photo: "/images/members/kimura.jpg",
    area: "草加地区",
    term: "4期目",
    birthYear: "1962年",
    catchphrase: "地域とともに歩む",
    message: "町会・自治会活動との連携を大切にし、地域コミュニティの活性化に努めています。",
    policies: ["自治会支援", "公園・緑地の整備", "伝統文化の継承"],
    career: ["市民生活委員会委員長", "町会連合会顧問"],
  },
  {
    id: "matsui",
    name: "松井 優美子",
    nameKana: "まつい ゆみこ",
    photo: "/images/members/matsui.jpg",
    area: "柳島地区",
    term: "3期目",
    birthYear: "1968年",
    catchphrase: "女性の視点でやさしい市政を",
    message: "福祉・医療・子育て支援など、女性ならではの視点で市民に寄り添った政策を推進しています。",
    policies: ["女性活躍推進", "医療・介護の充実", "子育て支援の強化"],
    career: ["福祉子ども委員会委員長", "男女共同参画審議会委員"],
  },
];
