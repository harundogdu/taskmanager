import React from "react";
type CardProps = {
  card: {};
};

const Card = ({ card }: CardProps) => {
  return (
    <div className="bg-white flex flex-col w-72 p-2 shadow-lg rounded-lg my-4">
      <div className="flex items-center justify-between">
        <h2 className="bg-pink-500 text-pink-100 rounded-lg py-3 px-6 text-sm font-semibold">
          Tasarım
        </h2>
        <div className="flex items-center justify-between gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg>
          <span>2</span>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-600 px-2 mt-2 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          doloribus omnis quibusdam distinctio illum nulla recusandae dolores id
          officia? Architecto, laboriosam ullam. Unde architecto libero
          necessitatibus odio sed aliquam id!
        </p>
      </div>
    </div>
  );
};

export default Card;
