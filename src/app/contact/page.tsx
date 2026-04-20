import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
    title: "お問い合わせ | 草加自民党・無所属の会",
    description: "市政へのご意見や、会派へのご質問など、お気軽にお問い合わせください。",
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}
