import NotesClient from "./Notes.client";
import SidebarNotes from "../@sidebar/SidebarNotes";

interface NotesPageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function NotesPage({ params }: NotesPageProps) {
  const { slug } = await params;
  const tag = slug?.[0] ?? "All";

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <SidebarNotes />
      <div style={{ flex: 1 }}>
        <NotesClient tag={tag} />
      </div>
    </div>
  );
}
