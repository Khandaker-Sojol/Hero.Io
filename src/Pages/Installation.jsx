import React from "react";
import AppCard from "../Components/AppCard";
import InstallAppCard from "../Components/InstallAppCard";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";

const Installation = () => {
  const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
  return (
    <div className="py-12 px-6 md:px-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#001931]">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] py-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between px-6 md:px-20">
        <h3 className="text-[#001931] font-semibold text-2xl">
          ({installedApps.length})Apps Found
        </h3>

        <button
          className="btn text-[#627382] font-normal"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" }}
        >
          Sort By Size <IoMdArrowDropdown />
        </button>

        <ul
          className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" }}
        >
          <li>
            <a>High To Low</a>
          </li>
          <li>
            <a>Low to High</a>
          </li>
        </ul>
      </div>
      {installedApps.length > 0 ? (
        <div className="py-10">
          {installedApps.map((app) => (
            <InstallAppCard key={app.id} app={app}></InstallAppCard>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-xl text-center mt-20">
          No apps installed yet.
        </p>
      )}
    </div>
  );
};

export default Installation;
