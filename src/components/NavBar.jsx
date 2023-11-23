import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../assets/Data";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed bg-gray-900">
      <div>
        <h1 className="text-5xl text-gray-300 font-signature ml-2">
          Michael Salerno
        </h1>
      </div>
      <ul className="hidden md:flex">
        {navLinks.map(({ name, id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-2xl text-gray-300 hover:scale-110 duration-200"
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
