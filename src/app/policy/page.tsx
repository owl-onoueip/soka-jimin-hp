import type { Metadata } from "next";
import PolicyPageClient from "./PolicyPageClient";

export const metadata: Metadata = {
    title: "政策・実績 | 草加自民党・無所属の会",
    description: "草加市の未来を見据えた提言と、これまでの議会での提案・実現実績についてご紹介します。",
    alternates: {
        canonical: "/policy",
    },
};

export default function PolicyPage() {
    return <PolicyPageClient />;
}
