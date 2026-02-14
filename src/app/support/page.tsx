import type { Metadata } from "next";
import SupportClient from "./SupportClient";

export const metadata: Metadata = {
  title: "後援会のご案内 | 草加自民党・無所属の会",
  description: "草加の未来を創る活動を、あなたの力で支えてください。入会費・年会費は一切無料です。",
};

export default function SupportPage() {
  return <SupportClient />;
}
