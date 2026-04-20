import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "草加自民党・無所属の会 | 公式サイト",
  description: "草加市議会 草加自民党・無所属の会の公式ホームページです。草加市の未来を共に創る7人の議員が、市民の皆様の声を市政に届けます。",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeClient />;
}
