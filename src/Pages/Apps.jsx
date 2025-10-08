import React from "react";
import { useLoaderData } from "react-router";
import AppCard from "../Components/AppCard";
import { CiSearch } from "react-icons/ci";

const Apps = () => {
  const appData = useLoaderData();
  console.log(appData);

  return (
    <div className="py-12 pb-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#001931]">
          Our All Applications
        </h1>
        <p className="text-[#627382] py-2">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between px-6 md:px-20">
        <h3 className="text-[#001931] font-semibold text-2xl">
          ({appData.length})Apps Found
        </h3>
        <label className="input">
          <span className="text-xl text-gray-500">
            <CiSearch />
          </span>
          <input type="search" required placeholder="Search App" />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-6 md:px-20 py-10">
        {appData.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
