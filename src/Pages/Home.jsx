import React from "react";
import Banner from "../Components/Banner";
import { NavLink, useLoaderData } from "react-router";
import AppCard from "../Components/AppCard";

const Home = () => {
  const trendingAppsData = useLoaderData();
  console.log(trendingAppsData);
  console.log("Sojol");

  return (
    <div>
      <Banner></Banner>
      <div className="text-center py-12 pb-20">
        <h1 className="text-5xl font-bold text-[#001931]">Trending Apps</h1>
        <p className="text-[#627382] py-2">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-6 md:px-20 py-10">
          {trendingAppsData.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
        <NavLink
          to="/apps"
          className="rounded-md bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-[#FFF] px-6 py-3 cursor-pointer"
        >
          Show All
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
