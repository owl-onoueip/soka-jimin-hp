import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import FixedCTA from "@/components/FixedCTA";

export const metadata: Metadata = {
  title: "草加自民・無所属の会議員団 | 公式サイト",
  description: "草加市議会 草加自民・無所属の会議員団の公式ホームページです。草加市の未来を共に創る7人の議員が、市民の皆様の声を市政に届けます。",
  keywords: "草加市, 市議会, 自民党, 議員, 選挙, 政策",
  openGraph: {
    title: "草加自民・無所属の会議員団",
    description: "草加市の未来を共に創る",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-gray-50">
        <Header />
        <main className="pb-safe">
          {children}
        </main>
        <FixedCTA />
      </body>
    </html>
  );
}
