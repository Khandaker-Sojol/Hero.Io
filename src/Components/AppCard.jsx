import React from "react";
import downloadIcons from "/images/icon-downloads.png";
import ratingIcons from "/images/icon-ratings.png";

const AppCard = ({ app }) => {
  console.log(app);

  return (
    <div className="bg-[#FFF] rounded p-4 shadow pb-8">
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
