import type { Metadata } from "next";
import NewsPageClient from "./NewsPageClient";

export const metadata: Metadata = {
    title: "お知らせ | 草加自民党・無所属の会",
    description: "会派の最新の活動報告や、草加市政の重要情報をいち早くお届けします。",
    alternates: {
        canonical: "/news",
    },
};

export default function NewsPage() {
    return <NewsPageClient />;
}
