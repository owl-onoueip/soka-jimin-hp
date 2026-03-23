"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "会派について" },
  { href: "/members", label: "議員紹介" },
  { href: "/policy", label: "政策・実績" },
  { href: "/news", label: "お知らせ" },
  { href: "/reports", label: "会派ニュース" },
  { href: "/contact", label: "お問い合わせ" },
  { href: "/support", label: "後援会" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary-900/95 backdrop-blur-md text-white sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* ロゴ */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-accent-500 group-hover:scale-105 transition-transform shrink-0">
              <img src="/images/ROGO49.gif" alt="草加自民党・無所属の会" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs opacity-70 font-medium tracking-wider">市議会会派</span>
              <span className="text-base md:text-lg font-bold leading-none">草加自民党・無所属の会</span>
            </div>
          </Link>

          {/* デスクトップナビ */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.slice(0, 7).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-bold hover:text-accent-500 transition-colors tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/support"
              className="bg-accent-500 hover:bg-accent-600 text-white px-5 py-2.5 rounded-full text-sm font-black transition-all shadow-md hover:shadow-lg"
            >
              ご支援はこちら
            </Link>
          </nav>

          {/* モバイルメニューボタン */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/support"
              className="bg-accent-500 text-white text-xs font-bold px-3 py-2 rounded-full shadow-md"
            >
              ご支援
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="メニュー"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>        </div>
      </div>

      {/* モバイルナビ */}
      {isOpen && (
        <nav className="lg:hidden bg-primary-900 border-t border-white/5 animate-fade-in">
          <div className="container mx-auto px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-base font-bold hover:bg-white/10 rounded-xl transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
