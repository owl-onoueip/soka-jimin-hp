"use client";

import { useEffect, useState } from "react";

export default function BrowserWarning() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const ua = navigator.userAgent;
        const chromeMatch = ua.match(/Chrome\/(\d+)/);
        const isOldChrome = chromeMatch && parseInt(chromeMatch[1]) <= 109;
        const isIE = ua.includes("Trident/") || ua.includes("MSIE ");
        if (isOldChrome || isIE) setShow(true);
    }, []);

    if (!show) return null;

    return (
        <div className="bg-yellow-50 border-b border-yellow-300 px-4 py-3 flex items-start gap-3">
            <span className="text-yellow-600 text-lg shrink-0">⚠️</span>
            <p className="text-yellow-800 text-sm font-bold leading-relaxed">
                お使いのブラウザは古いバージョンです。動作が正しく動かない場合があります。最新のChrome・Safari・Edgeでご覧いただくか、スマートフォンからのアクセスをお勧めします。
            </p>
        </div>
    );
}
