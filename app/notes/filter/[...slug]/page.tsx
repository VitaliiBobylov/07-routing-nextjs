import NotesClient from "./Notes.client";

interface PageProps {
  params: { slug?: string[] };
}

export default function NotesPage({ params }: PageProps) {
  const tag = params.slug?.[0];
  const tagForFetch = tag === "All" ? undefined : tag;

  return <NotesClient tag={tagForFetch} />;
}
