import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';
import { useState } from 'react';

export default function HomePage() {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  const [showModal, setShowModal] = useState(false);

  const addPost = (post: { title: string; content: string }) => {
    setPosts([...posts, post]);
    setShowModal(false);
  };

  return (
    <>
      <Header />
      <div className="p-4 space-y-6">
        <h1 className="text-3xl font-bold">Home Page</h1>
        <Card title="Card 1" content="This is card one." />
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Post
        </button>
        {showModal && <PostModal onAddPost={addPost} />}
        {posts.map((p, i) => (
          <div key={i} className="border p-4 rounded">
            <h2 className="font-semibold">{p.title}</h2>
            <p>{p.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}
