import SidebarNotes from "./@sidebar/SidebarNotes";

export default function NotesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex" }}>
      <SidebarNotes />
      <main style={{ flex: 1, padding: "1rem" }}>{children}</main>
    </div>
  );
}
