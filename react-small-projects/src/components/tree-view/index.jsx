import React from "react";
import MenuList from "./menuList";

export const TreeView = ({ menus = [] }) => {

  return (
    <div className="tree-view-container min-h-[100vh] bg-[#00476E]  pt-5">
      <MenuList list={menus} />
    </div>
  );
};
