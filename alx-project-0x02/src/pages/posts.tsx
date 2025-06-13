import { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard';
import { PostProps } from '../interfaces';

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => res.json())
      .then(setPosts);
  }, []);

  return (
    <>
      <Header />
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Posts</h1>
        {posts.map(p => <PostCard key={p.id} {...p} />)}
      </div>
    </>
  );
}
