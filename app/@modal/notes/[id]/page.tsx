


"use client";

import Modal from "../../../../components/Modal/Modal";
import NoteDetailsClient from "../[id]/NoteDetails.client";
import { useRouter } from "next/navigation";

interface Props {
  params: { id: string };
}

export default function NoteModal({ params }: Props) {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <NoteDetailsClient id={params.id} />
    </Modal>
  );
}