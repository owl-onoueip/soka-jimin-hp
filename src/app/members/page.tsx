import type { Metadata } from "next";
import MembersPageWrapper from "./MembersPageWrapper";

export const metadata: Metadata = {
  title: "議員紹介 | 草加自民党・無所属の会",
  description: "草加自民党・無所属の会所属の7名の議員をご紹介します。",
  alternates: {
    canonical: "/members",
  },
};

export default function MembersPage() {
  return <MembersPageWrapper />;
}
