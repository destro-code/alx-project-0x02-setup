"use-client";
import PostCard from "@/components/common/PostCard";
import UserCard from "@/components/common/UserCard";
import React from "react";
import { useState, useEffect } from "react";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      users: data, // Pass the fetched data as props
    },
  };
}

const Users = ({
  users,
}: {
  users: Array<{
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    address: object;
  }>;
}) => {
  if (!users || users.length === 0) return <p>No user data available.</p>;
  return (
    <>
      <h1 className="text-5xl font-semibold text-center my-10 text-orange-800">
        All Users
      </h1>
      <div className=" w-[85%] grid grid-cols-2 gap-10 mx-auto">
        {users.map((user) => (
          <UserCard
            name={user.name}
            username={user.username}
            email={user.email}
            phone={user.phone}
            address={user.address}
            key={user.id}
          />
        ))}
      </div>
    </>
  );
};

export default Users;
