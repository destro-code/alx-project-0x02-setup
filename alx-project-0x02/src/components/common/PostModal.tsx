import { useState } from 'react';

interface PostModalProps {
  onAddPost: (post: { title: string; content: string }) => void;
}

export default function PostModal({ onAddPost }: PostModalProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddPost({ title, content });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-lg rounded max-w-md mx-auto">
      <input
        className="border p-2 w-full mb-2"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        className="border p-2 w-full mb-2"
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
}
