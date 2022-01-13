import React from "react";
type CardProps = {
  card: {
    id: number;
    title?: string;
    status_title: string;
    attachment?: string;
    types_title: string;
    role?: string;
  };
};

const Card = ({ card }: CardProps) => {
  const [color, setColor] = React.useState("text-red-900");
  const [bgColor, setBgColor] = React.useState("bg-red-100");

  React.useEffect(() => {
    switch (card.types_title.toLowerCase()) {
      case "task":
        setColor("text-red-900");
        setBgColor("bg-red-100");
        break;
      case "feature":
        setColor("text-green-900");
        setBgColor("bg-green-100");
        break;
      case "enhancement":
        setColor("text-yellow-900");
        setBgColor("bg-yellow-100");
        break;
      case "support":
        setColor("text-blue-900");
        setBgColor("bg-blue-100");
        break;
      case "documentation":
        setColor("text-orange-900");
        setBgColor("bg-orange-100");
        break;
      case "feature-request":
        setColor("text-purple-900");
        setBgColor("bg-purple-100");
        break;
      case "bug-report":
        setColor("text-pink-900");
        setBgColor("bg-pink-100");
        break;
      case "marketing":
        setColor("text-indigo-900");
        setBgColor("bg-indigo-100");
        break;
      case "research":
        setColor("text-cyan-900");
        setBgColor("bg-cyan-100");
        break;
      case "design":
        setColor("text-rose-900");
        setBgColor("bg-rose-100");
        break;
      case "other":
      default:
        setColor("text-gray-900");
        setBgColor("bg-gray-100");
        break;
    }
  }, [card.types_title]);

  return (
    <div className="bg-white flex text- flex-col p-2 shadow-lg rounded-lg border-b border-gray-100 mt-2 flex-shrink-0">
      <div className="flex items-center justify-between">
        <h2
          className={`rounded-lg py-1 px-4 text-[10px] font-bold uppercase flex items-center ${
            color + " " + bgColor
          }`}
        >
          {card.types_title}
        </h2>
        <div className="flex items-center justify-between gap-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
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
          <span className="text-xs">{card.attachment}</span>
        </div>
      </div>
      <div>
        <p className="text-xs text-gray-600 my-1 font-semibold">{card.title}</p>
      </div>
      <div className="flex items-center mt-1">
        {card.id > 6 ? (
          <>
            <img
              src="https://pbs.twimg.com/profile_images/1462792445570261002/mFAbmt0y_400x400.jpg"
              alt="Person 2"
              className="rounded-full w-6 h-6 border border-white"
            />

            <img
              src="https://pbs.twimg.com/media/FI5es3XX0AgcjFD?format=jpg&name=4096x4096"
              alt="Person 4"
              className="rounded-full w-6 h-6 border border-white -ml-4"
            />
          </>
        ) : (
          <>
            <img
              src="https://pbs.twimg.com/profile_images/1347911385997602821/J3ARkPca_400x400.jpg"
              alt="Person 3"
              className="rounded-full w-6 h-6  border border-white"
            />
            <img
              src="https://pbs.twimg.com/profile_images/1450192163585863685/UlUAzUtN_400x400.jpg"
              alt="Person 1"
              className="rounded-full w-6 h-6 border border-white  -ml-4"
            />
            <img
              src="https://pbs.twimg.com/profile_images/1462792445570261002/mFAbmt0y_400x400.jpg"
              alt="Person 2"
              className="rounded-full w-6 h-6 border border-white  -ml-4"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
