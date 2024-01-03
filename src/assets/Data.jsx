import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Barbershop from "../assets/ProjectPhotos/Barbershop.png";
import Movies from "../assets/ProjectPhotos/Movies.png";
import NASA from "../assets/ProjectPhotos/NASA.png";
import Pizzeria from "../assets/ProjectPhotos/Pizzeria.png";
import SocialMedia from "../assets/ProjectPhotos/SocialMedia.png";
import CSS from "../assets/TechnologyPhotos/css.png"
import GitHub from "../assets/TechnologyPhotos/github.png"
import HTML from "../assets/TechnologyPhotos/html.png"
import JavaScript from "../assets/TechnologyPhotos/javascript.png"
import Node from "../assets/TechnologyPhotos/node.png"
import Reactjs from "../assets/TechnologyPhotos/react.png"
import Tailwind from "../assets/TechnologyPhotos/tailwind.png"
import Resume from "./Resume.pdf"

// NAVIGATION LINKS REACT SMOOTH SCROLL - USED IN NAVBAR //
export const navLinks = [
  { id: 1, name: "Home", link: "home" },
  { id: 3, name: "Portfolio", link: "portfolio" },
  { id: 4, name: "Technology", link: "technology" },
  { id: 5, name: "Contact", link: "contact" },
];

// SOCIAL LINKS/ICONS USED UNDER SOCIALS COMPONENT //
export const socials = [
  {
    id: 1,
    child: (
      <>
        LinkedIn <FaLinkedin size={35} />
      </>
    ),
    href: "https://www.linkedin.com/in/michael-salerno-tech/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <>
        GitHub <FaGithub size={35} />
      </>
    ),
    href: "https://github.com/msalerno93",
  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={35} />
      </>
    ),
    href: "mailto:salerno.softwareengineering@gmail.com",
  },
  {
    id: 4,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={35} />
      </>
    ),
    href: Resume,
    style: "rounded-br-md",
    download: true,
  },
];

export const about = [
  {
    id: 1,
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quidem? Maxime omnis sapiente pariatur nostrum, eius rerum animi ipsam eligendi temporibus fugit odit. Laborum numquam quisquam tenetur esse provident minima ad fugiat. Nihil quas assumenda atque quidem magnam ipsum earum debitis dignissimos optio dolores deserunt eveniet perspiciatis, a odit ullam.",
  },
  {
    id: 2,
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quidem? Maxime omnis sapiente pariatur nostrum, eius rerum animi ipsam eligendi temporibus fugit odit. Laborum numquam quisquam tenetur esse provident minima ad fugiat. Nihil quas assumenda atque quidem magnam ipsum earum debitis dignissimos optio dolores deserunt eveniet perspiciatis, a odit ullam.",
  },
];

export const projects = [
  {
    id: 1,
    src: Barbershop,
    demo: "https://jimmysbarbershop.netlify.app/",
    code: "https://github.com/msalerno93/BarberShop"
  },
  {
    id: 3,
    src: NASA,
    demo: "https://www.github.com/msalerno93",
    code: "https://github.com/msalerno93/NASAspace"
  },
  {
    id: 5,
    src: SocialMedia,
    demo: "https://www.github.com/msalerno93",
    code: "https://github.com/msalerno93/fauxcialMedia"
  },
  {    id: 4,
    src: Pizzeria,
    demo: "https://www.thatpizzaplaceinlevittown.com/_v5/",
    code: "https://www.github.com/msalerno93"
  },
  {
    id: 2,
    src: Movies,
    demo: "https://movie-finder-ms.netlify.app/",
    code: "https://github.com/msalerno93/MovieFinder"
  },

];

export const technologies = [
  {
    id: 1,
    name: "CSS",
    src: CSS,
    style: "shadow-blue-500"
  },
  {
    id: 2,
    name: "GitHub",
    src: GitHub,
    style: "shadow-gray-500"
  },
  {
    id: 3,
    name: "HTML",
    src: HTML,
    style: "shadow-orange-500"
  },
  {
    id: 4,
    name: "JavaScipt",
    src: JavaScript,
    style: "shadow-yellow-500"
  },
  {
    id: 5,
    name: "Node",
    src: Node,
    style: "shadow-green-500"
  },
  {
    id: 6,
    name: "React",
    src: Reactjs,
    style: "shadow-blue-600"
  },
  {
    id: 7,
    name: "Tailwind",
    src: Tailwind,
    style: "shadow-sky-400"
  },
]

export const email = "https://getform.io/f/80e8231f-e79a-459c-96c1-303bf9a7c044"