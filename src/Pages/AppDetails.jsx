import { useLoaderData, useParams } from "react-router";
import AppErrorPage from "./AppErrorPage";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { toast } from "react-toastify";

import downloadIcons from "/images/icon-downloads.png";
import ratingIcons from "/images/icon-ratings.png";
import iconsReview from "/images/icon-review.png";
import { useState } from "react";

const AppDetails = () => {
  const { id } = useParams();
  const allApps = useLoaderData();
  const app = allApps.find((item) => item.id === parseInt(id));

  const [installed, setInstalled] = useState(false);

  if (!app) {
    return <AppErrorPage></AppErrorPage>;
  }

  const handleInstall = () => {
    setInstalled(true);
    toast.success(`${app.title} Installed Successfully!`);

    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    const alreadyInstalled = installedApps.find((item) => item.id === app.id);

    if (!alreadyInstalled) {
      installedApps.push(app);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
    }
  };
  return (
    <div className="rounded-lg p-6 md:p-20">
      <div className="flex items-center flex-col md:flex-row gap-6  md:items-center border-b border-gray-300 pb-12">
        <img
          src={app.image}
          alt={app.title}
          className="md:w-1/2 h-auto object-cover rounded-md"
        />

        <div className="flex-1">
          <div>
            <h1 className="text-3xl font-bold text-[#001931] mb-1">
              {app.companyName} : {app.title}
            </h1>
            <p className="text-[#627382] mb-4">
              Developed by{" "}
              <span className="text-[#632EE3] font-semibold">
                {app.companyName}
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-[#001931] border-t border-gray-300 pt-6 mt-8">
            <div>
              <img src={downloadIcons} alt="" />
              <p className="text-sm text-[#627382]">Downloads</p>
              <h2 className="font-extrabold text-4xl">{app.downloads}</h2>
            </div>
            <div>
              <img src={ratingIcons} alt="" />
              <p className="text-sm text-[#627382]">Average Ratings</p>
              <h2 className="font-extrabold text-4xl">{app.ratingAvg}</h2>
            </div>
            <div>
              <img src={iconsReview} alt="" />
              <p className="text-sm text-[#627382]">Total Reviews</p>
              <h2 className="font-extrabold text-4xl">{app.reviews}</h2>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-6 rounded-md  px-6 py-3 font-semibold cursor-pointer ${
              installed
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white "
            }`}
          >
            {installed ? " Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-[#001931] mb-4">Ratings</h2>
        <div className="w-full h-80 rounded-lg ">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[...app.ratings].reverse()}
              layout="vertical"
              margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
            >
              <XAxis type="number" hide />
              <YAxis
                dataKey="name"
                type="category"
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <Bar dataKey="count" fill="#FF8811" barSize={25} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-300 pt-12">
        <h2 className="text-2xl font-semibold text-[#001931] mb-3">
          Description
        </h2>
        <p className="text-[#627382] leading-relaxed">{app.description}</p>
        <p className="text-[#627382] leading-relaxed py-6">{app.description}</p>
        <p className="text-[#627382] leading-relaxed">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
