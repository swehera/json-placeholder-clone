import React from "react";
import { menuData } from "../typeofdata/menuData";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" flex justify-between py-4 px-48 ">
      <div className=" font-bold text-[16px] text-gray-900">
        <Link to={"/"}>JSONPlaceholder</Link>
      </div>
      <div>
        <ul className=" flex gap-2">
          {menuData.map(({ title, link }) => (
            <Link to={link}>
              <li key={title} className=" py-2 px-3 text-[16px] ">
                {title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
