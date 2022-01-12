import React from "react";

const ContentHeader = () => {
  return (
    <header className="border-b border-gray-200 px-6 py-2 flex flex-col gap-y-4">
      <div id="upper" className="flex items-center justify-between">
        <div className="flex items-center justify-between w-1/3 gap-x-6">
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div className="relative w-full bg-red-500">
            <input
              type="text"
              placeholder="Search ur Job!"
              className="w-full h-10 border flex-1 border-gray-300 outline-none focus-within:border-primary pl-8"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute left-1 top-2 stroke-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-gray-400 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <div>
            <img
              src="https://pbs.twimg.com/profile_images/1450192163585863685/UlUAzUtN_400x400.jpg"
              alt="Personal Image"
              className="w-8 h-8 rounded-full cursor-pointer border border-primary p-[0.1rem] border-dashed"
            />
          </div>
        </div>
      </div>
      <div id="lower" className="flex items-center justify-between">
        <div id="teams-container">
          <p className="uppercase text-primary font-semibold mb-2">crew</p>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <img
                src="https://pbs.twimg.com/profile_images/1450192163585863685/UlUAzUtN_400x400.jpg"
                alt="Person 1"
                className="rounded-full w-8 h-8 border border-white  static z-10"
              />
              <img
                src="https://pbs.twimg.com/profile_images/1462792445570261002/mFAbmt0y_400x400.jpg"
                alt="Person 2"
                className="rounded-full w-8 h-8 border border-white  -ml-4 static z-[9] "
              />
              <img
                src="https://pbs.twimg.com/profile_images/1347911385997602821/J3ARkPca_400x400.jpg"
                alt="Person 3"
                className="rounded-full w-8 h-8 border border-white  -ml-4 static z-[8]"
              />
              <img
                src="https://pbs.twimg.com/media/FI5es3XX0AgcjFD?format=jpg&name=4096x4096"
                alt="Person 4"
                className="rounded-full w-8 h-8 border border-white  -ml-4 static z-[7]"
              />
            </div>
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span>5</span>
          </div>
        </div>
        <div
          id="button-container"
          className="flex items-center justify-between gap-x-4"
        >
          <button className="text-white bg-gradient-to-br from-indigo-500 to-primary px-6 py-2 rounded text-sm font-semibold">
            Buton 1
          </button>
          <button className="text-white bg-gradient-to-tl from-primary to-indigo-500 px-6 py-2 rounded text-sm font-semibold">
            Buton 2
          </button>
        </div>
      </div>
    </header>
  );
};

export default ContentHeader;
