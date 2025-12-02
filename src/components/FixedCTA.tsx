"use client";

import { MessageCircle, Users } from "lucide-react";

export default function FixedCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 safe-area-pb">
      <div className="container mx-auto px-4 py-3">
        <div className="flex gap-3">
          {/* LINE登録ボタン */}
          <a
            href="https://line.me/R/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-line flex items-center justify-center gap-2 py-4 text-base"
          >
            <MessageCircle size={20} />
            <span>LINE登録</span>
          </a>
          
          {/* 後援会入会ボタン */}
          <a
            href="/support"
            className="flex-1 btn-cta flex items-center justify-center gap-2 py-4 text-base"
          >
            <Users size={20} />
            <span>後援会入会</span>
          </a>
        </div>
      </div>
      
      {/* Safe area for iPhone */}
      <div className="h-[env(safe-area-inset-bottom)] bg-white" />
    </div>
  );
}
