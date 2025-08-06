import { PostProps } from "@/interfaces";
import React from "react";
import Link from "next/link";
const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <>
      <Link
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="text-sm text-gray-500">user Id : {userId}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">{body}</p>
      </Link>
    </>

    // =============
    // <div className=" flex flex-col justify-start gap-3 p-4 border-gray-400 border shadow-md rounded-md cursor-pointer">
    //   <h1 className="font-lg font-semibold bg-amber-100 p-3 rounded-md shadow-md">
    //     {title}
    //   </h1>
    //   <p>user id : {userId}</p>
    //   <p className="font-medium p-3">{body}</p>
    // </div>
  );
};

export default PostCard;
