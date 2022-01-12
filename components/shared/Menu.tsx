import Link from "next/link";
import React from "react";

const Menu = () => {
  const menuLinks = [
    {
      id: 1,
      title: "Home",
      isActive: true,
      href: "/",
    },
    {
      id: 2,
      title: "About",
      isActive: false,
      href: "/about",
    },
    {
      id: 3,
      title: "Contact",
      isActive: false,
      href: "/contact",
    },
  ];
  return (
    <nav>
      <ul className="flex flex-col gap-y-1">
        {menuLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.href}>
              <a
                className={`${
                  link.isActive
                    ? "text-white bg-primary"
                    : ""
                } flex items-center justify-between px-4 py-2 border border-primary border-opacity-0 hover:border-opacity-100 hover:border-primary transition-colors rounded-lg`}
              >
                {link.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
