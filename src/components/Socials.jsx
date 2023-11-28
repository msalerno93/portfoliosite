import React from "react";
import { socials } from "../assets/Data";

const Socials = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul className="pl-1">
        {socials.map(({ id, child, href, style, download, color }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-800" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full font-bold text-xl text-gray-300 hover:text-gray-500"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
