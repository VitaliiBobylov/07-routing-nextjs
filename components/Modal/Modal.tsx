
"use client";

import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface Props { children: ReactNode; onClose: () => void }

export default function Modal({ children, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)",
      display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000
    }}>
      <div style={{ background: "#fff", borderRadius: 8, maxWidth: 760, width: "90%", padding: "1rem", position: "relative" }}>
        <button onClick={onClose} style={{ position: "absolute", right: 10, top: 10 }}>Close</button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
}
