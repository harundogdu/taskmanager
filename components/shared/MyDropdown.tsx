import React from "react";
import { Menu } from "@headlessui/react";

const MyDropdown = () => {
  const items = [
    {
      id: 1,
      name: "Hesap",
    },
    {
      id: 2,
      name: "Profil",
    },
    {
      id: 3,
      name: "Oturumu Kapat",
    },
  ];
  return (
    <Menu as={"div"} className={"relative"}>
      <Menu.Button className={"flex items-center justify-between gap-x-2"}>
        <img
          src="https://pbs.twimg.com/profile_images/1462792445570261002/mFAbmt0y_400x400.jpg"
          alt="Profile Button"
          className="rounded-full w-6 h-6 "
        />
        <span className="text-sm font-semibold">Harun</span>
      </Menu.Button>
      <Menu.Items className="absolute top-full -right-5 rounded translate-y-2 z-50 bg-primary text-white flex flex-col items-center ">
        {items.map((item) => (
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && "bg-secondary"} w-48 px-2 py-3 h-full`}
                href="/account-settings"
              >
                {item.name}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default MyDropdown;
