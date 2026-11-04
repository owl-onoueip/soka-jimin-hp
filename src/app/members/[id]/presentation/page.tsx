import { members } from "@/data/members";
import { notFound } from "next/navigation";
import PresentationClient from "./PresentationClient";

export async function generateStaticParams() {
  return members
    .filter((m) => m.presentation || (m.presentations && m.presentations.length > 0))
    .map((m) => ({ id: m.id }));
}

export default function PresentationPage({ params }: { params: { id: string } }) {
  const member = members.find((m) => m.id === params.id);
  if (!member) notFound();

  const allPresentations = member.presentations
    ? member.presentations
    : member.presentation
      ? [member.presentation]
      : [];

  if (allPresentations.length === 0) notFound();

  return <PresentationClient member={member} presentations={allPresentations} />;
}
