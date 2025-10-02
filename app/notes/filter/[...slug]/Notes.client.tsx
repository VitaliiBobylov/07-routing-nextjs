
"use client";

import { useState } from "react";
import { useNotes } from "@/lib/api";
import Link from "next/link";
import css from "./Notes.client.module.css";

interface Props { tag?: string }

export default function NotesClient({ tag }: Props) {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useNotes("", page, tag);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Could not load notes.</p>;
  if (!data || !data.notes.length) return <p>No notes found.</p>;

  return (
    <div>
      <ul className={css.list}>
        {data.notes.map(note => (
          <li key={note.id} className={css.item}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <small>Tag: {note.tag} | {new Date(note.createdAt).toLocaleDateString()}</small>
            <div><Link href={`/notes/${note.id}`}>Preview</Link></div>
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
