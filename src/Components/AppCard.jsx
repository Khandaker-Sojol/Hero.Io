import React from "react";
import downloadIcons from "/images/icon-downloads.png";
import ratingIcons from "/images/icon-ratings.png";
import { useNavigate } from "react-router";

const AppCard = ({ app }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/apps/${app.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-[#FFF] rounded p-4 shadow pb-8 cursor-pointer"
    >
      <img className="w-92 h-52 rounded" src={app.image} alt="" />
      <h1 className="text-xl font-medium my-4">
        {app.companyName}: {app.title}
      </h1>
      <div className="flex justify-between ">
        <div className="badge badge-soft badge-xl badge-success">
          <img className="w-5" src={downloadIcons} alt="" />
          <span>{app.downloads}</span>
        </div>
        <div className="badge badge-soft badge-xl badge-warning ">
          <img className="w-5" src={ratingIcons} alt="" />
          <span>{app.ratingAvg}</span>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
