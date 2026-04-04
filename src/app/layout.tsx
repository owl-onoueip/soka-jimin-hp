import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import FixedCTA from "@/components/FixedCTA";
import BrowserWarning from "@/components/BrowserWarning";

export const metadata: Metadata = {
  title: "草加自民党・無所属の会 | 公式サイト",
  description: "草加市議会 草加自民党・無所属の会の公式ホームページです。草加市の未来を共に創る7人の議員が、市民の皆様の声を市政に届けます。",
  keywords: "草加市, 市議会, 自民党, 議員, 選挙, 政策",
  alternates: {
    canonical: "https://soka-jsg.com",
  },
  openGraph: {
    title: "草加自民党・無所属の会",
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
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var ua = navigator.userAgent;
            var chromeMatch = ua.match(/Chrome\\/(\\d+)/);
            var isOldChrome = chromeMatch && parseInt(chromeMatch[1]) <= 109;
            var isIE = ua.indexOf('Trident/') !== -1 || ua.indexOf('MSIE ') !== -1;
            if (isOldChrome || isIE) {
              var path = window.location.pathname;
              if (path.indexOf('/members') === 0) {
                var idMatch = path.match(/\/members\/(\d+)/);
                if (idMatch) {
                  window.location.replace('/member-' + idMatch[1] + '.html');
                } else {
                  window.location.replace('/members-simple.html');
                }
              } else {
                document.write('<div style="background:#fefce8;border-bottom:1px solid #fde047;padding:12px 16px;display:flex;align-items:flex-start;gap:8px;font-family:sans-serif;"><span style="color:#ca8a04;font-size:18px;flex-shrink:0;">⚠️</span><p style="color:#854d0e;font-size:14px;font-weight:bold;margin:0;line-height:1.6;">お使いのブラウザは古いバージョンです。正しく表示されない場合があります。最新のChrome・Edge・Safariか、スマートフォンでのご利用をお勧めします。</p></div>');
              }
            }
          })();
        ` }} />
      </head>
      <body className="min-h-screen bg-gray-50">
        <Header />
        <BrowserWarning />
        <main className="pb-safe">
          {children}
        </main>
        <FixedCTA />
      </body>
    </html>
  );
}
