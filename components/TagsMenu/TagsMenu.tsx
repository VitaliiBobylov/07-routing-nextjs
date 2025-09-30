'use client';

import { useRouter } from 'next/navigation';

interface TagsMenuProps {
  tags: string[];
}

export default function TagsMenu({ tags }: TagsMenuProps) {
  const router = useRouter();

  const handleClick = (tag: string) => {
    if (tag === 'All') {
      router.push('/notes/filter');
    } else {
      router.push(`/notes/filter/${encodeURIComponent(tag)}`);
    }
  };

  return (
    <div>
      {tags.map(tag => (
        <button
          key={tag}
          onClick={() => handleClick(tag)}
          style={{ margin: '0 5px' }}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
