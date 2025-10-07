import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import navLogo from "/images/logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-white px-5 md:px-20 py-10">
      <div className="grid md:grid-cols-12 gap-6 md:gap-20 pb-4">
        <div className="md:col-span-5 items-center gap-2 ">
          <figure className="w-30 flex items-center">
            <img src={navLogo} alt="" />
            <span className="font-bold text-4xl">HERO.IO</span>
          </figure>
          <p className="text-white my-4">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-xl font-semibold mb-3">Useful Links</h2>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-purple-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Apps
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Installation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400">
                Contribute
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h2 className="text-xl font-semibold mb-3">Social Links</h2>
          <div className="flex items-center gap-4 text-xl mb-5 text-black ">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="bg-white p-2 rounded-full "
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="bg-white p-2 rounded-full "
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="bg-white p-2 rounded-full "
            >
              <FaLinkedinIn />
            </a>
          </div>

          <h2 className="text-xl font-semibold mb-3">Install Apps</h2>
          <div className="flex flex-wrap gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10 cursor-pointer"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm pt-8 border-t border-gray-700">
        Copyright © 2025 - All right reserved
      </div>
    </footer>
  );
};

export default Footer;
