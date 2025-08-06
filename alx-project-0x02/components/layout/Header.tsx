import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <h1 className="text-5xl font-bold uppercase text-center m-8">
        alx Project
      </h1>
      <nav className="my-5 bg-slate-100 w-[85%] mx-auto">
        <ul className="flex justify-around items-center p-4 no-underline ">
          <li className="hover:text-red-300">
            <Link href="/home">Home</Link>
          </li>
          <li className="hover:text-red-300">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-red-300">
            <Link href="/posts">Posts</Link>
          </li>
          <li className="hover:text-red-300">
            <Link href="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
