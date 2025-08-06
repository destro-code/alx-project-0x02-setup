import Card from "@/components/common/Card";
import { POSTS } from "@/constants";
import PostModal from "@/components/common/PostModal";
import { useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState(POSTS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (post) => {
    setPosts((prevPosts) => [...prevPosts, post]);
  };
  return (
    <div className="w-[85%] mx-auto">
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-green-500 text-white rounded mb-4 hover:bg-green-900 transition-all duration-300"
      >
        Add New Post
      </button>
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddPost}
      />
      <section className="grid grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <Card title={post.title} content={post.content} key={i} />
        ))}
      </section>
    </div>
  );
}
