"use client";

import NotePreviewClient from "./NotePreview.client";

interface NoteModalProps {
  params: { id: string };
}

export default function NoteModal({ params }: NoteModalProps) {
  return <NotePreviewClient id={params.id} />;
}
