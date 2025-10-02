import NotesClient from "./Notes.client";

interface NotesPageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function NotesPage({ params }: NotesPageProps) {

  const { slug } = await params;
  const tag = slug?.[0] ?? "All";

  return <NotesClient tag={tag} />;
}
