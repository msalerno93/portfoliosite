import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-gray-900 via-gray-900 to-gray-700 text-gray-300 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-8 md:flex-row">
        <div className="flex flex-col justify-center items-center h-full">
          <h2 className="text-5xl sm:text-7xl font-header">
            Full Stack Engineer
          </h2>

          <p className="text-gray-500 py-4 max-w-md text-lg">
            ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium quo nostrum, qui expedita consectetur perspiciatis
            quidem impedit incidunt! Repudiandae, neque impedit nihil nostrum
            harum esse iure labore fuga aperiam beatae!
          </p>

          <div>
            <Link to="portfolio">
            <button className="group text-gray-300 text-2xl w-fit px-3 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 hover:scale-110 duration-200">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 text-4xl">
                <MdOutlineKeyboardArrowRight />
              </span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
