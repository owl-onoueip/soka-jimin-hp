"use client";

import Link from "next/link";
import { members } from "@/data/members";

export default function MembersSimple() {
    return (
        <div style={{ minHeight: "100vh", background: "#f3f4f6", padding: "24px 16px 80px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>

                {/* ヘッダー */}
                <div style={{ background: "#1e3a6e", borderRadius: 12, padding: "24px 20px", marginBottom: 24, textAlign: "center" }}>
                    <p style={{ color: "#fbbf24", fontSize: 12, fontWeight: 900, letterSpacing: "0.15em", margin: "0 0 8px" }}>OUR MEMBERS</p>
                    <h1 style={{ color: "#fff", fontSize: 28, fontWeight: 900, margin: "0 0 8px" }}>議員紹介</h1>
                    <p style={{ color: "#bfdbfe", fontSize: 14, margin: 0 }}>草加の未来を拓く、7名の情熱</p>
                </div>

                {/* 議員グリッド */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
                    {members.map((member) => (
                        <Link
                            key={member.id}
                            href={`/members/${member.id}`}
                            style={{ textDecoration: "none", color: "inherit", display: "block" }}
                        >
                            <div style={{
                                background: "#fff",
                                borderRadius: 12,
                                overflow: "hidden",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                                border: "1px solid #e5e7eb",
                            }}>
                                {/* 写真 */}
                                <div style={{ position: "relative", paddingTop: "125%", overflow: "hidden", background: "#e5e7eb" }}>
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                                    />
                                    {/* 地区バッジ */}
                                    <div style={{ position: "absolute", top: 10, left: 10, background: "rgba(255,255,255,0.92)", borderRadius: 6, padding: "3px 8px", fontSize: 11, fontWeight: 700, color: "#1e3a6e" }}>
                                        {member.area}
                                    </div>
                                    {/* 役職バッジ */}
                                    {member.position && (
                                        <div style={{ position: "absolute", top: 10, right: 10, background: "#fbbf24", borderRadius: 6, padding: "3px 8px", fontSize: 11, fontWeight: 700, color: "#fff" }}>
                                            {member.position}
                                        </div>
                                    )}
                                </div>

                                {/* 情報 */}
                                <div style={{ padding: "14px 14px 16px" }}>
                                    <p style={{ fontSize: 18, fontWeight: 900, color: "#1e3a6e", margin: "0 0 2px" }}>{member.name}</p>
                                    <p style={{ fontSize: 12, color: "#9ca3af", margin: "0 0 8px" }}>{member.nameKana}</p>
                                    <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.6, margin: "0 0 12px" }}>{member.catchphrase}</p>
                                    <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <span style={{ fontSize: 12, color: "#1e3a6e", fontWeight: 700 }}>詳細プロフィール</span>
                                        <span style={{ fontSize: 16, color: "#1e3a6e" }}>→</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* フッターメッセージ */}
                <div style={{ marginTop: 32, background: "#1e3a6e", borderRadius: 12, padding: "20px", textAlign: "center" }}>
                    <p style={{ color: "#fff", fontWeight: 900, fontSize: 16, margin: "0 0 8px" }}>草加自民党・無所属の会</p>
                    <p style={{ color: "#bfdbfe", fontSize: 13, margin: "0 0 16px" }}>7名の議員が草加市民の声を市政に届けます</p>
                    <Link
                        href="/support"
                        style={{ display: "inline-block", background: "#fbbf24", color: "#1e3a6e", fontWeight: 900, fontSize: 14, padding: "10px 24px", borderRadius: 8, textDecoration: "none" }}
                    >
                        会派を応援する
                    </Link>
                </div>
            </div>
        </div>
    );
}
