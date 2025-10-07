import React from "react";
import navLogo from "/images/logo.png";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100 md:px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-5 text-[#000000E5] font-medium"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/apps">Apps</NavLink>
              <NavLink to="/installation">Installation</NavLink>
            </ul>
          </div>
          <Link
            to="/"
            className="flex items-center gap-2 text-gradient cursor-pointer"
          >
            <img className="w-10" src={navLogo} alt="" />
            <span className="font-bold">HERO.Io</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 text-[#000000E5] font-medium">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/apps">Apps</NavLink>
            <NavLink to="/installation">Installation</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/Khandaker-Sojol"
            target="_blank"
            className="flex items-center gap-2 rounded-md bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold px-6 py-3 cursor-pointer"
          >
            <FaGithub />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
