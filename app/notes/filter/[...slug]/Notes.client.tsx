'use client';

import { useState } from "react";
import { useNotes } from "../../../../lib/api";

interface NotesClientProps {
  tag?: string;
}

export default function NotesClient({ tag }: NotesClientProps) {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useNotes("", page, tag);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading notes.</p>;
  if (!data || !data.notes.length) return <p>No notes found.</p>;

  return (
    <div>
      <ul>
        {data.notes.map(note => (
          <li key={note.id} style={{ marginBottom: "1.5rem" }}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <small>
              Tag: {note.tag} | Created: {new Date(note.createdAt).toLocaleDateString()}
            </small>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "1rem" }}>
        {page > 1 && <button onClick={() => setPage(page - 1)}>Prev</button>}
        {page < data.totalPages && <button onClick={() => setPage(page + 1)}>Next</button>}
      </div>
    </div>
  );
}
