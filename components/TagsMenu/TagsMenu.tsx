"use client";

import { useState } from "react";
import Link from "next/link";
import css from "./TagsMenu.module.css";

interface TagsMenuProps {
  tags: string[];
}

export default function TagsMenu({ tags }: TagsMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={css.menuContainer}>
      <button
        className={css.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Notes ▾
      </button>

      {open && (
        <ul className={css.menuList}>
          {tags.map((tag) => {
            const href =
              tag === "All" ? "/notes/filter/All" : `/notes/filter/${tag}`;
            return (
              <li key={tag} className={css.menuItem}>
                <Link
                  href={href}
                  className={css.menuLink}
                  onClick={() => setOpen(false)}
                >
                  {tag}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
