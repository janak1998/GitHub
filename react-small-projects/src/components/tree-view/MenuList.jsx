import React from "react";
import MenuItem from "./menuItem";

const MenuList = ({ list = [] }) => {
  console.log(list);

  return (
    <ul className="menu-list-container w-[350px] mt-0 pb-0 ml-5">
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem}></MenuItem>)
        : null}
    </ul>
  );
};

export default MenuList;
