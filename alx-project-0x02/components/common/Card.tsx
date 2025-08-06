// import { CardProps } from "@/interfaces";
import React from "react";
import type { CardProps } from "@/interfaces";
const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className=" flex flex-col justify-start gap-3 p-4 border-gray-400 border shadow-md rounded-md cursor-pointer">
      <h1 className="font-lg font-semibold bg-amber-100 p-3 rounded-md">
        {title}
      </h1>
      <p className="font-medium">{content}</p>
    </div>
  );
};

export default Card;
