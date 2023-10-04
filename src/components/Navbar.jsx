import React, { useState } from "react";
import logo from "../assets/logo_name.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [active, setActive] = useState(1);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-16 bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} alt="Logo" style={{ width: "50px" }} />
      </div>

      <ul className="hidden md:flex">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setActive(1)}
          >
            <span className={active === 1 ? "text-white" : "text-gray-300"}>
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setActive(2)}
          >
            <span className={active === 2 ? "text-white" : "text-gray-300"}>
              About
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={() => setActive(3)}
          >
            <span className={active === 3 ? "text-white" : "text-gray-300"}>
              Skills
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            onClick={() => setActive(4)}
          >
            <span className={active === 4 ? "text-white" : "text-gray-300"}>
              Work
            </span>
          </Link>
        </li>
      </ul>

      <div className="md:hidden z-10 cursor-pointer" onClick={handleClick}>
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-[100%] right-0 w-[30%] bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li
          className={`py-3 text-xl w-full text-center text-white ${
            active === 1 ? "text-white" : "text-gray-300"
          }`}
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => {
              setActive(1);
              setNav(!nav);
            }}
          >
            Home
          </Link>
        </li>
        <li
          className={`py-3 text-xl w-full text-center text-white ${
            active === 2 ? "text-white" : "text-gray-300"
          }`}
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => {
              setActive(2);
              setNav(!nav);
            }}
          >
            About
          </Link>
        </li>
        <li
          className={`py-3 text-xl w-full text-center text-white ${
            active === 3 ? "text-white" : "text-gray-300"
          }`}
        >
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={() => {
              setActive(3);
              setNav(!nav);
            }}
          >
            Skills
          </Link>
        </li>
        <li
          className={`py-3 text-xl w-full text-center text-white ${
            active === 4 ? "text-white" : "text-gray-300"
          }`}
        >
          <Link
            to="work"
            smooth={true}
            duration={500}
            onClick={() => {
              setActive(4);
              setNav(!nav);
            }}
          >
            Work
          </Link>
        </li>
      </ul>

      <div className="flex fixed top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2a4aac]">
            <a
              href="https://www.linkedin.com/in/daniel-anandha-geethan-j/"
              rel="noreferrer"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              <span className="text-xl">Linked In</span>
              <FaLinkedin size={25} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#101528]">
            <a
              href="https://github.com/danielAnandhaGeethan?tab=repositories"
              rel="noreferrer"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              <span className="text-xl">Github</span>
              <FaGithub size={25} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a61717]">
            <a
              href="mailto:dj9759197591@gmail.com"
              rel="noreferrer"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              <span className="text-xl">Email</span>
              <HiOutlineMail size={25} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4a4a4a]">
            <a
              href="https://drive.google.com/drive/folders/1UH5Rc_o5CAQh6ULh_1-Vr9huSulNqwmR?usp=sharing"
              rel="noreferrer"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              <span className="text-xl">Resume</span>
              <BsFillPersonLinesFill size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
