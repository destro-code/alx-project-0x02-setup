import { PostModalProps } from "@/interfaces";
import React from "react";
import { useState } from "react";

const PostModal: React.FC<PostModalProps> = ({ onClose, onSave, isOpen }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ title, content });
    setTitle("");
    setContent("");
    onClose();
  };
  if (!isOpen) return null;
  return (
    <div className="bg-opacity-50 bg-gray-600 flex justify-center inset-0 fixed items-center ">
      <div className="bg-white rounded shadow-lg max-w-sm w-full p-4">
        <h2 className="text-3xl font-semibold py-2">Create new post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 mb-2">
              Title
            </label>
            <input
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              rows={4}
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-yellow-400 text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-red-400 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
