import NoteDetailsClient from "./NotePreview.client.tsx";

interface PageProps {
  params: { id: string };
}

export default function NotePage({ params }: PageProps) {
  const { id } = params;
  return <NoteDetailsClient id={id} />;
}
