import React from "react";
import Menu from "./shared/Menu";

const Sidebar = () => {
  return (
    <aside
      id="sidebar"
      className="w-64 bg-white border-r border-gray-200 flex flex-shrink-0 flex-col px-4 py-2 gap-y-5"
    >
      <div>
        <img src="/images/logo.jpg" alt="Logo" className="w-24 h-24" />
      </div>

      <Menu />
    </aside>
  );
};

export default Sidebar;
