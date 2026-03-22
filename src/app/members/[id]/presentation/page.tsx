import { members } from "@/data/members";
import { notFound } from "next/navigation";
import PresentationClient from "./PresentationClient";

export async function generateStaticParams() {
  return members
    .filter((m) => m.presentation)
    .map((m) => ({ id: m.id }));
}

export default function PresentationPage({ params }: { params: { id: string } }) {
  const member = members.find((m) => m.id === params.id);
  if (!member || !member.presentation) notFound();
  return <PresentationClient member={member} />;
}
