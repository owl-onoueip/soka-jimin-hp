"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

// 古いブラウザにはframer-motionを読み込まない（クラッシュ防止）
const MembersClient = dynamic(() => import("./MembersClient"), { ssr: false });

function isOldBrowser(): boolean {
    if (typeof navigator === "undefined") return false;
    const ua = navigator.userAgent;
    const match = ua.match(/Chrome\/(\d+)/);
    const isOldChrome = !!(match && parseInt(match[1]) <= 109);
    const isIE = ua.indexOf("Trident/") !== -1 || ua.indexOf("MSIE ") !== -1;
    return isOldChrome || isIE;
}

export default function MembersPageWrapper() {
    useEffect(() => {
        if (isOldBrowser()) {
            window.location.replace("/members-simple.html");
        }
    }, []);

    // 古いブラウザの場合はMembersClientを描画しない（framer-motion読み込み防止）
    if (typeof navigator !== "undefined" && isOldBrowser()) return null;

    return <MembersClient />;
}
