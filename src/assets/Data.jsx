import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import mechanic from "../assets/ProjectPhotos/Mechanic.png";
import Movies from "../assets/ProjectPhotos/Movies.png";
import NASA from "../assets/ProjectPhotos/NASA.png";
import Pizzeria from "../assets/ProjectPhotos/Pizzeria.png";
import SocialMedia from "../assets/ProjectPhotos/SocialMedia.png";

// NAVIGATION LINKS REACT SMOOTH SCROLL - USED IN NAVBAR //
export const navLinks = [
  { id: 1, name: "Home", link: "home" },
  { id: 2, name: "About", link: "about" },
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
    href: "/resume.pdf",
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
    src: mechanic,
    demo: "https://www.google.com",
    code: "https://www.github.com"
  },
  {
    id: 3,
    src: NASA,
    demo: "https://www.google.com",
    code: "https://www.github.com"
  },
  {
    id: 5,
    src: SocialMedia,
    demo: "https://www.google.com",
    code: "https://www.github.com"
  },
  {
    id: 2,
    src: Movies,
    demo: "https://movie-finder-ms.netlify.app/",
    code: "https://www.github.com"
  },
  {
    id: 4,
    src: Pizzeria,
    demo: "https://www.thatpizzaplaceinlevittown.com/_v5/",
    code: "https://www.github.com/msalerno93"
  },

];
