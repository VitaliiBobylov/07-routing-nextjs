"use client";

import { useState, useEffect } from "react";
import { useNotes, useCreateNote } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";
import Pagination from "@/components/Pagination/Pagination";
import SearchBox from "@/components/SearchBox/SearchBox";
import NoteForm from "@/components/NoteForm/NoteForm";

interface NotesClientProps {
  tag?: string;
}

export default function NotesClient({ tag }: NotesClientProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 500);
    return () => clearTimeout(handler);
  }, [search]);

  const { data, isLoading, isError } = useNotes(debouncedSearch, page, tag);
  const createNoteMutation = useCreateNote();

  const handleCreateClick = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading notes.</p>;
  if (!data || data.notes.length === 0) return <p>No notes found.</p>;

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <SearchBox value={search} onChange={setSearch} />
        <button onClick={handleCreateClick}>Create Note</button>
      </div>

      {showForm && <NoteForm onClose={handleCloseForm} />}

      <NoteList notes={data.notes} />

      {data.totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={data.totalPages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
}
