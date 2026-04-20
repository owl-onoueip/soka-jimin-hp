import type { Metadata } from "next";
import ReportsPageClient from "./ReportsPageClient";

export const metadata: Metadata = {
    title: "会派ニュース | 草加自民党・無所属の会",
    description: "草加自民党・無所属の会が発行する会派ニュースのバックナンバーをご覧いただけます。",
    alternates: {
        canonical: "/reports",
    },
};

export default function ReportsPage() {
    return <ReportsPageClient />;
}
