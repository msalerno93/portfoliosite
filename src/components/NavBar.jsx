import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../assets/Data";
import { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

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
              <Link to={link} smooth duration={500}>{name}</Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-gray-300">
          {navLinks.map(({ id, name, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-300 hover:scale-110 duration-200"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
