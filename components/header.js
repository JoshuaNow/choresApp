import React from "react";
import { MENU_OPTIONS } from "../utils.js";

const Header = () => {
  return (
    <header className="flex-row flex">
      {MENU_OPTIONS.map((option, idx) => {
        return (
          <div className="m-2 " key={idx}>
            <h2>
              <a href={option.link}>{option.title}</a>
            </h2>
          </div>
        );
      })}
    </header>
  );
};

export default Header;
