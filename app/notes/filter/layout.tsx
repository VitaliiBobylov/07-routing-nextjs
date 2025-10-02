
import SidebarNotes from "../filter/@sidebar/SidebarNotes";

export default function NotesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <SidebarNotes />
      <main style={{ flex: 1, padding: "1rem" }}>{children}</main>
    </div>
  );
}
