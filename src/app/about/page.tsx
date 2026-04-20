import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
    title: "会派について | 草加自民党・無所属の会",
    description: "草加自民党・無所属の会の理念、3つの柱、および所属議員の役職等についてご紹介します。",
    alternates: {
        canonical: "/about",
    },
};

export default function AboutPage() {
    return <AboutPageClient />;
}
