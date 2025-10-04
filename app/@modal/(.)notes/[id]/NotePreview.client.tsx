"use client";

import Modal from "@/components/Modal/Modal";
import NoteDetailsClient from "../../(.)notes/notes/[id]/NoteDetails.client";
import { useRouter } from "next/navigation";

interface NotePreviewProps {
  id: string;
}

export default function NotePreviewClient({ id }: NotePreviewProps) {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <NoteDetailsClient id={id} />
    </Modal>
  );
}
