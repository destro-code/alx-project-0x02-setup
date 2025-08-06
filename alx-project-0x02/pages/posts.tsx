"use-client";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import React from "react";

export async function getStaticProps() {
  // Fetching data during build time
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data, // Pass the fetched data as props
    },
  };
}

const Posts = ({
  posts,
}: {
  posts: Array<{ id: number; title: string; body: string; userId: number }>;
}) => {
  if (!posts || posts.length === 0) return <p>No posts available.</p>;

  return (
    <>
      <Header />
      <h1 className="text-5xl font-semibold text-center my-10 text-orange-800">
        All Posts
      </h1>
      <div className="grid grid-cols-4 gap-8 w-[85%] mx-auto">
        {posts.map((post) => (
          <PostCard
            title={post.title}
            body={post.body}
            userId={post.userId}
            key={post.id}
          />
        ))}
      </div>
    </>
  );
};

export default Posts;
