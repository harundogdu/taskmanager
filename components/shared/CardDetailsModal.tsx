import React from "react";
import Modal from "react-modal";

type CardDetailsModalProp = {
  isOpen: boolean;
  toggle: () => void;
  card: {
    id: number;
    title?: string;
    status_title: string;
    attachment?: string;
    types_title: string;
    role?: string;
    created_at: string;
    time: string;
    description: string;
  };
};

const CardDetailsModal = ({ card, isOpen, toggle }: CardDetailsModalProp) => {
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
    <Modal
      isOpen={isOpen}
      onRequestClose={toggle}
      ariaHideApp={false}
      contentLabel="Görev Detayları"
      className="bg-white shadow-2xl outline-none absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[70rem] h-[38rem] rounded-lg px-8 py-6 "
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">Görev Detayları</h1>
        <button onClick={toggle}>
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-y-4 w-full h-full">
        <div className="items-center gap-x-2 pb-1 my-4 border-b inline-flex">
          <img
            src="https://pbs.twimg.com/profile_images/1462792445570261002/mFAbmt0y_400x400.jpg"
            alt="Oluşturan Kişi"
            className="rounded-full w-6 h-6 border border-white"
          />
          <span className="text-primary capitalize">Oluşturan Kişi</span>
        </div>
        <h2 className="text-primary text-xl capitalize">{card.title}</h2>
        <p className="flex-1 bg-gray-50 text-sm p-4">{card.description}</p>
        <div className="flex items-center justify-between pb-10 flex-shrink-0">
          <div className="flex items-center justify-between gap-x-4">
            <span
              title="Görev Tipi"
              className={`${
                color + " " + bgColor
              } w-fit px-10 py-2 rounded text-sm uppercase`}
            >
              {card.types_title}
            </span>
            <div className="flex items-center justify-between gap-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
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
              <span>{card.attachment}</span>
            </div>
          </div>
          <span className="text-xs text-gray-400">{card.created_at}</span>
        </div>
      </div>
    </Modal>
  );
};

export default CardDetailsModal;
