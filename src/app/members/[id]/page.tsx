import { members } from "@/data/members";
import { notFound } from "next/navigation";
import MemberDetailClient from "./MemberDetailClient";

export async function generateStaticParams() {
  return members.map((member) => ({
    id: member.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const member = members.find((m) => m.id === params.id);
  if (!member) return { title: "議員が見つかりません" };

  return {
    title: `${member.name} | 草加自民党・無所属の会`,
    description: member.message,
    alternates: {
      canonical: `/members/${params.id}`,
    },
  };
}

export default function MemberDetailPage({ params }: { params: { id: string } }) {
  const member = members.find((m) => m.id === params.id);

  if (!member) {
    notFound();
  }

  return <MemberDetailClient member={member} />;
}
